import glob, json, os, re, shutil, subprocess, sys, tempfile
from concurrent.futures import ThreadPoolExecutor
from PIL import Image, ImageStat

Image.MAX_IMAGE_PIXELS = 400_000_000
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
RAW = f'{ROOT}/raw'
WORK = f'{ROOT}/work'
DATA = os.environ.get('DATA', f'{ROOT}/out/data')
WORKERS = int(os.environ.get('WORKERS', '2'))
MAX_SHOWN = 40
OVERRIDES = json.load(open(f'{ROOT}/build/overrides.json')) if os.path.isfile(f'{ROOT}/build/overrides.json') else {}


def run(*a, **k):
    return subprocess.run(['nice', '-n', '15', *a], check=True, capture_output=True, text=True, **k)


def items():
    out = []
    for f in sorted(glob.glob(f'{ROOT}/research/*.json')):
        d = json.load(open(f))
        for i in d.get('items', []):
            i['topic'] = os.path.basename(f)[:-5]
            out.append(i)
    return out


def is_gray(im):
    s = ImageStat.Stat(im.convert('HSV').split()[1]).mean[0]
    return s < 14


def save_webp(im, path, width, q):
    if im.width > width:
        im = im.resize((width, round(im.height * width / im.width)), Image.LANCZOS)
    im = im.convert('L') if is_gray(im) else im.convert('RGB')
    im.save(path, 'WEBP', quality=q, method=5)
    return im.width / im.height


def pdf_pages(pdf):
    m = re.search(r'Pages:\s+(\d+)', run('pdfinfo', pdf).stdout)
    return int(m.group(1)) if m else 0


def text_density(pdf, n):
    t = run('pdftotext', '-l', str(min(n, 6)), pdf, '-').stdout
    return len(re.sub(r'\s+', '', t)) / max(1, min(n, 6))


def ocr(pdf, n, work):
    tmp = tempfile.mkdtemp(dir=work)
    run('pdftoppm', '-r', '220', '-gray', '-png', pdf, f'{tmp}/p')
    pngs = sorted(glob.glob(f'{tmp}/p-*.png'))

    def one(png):
        base = png[:-4]
        subprocess.run(['nice', '-n', '15', 'tesseract', png, base, '-l', 'eng', 'pdf'], check=True, capture_output=True, env={**os.environ, 'OMP_THREAD_LIMIT': '1'})
        return base + '.pdf'

    with ThreadPoolExecutor(WORKERS) as ex:
        parts = list(ex.map(one, pngs))
    out = f'{work}/ocr.pdf'
    for i in range(0, len(parts), 400):
        chunk = parts[i:i + 400]
        run('pdfunite', *chunk, f'{tmp}/c{i:06d}.pdf') if len(chunk) > 1 else shutil.copy(chunk[0], f'{tmp}/c{i:06d}.pdf')
    chunks = sorted(glob.glob(f'{tmp}/c*.pdf'))
    if len(chunks) > 1:
        run('pdfunite', *chunks, out)
    else:
        shutil.copy(chunks[0], out)
    shutil.rmtree(tmp)
    return out


def document(it, src, dest, work):
    n = pdf_pages(src)
    meta = {'pages': n}
    dens = text_density(src, n)
    meta['ocr'] = dens < 250
    meta['index_pdf'] = ocr(src, n, work) if meta['ocr'] else src
    shown = n if n <= 48 else MAX_SHOWN
    tmp = tempfile.mkdtemp(dir=work)
    run('pdftoppm', '-l', str(shown), '-scale-to-x', '960', '-scale-to-y', '-1', '-png', src, f'{tmp}/p')
    pngs = sorted(glob.glob(f'{tmp}/p-*.png'))
    os.makedirs(f'{dest}/p', exist_ok=True)
    pa = []
    first = run('pdftotext', '-l', '1', meta['index_pdf'], '-').stdout
    tp = OVERRIDES.get(it.get('id'), {}).get('thumb_page') or (2 if len(pngs) > 1 and re.search(r'IDENTIFICATION FORM|ASSASSINATION SYSTEM|Defense Documentation Center|DEFENSE TECHNICAL INFORMATION', first, re.I) else 1)
    for k, png in enumerate(pngs, 1):
        im = Image.open(png)
        pa.append(round(save_webp(im, f'{dest}/p/{k:03d}.webp', 960, 42), 4))
        if k == min(tp, len(pngs)):
            meta['aspect'] = round(save_webp(im, f'{dest}/thumb.webp', 480, 66), 4)
    shutil.rmtree(tmp)
    meta.update(shown=len(pngs), pa=pa, thumb='thumb.webp')
    return meta


def image(it, src, dest, work):
    im = Image.open(src)
    im.load()
    if im.mode in ('I;16', 'I', 'F'):
        im = im.point(lambda v: v / 256).convert('L')
    if im.mode in ('RGBA', 'LA', 'P'):
        bg = Image.new('RGB', im.size, (255, 255, 255))
        im = im.convert('RGBA')
        bg.paste(im, mask=im.split()[-1])
        im = bg
    full = im.copy()
    full.thumbnail((2400, 2400), Image.LANCZOS)
    aspect = save_webp(full, f'{dest}/full.webp', 2400, 80)
    th = im.copy()
    th.thumbnail((720, 720), Image.LANCZOS)
    save_webp(th, f'{dest}/thumb.webp', 720, 74)
    return {'aspect': round(aspect, 4), 'media': 'full.webp', 'thumb': 'thumb.webp', 'width': im.width, 'height': im.height}


