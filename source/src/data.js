const base = (globalThis.__ASSETS__ || './data/').replace(/\/?$/, '/');
export const asset = (p) => (/^https?:/.test(p) ? p : base + p);
export const state = { topics: [], items: {}, countries: [] };
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
export const fileLink = (id) => `https://abstracts.co/a/declassified?a_file=${encodeURIComponent(id)}`;
export const icon = {
  share: '<svg viewBox="0 0 24 24"><path d="M12 4v11M7.5 8.5L12 4l4.5 4.5M5 13v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5"/></svg>',
  back: '<svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7"/></svg>',
  close: '<svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18"/></svg>',
  info: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.5"/><path d="M12 11v5.5"/><circle cx="12" cy="7.8" r=".6" fill="currentColor"/></svg>',
  toc: '<svg viewBox="0 0 24 24"><path d="M9 6.5h10M9 12h10M9 17.5h10"/><circle cx="5" cy="6.5" r=".8" fill="currentColor"/><circle cx="5" cy="12" r=".8" fill="currentColor"/><circle cx="5" cy="17.5" r=".8" fill="currentColor"/></svg>',
  out: '<svg viewBox="0 0 24 24"><path d="M14 5h5v5M19 5l-8 8M17 14v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h4"/></svg>',
  play: '<svg viewBox="0 0 24 24"><path d="M8 5.5v13l10.5-6.5z" fill="currentColor" stroke="none"/></svg>',
  pause: '<svg viewBox="0 0 24 24"><path d="M8 5.5v13M16 5.5v13" stroke-width="2.6"/></svg>',
};
