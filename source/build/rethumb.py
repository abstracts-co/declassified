import json, os, re, sys, glob
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from ingest import items, WORK, DATA, RAW, OVERRIDES, run, save_webp
from PIL import Image
for it in items():
    if it['type'] != 'document':
        continue
    mf = f"{WORK}/{it['id']}/meta.json"
    if not os.path.isfile(mf):
        continue
    m = json.load(open(mf))
    src = m.get('index_pdf') if os.path.isfile(m.get('index_pdf') or '') else max(glob.glob(f"{RAW}/{it['id']}/*"), key=os.path.getsize)
    first = run('pdftotext', '-l', '1', src, '-').stdout
    tp = OVERRIDES.get(it['id'], {}).get('thumb_page') or (2 if m.get('shown', 1) > 1 and re.search(r'IDENTIFICATION FORM|ASSASSINATION SYSTEM|Defense Documentation Center|DEFENSE TECHNICAL INFORMATION', first, re.I) else 1)
    if m.get('thumb_page', 1) == tp:
        continue
    page = f"{DATA}/{m['dir']}p/{tp:03d}.webp"
    if not os.path.isfile(page):
        continue
    m['aspect'] = round(save_webp(Image.open(page), f"{DATA}/{m['dir']}thumb.webp", 480, 66), 4)
    m['thumb_page'] = tp
    json.dump(m, open(mf, 'w'))
    print('thumb', it['id'], tp)
