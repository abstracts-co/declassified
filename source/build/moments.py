import base64, glob, io, json, os, re, subprocess, sys, tempfile
from concurrent.futures import ThreadPoolExecutor
import numpy as np
from PIL import Image, ImageOps, ImageStat

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from ingest import items, ROOT, RAW, WORK, DATA
from mtool import source

Image.MAX_IMAGE_PIXELS = 400_000_000
MDIR = f'{ROOT}/build/moments'
OUT = f'{WORK}/moments.json'
LQ = f'{WORK}/lq.json'
WORKERS = int(os.environ.get('WORKERS', '2'))
FORCE = bool(os.environ.get('FORCE'))


def run(*a):
    return subprocess.run(['nice', '-n', '19', *a], check=True, capture_output=True, text=True).stdout


def fresh(path, *deps):
    return not FORCE and os.path.isfile(path) and all(os.path.getmtime(path) >= os.path.getmtime(d) for d in deps if os.path.isfile(d))


def neutral(im):
    if im.mode == 'L':
        return im
    sat = ImageStat.Stat(im.convert('HSV').split()[1]).mean[0]
    return im.convert('L') if sat < 26 else im.convert('RGB')


def page_png(src, page, width):
    tmp = tempfile.mkdtemp(dir=f'{WORK}/_m')
    run('pdftoppm', '-f', str(page), '-l', str(page), '-scale-to-x', str(width), '-scale-to-y', '-1', '-singlefile', '-png', src, f'{tmp}/p')
    im = Image.open(f'{tmp}/p.png')
    im.load()
    os.remove(f'{tmp}/p.png')
    os.rmdir(tmp)
    return neutral(im)


def square_crop(im, cx, cy, side):
    half = side / 2
    box = (round(cx - half), round(cy - half), round(cx + half), round(cy + half))
    bg = Image.new(im.mode if im.mode in ('L', 'RGB') else 'RGB', (box[2] - box[0], box[3] - box[1]), 255 if im.mode == 'L' else (255, 255, 255))
    src = im if im.mode in ('L', 'RGB') else im.convert('RGB')
    sx0, sy0 = max(0, box[0]), max(0, box[1])
    sx1, sy1 = min(im.width, box[2]), min(im.height, box[3])
    if sx1 > sx0 and sy1 > sy0:
        bg.paste(src.crop((sx0, sy0, sx1, sy1)), (sx0 - box[0], sy0 - box[1]))
    return bg


def save(im, path, width, q):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    if im.width > width:
        im = im.resize((width, round(im.height * width / im.width)), Image.LANCZOS)
    (im if im.mode == 'L' else im.convert('RGB')).save(path, 'WEBP', quality=q, method=5)
    return im.width / im.height


def lq(path):
    im = Image.open(path).convert('RGB').resize((28, 28), Image.LANCZOS)
    b = io.BytesIO()
    im.save(b, 'WEBP', quality=42, method=6)
    return 'data:image/webp;base64,' + base64.b64encode(b.getvalue()).decode()


def doc_pages(it, meta, spec, dest):
    src = source(it['id'])[1]
    sizes = {}
    pages = sorted({m['page'] for m in spec.get('moments', []) if m.get('kind') == 'page'} | ({spec['face']['page']} if spec.get('face') else set()))
    shown = meta.get('shown') or 0
    for p in pages:
        hi = f'{dest}/hi/{p:03d}.webp'
        lo = f'{dest}/p/{p:03d}.webp'
        need_hi = not fresh(hi, src)
        need_lo = p > shown and not fresh(lo, src)
        if need_hi or need_lo:
            im = page_png(src, p, 1800)
            if need_hi:
                save(im, hi, 1800, 64)
            if need_lo:
                save(im, lo, 960, 50)
        sizes[p] = Image.open(hi).size
    return sizes


