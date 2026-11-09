import { asset, year, pad, el, icon, bridge, embedded, fileLink } from './data.js';

let open = null;
export const viewerOpen = () => !!open;
export function closeViewer() {
  if (!open) return;
  const o = open; open = null;
  o.cleanup.forEach((f) => f());
  o.root.remove();
  o.onClose?.();
}

const fmtDate = (d) => {
  if (!d) return '';
  const [y, m, day] = String(d).split('-');
  if (!m) return y;
  const mon = new Date(Date.UTC(2000, Number(m) - 1, 1)).toLocaleString('en', { month: 'short', timeZone: 'UTC' });
  return day ? `${Number(day)} ${mon} ${y}` : `${mon} ${y}`;
};
const fmtTime = (s) => (Number.isFinite(s) ? `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}` : '0:00');

function sheet(root, build) {
  root.querySelector('.sheet')?.remove();
  const s = el('div', { class: 'sheet' }, el('div', { class: 'grab' }));
  build(s);
  const off = (e) => { if (!s.contains(e.target) && !e.target.closest('#vh')) { s.remove(); root.removeEventListener('pointerdown', off, true); } };
  root.addEventListener('pointerdown', off, true);
  root.append(s);
  return s;
}

function info(item, root) {
  sheet(root, (s) => {
    s.append(el('p', {}, item.summary || ''));
    const kv = el('div', { class: 'kv' });
    const row = (k, v) => v && kv.append(el('span', {}, k), typeof v === 'string' ? el('b', { style: 'font-weight:500' }, v) : v);
    row('Date', fmtDate(item.date));
    row('Released', fmtDate(item.released));
    row('From', item.agency);
    row('Source', el('a', { href: item.source, target: '_blank', rel: 'noopener' }, new URL(item.source).hostname.replace(/^www\./, '')));
    if (item.credit && item.credit !== item.agency) row('Credit', item.credit);
    s.append(kv);
  });
}

function tocSheet(item, root, jump) {
  sheet(root, (s) => {
    const list = (nodes) => el('ul', { class: 'toc' }, nodes.map((n) => el('li', {},
      el('button', { onclick: () => { jump(n.p); s.remove(); } }, el('span', {}, n.t), el('em', {}, String(n.p))),
      n.n?.length ? list(n.n) : null)));
    s.append(list(item.toc));
  });
}

function documentBody(item, body, root, startPage, cleanup) {
  const wrap = el('div', { class: 'pages' });
  const shown = item.shown || 0;
  const pa = item.pa || [];
  const pages = [];
  for (let n = 1; n <= shown; n++) {
    const img = el('img', { alt: `Page ${n}`, loading: n <= 2 ? 'eager' : 'lazy', decoding: 'async', crossorigin: 'anonymous', src: asset(`${item.dir}p/${pad(n)}.webp`) });
    img.addEventListener('load', () => img.classList.add('ok'), { once: true });
    const pg = el('div', { class: 'pg', 'data-n': n, style: `aspect-ratio:${pa[n - 1] || pa[0] || .773}` }, img);
    pages.push(pg);
    wrap.append(pg);
  }
  if ((item.pages || 0) > shown && item.source) {
    wrap.append(el('a', { class: 'more', href: item.source, target: '_blank', rel: 'noopener', html: `+${(item.pages - shown).toLocaleString('en')} ${icon.out}` }));
  }
  body.append(wrap);
  const pc = el('div', { id: 'pc' }, `1 / ${item.pages || shown}`);
  root.append(pc);
  let fade = 0;
  const io = new IntersectionObserver((es) => {
    for (const e of es) if (e.isIntersecting) pc.textContent = `${e.target.dataset.n} / ${item.pages || shown}`;
    pc.style.opacity = 1; clearTimeout(fade); fade = setTimeout(() => (pc.style.opacity = .0), 1600);
  }, { root: body, rootMargin: '-45% 0px -45% 0px' });
  pages.forEach((p) => io.observe(p));
  cleanup.push(() => { io.disconnect(); clearTimeout(fade); });
  const jump = (n) => {
    if (n > shown) { window.open(item.source, '_blank', 'noopener'); return; }
    const p = pages[n - 1];
    if (p) body.scrollTo({ top: p.offsetTop - 6, behavior: 'smooth' });
  };
  if (startPage > 1) requestAnimationFrame(() => { const p = pages[startPage - 1]; if (p) body.scrollTop = p.offsetTop - 6; });
  return jump;
}

function videoBody(item, body) {
  const v = el('video', { controls: true, playsinline: true, preload: 'metadata', crossorigin: 'anonymous', poster: item.poster ? asset(item.poster) : null, src: asset(item.media) });
  body.append(el('div', { class: 'media' }, v));
  v.play().catch(() => {});
  return () => { v.pause(); v.removeAttribute('src'); v.load(); };
}

function imageBody(item, body) {
  const img = el('img', { alt: item.title, src: asset(item.media || item.thumb), crossorigin: 'anonymous', draggable: 'false' });
  const box = el('div', { class: 'media' }, img);
  body.append(box);
  let z = 1, tx = 0, ty = 0, dragging = null;
  const apply = () => { img.style.transform = `translate(${tx}px,${ty}px) scale(${z})`; img.classList.toggle('z', z > 1); };
  img.addEventListener('click', (e) => {
    if (dragging?.moved) return;
    if (z > 1) { z = 1; tx = ty = 0; } else {
      const r = img.getBoundingClientRect();
      z = 2.6; tx = (r.left + r.width / 2 - e.clientX) * (z - 1); ty = (r.top + r.height / 2 - e.clientY) * (z - 1);
    }
    apply();
  });
  img.addEventListener('pointerdown', (e) => { if (z > 1) { dragging = { x: e.clientX - tx, y: e.clientY - ty, moved: false }; img.setPointerCapture(e.pointerId); } else dragging = null; });
  img.addEventListener('pointermove', (e) => { if (!dragging) return; dragging.moved = true; tx = e.clientX - dragging.x; ty = e.clientY - dragging.y; apply(); });
  img.addEventListener('pointerup', () => setTimeout(() => { dragging = null; }, 0));
  box.addEventListener('wheel', (e) => { e.preventDefault(); z = Math.min(5, Math.max(1, z * Math.exp(-e.deltaY * .002))); if (z === 1) tx = ty = 0; apply(); }, { passive: false });
}

