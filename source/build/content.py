import json, os, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA = os.environ.get('DATA', f'{ROOT}/out/data')
OUT = sys.argv[1] if len(sys.argv) > 1 else f'{ROOT}/out/content.md'

KIND = {'document': 'Document', 'image': 'Photo', 'video': 'Film', 'audio': 'Recording'}


def when(d):
    return (d or '')[:4]


def main():
    cat = json.load(open(f'{DATA}/catalog.json'))
    items = cat['items']
    lines = ['# Declassified files', '',
             f"{len(items)} files that the United States government has declassified or officially released, in {len(cat['topics'])} topics. Open a topic, then read a document page by page, watch a film, zoom into a photo or play a recording. Every document has a PageIndex outline you can search, here and on the community's Documents page.", '']
    for t in cat['topics']:
        lines += [f"## {t['name']}", '']
        for i in t['items']:
            it = items[i]
            extra = []
            if it.get('pages'):
                extra.append(f"{it['pages']} pages")
            if it.get('duration'):
                m, s = divmod(int(it['duration']), 60)
                extra.append(f'{m}:{s:02d}')
            meta = ', '.join([KIND[it['type']], it.get('agency') or '', when(it.get('date'))] + extra)
            lines += [f"**{it['title']}** ({meta.strip(', ')})", '', it.get('summary', ''), '',
                      f"Released {it.get('released', '')}. [Official source]({it['source']}) · [Open in the explorer](https://abstracts.co/a/declassified?a_file={i})", '']
    open(OUT, 'w').write('\n'.join(lines).rstrip() + '\n')
    print(OUT, len(items))


if __name__ == '__main__':
    main()
