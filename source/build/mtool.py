import difflib, glob, html, json, os, re, subprocess, sys, tempfile
from PIL import Image, ImageDraw

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from ingest import items, RAW, WORK, DATA

Image.MAX_IMAGE_PIXELS = 400_000_000
CACHE = f'{WORK}/_m'
os.makedirs(CACHE, exist_ok=True)


def sh(*a):
    return subprocess.run(['nice', '-n', '19', *a], check=True, capture_output=True, text=True).stdout


def item(i):
    it = next((x for x in items() if x['id'] == i), None)
    if not it:
        sys.exit(f'no item {i}')
    return it


def source(i):
    it = item(i)
    d = f'{RAW}/{i}'
    src = f"{d}/{it.get('file_name', '')}"
    if not os.path.isfile(src):
        src = max((f for f in glob.glob(f'{d}/*') if os.path.isfile(f)), key=os.path.getsize)
    meta = json.load(open(f'{WORK}/{i}/meta.json'))
    return it, src, meta


def render(i, page, dpi=200):
    _, src, _ = source(i)
    out = f'{CACHE}/{i}-{page}-{dpi}'
    if not os.path.isfile(out + '.png'):
        sh('pdftoppm', '-f', str(page), '-l', str(page), '-r', str(dpi), '-singlefile', '-png', src, out)
    return Image.open(out + '.png')


def words_pdf(pdf, page):
    x = sh('pdftotext', '-f', str(page), '-l', str(page), '-bbox-layout', pdf, '-')
    pg = re.search(r'<page width="([\d.]+)" height="([\d.]+)"', x)
    W, H = float(pg.group(1)), float(pg.group(2))
    lines = []
    for ln in re.findall(r'<line[^>]*>(.*?)</line>', x, re.S):
        ws = []
        for m in re.finditer(r'<word xMin="([\d.]+)" yMin="([\d.]+)" xMax="([\d.]+)" yMax="([\d.]+)">(.*?)</word>', ln):
            a, b, c, d, t = m.groups()
            ws.append((html.unescape(t), float(a) / W, float(b) / H, float(c) / W, float(d) / H))
        if ws:
            lines.append(ws)
    return lines


def words_ocr(i, page):
    im = render(i, page, 300)
    out = f'{CACHE}/{i}-{page}-tsv'
    if not os.path.isfile(out + '.tsv'):
        sh('tesseract', f'{CACHE}/{i}-{page}-300.png', out, '--psm', '4', 'tsv')
    W, H = im.size
    rows = [r.split('\t') for r in open(out + '.tsv').read().splitlines()[1:]]
    lines = {}
    for r in rows:
        if len(r) < 12 or not r[11].strip() or float(r[10]) < 0:
            continue
        key = (r[2], r[3], r[4])
        l, t, w, h = map(int, r[6:10])
        lines.setdefault(key, []).append((r[11], l / W, t / H, (l + w) / W, (t + h) / H))
    return list(lines.values())


def words(i, page, mode='auto'):
    _, src, meta = source(i)
    if mode == 'ocr':
        return words_ocr(i, page)
    pdf = meta.get('index_pdf') or src
    if mode == 'raw':
        pdf = src
    return words_pdf(pdf, page)


norm = lambda s: re.sub(r'[^a-z0-9]', '', s.lower())


def find(i, page, quote, mode='auto'):
    lines = words(i, page, mode)
    flat = [(li, w) for li, ln in enumerate(lines) for w in ln]
    toks = [norm(w[0]) for _, w in flat]
    q = [norm(t) for t in quote.split() if norm(t)]
    best = (0, 0, 0)
    for s in range(len(toks)):
        sm = difflib.SequenceMatcher(None, toks[s:s + len(q) + 4], q, autojunk=False)
        r = sm.ratio()
        if r > best[0]:
            best = (r, s, s + len(q) + 4)
    r, s, e = best
    sm = difflib.SequenceMatcher(None, toks[s:e], q, autojunk=False)
    blocks = [b for b in sm.get_matching_blocks() if b.size]
    if not blocks:
        return {'score': 0}
    a = s + blocks[0].a
    b = s + blocks[-1].a + blocks[-1].size
    hit = flat[a:b]
    per = {}
    for li, w in hit:
        x0, y0, x1, y1 = per.get(li, (9, 9, -9, -9))
        per[li] = (min(x0, w[1]), min(y0, w[2]), max(x1, w[3]), max(y1, w[4]))
    return {
        'score': round(r, 3),
        'text': ' '.join(w[0] for _, w in hit),
        'lines': [[round(v, 4) for v in per[k]] for k in sorted(per)],
    }


def crop(i, page, box, out, boxes=(), dpi=200, pad=.02):
    im = render(i, page, dpi).convert('RGB')
    W, H = im.size
    d = ImageDraw.Draw(im)
    for b in boxes:
        d.rectangle([b[0] * W - 3, b[1] * H - 3, b[2] * W + 3, b[3] * H + 3], outline=(230, 40, 60), width=3)
    x0, y0, x1, y1 = box
    im.crop((max(0, (x0 - pad) * W), max(0, (y0 - pad) * H), min(W, (x1 + pad) * W), min(H, (y1 + pad) * H))).save(out)
    return out


def frame(i, sec, out):
    _, src, _ = source(i)
    sh('ffmpeg', '-y', '-v', 'error', '-ss', str(sec), '-i', src, '-frames:v', '1', '-vf', 'scale=960:-2', out)
    return out


def text(i, page, mode='auto'):
    return '\n'.join(' '.join(w[0] for w in ln) for ln in words(i, page, mode))


if __name__ == '__main__':
    cmd, *a = sys.argv[1:]
    if cmd == 'src':
        it, src, meta = source(a[0])
        print(json.dumps({'src': src, 'index_pdf': meta.get('index_pdf'), 'ocr': meta.get('ocr'), 'pages': meta.get('pages'), 'shown': meta.get('shown'), 'type': it['type'], 'duration': meta.get('duration')}))
    elif cmd == 'text':
        print(text(a[0], int(a[1]), a[2] if len(a) > 2 else 'auto'))
    elif cmd == 'find':
        print(json.dumps(find(a[0], int(a[1]), a[2], a[3] if len(a) > 3 else 'auto')))
    elif cmd == 'crop':
        box = json.loads(a[2])
        boxes = json.loads(a[4]) if len(a) > 4 else []
        print(crop(a[0], int(a[1]), box, a[3], boxes))
    elif cmd == 'page':
        im = render(a[0], int(a[1]), 110)
        im.save(a[2])
        print(a[2], im.size)
    elif cmd == 'frame':
        print(frame(a[0], float(a[1]), a[2]))
    else:
        sys.exit('usage: mtool.py src|text|find|crop|page|frame ...')