function audioBody(item, body) {
  const a = el('audio', { preload: 'metadata', crossorigin: 'anonymous', src: asset(item.media) });
  const orb = el('div', { class: 'aorb' });
  const btn = el('button', { class: 'ic', 'aria-label': 'Play', html: icon.play });
  const fill = el('i'), knob = el('u');
  const bar = el('div', { class: 'abar', role: 'slider', 'aria-label': 'Position', tabindex: 0 }, fill, knob);
  const time = el('div', { class: 'atime' }, `0:00 / ${fmtTime(item.duration)}`);
  body.append(el('div', { class: 'aud' }, orb, el('div', { class: 'actl' }, btn, bar, time), a));
  let ctx = null, an = null, buf = null, raf = 0;
  const draw = () => {
    raf = requestAnimationFrame(draw);
    const d = a.duration || item.duration || 1;
    const f = (a.currentTime / d) * 100;
    fill.style.width = `${f}%`; knob.style.left = `${f}%`;
    time.textContent = `${fmtTime(a.currentTime)} / ${fmtTime(d)}`;
    if (an) {
      an.getByteTimeDomainData(buf);
      let s = 0; for (const v of buf) s += (v - 128) * (v - 128);
      const rms = Math.sqrt(s / buf.length) / 128;
      orb.style.transform = `scale(${1 + Math.min(.16, rms * .9)})`;
    }
  };
  btn.addEventListener('click', async () => {
    if (!ctx) {
      try {
        ctx = new AudioContext();
        an = ctx.createAnalyser(); an.fftSize = 512; buf = new Uint8Array(an.fftSize);
        ctx.createMediaElementSource(a).connect(an); an.connect(ctx.destination);
      } catch { an = null; }
    }
    if (ctx?.state === 'suspended') await ctx.resume();
    if (a.paused) { await a.play().catch(() => {}); } else a.pause();
  });
  a.addEventListener('play', () => { btn.innerHTML = icon.pause; btn.setAttribute('aria-label', 'Pause'); cancelAnimationFrame(raf); draw(); });
  a.addEventListener('pause', () => { btn.innerHTML = icon.play; btn.setAttribute('aria-label', 'Play'); cancelAnimationFrame(raf); orb.style.transform = ''; });
  a.addEventListener('loadedmetadata', () => { time.textContent = `0:00 / ${fmtTime(a.duration)}`; });
  const seek = (e) => { const r = bar.getBoundingClientRect(); const f = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width)); if (a.duration) a.currentTime = f * a.duration; const p = f * 100; fill.style.width = `${p}%`; knob.style.left = `${p}%`; };
  bar.addEventListener('pointerdown', (e) => { bar.setPointerCapture(e.pointerId); seek(e); bar.onpointermove = seek; });
  bar.addEventListener('pointerup', () => { bar.onpointermove = null; });
  bar.addEventListener('keydown', (e) => { if (e.key === 'ArrowRight') a.currentTime += 10; if (e.key === 'ArrowLeft') a.currentTime -= 10; });
  return () => { cancelAnimationFrame(raf); a.pause(); a.removeAttribute('src'); a.load(); ctx?.close(); };
}

async function share(item) {
  const url = fileLink(item.id);
  if (embedded) { try { await bridge('share', { url, text: item.title }); return; } catch (e) { if (e.code !== 'unsupported') return; } }
  try { if (navigator.share) { await navigator.share({ url, title: item.title }); return; } } catch { return; }
  try { await navigator.clipboard.writeText(url); } catch {}
}

export function openItem(item, { page = 1, onClose } = {}) {
  closeViewer();
  const stage = document.getElementById('stage');
  const dark = item.type === 'video' || item.type === 'image';
  const root = el('div', { id: 'viewer', class: dark ? 'dark' : '', role: 'dialog', 'aria-label': item.title });
  const head = el('div', { id: 'vh' });
  const body = el('div', { id: 'vb' });
  const cleanup = [];
  head.append(
    el('button', { class: 'ic', 'aria-label': 'Close', html: icon.back, onclick: closeViewer }),
    el('div', { id: 'vt' }, el('b', {}, item.title), el('span', {}, [item.agency, year(item.date)].filter(Boolean).join(' · '))),
  );
  let jump = null;
  const tocBtn = el('button', { class: 'ic', 'aria-label': 'Contents', html: icon.toc, onclick: () => tocSheet(item, root, jump) });
  if (item.type === 'document' && item.toc?.length) head.append(tocBtn);
  head.append(el('button', { class: 'ic', 'aria-label': 'Share', html: icon.share, onclick: () => share(item) }));
  head.append(el('button', { class: 'ic', 'aria-label': 'About this file', html: icon.info, onclick: () => info(item, root) }));
  root.append(head, body);
  stage.append(root);
  if (item.type === 'document') jump = documentBody(item, body, root, page, cleanup);
  else if (item.type === 'video') cleanup.push(videoBody(item, body));
  else if (item.type === 'image') imageBody(item, body);
  else if (item.type === 'audio') cleanup.push(audioBody(item, body));
  open = { root, onClose, cleanup };
  root.tabIndex = -1;
  root.focus({ preventScroll: true });
}
