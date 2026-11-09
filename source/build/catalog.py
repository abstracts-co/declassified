import json, os, shutil, sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from ingest import items, ROOT, WORK, DATA

STORE = f'{WORK}/pageindex'
BASE = 'https://abstracts-co.github.io/declassified-data/'


def slim(nodes, depth=0, budget=[0]):
    out = []
    for n in nodes or []:
        if budget[0] >= 60:
            break
        budget[0] += 1
        e = {'t': n.get('title', '').strip(), 'p': n.get('start_index') or 1}
        if depth < 1 and n.get('nodes'):
            kids = slim(n['nodes'], depth + 1, budget)
            if kids:
                e['n'] = kids
        out.append(e)
    return out


def walk(nodes, fn):
    for n in nodes or []:
        fn(n)
        walk(n.get('nodes'), fn)


def main():
    topics = json.load(open(f'{ROOT}/build/topics.json'))
    by_topic = {t['id']: [] for t in topics}
    cat_items, nodes, corpus = {}, [], {}
    for it in items():
        meta_f = f"{WORK}/{it['id']}/meta.json"
        if not os.path.isfile(meta_f) or it['topic'] not in by_topic:
            continue
        m = json.load(open(meta_f))
        d = m['dir']
        e = {k: it.get(k) for k in ('id', 'topic', 'title', 'type', 'date', 'released', 'agency', 'summary', 'source', 'credit', 'license')}
        e.update(dir=d, thumb=d + m['thumb'] if m.get('thumb') else None, aspect=m.get('aspect'))
        for k in ('pages', 'shown', 'pa', 'duration', 'clipped'):
            if m.get(k) is not None:
                e[k] = m[k]
        for k in ('media', 'loop', 'poster'):
            if m.get(k):
                e[k] = d + m[k]
        tree_f = f"{STORE}/docs/{it['id']}/tree.json"
        if it['type'] == 'document' and os.path.isfile(tree_f):
            tree = json.load(open(tree_f))
            tree = tree.get('structure', tree) if isinstance(tree, dict) else tree
            e['toc'] = slim(tree, 0, [0])
            e['doc'] = it['id']
            walk(tree, lambda n: nodes.append({'d': it['id'], 't': n.get('title', '').strip(), 's': (n.get('summary') or '')[:180], 'p': n.get('start_index') or 1}))
        cat_items[it['id']] = {k: v for k, v in e.items() if v is not None}
        by_topic[it['topic']].append(it['id'])
        corpus.setdefault(it['topic'], []).append({
            'id': it['id'], 'title': it['title'], 'type': it['type'], 'date': it.get('date'), 'released': it.get('released'),
            'agency': it.get('agency'), 'summary': it.get('summary'), 'source': it.get('source'),
            'files': BASE + d, 'pageindex': (f"{BASE}pageindex/docs/{it['id']}/" if 'doc' in e else None),
        })
    order = {i: k for k, i in enumerate(json.load(open(f'{ROOT}/build/order.json')))} if os.path.isfile(f'{ROOT}/build/order.json') else {}
    out_topics = []
    for t in topics:
        ids = sorted(by_topic[t['id']], key=lambda i: order.get(i, 999))
        if ids:
            entry = {**t, 'country': 'us', 'items': ids}
            spec_f = f"{ROOT}/build/orbs/{t['id']}.json"
            if os.path.isfile(f"{DATA}/us/{t['id']}/orb.webp") and os.path.isfile(spec_f):
                spec = json.load(open(spec_f))
                entry['subject'] = {'img': f"us/{t['id']}/orb.webp", 'motion': spec.get('motion') or 'push', 'zoom': spec.get('zoom') or .6}
                if os.path.isfile(f"{DATA}/us/{t['id']}/orb.mp4"):
                    entry['subject']['video'] = f"us/{t['id']}/orb.mp4"
            out_topics.append(entry)
    os.makedirs(DATA, exist_ok=True)
    json.dump({'v': 1, 'countries': [{'id': 'us', 'name': 'United States'}], 'topics': out_topics, 'items': cat_items},
              open(f'{DATA}/catalog.json', 'w'), ensure_ascii=False, separators=(',', ':'))
    json.dump({'nodes': nodes}, open(f'{DATA}/search.json', 'w'), ensure_ascii=False, separators=(',', ':'))
    pi = f'{DATA}/pageindex'
    shutil.rmtree(pi, ignore_errors=True)
    if os.path.isdir(f'{STORE}/docs'):
        shutil.copytree(f'{STORE}/docs', f'{pi}/docs')
        shutil.copy(f'{STORE}/manifest.json', f'{pi}/manifest.json')
    names = {t['id']: t['name'] for t in topics}
    json.dump({
        'title': 'a/declassified corpus',
        'about': 'Declassified and officially released government files, by country and topic. Each document has a PageIndex tree (tree.json), its page text (pages.json) and its metadata (doc.json) under pageindex/docs/<id>/. The folder pageindex/ is a PageIndex local store: clone it and open it with PageIndexClient(index={"storage_path": "pageindex"}).',
        'countries': [{'id': 'us', 'name': 'United States', 'topics': [
            {'id': t, 'name': names[t], 'files': corpus[t]} for t in [x['id'] for x in out_topics]
        ]}],
    }, open(f'{DATA}/index.json', 'w'), ensure_ascii=False, indent=1)
    print('topics', len(out_topics), 'items', len(cat_items), 'nodes', len(nodes))


if __name__ == '__main__':
    main()
