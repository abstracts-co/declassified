const base = (globalThis.__ASSETS__ || './data/').replace(/\/?$/, '/');
export const asset = (p) => (/^https?:/.test(p) ? p : base + p);
export const state = { topics: [], items: {}, countries: [], daily: null };
export const year = (d) => (d ? String(d).slice(0, 4) : '');
export const pad = (n) => String(n).padStart(3, '0');
export const el = (tag, attrs = {}, ...kids) => {
  const n = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (v == null || v === false) continue;
    if (k === 'class') n.className = v;
    else if (k === 'html') n.innerHTML = v;
    else if (k.startsWith('on')) n.addEventListener(k.slice(2), v);
    else n.setAttribute(k, v === true ? '' : v);
  }
  for (const k of kids.flat()) if (k != null && k !== false) n.append(k);
  return n;
};
export const embedded = window.parent !== window;
let seq = 0;
export function bridge(method, params = {}, wait = 0) {
  return new Promise((res, rej) => {
    if (!embedded) return rej(Object.assign(new Error('standalone'), { code: 'unsupported' }));
    const id = `d${++seq}`;
    let timer = 0;
    const on = (e) => {
      if (e.source !== parent || e.data?.abstracts !== 'result' || e.data.id !== id) return;
      removeEventListener('message', on); clearTimeout(timer);
      if (e.data.ok) res(e.data.value); else rej(Object.assign(new Error(e.data.error?.message || 'failed'), { code: e.data.error?.code }));
    };
    addEventListener('message', on);
    if (wait) timer = setTimeout(() => { removeEventListener('message', on); rej(Object.assign(new Error('timeout'), { code: 'timeout' })); }, wait);
    parent.postMessage({ abstracts: 'call', id, method, params }, '*');
  });
}
export const fileLink = (id, at = {}) => {
  const q = new URLSearchParams({ a_file: id });
  if (at.m != null) q.set('a_m', at.m);
  else if (at.page > 1) q.set('a_page', at.page);
  else if (at.t > 1) q.set('a_t', Math.round(at.t));
  return `https://abstracts.co/a/declassified?${q}`;
};
export const topicLink = (id) => `https://abstracts.co/a/declassified?a_topic=${encodeURIComponent(id)}`;
export const meta = (it) => [it.agency, year(it.date)].filter(Boolean).join(' · ');
export const quoteOf = (it, k) => {
  const m = it?.mo?.[k];
  return m && m.k === 'p' && !m.g ? m.q.replace(/[“"]([^“”"]*)[”"]/g, '‘$1’') : null;
};
export const firstMoment = (it) => {
  const k = (it?.mo || []).findIndex((m) => !m.g);
  return k < 0 ? null : k;
};
export const griefOnly = (it) => !!it?.mo?.length && it.mo.every((m) => m.g);
export const glassOf = (t) => `radial-gradient(circle at 50% 36%, ${t.orb[3]}, ${t.orb[2]} 46%, ${t.orb[1]} 82%, ${t.orb[0]})`;
export function ringSvg(wave) {
  const n = wave.length;
  let d = '';
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2 - Math.PI / 2;
    const v = Math.max(.05, wave[i] / 99);
    const r0 = 100, r1 = 100 + v * 26;
    d += `<line x1="${(Math.cos(a) * r0).toFixed(1)}" y1="${(Math.sin(a) * r0).toFixed(1)}" x2="${(Math.cos(a) * r1).toFixed(1)}" y2="${(Math.sin(a) * r1).toFixed(1)}"/>`;
  }
  return `<svg viewBox="-130 -130 260 260" aria-hidden="true">${d}</svg>`;
}
export const reduced = matchMedia('(prefers-reduced-motion: reduce)');
export function leadImg(t) {
  const it = t?.lead && state.items[t.lead[0]];
  const m = it?.mo?.[t.lead[1]];
  if (m?.o) return { img: it.dir + m.o, zoom: m.k === 'p' ? .7 : .52 };
  return t?.subject ? { img: t.subject.img, zoom: t.subject.zoom || .6 } : null;
}
export function todayPick() {
  const d = state.daily;
  if (!d) return null;
  const now = new Date();
  const md = `${String(now.getUTCMonth() + 1).padStart(2, '0')}-${String(now.getUTCDate()).padStart(2, '0')}`;
  const pin = d.pins?.[md];
  if (pin && state.items[pin[0]]) return { id: pin[0], k: pin[1], day: true };
  if (!d.rot?.length) return null;
  const start = Date.UTC(...d.start.split('-').map((v, i) => Number(v) - (i === 1 ? 1 : 0)));
  const today = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());
  const n = Math.floor((today - start) / 864e5);
  const r = d.rot[((n % d.rot.length) + d.rot.length) % d.rot.length];
  return state.items[r[0]] ? { id: r[0], k: r[1] } : null;
}
export const icon = {
  share: '<svg viewBox="0 0 24 24"><path d="M12 4v11M7.5 8.5L12 4l4.5 4.5M5 13v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5"/></svg>',
  back: '<svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7"/></svg>',
  close: '<svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18"/></svg>',
  info: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.5"/><path d="M12 11v5.5"/><circle cx="12" cy="7.8" r=".6" fill="currentColor"/></svg>',
  toc: '<svg viewBox="0 0 24 24"><path d="M9 6.5h10M9 12h10M9 17.5h10"/><circle cx="5" cy="6.5" r=".8" fill="currentColor"/><circle cx="5" cy="12" r=".8" fill="currentColor"/><circle cx="5" cy="17.5" r=".8" fill="currentColor"/></svg>',
  out: '<svg viewBox="0 0 24 24"><path d="M14 5h5v5M19 5l-8 8M17 14v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h4"/></svg>',
  play: '<svg viewBox="0 0 24 24"><path d="M8 5.5v13l10.5-6.5z" fill="currentColor" stroke="none"/></svg>',
  pause: '<svg viewBox="0 0 24 24"><path d="M8 5.5v13M16 5.5v13" stroke-width="2.6"/></svg>',
  sound: '<svg viewBox="0 0 24 24"><path d="M5 9.5h3l4-3.5v12l-4-3.5H5z"/><path d="M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11"/></svg>',
  mute: '<svg viewBox="0 0 24 24"><path d="M5 9.5h3l4-3.5v12l-4-3.5H5z"/><path d="M16 10l4 4M20 10l-4 4"/></svg>',
  die: '<svg viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4"/><circle cx="8.6" cy="8.6" r="1" fill="currentColor"/><circle cx="15.4" cy="8.6" r="1" fill="currentColor"/><circle cx="12" cy="12" r="1" fill="currentColor"/><circle cx="8.6" cy="15.4" r="1" fill="currentColor"/><circle cx="15.4" cy="15.4" r="1" fill="currentColor"/></svg>',
};
export const fmtDate = (d) => {
  if (!d) return '';
  const [y, m, day] = String(d).split('-');
  if (!m) return y;
  const mon = new Date(Date.UTC(2000, Number(m) - 1, 1)).toLocaleString('en', { month: 'short', timeZone: 'UTC' });
  return day ? `${Number(day)} ${mon} ${y}` : `${mon} ${y}`;
};
export const nav = {
  depth: 0,
  stack: [],
  reuse: false,
  push(close) {
    if (this.reuse) { this.reuse = false; this.stack.push({ close, hist: true }); return; }
    let hist = false;
    try { history.pushState({ dz: this.depth + 1 }, ''); this.depth++; hist = true; } catch {}
    this.stack.push({ close, hist });
  },
  soft(close) { this.stack.push({ close, hist: false }); },
  handoff(close) {
    const i = this.stack.findLastIndex((x) => x.close === close);
    if (i < 0) return;
    if (this.stack[i].hist) this.reuse = true;
    this.stack.splice(i, 1);
  },
  back() {
    const top = this.stack[this.stack.length - 1];
    if (!top) return;
    if (top.hist && this.depth > 0) history.back(); else this.pop();
  },
  pop() { const x = this.stack.pop(); if (x) x.close(); },
};
addEventListener('popstate', (e) => {
  const to = Number(e.state?.dz) || 0;
  if (to > nav.depth) { history.go(nav.depth - to); return; }
  while (nav.depth > to) {
    nav.depth--;
    const i = nav.stack.findLastIndex((x) => x.hist);
    if (i < 0) break;
    const [x] = nav.stack.splice(i, 1);
    x.close();
  }
});
