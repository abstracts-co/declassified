import { asset, state, year, el, icon, quoteOf, nav, embedded, leadImg, glassOf, ringSvg } from './data.js';

let root = null, index = null, closeCb = null, back = null;
export const findOpen = () => !!root;
function closeFind() {
  if (!root) return;
  root.remove(); root = null;
  document.body.classList.remove('wall');
  for (const n of back.inert) n.inert = false;
  const ret = back.ret;
  back = null;
  closeCb?.();
  (ret?.isConnected ? ret : document.getElementById('gl')).focus?.({ preventScroll: true });
}

const norm = (s) => (s || '').toLowerCase().normalize('NFKD').replace(/[̀-ͯ]/g, '');
const words = (q) => norm(q).split(/[^a-z0-9]+/).filter((w) => w.length > 1);
const has = (text, ws) => { const t = norm(text); return ws.every((w) => t.includes(w)); };

function tiles() {
  const out = [];
  for (const t of state.topics) {
    for (const id of t.items) {
      const it = state.items[id];
      if (!it) continue;
      if (it.type === 'audio') { out.push({ t, it, k: (it.mo || []).findIndex((m) => !m.g), tape: true }); continue; }
      let any = false;
      (it.mo || []).forEach((m, k) => {
        if (m.g || !m.o) return;
        any = true;
        out.push({ t, it, k, img: it.dir + m.o, q: quoteOf(it, k), glass: m.k === 'p' });
      });
      if (!any) out.push({ t, it, k: null, img: it.poster || it.thumb });
    }
  }
  return out;
}

export function openFind({ openFile, onClose }) {
  if (root) return;
  closeCb = onClose;
  const stage = document.getElementById('stage');
  const q = el('input', { id: 'q', type: 'search', placeholder: 'Search', autocomplete: 'off', spellcheck: 'false', enterkeyhint: 'search', 'aria-label': 'Search the files' });
  const res = el('div', { id: 'fr' });
  const head = el('div', { id: 'fh' }, q, el('button', { class: 'ic', 'aria-label': 'Close', html: icon.close, onclick: () => nav.back() }));
  const inert = [...stage.children].filter((n) => !n.inert);
  back = { ret: document.activeElement, inert };
  inert.forEach((n) => { n.inert = true; });
  root = el('div', { id: 'find', role: 'dialog', 'aria-modal': 'true', 'aria-label': 'All moments' }, head, res);
  stage.append(root);
  document.body.classList.add('wall');
  nav.push(closeFind);
  if (embedded && !document.body.classList.contains('vp')) stage.scrollIntoView({ block: 'nearest' });

  const all = tiles();
  const go = (it, k, page) => { nav.handoff(closeFind); closeFind(); openFile(it.id, page ? { page } : { m: k >= 0 ? k : null }); };
  const pic = (x) => {
    if (x.tape) return el('div', { class: 'ti glass tape', style: `background:${glassOf(x.t)};--c:${x.t.orb[3]}`, html: ringSvg(x.it.wave || []) });
    const img = el('img', { alt: '', loading: 'lazy', decoding: 'async', src: asset(x.img) });
    img.addEventListener('load', () => img.classList.add('ok'), { once: true });
    return el('div', { class: `ti${x.glass ? ' glass' : ''}` }, img);
  };
  const tile = (x) => el('button', { class: 'tile', onclick: () => go(x.it, x.k) }, pic(x), el('b', { class: x.q ? 'q' : '' }, x.q || x.it.title));
  const band = (t, list) => {
    const li = leadImg(t);
    return el('section', { class: 'band', style: `--g0:${t.grad[0]}` },
      el('h3', {}, el('i', { style: li ? `background-image:url("${asset(li.img)}")` : `background:${glassOf(t)}` }), t.name),
      el('div', { class: 'grid' }, list.map(tile)));
  };
  const grow = () => {
    if (!embedded || document.body.classList.contains('vp')) return;
    requestAnimationFrame(() => {
      if (!root) return;
      const want = head.offsetHeight + res.scrollHeight + 24;
      root.classList.toggle('capped', want > 5800);
      stage.style.height = `${Math.min(5800, Math.max(560, want))}px`;
      parent.postMessage({ abstractsHeight: Math.ceil(document.body.getBoundingClientRect().height) }, '*');
    });
  };
  const wall = (ws) => state.topics
    .map((t) => [t, all.filter((x) => x.t === t && (!ws.length || has(`${x.q || ''} ${x.it.title} ${x.it.agency} ${t.name} ${year(x.it.date)}`, ws)))])
    .filter(([, l]) => l.length).map(([t, l]) => band(t, l));
  res.replaceChildren(...wall([]));
  grow();

  let seq = 0;
  const run = async () => {
    const my = ++seq;
    const ws = words(q.value);
    if (!ws.length) { res.replaceChildren(...wall([])); grow(); return; }
    const top = wall(ws);
    if (!index) index = fetch(asset('search.json?v=2')).then((r) => (r.ok ? r.json() : { pages: [] })).catch(() => ({ pages: [] }));
    const idx = await index;
    if (my !== seq || !root) return;
    const hits = [];
    for (const [id, p, text] of idx.pages || []) {
      const it = state.items[id];
      if (!it || !has(text, ws)) continue;
      const line = text.split('\n').find((l) => has(l, ws.slice(0, 1))) || '';
      hits.push({ it, p, line: line.length > 140 ? `${line.slice(0, 137)}…` : line });
      if (hits.length >= 40) break;
    }
    const list = hits.length ? el('div', { class: 'hits' }, hits.map((h) => el('button', { class: 'hit', onclick: () => go(h.it, null, h.p) },
      el('b', {}, h.line), el('span', {}, `${h.it.title} · ${h.p}`)))) : null;
    const nodes = [...top, list].filter(Boolean);
    res.replaceChildren(...(nodes.length ? nodes : [el('div', { class: 'none' }, '∅')]));
    grow();
  };
  let tm = 0;
  q.addEventListener('input', () => { clearTimeout(tm); tm = setTimeout(run, 140); });
}
