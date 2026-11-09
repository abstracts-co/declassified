import { asset, state, year, el, icon } from './data.js';

let root = null, index = null;
export const findOpen = () => !!root;
export function closeFind() { root?.remove(); root = null; }

const norm = (s) => (s || '').toLowerCase().normalize('NFKD').replace(/[̀-ͯ]/g, '');
const words = (q) => norm(q).split(/[^a-z0-9]+/).filter((w) => w.length > 1);

function score(text, ws, weight) {
  const t = norm(text);
  let s = 0;
  for (const w of ws) {
    const i = t.indexOf(w);
    if (i < 0) return -1;
    s += weight * (i === 0 || /[^a-z0-9]/.test(t[i - 1]) ? 2 : 1);
  }
  return s;
}

export async function openFind({ goTopic, openFile }) {
  closeFind();
  const stage = document.getElementById('stage');
  const q = el('input', { id: 'q', type: 'search', placeholder: 'Search', autocomplete: 'off', spellcheck: 'false', enterkeyhint: 'search' });
  const res = el('div', { id: 'fr' });
  root = el('div', { id: 'find', role: 'dialog', 'aria-label': 'Search' },
    el('div', { id: 'fh' }, q, el('button', { class: 'ic', 'aria-label': 'Close', html: icon.close, onclick: closeFind })), res);
  stage.append(root);
  q.focus({ preventScroll: true });

  const chips = () => {
    res.replaceChildren(el('div', { class: 'chips' }, state.topics.map((t) => el('button', {
      onclick: () => { closeFind(); goTopic(t.id); },
    }, el('i', { style: `background:radial-gradient(circle at 35% 30%,${t.orb[3]},${t.orb[2]} 45%,${t.orb[0]})` }), t.name))));
  };
  chips();
  if (!index) index = fetch(asset('search.json')).then((r) => (r.ok ? r.json() : { nodes: [] })).catch(() => ({ nodes: [] }));

  const thumb = (it) => el('div', { class: `th${it.type === 'audio' ? ' orb' : ''}`, style: it.thumb ? `background-image:url("${asset(it.thumb)}")` : '' });
  let seq = 0;
  const run = async () => {
    const my = ++seq;
    const ws = words(q.value);
    if (!ws.length) return chips();
    const items = Object.values(state.items).map((it) => {
      const topic = state.topics.find((t) => t.id === it.topic);
      const s = Math.max(score(it.title, ws, 5), score(`${it.title} ${it.agency} ${topic?.name} ${year(it.date)} ${it.summary}`, ws, 1));
      return { it, s };
    }).filter((x) => x.s > 0).sort((a, b) => b.s - a.s).slice(0, 24);
    const idx = await index;
    if (my !== seq) return;
    const nodes = (idx.nodes || []).map((n) => ({ n, s: Math.max(score(n.t, ws, 3), score(`${n.t} ${n.s}`, ws, 1)) }))
      .filter((x) => x.s > 0 && state.items[x.n.d]).sort((a, b) => b.s - a.s).slice(0, 40);
    const out = [];
    for (const { it } of items) {
      out.push(el('button', { class: 'hit', onclick: () => { closeFind(); openFile(it.id); } }, thumb(it),
        el('div', {}, el('b', {}, it.title), el('span', {}, [it.agency, year(it.date)].filter(Boolean).join(' · ')))));
    }
    for (const { n } of nodes) {
      const it = state.items[n.d];
      out.push(el('button', { class: 'hit', onclick: () => { closeFind(); openFile(it.id, { page: n.p }); } }, thumb(it),
        el('div', {}, el('b', {}, n.t), el('span', {}, `${it.title} · p. ${n.p}`))));
    }
    res.replaceChildren(...(out.length ? out : [el('div', { style: 'padding:30px;text-align:center;color:var(--dim);font-size:22px' }, '∅')]));
  };
  let tm = 0;
  q.addEventListener('input', () => { clearTimeout(tm); tm = setTimeout(run, 120); });
}
