import datetime, json, os, re, shutil, subprocess, sys

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


def page_texts(meta, hosted):
    pdf = meta.get('index_pdf')
    if not pdf or not os.path.isfile(pdf):
        return []
    txt = subprocess.run(['nice', '-n', '19', 'pdftotext', '-layout', pdf, '-'], capture_output=True, text=True).stdout.split('\f')
    out = []
    for p in hosted:
        if p - 1 < len(txt):
            t = re.sub(r'[ \t]+', ' ', txt[p - 1])
            t = '\n'.join(l.strip() for l in t.splitlines() if len(l.strip()) > 2)
            if t:
                out.append([p, t[:6000]])
    return out


def daily(cat_items, topics):
    pins, pool = {}, {}
    for t in topics:
        lead = t.get('lead')
        lm = cat_items[lead[0]]['mo'][lead[1]] if lead else None
        paper = bool(lm and lm['k'] == 'p')
        refs = []
        for i in t['items']:
            it = cat_items[i]
            for k, m in enumerate(it.get('mo') or []):
                if m.get('g') or not m.get('o'):
                    continue
                d = it.get('date') or ''
                if re.fullmatch(r'\d{4}-\d{2}-\d{2}', d) and d[5:] not in pins:
                    pins[d[5:]] = [i, k]
                if (m['k'] == 'p') == paper:
                    refs.append([i, k])
        if lead and lead in refs:
            refs.remove(lead)
            refs.insert(0, lead)
        pool[t['id']] = refs
    rot = []
    while any(pool.values()):
        for t in topics:
            if pool[t['id']]:
                rot.append(pool[t['id']].pop(0))
    return {'start': '2026-11-10', 'pins': pins, 'rot': rot}


def main():
    topics = json.load(open(f'{ROOT}/build/topics.json'))
    mom_f = f'{WORK}/moments.json'
    MOM = json.load(open(mom_f)) if os.path.isfile(mom_f) else {'items': {}, 'topics': {}}
    pages = []
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
        mr = MOM['items'].get(it['id'])
        if mr:
            e['mo'] = mr['mo']
            if mr.get('face'):
                e['face'], e['fa'] = d + mr['face'], mr['fa']
            if mr.get('hi'):
                e['hi'] = mr['hi']
            if mr.get('extra'):
                e['extra'] = mr['extra']
            if mr.get('wave'):
                e['wave'] = mr['wave']
            v = next((m for m in mr['mo'] if m['k'] == 'v' and not m.get('g')), None)
            if v:
                e['loop'], e['poster'], e['lt'] = d + v['c'], d + v['po'], v['t']
            elif it['type'] == 'video':
                e['loop'] = None
            for k, val in (mr.get('over') or {}).items():
                e[k] = d + val if k in ('media', 'thumb') else val
        if it['type'] == 'document':
            hosted = list(range(1, (m.get('shown') or 0) + 1)) + sorted(int(p) for p in (e.get('extra') or {}))
            for p, t in page_texts(m, hosted):
                pages.append([it['id'], p, t])
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
        mt = MOM['topics'].get(t['id']) or {}
        mo_order = {i: k for k, i in enumerate(mt.get('order') or [])}
        ids = sorted(by_topic[t['id']], key=lambda i: ((cat_items[i].get('date') or '9999').ljust(10, '0'), mo_order.get(i, 999), order.get(i, 999)))
        if ids:
            entry = {**t, 'country': 'us', 'items': ids}
            if mt.get('lead', {}).get('f') in cat_items:
                entry['lead'] = [mt['lead']['f'], mt['lead']['m']]
            entry['country'] = 'us'
            spec_f = f"{ROOT}/build/orbs/{t['id']}.json"
            if os.path.isfile(f"{DATA}/us/{t['id']}/orb.webp") and os.path.isfile(spec_f):
                spec = json.load(open(spec_f))
                entry['subject'] = {'img': f"us/{t['id']}/orb.webp", 'motion': spec.get('motion') or 'push', 'zoom': spec.get('zoom') or .6}
                if os.path.isfile(f"{DATA}/us/{t['id']}/orb.mp4"):
                    entry['subject']['video'] = f"us/{t['id']}/orb.mp4"
            out_topics.append(entry)
    os.makedirs(DATA, exist_ok=True)
    json.dump({'v': 2, 'countries': [{'id': 'us', 'name': 'United States'}], 'topics': out_topics, 'items': cat_items, 'daily': daily(cat_items, out_topics)},
              open(f'{DATA}/catalog.json', 'w'), ensure_ascii=False, separators=(',', ':'))
    json.dump({'pages': pages}, open(f'{DATA}/search.json', 'w'), ensure_ascii=False, separators=(',', ':'))
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