def build_doc(it, meta, spec, dest, rec):
    sizes = doc_pages(it, meta, spec, dest)
    cache = {}

    def hi(p):
        if p not in cache:
            cache[p] = neutral(Image.open(f'{dest}/hi/{p:03d}.webp'))
        return cache[p]

    mo = []
    first = None
    for k, m in enumerate(spec.get('moments', [])):
        if m.get('kind') != 'page':
            continue
        p = m['page']
        W, H = sizes[p]
        e = {'k': 'p', 'p': p, 'q': m['short'], 'ln': [[round(v, 4) for v in b] for b in m['lines']]}
        if m.get('grief'):
            e['g'] = 1
        lens = m.get('lens') or m['lines'][0]
        if first is None and not m.get('grief'):
            first = (p, lens)
        o = f'{dest}/m{k}.webp'
        lw, lh = (lens[2] - lens[0]) * W, (lens[3] - lens[1]) * H
        see = min(max(lw * 1.05, 6.2 * lh), 8.4 * lh)
        side = max(220, see * 1.75)
        sq = square_crop(hi(p), (lens[0] + lens[2]) / 2 * W, (lens[1] + lens[3]) / 2 * H, side)
        save(sq.resize((640, 640), Image.LANCZOS), o, 640, 80)
        e['o'] = f'm{k}.webp'
        mo.append((k, e))
    face = spec.get('face')
    if first:
        p, lens = first
        W, H = sizes[p]
        fw = min(.36, max(.28, lens[2] - lens[0] + .08))
        fh = min(.96, fw * W * 1.25 / H)
        cx, cy = (lens[0] + lens[2]) / 2, (lens[1] + lens[3]) / 2
        x0 = min(max(cx - fw / 2, 0), 1 - fw)
        y0 = min(max(cy - fh * .45, 0), 1 - fh)
        face = {'page': p, 'box': [x0, y0, x0 + fw, y0 + fh]}
    fa = None
    if face:
        p = face['page']
        W, H = sizes[p]
        x0, y0, x1, y1 = face['box']
        crop = hi(p).crop((round(x0 * W), round(y0 * H), round(x1 * W), round(y1 * H)))
        fa = round(save(crop, f'{dest}/face.webp', 720, 78), 4)
    rec.update(hi=sorted(sizes), face='face.webp' if face else None, fa=fa)
    extra = sorted(p for p in sizes if p > (meta.get('shown') or 0))
    if extra:
        rec['extra'] = {str(p): round(Image.open(f'{dest}/p/{p:03d}.webp').width / Image.open(f'{dest}/p/{p:03d}.webp').height, 4) for p in extra}
    return mo


def cropdetect(src, t, dur):
    x = subprocess.run(['nice', '-n', '19', 'ffmpeg', '-v', 'info', '-ss', str(t), '-i', src, '-t', str(min(dur, 4)), '-vf', 'cropdetect=24:2:0', '-f', 'null', '-'], capture_output=True, text=True).stderr
    c = re.findall(r'crop=(\d+):(\d+):(\d+):(\d+)', x)
    return [int(v) for v in c[-1]] if c else None


