import json, re, sys


def check(tree, pages):
    errs, ids, leaves = [], set(), []

    def walk(nodes, lo, hi, path):
        if not isinstance(nodes, list):
            errs.append(f'{path}: nodes must be a list')
            return
        for n in nodes:
            nid = n.get('node_id')
            if not isinstance(nid, str) or not re.fullmatch(r'\d{4}', nid):
                errs.append(f'{path}: bad node_id {nid!r}')
            elif nid in ids:
                errs.append(f'duplicate node_id {nid}')
            ids.add(nid)
            t = n.get('title')
            if not isinstance(t, str) or not t.strip() or len(t) > 120:
                errs.append(f'{nid}: title missing or longer than 120 characters')
            s, e = n.get('start_index'), n.get('end_index')
            if not (isinstance(s, int) and isinstance(e, int) and 1 <= s <= e <= pages):
                errs.append(f'{nid}: bad range {s}-{e} (document has {pages} pages)')
                continue
            if s < lo or e > hi:
                errs.append(f'{nid}: range {s}-{e} outside parent {lo}-{hi}')
            sm = n.get('summary')
            if not isinstance(sm, str) or not sm.strip():
                errs.append(f'{nid}: summary missing')
            elif len(sm.split()) > 75:
                errs.append(f'{nid}: summary has {len(sm.split())} words (max 75)')
            elif re.search(r'\bOCR\b|garbled|illegible text', sm, re.I):
                errs.append(f'{nid}: summary talks about OCR quality; describe the content instead')
            kids = n.get('nodes') or []
            if kids:
                walk(kids, s, e, nid)
            else:
                leaves.append((s, e, nid))

    walk(tree, 1, pages, 'root')
    covered = set()
    for s, e, _ in leaves:
        covered.update(range(s, e + 1))
    missing = sorted(set(range(1, pages + 1)) - covered)
    if missing:
        errs.append(f'pages not in any leaf: {missing[:20]}{"..." if len(missing) > 20 else ""}')
    if len(ids) > 60:
        errs.append(f'{len(ids)} nodes; keep it to 60 or fewer')
    return errs


if __name__ == '__main__':
    tree = json.load(open(sys.argv[1]))
    tree = tree.get('structure', tree) if isinstance(tree, dict) else tree
    errs = check(tree, int(sys.argv[2]))
    print('\n'.join(errs) if errs else 'OK')
    sys.exit(1 if errs else 0)
