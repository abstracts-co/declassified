import json, os, re, shutil, sys, time
from concurrent.futures import ThreadPoolExecutor

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from ingest import items, ROOT, WORK

STORE = f'{WORK}/pageindex'
JOBS = int(os.environ.get('JOBS', '2'))


def index_one(it):
    from pageindex import PageIndexClient
    wid = it['id']
    meta_f = f'{WORK}/{wid}/meta.json'
    dest = f'{STORE}/docs/{wid}'
    if os.path.isfile(f'{dest}/tree.json') and not os.environ.get('FORCE'):
        return wid, 'skip'
    lock = f'{WORK}/{wid}/.pi.lock'
    try:
        os.close(os.open(lock, os.O_CREAT | os.O_EXCL))
    except FileExistsError:
        return wid, 'busy'
    try:
        return _index(it, wid, meta_f, dest)
    finally:
        os.remove(lock)


def _index(it, wid, meta_f, dest):
    from pageindex import PageIndexClient
    meta = json.load(open(meta_f))
    pdf = f'{WORK}/{wid}/{wid}.pdf'
    shutil.copy(meta['index_pdf'], pdf)
    tmp = f'{WORK}/{wid}/pi'
    shutil.rmtree(tmp, ignore_errors=True)
    client = PageIndexClient(index={'model': 'claude-code/haiku', 'storage_path': tmp, 'summary_max_words': 65, 'summary_concurrency': 3}, chat='claude-code/haiku')
    t = time.time()
    try:
        r = client.submit_document(pdf, mode='flash')
    except Exception as e:
        if 'no layout structure' not in str(e):
            return wid, f'FAIL {type(e).__name__}: {str(e)[:300]}'
        return wid, manual(it, wid, pdf, dest)
    src = f"{tmp}/docs/{r['doc_id']}"
    doc = json.load(open(f'{src}/doc.json'))
    doc.update(id=wid, name=f'{wid}.pdf', metadata={
        'title': it['title'], 'topic': it['topic'], 'country': 'us', 'type': it['type'], 'date': it.get('date'),
        'released': it.get('released'), 'agency': it.get('agency'), 'source': it.get('source'),
        'pages_online': f"https://abstracts-co.github.io/declassified-data/us/{it['topic']}/{wid}/",
    })
    shutil.rmtree(dest, ignore_errors=True)
    os.makedirs(os.path.dirname(dest), exist_ok=True)
    shutil.copytree(src, dest)
    json.dump(doc, open(f'{dest}/doc.json', 'w'), ensure_ascii=False)
    shutil.rmtree(tmp, ignore_errors=True)
    os.remove(pdf)
    return wid, f'ok {time.time() - t:.0f}s pages={doc.get("pageNum")} mode={doc.get("mode")}'


def manual(it, wid, pdf, dest):
    import subprocess, datetime
    n = int(re.search(r'Pages:\s+(\d+)', subprocess.run(['pdfinfo', pdf], capture_output=True, text=True).stdout).group(1))
    pages = [{'page_index': k, 'markdown': subprocess.run(['pdftotext', '-layout', '-f', str(k), '-l', str(k), pdf, '-'], capture_output=True, text=True).stdout} for k in range(1, n + 1)]
    tree = [{'title': f'Page {k}', 'node_id': f'{k - 1:04d}', 'start_index': k, 'end_index': k, 'summary': ''} for k in range(1, n + 1)]
    doc = {'id': wid, 'name': f'{wid}.pdf', 'description': it.get('summary'), 'status': 'completed',
           'createdAt': datetime.datetime.now().isoformat(), 'pageNum': n, 'folderId': None, 'mode': 'manual',
           'metadata': {'title': it['title'], 'topic': it['topic'], 'country': 'us', 'type': it['type'], 'date': it.get('date'),
                        'released': it.get('released'), 'agency': it.get('agency'), 'source': it.get('source'),
                        'pages_online': f"https://abstracts-co.github.io/declassified-data/us/{it['topic']}/{wid}/",
                        'tree': 'Flash found no layout structure; the tree was written from the page text.'}}
    shutil.rmtree(dest, ignore_errors=True)
    os.makedirs(dest)
    for name, data in (('tree.json', tree), ('pages.json', pages), ('doc.json', doc)):
        json.dump(data, open(f'{dest}/{name}', 'w'), ensure_ascii=False)
    os.remove(pdf)
    return f'manual pages={n}'


def manifest():
    docs = {}
    for d in sorted(os.listdir(f'{STORE}/docs')):
        f = f'{STORE}/docs/{d}/doc.json'
        if os.path.isfile(f):
            docs[d] = json.load(open(f))
    json.dump({'docs': docs}, open(f'{STORE}/manifest.json', 'w'), ensure_ascii=False)
    return len(docs)


def main(only):
    todo = [it for it in items() if it['type'] == 'document' and os.path.isfile(f"{WORK}/{it['id']}/meta.json") and (not only or it['id'] in only)]
    os.makedirs(f'{STORE}/docs', exist_ok=True)
    with ThreadPoolExecutor(JOBS) as ex:
        for wid, msg in ex.map(index_one, todo):
            print(wid, msg, flush=True)
    print('manifest', manifest())


if __name__ == '__main__':
    main(set(sys.argv[1:]))