def build_video(it, meta, spec, dest, rec):
    src = f"{DATA}/{meta['dir']}{meta['media']}"
    w, h = [int(v) for v in run('ffprobe', '-v', 'error', '-select_streams', 'v', '-show_entries', 'stream=width,height', '-of', 'csv=p=0', src).strip().split(',')[:2]]
    dep = f"{MDIR}/{it['topic']}.json"
    mo = []
    for k, m in enumerate(spec.get('moments', [])):
        if m.get('kind') != 'video':
            continue
        t, end = float(m['t']), float(m.get('end') or m['t'] + 8)
        dur = max(2.0, min(10.0, end - t))
        e = {'k': 'v', 't': round(t, 2), 'e': round(t + dur, 2)}
        if m.get('grief'):
            e['g'] = 1
        clip, poster, still = f'{dest}/m{k}.mp4', f'{dest}/m{k}.webp', f'{dest}/m{k}.sq.webp'
        info = f'{WORK}/{it["id"]}/m{k}.json'
        if not (fresh(clip, src, dep) and fresh(poster, src, dep) and fresh(still, src, dep) and os.path.isfile(info)):
            c = cropdetect(src, t, dur)
            if c and (c[0] < w * .3 or c[1] < h * .3):
                c = None
            vf = (f'crop={c[0]}:{c[1]}:{c[2]}:{c[3]},' if c else '') + "scale='min(720,iw)':-2"
            for crf in (27, 30, 33):
                run('ffmpeg', '-y', '-v', 'error', '-ss', str(t), '-i', src, '-t', str(dur), '-an', '-vf', vf + ',format=yuv420p', '-c:v', 'libx264', '-preset', 'slow', '-crf', str(crf), '-threads', '2', '-movflags', '+faststart', clip)
                if os.path.getsize(clip) < 1_000_000:
                    break
            at = t + min(1.0, dur / 3)
            png = f'{WORK}/{it["id"]}/m{k}.png'
            run('ffmpeg', '-y', '-v', 'error', '-ss', str(at), '-i', src, '-frames:v', '1', png)
            full = Image.open(png).convert('RGB')
            cw, ch, cx, cy = c if c else (w, h, 0, 0)
            pim = full.crop((cx, cy, cx + cw, cy + ch))
            save(pim, poster, 1280, 76)
            sq = m.get('square')
            if sq:
                side = int(min((sq[2] - sq[0]) * w, (sq[3] - sq[1]) * h)) // 2 * 2
                ox = int(max(0, min(w - side, (sq[0] + sq[2]) / 2 * w - side / 2)))
                oy = int(max(0, min(h - side, (sq[1] + sq[3]) / 2 * h - side / 2)))
                svf = f'crop={side}:{side}:{ox}:{oy},scale=512:512,format=yuv420p'
                run('ffmpeg', '-y', '-v', 'error', '-ss', str(t), '-i', src, '-t', str(dur), '-an', '-vf', svf, '-c:v', 'libx264', '-preset', 'slow', '-crf', '26', '-threads', '2', '-movflags', '+faststart', f'{dest}/m{k}s.mp4')
                sim = full.crop((ox, oy, ox + side, oy + side))
            else:
                side = min(cw, ch)
                sim = pim.crop(((cw - side) // 2, (ch - side) // 2, (cw - side) // 2 + side, (ch - side) // 2 + side))
            save(sim.resize((512, 512), Image.LANCZOS), still, 512, 80)
            os.remove(png)
            json.dump({'cr': [round(cx / w, 4), round(cy / h, 4), round(cw / w, 4), round(ch / h, 4)] if c else None, 'a': round(cw / ch, 4), 'sq': bool(sq)}, open(info, 'w'))
        inf = json.load(open(info))
        e.update(c=f'm{k}.mp4', po=f'm{k}.webp', a=inf['a'], o=f'm{k}.sq.webp')
        if inf['cr']:
            e['cr'] = inf['cr']
        if inf['sq']:
            e['os'] = f'm{k}s.mp4'
        mo.append((k, e))
    return mo


def build_image(it, meta, spec, dest, rec):
    src = f"{DATA}/{meta['dir']}{meta['media']}"
    dep = f"{MDIR}/{it['topic']}.json"
    mo = []
    for k, m in enumerate(spec.get('moments', [])):
        if m.get('kind') != 'image':
            continue
        e = {'k': 'i'}
        if m.get('grief'):
            e['g'] = 1
        rot = int(m.get('rot') or 0)
        sq = m.get('square')
        im = None
        if sq:
            o = f'{dest}/m{k}.webp'
            if not fresh(o, src, dep):
                im = Image.open(src).convert('RGB')
                W, H = im.size
                side = min((sq[2] - sq[0]) * W, (sq[3] - sq[1]) * H)
                crop = square_crop(im, (sq[0] + sq[2]) / 2 * W, (sq[1] + sq[3]) / 2 * H, side)
                if rot:
                    crop = crop.rotate(-90 * rot, expand=True)
                if m.get('auto'):
                    crop = ImageOps.autocontrast(crop, cutoff=1)
                save(crop.resize((640, 640), Image.LANCZOS) if crop.width > 640 else crop, o, 640, 82)
            e['o'] = f'm{k}.webp'
        if rot:
            fr, tr = f'{dest}/full.r.webp', f'{dest}/thumb.r.webp'
            if not (fresh(fr, src, dep) and fresh(tr, src, dep)):
                im = im or Image.open(src).convert('RGB')
                r = im.rotate(-90 * rot, expand=True)
                save(r, fr, 2400, 80)
                th = r.copy()
                th.thumbnail((720, 720), Image.LANCZOS)
                save(th, tr, 720, 74)
            a = Image.open(fr)
            rec['over'] = {'media': 'full.r.webp', 'thumb': 'thumb.r.webp', 'aspect': round(a.width / a.height, 4)}
        mo.append((k, e))
    return mo


def build_audio(it, meta, spec, dest, rec):
    src = f"{DATA}/{meta['dir']}{meta['media']}"
    wave = f'{WORK}/{it["id"]}/wave.json'
    if not fresh(wave, src):
        raw = subprocess.run(['nice', '-n', '19', 'ffmpeg', '-v', 'error', '-i', src, '-ac', '1', '-ar', '800', '-f', 's16le', '-'], capture_output=True, check=True).stdout
        a = np.abs(np.frombuffer(raw, dtype=np.int16).astype(np.float32))
        seg = np.array_split(a, 240)
        pk = np.array([np.percentile(s, 95) if len(s) else 0 for s in seg])
        pk = pk / (pk.max() or 1)
        json.dump([int(v * 99) for v in pk], open(wave, 'w'))
    rec['wave'] = json.load(open(wave))
    mo = []
    for k, m in enumerate(spec.get('moments', [])):
        if m.get('kind') != 'audio':
            continue
        e = {'k': 'a', 't': round(float(m['t']), 2), 'e': round(float(m.get('end') or m['t'] + 12), 2)}
        if m.get('grief'):
            e['g'] = 1
        mo.append((k, e))
    return mo


KIND = {'document': build_doc, 'video': build_video, 'image': build_image, 'audio': build_audio}


def one(job):
    it, meta, spec = job
    dest = f"{DATA}/{meta['dir']}".rstrip('/')
    rec = {}
    try:
        mo = KIND[it['type']](it, meta, spec, dest, rec)
    except Exception as e:
        print('FAIL', it['id'], repr(e)[:300], flush=True)
        return it['id'], None, {}
    rec['mo'] = [e for _, e in sorted(mo)]
    rec['idx'] = [k for k, _ in sorted(mo)]
    small = {f"{it['id']}:{n}": lq(f"{dest}/{e['o']}") for n, e in enumerate(rec['mo']) if e.get('o')}
    return it['id'], rec, small


def main():
    specs = {}
    for f in sorted(glob.glob(f'{MDIR}/*.json')):
        specs[os.path.basename(f)[:-5]] = json.load(open(f))
    only = set(sys.argv[1:])
    jobs = []
    for it in items():
        sp = specs.get(it['topic'], {}).get('files', {}).get(it['id'])
        mf = f"{WORK}/{it['id']}/meta.json"
        if sp is None or not os.path.isfile(mf) or (only and it['id'] not in only):
            continue
        jobs.append((it, json.load(open(mf)), sp))
    os.makedirs(f'{WORK}/_m', exist_ok=True)
    prev = json.load(open(OUT)) if only and os.path.isfile(OUT) else {'items': {}}
    small = json.load(open(LQ)) if only and os.path.isfile(LQ) else {}
    out = dict(prev['items'])
    with ThreadPoolExecutor(WORKERS) as ex:
        for i, rec, s in ex.map(one, jobs):
            if rec:
                out[i] = rec
                small.update(s)
                print('ok', i, len(rec['mo']), flush=True)
    topics = {}
    for t, s in specs.items():
        lead = s.get('lead') or {}
        rec = out.get(lead.get('file'))
        m = rec['idx'].index(lead['m']) if rec and lead.get('m') in rec['idx'] else 0
        topics[t] = {'order': s.get('order') or [], 'lead': {'f': lead.get('file'), 'm': m}}
    json.dump({'items': out, 'topics': topics}, open(OUT, 'w'))
    json.dump(small, open(LQ, 'w'))
    print('moments', sum(len(r['mo']) for r in out.values()), 'files', len(out))


if __name__ == '__main__':
    main()
