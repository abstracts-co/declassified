import hashlib, json, os, re, shutil, sys, glob

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from ingest import items, ROOT, WORK, RAW
from validate_tree import check

STORE = f'{WORK}/pageindex'
OUT = os.environ.get('INDEXES', f'{ROOT}/out/indexes')
BUILT = os.environ.get('BUILT', '2026-11-09')
VERSION = '0.5.3'


def sha256(path):
    h = hashlib.sha256()
    with open(path, 'rb') as f:
        for b in iter(lambda: f.read(1 << 20), b''):
            h.update(b)
    return h.hexdigest()


def clean(text):
    text = re.sub(r'[ \t]+\n', '\n', text or '')
    text = re.sub(r'\n{3,}', '\n\n', text)
    return text.strip()


def convert(nodes):
    return [{'node_id': n['node_id'], 'title': n['title'].strip(), 'start_page': n['start_index'], 'end_page': n['end_index'],
             'summary': (n.get('summary') or '').strip(), 'nodes': convert(n.get('nodes') or [])} for n in nodes]


def leaves(nodes):
    for n in nodes:
        if n.get('nodes'):
            yield from leaves(n['nodes'])
        else:
            yield n


def build(it):
    wid = it['id']
    doc_dir = f'{STORE}/docs/{wid}'
    if not os.path.isfile(f'{doc_dir}/tree.json'):
        return 'no tree'
    doc = json.load(open(f'{doc_dir}/doc.json'))
    pages = json.load(open(f'{doc_dir}/pages.json'))
    n = doc['pageNum']
    edited = f'{WORK}/edited/{wid}.json'
    raw_tree = f'{doc_dir}/tree.flash.json'
    if not os.path.isfile(raw_tree):
        shutil.copy(f'{doc_dir}/tree.json', raw_tree)
    tree = json.load(open(edited if os.path.isfile(edited) else raw_tree))
    tree = tree.get('structure', tree) if isinstance(tree, dict) else tree
    errs = check(tree, n)
    if errs and os.path.isfile(edited):
        return 'INVALID ' + '; '.join(errs[:3])
    json.dump(tree, open(f'{doc_dir}/tree.json', 'w'), ensure_ascii=False)
    text = {p['page_index']: clean(p.get('markdown') or p.get('text') or '') for p in pages}
    src = next((f for f in glob.glob(f'{RAW}/{wid}/*') if os.path.basename(f) == it.get('file_name')), None) or max(glob.glob(f'{RAW}/{wid}/*'), key=os.path.getsize)
    dest = f'{OUT}/{wid}'
    shutil.rmtree(dest, ignore_errors=True)
    os.makedirs(f'{dest}/text')
    for leaf in leaves(tree):
        body = [f"# {leaf['title'].strip()}", '']
        for p in range(leaf['start_index'], leaf['end_index'] + 1):
            body += [f'## Page {p}', '', text.get(p, '') or '(no text on this page)', '']
        out = '\n'.join(body).strip() + '\n'
        if len(out.encode()) > 290_000:
            out = out.encode()[:290_000].decode('utf-8', 'ignore') + '\n\n(cut here; read the rest in the PDF)\n'
        open(f"{dest}/text/{leaf['node_id']}.md", 'w').write(out)
    index = {
        'id': wid,
        'title': it['title'],
        'source': {'url': it.get('source'), 'publisher': it.get('agency'), 'date': it.get('date'), 'pages': n,
                   'released': it.get('released'), 'file': it.get('file'), 'sha256': sha256(src), 'license': it.get('license')},
        'country': 'us',
        'topic': it['topic'],
        'summary': it.get('summary'),
        'files': f"https://abstracts-co.github.io/declassified-data/us/{it['topic']}/{wid}/",
        'tool': {'name': 'PageIndex', 'version': VERSION,
                 'method': 'Tesseract OCR, then the tree was written in the PageIndex format from the page text, because PageIndex Flash found no layout structure in this scan.' if doc.get('mode') == 'manual' else 'Tesseract OCR where the scan had no text layer, then PageIndex local Flash with Claude Code (Haiku) for structure refinement and summaries. Titles, nesting and summaries were then edited against the page text.' if os.path.isfile(edited) else 'Tesseract OCR where the scan had no text layer, then PageIndex local Flash with Claude Code (Haiku) for structure refinement and summaries.',
                 'models': [] if doc.get('mode') == 'manual' else ['claude-code/haiku']},
        'built': BUILT,
        'tree': convert(tree),
    }
    open(f'{dest}/index.json', 'w').write(json.dumps(index, ensure_ascii=False, indent=1) + '\n')
    return f"ok {sum(1 for _ in leaves(tree))} leaves{' (edited)' if os.path.isfile(edited) else ' (raw)'}"


def main(only):
    for it in items():
        if it['type'] != 'document' or (only and it['id'] not in only):
            continue
        print(it['id'], build(it), flush=True)


if __name__ == '__main__':
    main(set(sys.argv[1:]))
