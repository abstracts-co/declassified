import json, os, shutil, sys, glob
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from ingest import items, WORK, DATA
for it in items():
    mf = f"{WORK}/{it['id']}/meta.json"
    if not os.path.isfile(mf):
        continue
    m = json.load(open(mf))
    want = f"us/{it['topic']}/{it['id']}/"
    if m['dir'] == want:
        continue
    src, dst = f"{DATA}/{m['dir']}", f"{DATA}/{want}"
    if os.path.isdir(src):
        os.makedirs(os.path.dirname(dst.rstrip('/')), exist_ok=True)
        shutil.rmtree(dst, ignore_errors=True)
        shutil.move(src, dst)
    m['dir'] = want
    json.dump(m, open(mf, 'w'))
    print('moved', it['id'])
for d in glob.glob(f'{DATA}/us/*'):
    if os.path.isdir(d) and not os.listdir(d):
        os.rmdir(d)
for f in glob.glob(f'{WORK}/pageindex/docs/*/doc.json'):
    doc = json.load(open(f))
    md = doc.get('metadata') or {}
    it = next((i for i in items() if i['id'] == doc['id']), None)
    if it and md.get('topic') != it['topic']:
        md['topic'] = it['topic']
        md['pages_online'] = f"https://abstracts-co.github.io/declassified-data/us/{it['topic']}/{it['id']}/"
        doc['metadata'] = md
        json.dump(doc, open(f, 'w'), ensure_ascii=False)
known = {f"us/{it['topic']}/{it['id']}" for it in items()}
for d in glob.glob(f'{DATA}/us/*/*'):
    rel = os.path.relpath(d, DATA)
    if os.path.isdir(d) and rel not in known and not os.path.exists(f"{WORK}/{os.path.basename(d)}/.ingest.lock"):
        shutil.rmtree(d)
        print('removed', rel)
for d in glob.glob(f'{DATA}/us/*'):
    if os.path.isdir(d) and not os.listdir(d):
        os.rmdir(d)