def probe(src):
    j = json.loads(run('ffprobe', '-v', 'error', '-show_entries', 'format=duration:stream=codec_type,width,height', '-of', 'json', src).stdout)
    v = next((s for s in j.get('streams', []) if s.get('codec_type') == 'video'), None)
    a = any(s.get('codec_type') == 'audio' for s in j.get('streams', []))
    return float(j['format'].get('duration') or 0), v, a


def video(it, src, dest, work):
    dur, v, has_audio = probe(src)
    cap = min(dur, 900)
    out = f'{dest}/video.mp4'
    for crf, w in ((27, 1280), (30, 960), (32, 854)):
        args = ['ffmpeg', '-y', '-v', 'error', '-i', src, '-t', f'{cap:.2f}', '-vf', f"scale='min({w},iw)':-2,format=yuv420p", '-c:v', 'libx264', '-preset', 'medium', '-crf', str(crf), '-threads', str(WORKERS)]
        args += ['-c:a', 'aac', '-b:a', '96k', '-ac', '2'] if has_audio else ['-an']
        run(*args, '-movflags', '+faststart', out)
        if os.path.getsize(out) < 48_000_000:
            break
    best = (-1, 0, None)
    pin = OVERRIDES.get(it.get('id'), {}).get('poster_at')
    for f in ((pin / dur,) if pin else (.12, .22, .32, .42, .52, .62, .72)):
        at = min(max(dur * f, .5), max(dur - 7, 0))
        run('ffmpeg', '-y', '-v', 'error', '-ss', f'{at:.2f}', '-i', src, '-frames:v', '1', f'{work}/cand.png')
        im = Image.open(f'{work}/cand.png').convert('RGB')
        st = ImageStat.Stat(im.convert('L'))
        score = st.stddev[0] + min(st.mean[0], 120) * .3
        if score > best[0]:
            best = (score, at, im)
    _, at, im = best
    aspect = save_webp(im, f'{dest}/poster.webp', 1280, 74)
    save_webp(im, f'{dest}/thumb.webp', 640, 72)
    run('ffmpeg', '-y', '-v', 'error', '-ss', f'{at:.2f}', '-i', src, '-t', '6', '-an', '-vf', "scale=480:-2,format=yuv420p", '-c:v', 'libx264', '-preset', 'medium', '-crf', '30', '-threads', str(WORKERS), '-movflags', '+faststart', f'{dest}/loop.mp4')
    return {'aspect': round(aspect, 4), 'media': 'video.mp4', 'loop': 'loop.mp4', 'poster': 'poster.webp', 'thumb': 'thumb.webp', 'duration': round(dur), 'clipped': round(cap) if cap < dur - 1 else None}


def audio(it, src, dest, work):
    dur, _, _ = probe(src)
    cap = min(dur, 5400)
    run('ffmpeg', '-y', '-v', 'error', '-i', src, '-t', f'{cap:.2f}', '-vn', '-c:a', 'aac', '-b:a', '64k', '-ac', '1', '-movflags', '+faststart', f'{dest}/audio.m4a')
    return {'media': 'audio.m4a', 'duration': round(dur), 'clipped': round(cap) if cap < dur - 1 else None}


KINDS = {'document': document, 'image': image, 'video': video, 'audio': audio}


def main(only):
    for it in (reversed(items()) if os.environ.get('REVERSE') else items()):
        if only and it['id'] not in only:
            continue
        src_dir = f"{RAW}/{it['id']}"
        src = f"{src_dir}/{it.get('file_name', '')}"
        if not os.path.isfile(src):
            files = [f for f in glob.glob(f'{src_dir}/*') if os.path.isfile(f)]
            if not files:
                print('missing', it['id'], flush=True)
                continue
            src = max(files, key=os.path.getsize)
        work = f"{WORK}/{it['id']}"
        done = f'{work}/meta.json'
        stamp = f'{os.path.getsize(src)}:{int(os.path.getmtime(src))}:{it["type"]}'
        if os.path.isfile(done) and json.load(open(done)).get('stamp') == stamp and not os.environ.get('FORCE'):
            continue
        dest = f"{DATA}/us/{it['topic']}/{it['id']}"
        os.makedirs(work, exist_ok=True)
        lock = f'{work}/.ingest.lock'
        try:
            os.close(os.open(lock, os.O_CREAT | os.O_EXCL))
        except FileExistsError:
            continue
        try:
            shutil.rmtree(dest, ignore_errors=True)
            os.makedirs(dest, exist_ok=True)
            meta = KINDS[it['type']](it, src, dest, work)
        except Exception as e:
            print('FAIL', it['id'], repr(e)[:400], flush=True)
            continue
        finally:
            os.remove(lock)
        meta['stamp'] = stamp
        meta['dir'] = f"us/{it['topic']}/{it['id']}/"
        json.dump(meta, open(done, 'w'))
        print('ok', it['id'], it['type'], {k: meta[k] for k in ('pages', 'shown', 'duration', 'aspect') if k in meta}, flush=True)


if __name__ == '__main__':
    main(set(sys.argv[1:]))
