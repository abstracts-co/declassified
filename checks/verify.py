"""Check indexes, artifact limits and config before a pull request."""
import json
import pathlib
import re

ROOT = pathlib.Path(__file__).resolve().parents[1]
cfg = json.loads((ROOT / 'abstracts.json').read_text())
assert len(cfg['categories']) <= 12 and all(len(c) <= 30 for c in cfg['categories'])

for art in (ROOT / 'artifacts').iterdir():
    if not art.is_dir():
        continue
    files = [f for f in art.rglob('*') if f.is_file()]
    assert len(files) <= 100, f'{art}: more than 100 files'
    assert sum(f.stat().st_size for f in files) < 10_000_000, f'{art}: over 10 MB'
    for f in files:
        assert f.stat().st_size < 5_000_000, f'{f}: over 5 MB'

count = 0
for index in sorted((ROOT / 'indexes').glob('*/index.json')):
    doc = json.loads(index.read_text())
    pages = doc['source']['pages']
    assert doc['id'] == index.parent.name, f'{index}: id does not match its folder'
    assert doc['source']['url'].startswith('https://'), f'{index}: source.url must be https'
    ids, covered = set(), set()

    def walk(nodes, lo, hi):
        for n in nodes:
            assert re.fullmatch(r'\d{4}', n['node_id']) and n['node_id'] not in ids, f"{index}: bad or repeated node_id {n['node_id']}"
            ids.add(n['node_id'])
            assert n['title'].strip() and n['summary'].strip(), f"{index}: {n['node_id']} needs a title and a summary"
            assert lo <= n['start_page'] <= n['end_page'] <= hi, f"{index}: {n['node_id']} pages outside {lo}-{hi}"
            if n['nodes']:
                walk(n['nodes'], n['start_page'], n['end_page'])
            else:
                covered.update(range(n['start_page'], n['end_page'] + 1))
                assert (index.parent / 'text' / f"{n['node_id']}.md").is_file(), f"{index}: no text for leaf {n['node_id']}"

    walk(doc['tree'], 1, pages)
    assert covered == set(range(1, pages + 1)), f'{index}: pages outside every leaf'
    for f in index.parent.rglob('*'):
        if f.is_file():
            assert f.stat().st_size < 300_000, f'{f}: over 300 KB'
    count += 1
print(f'abstracts.json, artifacts and {count} indexes: PASS')
