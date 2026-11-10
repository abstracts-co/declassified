import { asset, pad, el, icon, bridge, embedded, fileLink, state, meta, quoteOf, firstMoment, griefOnly, glassOf, ringSvg, reduced, nav, fmtDate } from './data.js';

const EASE = 'cubic-bezier(.2,.8,.2,1)';
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const fmtTime = (s) => (Number.isFinite(s) ? `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}` : '0:00');
const topicOf = (item) => state.topics.find((t) => t.id === item.topic);
const stageEl = () => document.getElementById('stage');

let open = null;
export const viewerOpen = () => !!open;

function insetOf(r) {
  const s = stageEl();
  return `inset(${Math.max(0, r.y)}px ${Math.max(0, s.clientWidth - r.x - r.w)}px ${Math.max(0, s.clientHeight - r.y - r.h)}px ${Math.max(0, r.x)}px round ${r.r}px)`;
}
const FULL = 'inset(0px 0px 0px 0px round 0px)';

function closeViewer() {
  if (!open) return;
  const o = open; open = null;
  o.cleanup.forEach((f) => f());
  for (const n of o.inert) n.inert = false;
  o.root.style.pointerEvents = 'none';
  if (reduced.matches) o.root.remove();
  else {
    const a = o.from && o.same
      ? o.root.animate([{ clipPath: FULL, opacity: 1 }, { clipPath: insetOf(o.from), opacity: 0 }], { duration: 300, easing: EASE })
      : o.root.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 180 });
    a.onfinish = () => o.root.remove();
  }
  (o.ret?.isConnected ? o.ret : document.getElementById('gl')).focus?.({ preventScroll: true });
  o.onClose?.();
}

function sheet(root, build) {
  const s = el('div', { class: 'sheet', role: 'dialog', tabindex: '-1' });
  const grab = el('div', { class: 'grab' });
  s.append(grab);
  build(s);
  const off = (e) => { if (!s.contains(e.target) && !e.target.closest('#vt')) nav.back(); };
  const close = () => { s.remove(); root.removeEventListener('pointerdown', off, true); if (open) open.sheet = null; };
  let y0 = null;
  grab.addEventListener('pointerdown', (e) => { y0 = e.clientY; grab.setPointerCapture(e.pointerId); });
  grab.addEventListener('pointermove', (e) => { if (y0 != null) s.style.transform = `translateY(${Math.max(0, e.clientY - y0)}px)`; });
  grab.addEventListener('pointerup', (e) => { const d = e.clientY - y0; y0 = null; s.style.transform = ''; if (d > 50) nav.back(); });
  root.addEventListener('pointerdown', off, true);
  root.append(s);
  nav.push(close);
  if (open) open.sheet = s;
  s.focus({ preventScroll: true });
}

function about(item, root, doc) {
  if (open?.sheet) { nav.back(); return; }
  sheet(root, (s) => {
    if (item.summary) s.append(el('p', {}, item.summary));
    const kv = el('div', { class: 'kv' });
    const row = (k, v) => v && kv.append(el('span', {}, k), typeof v === 'string' ? el('b', {}, v) : v);
    row('Date', fmtDate(item.date));
    row('Released', fmtDate(item.released));
    row('From', item.agency);
    if (item.source) row('Source', el('a', { href: item.source, target: '_blank', rel: 'noopener' }, new URL(item.source).hostname.replace(/^www\./, '')));
    if (item.credit && item.credit !== item.agency) row('Credit', item.credit);
    s.append(kv);
    if (item.type === 'document' && item.toc?.length && doc) {
      const list = (nodes) => el('ul', { class: 'toc' }, nodes.map((n) => {
        const ok = doc.hosted.has(n.p);
        return el('li', {},
          el('button', { disabled: !ok, onclick: ok ? () => { nav.back(); doc.jump(n.p); } : null }, el('span', {}, n.t), el('em', {}, String(n.p))),
          n.n?.length ? list(n.n) : null);
      }));
      s.append(list(item.toc));
    }
  });
}

function nextOf(item) {
  const t = topicOf(item);
  const i = t ? t.items.indexOf(item.id) : -1;
  return i >= 0 && i < t.items.length - 1 ? state.items[t.items[i + 1]] : null;
}
function nextCard(item, ctx, cls = '') {
  const nx = nextOf(item);
  if (!nx) return null;
  const k = firstMoment(nx);
  const q = quoteOf(nx, k);
  const mo = k != null ? nx.mo[k] : null;
  const img = nx.type === 'audio' ? null : mo?.o ? nx.dir + mo.o : (nx.type === 'document' ? nx.face || nx.thumb : nx.poster || nx.thumb);
  return el('button', { class: `next ${cls}`, onclick: () => { ctx.onOpen?.(nx.id); openItem(nx, { m: k, onClose: ctx.onClose, onOpen: ctx.onOpen }); } },
    el('i', { style: img ? `background-image:url("${asset(img)}")` : `background:${glassOf(topicOf(nx))}` }),
    el('div', {}, el('b', { class: q ? 'q' : '' }, q || nx.title), el('span', {}, q ? nx.title : meta(nx))));
}

function loupeFor(body, srcOf) {
  const lp = el('div', { class: 'loupe' });
  body.append(lp);
  const S = 116, Z = 2.3;
  let timer = 0, on = false, start = null, target = null;
  const place = (x, y) => {
    const r = target.getBoundingClientRect(), br = body.getBoundingClientRect();
    const fx = (x - r.left) / r.width, fy = (y - r.top) / r.height;
    const above = y - br.top >= S + 100;
    lp.style.left = `${clamp(x - br.left - S / 2, 4, body.clientWidth - S - 4) + body.scrollLeft}px`;
    lp.style.top = `${y - br.top + body.scrollTop + (above ? -S - 34 : 44)}px`;
    lp.style.backgroundSize = `${r.width * Z}px ${r.height * Z}px`;
    lp.style.backgroundPosition = `${-(fx * r.width * Z - S / 2)}px ${-(fy * r.height * Z - S / 2)}px`;
  };
  const show = () => {
    on = true;
    lp.style.backgroundImage = `url("${srcOf(target)}")`;
    lp.classList.add('on');
    place(start.x, start.y);
    navigator.vibrate?.(8);
  };
  const hide = () => { clearTimeout(timer); timer = 0; start = null; if (on) { on = false; lp.classList.remove('on'); } };
  const down = (x, y, t) => {
    const pg = t.closest?.('.pg');
    if (!pg) return;
    target = pg; start = { x, y };
    clearTimeout(timer);
    timer = setTimeout(show, 320);
  };
  const move = (x, y, e) => {
    if (on) { e.preventDefault(); place(x, y); return; }
    if (start && Math.hypot(x - start.x, y - start.y) > 8) { clearTimeout(timer); start = null; }
  };
  const ts = (e) => { if (e.touches.length === 1) down(e.touches[0].clientX, e.touches[0].clientY, e.target); else hide(); };
  const tm = (e) => { if (e.touches.length === 1) move(e.touches[0].clientX, e.touches[0].clientY, e); };
  const md = (e) => { if (e.button === 0 && e.pointerType === 'mouse') down(e.clientX, e.clientY, e.target); };
  const mm = (e) => { if (e.pointerType === 'mouse' && (start || on)) move(e.clientX, e.clientY, e); };
  body.addEventListener('touchstart', ts, { passive: true });
  body.addEventListener('touchmove', tm, { passive: false });
  body.addEventListener('touchend', hide);
  body.addEventListener('touchcancel', hide);
  body.addEventListener('pointerdown', md);
  body.addEventListener('pointermove', mm);
  addEventListener('pointerup', hide);
  body.addEventListener('contextmenu', (e) => { if (e.target.closest('.pg')) e.preventDefault(); });
  return { active: () => on, dispose: () => { hide(); removeEventListener('pointerup', hide); } };
}

function documentBody(item, body, root, at, cleanup, ctx) {
  const m = at.m != null ? item.mo?.[at.m] : null;
  const pm = m?.k === 'p' ? m : null;
  const startPage = pm ? pm.p : at.page || 1;
  const shown = item.shown || 0;
  const extra = item.extra || {};
  const hosted = [...Array(shown).keys()].map((i) => i + 1).concat(Object.keys(extra).map(Number)).sort((a, b) => a - b);
  const hostedSet = new Set(hosted);
  const hi = new Set(item.hi || []);
  const pa = item.pa || [];
  const aspectOf = (n) => extra[n] || pa[n - 1] || pa[0] || .773;
  const total = item.pages || shown;
  const HEAD = 60;
  const wrap = el('div', { class: 'pages' });
  const pages = new Map();
  let prev = 0;
  const gap = (a, b) => el('div', { class: 'gap', 'aria-label': `Pages ${a} to ${b} are at the source` }, el('i'), el('i'), el('i'), el('span', {}, a === b ? String(a) : `${a}–${b}`));
  for (const n of hosted) {
    if (n - prev > 1) wrap.append(gap(prev + 1, n - 1));
    prev = n;
    const img = el('img', { alt: `Page ${n}`, loading: Math.abs(n - startPage) <= 1 ? 'eager' : 'lazy', decoding: 'async', crossorigin: 'anonymous', draggable: 'false', src: asset(`${item.dir}p/${pad(n)}.webp`) });
    img.addEventListener('load', () => img.classList.add('ok'), { once: true });
    const pg = el('div', { class: 'pg', 'data-n': n, style: `aspect-ratio:${aspectOf(n)}` }, img);
    pages.set(n, pg);
    wrap.append(pg);
  }
  if (total > prev) wrap.append(gap(prev + 1, total));
  const nc = nextCard(item, ctx);
  if (nc) wrap.append(nc);
  body.append(wrap);
  body.classList.add('doc');

  const pc = el('div', { id: 'pc' }, `${startPage} / ${total}`);
  root.append(pc);
  let fade = 0;
  const io = new IntersectionObserver((es) => {
    for (const e of es) if (e.isIntersecting) pc.textContent = `${e.target.dataset.n} / ${total}`;
    pc.style.opacity = 1; clearTimeout(fade); fade = setTimeout(() => (pc.style.opacity = 0), 1600);
  }, { root: body, rootMargin: '-45% 0px -45% 0px' });
  pages.forEach((p) => io.observe(p));

  const fitW = () => Math.min(body.clientWidth - 32, 760);
  let z = 1, zOpen = 0;
  const apply = () => { wrap.style.setProperty('--pw', `${Math.round(fitW() * z)}px`); body.classList.toggle('zoomed', z > 1.01); };
  const upgrade = (n) => {
    const pg = pages.get(n);
    if (!pg || !hi.has(n) || pg.dataset.hi) return;
    pg.dataset.hi = 1;
    const im = new Image();
    im.crossOrigin = 'anonymous';
    im.onload = () => { const img = pg.querySelector('img'); img.src = im.src; img.classList.add('ok'); };
    im.src = asset(`${item.dir}hi/${pad(n)}.webp`);
  };
  const srcOf = (pg) => { const n = Number(pg.dataset.n); return asset(hi.has(n) ? `${item.dir}hi/${pad(n)}.webp` : `${item.dir}p/${pad(n)}.webp`); };
  const pin = (pg, fx, fy, px, py) => {
    programmatic = performance.now();
    body.scrollLeft = Math.max(0, pg.offsetLeft + fx * pg.offsetWidth - px);
    body.scrollTop = Math.max(0, pg.offsetTop + fy * pg.offsetHeight - py);
  };
  const center = (n, fx, fy, smoothly) => {
    const pg = pages.get(n);
    if (!pg) return;
    programmatic = performance.now();
    const top = fy === 0 ? pg.offsetTop - HEAD - 6 : pg.offsetTop + fy * pg.offsetHeight - HEAD - (body.clientHeight - HEAD) * .42;
    const left = pg.offsetLeft + fx * pg.offsetWidth - body.clientWidth / 2;
    body.scrollTo({ top: Math.max(0, top), left: Math.max(0, left), behavior: smoothly && !reduced.matches ? 'smooth' : 'auto' });
  };

  let veil = null, programmatic = 0, wide = false;
  if (pm && pages.get(pm.p)) {
    const pg = pages.get(pm.p);
    upgrade(pm.p);
    const x0 = Math.min(...pm.ln.map((b) => b[0])), x1 = Math.max(...pm.ln.map((b) => b[2]));
    const y0 = Math.min(...pm.ln.map((b) => b[1])), y1 = Math.max(...pm.ln.map((b) => b[3]));
    const holes = pm.ln.map((b) => [b[0] - .012, b[1] - .008, b[2] + .012, b[3] + .008]).map(([a, b, c, d]) => `M${a} ${b}H${c}V${d}H${a}Z`).join('');
    veil = el('div', { class: 'veil', html: `<svg viewBox="0 0 1 1" preserveAspectRatio="none"><defs><filter id="vf" x="-.2" y="-.2" width="1.4" height="1.4"><feGaussianBlur stdDeviation=".004 .003"/></filter></defs><path filter="url(#vf)" fill-rule="evenodd" d="M-1 -1H2V2H-1Z${holes}"/></svg>` });
    pg.append(veil);
    pg.append(el('i', { class: 'mark', style: `left:calc(${(pm.ln[0][0] * 100).toFixed(2)}% - 13px);top:${(y0 - .004) * 100}%;height:${(y1 - y0 + .008) * 100}%;background:${topicOf(item)?.grad[1] || '#888'}` }));
    const lh = pm.ln.reduce((s, b) => s + (b[3] - b[1]), 0) / pm.ln.length;
    const fit = fitW();
    const xh = Math.max(.5, .4 * lh * fit / aspectOf(pm.p));
    const zx = 7.5 / xh, zw = (body.clientWidth - 24) / ((x1 - x0 + .03) * fit);
    wide = zw < zx;
    z = zOpen = clamp(wide ? zx : Math.min(9 / xh, zw), 1, 3.2);
    apply();
    requestAnimationFrame(() => {
      center(pm.p, (x0 + x1) / 2, (y0 + y1) / 2, false);
      if (wide) body.scrollLeft = Math.max(0, pg.offsetLeft + pm.ln[0][0] * pg.offsetWidth - 22);
    });
  } else {
    apply();
    if (startPage > 1) requestAnimationFrame(() => center(startPage, .5, 0, false));
  }
  const dropVeil = () => { if (veil && performance.now() - programmatic > 400) { veil.classList.add('off'); veil = null; } };
  body.addEventListener('scroll', dropVeil, { passive: true });

  const lp = loupeFor(body, srcOf);
  const zoomAt = (pg, nz, cx, cy) => {
    const r = pg.getBoundingClientRect(), br = body.getBoundingClientRect();
    const fx = (cx - r.left) / r.width, fy = (cy - r.top) / r.height;
    z = clamp(nz, 1, 4);
    apply();
    pin(pg, fx, fy, cx - br.left, cy - br.top);
    if (z > 1.3) upgrade(Number(pg.dataset.n));
  };
  let lastTap = 0;
  body.addEventListener('click', (e) => {
    const pg = e.target.closest('.pg');
    if (!pg || lp.active()) return;
    const t = performance.now();
    if (t - lastTap < 320) { lastTap = 0; zoomAt(pg, z > 1.05 ? 1 : Math.max(2.2, zOpen), e.clientX, e.clientY); } else lastTap = t;
  });
  let pinch = null;
  const span = (t) => Math.hypot(t[0].clientX - t[1].clientX, t[0].clientY - t[1].clientY);
  body.addEventListener('touchstart', (e) => {
    if (e.touches.length !== 2) { pinch = null; return; }
    const mx = (e.touches[0].clientX + e.touches[1].clientX) / 2, my = (e.touches[0].clientY + e.touches[1].clientY) / 2;
    const pg = document.elementFromPoint(mx, my)?.closest('.pg');
    pinch = pg ? { d: span(e.touches), z, pg } : null;
  }, { passive: true });
  body.addEventListener('touchmove', (e) => {
    if (!pinch || e.touches.length !== 2) return;
    e.preventDefault();
    zoomAt(pinch.pg, pinch.z * span(e.touches) / pinch.d, (e.touches[0].clientX + e.touches[1].clientX) / 2, (e.touches[0].clientY + e.touches[1].clientY) / 2);
  }, { passive: false });
  body.addEventListener('touchend', () => { pinch = null; });
  body.addEventListener('wheel', (e) => {
    const pg = e.ctrlKey && e.target.closest('.pg');
    if (!pg) return;
    e.preventDefault();
    zoomAt(pg, z * Math.exp(-e.deltaY * .012), e.clientX, e.clientY);
  }, { passive: false });
  const onResize = () => apply();
  addEventListener('resize', onResize);
  cleanup.push(() => { io.disconnect(); clearTimeout(fade); lp.dispose(); removeEventListener('resize', onResize); });
  return { jump: (n) => { if (hostedSet.has(n)) center(n, .5, 0, true); }, hosted: hostedSet };
}

function bar(dur, ticks, seek) {
  const fill = el('i'), knob = el('u');
  const marks = ticks.map(() => el('s'));
  const b = el('div', { class: 'abar', role: 'slider', 'aria-label': 'Position', 'aria-valuemin': '0', 'aria-valuemax': '100', tabindex: '0' }, fill, knob, ...marks);
  const frac = (e) => {
    const r = b.getBoundingClientRect();
    let f = clamp((e.clientX - r.left) / r.width, 0, 1);
    const d = dur();
    if (d) for (const t of ticks) if (Math.abs((t / d - f) * r.width) < 12) f = t / d;
    return f;
  };
  b.addEventListener('pointerdown', (e) => { b.setPointerCapture(e.pointerId); seek(frac(e) * dur()); b.onpointermove = (x) => seek(frac(x) * dur()); });
  b.addEventListener('pointerup', () => { b.onpointermove = null; });
  b.addEventListener('keydown', (e) => {
    const step = { ArrowRight: 5, ArrowLeft: -5, PageUp: 30, PageDown: -30 }[e.key];
    if (step) { seek(null, step); e.preventDefault(); } else if (e.key === 'Home') seek(0); else if (e.key === 'End') seek(dur());
  });
  return {
    el: b,
    set(t) {
      const d = dur() || 1, f = clamp(t / d, 0, 1);
      fill.style.width = `${f * 100}%`; knob.style.left = `${f * 100}%`;
      b.setAttribute('aria-valuenow', Math.round(f * 100)); b.setAttribute('aria-valuetext', `${fmtTime(t)} of ${fmtTime(d)}`);
      marks.forEach((s, i) => { s.style.left = `${(ticks[i] / d) * 100}%`; });
    },
  };
}

function controls(media, item, ticks, dark) {
  const btn = el('button', { class: 'ic big', 'aria-label': 'Play', html: icon.play });
  const time = el('div', { class: 'atime' });
  const dur = () => media.duration || item.duration || 0;
  const b = bar(dur, ticks, (t, step) => { if (dur()) media.currentTime = clamp(t == null ? media.currentTime + step : t, 0, dur() - .2); });
  const paint = () => { b.set(media.currentTime); time.textContent = `${fmtTime(media.currentTime)} / ${fmtTime(dur())}`; };
  for (const ev of ['timeupdate', 'seeked', 'loadedmetadata', 'durationchange']) media.addEventListener(ev, paint);
  media.addEventListener('play', () => { btn.innerHTML = icon.pause; btn.setAttribute('aria-label', 'Pause'); });
  media.addEventListener('pause', () => { btn.innerHTML = icon.play; btn.setAttribute('aria-label', 'Play'); });
  paint();
  return { btn, time, bar: b.el, row: (...more) => el('div', { class: `actl${dark ? ' dk' : ''}` }, btn, b.el, time, ...more) };
}

function videoBody(item, body, root, at, cleanup, ctx) {
  const m = at.m != null ? item.mo?.[at.m] : null;
  const vm = m?.k === 'v' ? m : null;
  const t0 = at.t || vm?.t || 0;
  const quiet = !!vm?.g || griefOnly(item) || (reduced.matches && at.muted);
  const v = el('video', { playsinline: true, preload: 'auto', crossorigin: 'anonymous', src: asset(item.media) });
  if (at.muted) v.muted = true;
  let cover = null;
  if (vm?.po) {
    const c = vm.cr || [0, 0, 1, 1];
    cover = el('img', { class: 'cover', alt: '', src: asset(item.dir + vm.po), style: `left:${c[0] * 100}%;top:${c[1] * 100}%;width:${c[2] * 100}%;height:${c[3] * 100}%` });
  } else if (!t0 && item.poster) cover = el('img', { class: 'cover', alt: '', src: asset(item.poster), style: 'inset:0;width:100%;height:100%' });
  const box = el('div', { class: 'vbox' }, v, cover);
  const stagebox = el('div', { class: 'vstage' }, box);
  const c = controls(v, item, (item.mo || []).filter((x) => x.k === 'v' && !x.g).map((x) => x.t), true);
  const snd = el('button', { class: 'ic', 'aria-label': 'Sound', html: icon.sound });
  const wrap = el('div', { class: 'vid' }, stagebox, c.row(snd));
  body.append(wrap);
  const a = item.aspect || 16 / 9;
  const size = () => {
    const w = Math.min(stagebox.clientWidth, stagebox.clientHeight * a);
    box.style.width = `${w}px`; box.style.height = `${w / a}px`;
  };
  size();
  const ro = new ResizeObserver(size);
  ro.observe(stagebox);
  const setSnd = () => { snd.innerHTML = v.muted ? icon.mute : icon.sound; snd.setAttribute('aria-label', v.muted ? 'Sound off' : 'Sound on'); };
  setSnd();
  v.addEventListener('loadedmetadata', () => { if (t0) v.currentTime = Math.min(t0, Math.max(0, v.duration - 1)); }, { once: true });
  const uncover = () => { if (cover && !v.paused && v.currentTime >= t0 - .5) cover.classList.add('off'); };
  v.addEventListener('playing', uncover);
  v.addEventListener('timeupdate', uncover);
  const toggle = () => { if (v.paused) v.play().catch(() => {}); else v.pause(); };
  c.btn.addEventListener('click', toggle);
  box.addEventListener('click', toggle);
  snd.addEventListener('click', () => { v.muted = !v.muted; setSnd(); });
  v.addEventListener('ended', () => { const nc = nextCard(item, ctx, 'over'); if (nc && !stagebox.querySelector('.next')) stagebox.append(nc); });
  v.addEventListener('play', () => stagebox.querySelector('.next')?.remove());
  if (!quiet) v.play().catch(() => { v.muted = true; setSnd(); v.play().catch(() => {}); });
  cleanup.push(() => { ro.disconnect(); v.pause(); v.removeAttribute('src'); v.load(); });
}

function imageBody(item, body, cleanup) {
  const img = el('img', { alt: item.title, src: asset(item.media || item.thumb), crossorigin: 'anonymous', draggable: 'false' });
  const box = el('div', { class: 'media pz' }, img);
  body.append(box);
  let z = 1, tx = 0, ty = 0, vx = 0, vy = 0, raf = 0;
  const pts = new Map();
  let g = null, lastTap = 0;
  const apply = () => {
    const r = box.getBoundingClientRect();
    const mx = Math.max(0, (img.offsetWidth * z - r.width) / 2), my = Math.max(0, (img.offsetHeight * z - r.height) / 2);
    tx = clamp(tx, -mx, mx); ty = clamp(ty, -my, my);
    img.style.transform = `translate(${tx}px,${ty}px) scale(${z})`;
    box.classList.toggle('zoomed', z > 1);
  };
  const zoomAt = (nz, cx, cy) => {
    const r = box.getBoundingClientRect();
    const px = cx - (r.left + r.width / 2), py = cy - (r.top + r.height / 2);
    tx = px - (px - tx) * (nz / z); ty = py - (py - ty) * (nz / z); z = nz;
    if (z <= 1.001) { z = 1; tx = ty = 0; }
  };
  const glide = () => {
    cancelAnimationFrame(raf);
    const step = () => { vx *= .92; vy *= .92; tx += vx; ty += vy; apply(); if (Math.hypot(vx, vy) > .3) raf = requestAnimationFrame(step); };
    if (!reduced.matches) raf = requestAnimationFrame(step);
  };
  box.addEventListener('pointerdown', (e) => {
    pts.set(e.pointerId, { x: e.clientX, y: e.clientY });
    cancelAnimationFrame(raf);
    if (pts.size === 2) { const [a, b] = [...pts.values()]; g = { d: Math.hypot(a.x - b.x, a.y - b.y), z }; }
    else g = { x: e.clientX, y: e.clientY, lt: performance.now(), moved: false };
    if (z > 1 || pts.size === 2) box.setPointerCapture(e.pointerId);
  });
  box.addEventListener('pointermove', (e) => {
    if (!pts.has(e.pointerId) || !g) return;
    const prev = pts.get(e.pointerId);
    pts.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (pts.size === 2 && g.d) {
      const [a, b] = [...pts.values()];
      zoomAt(clamp(g.z * Math.hypot(a.x - b.x, a.y - b.y) / g.d, 1, 6), (a.x + b.x) / 2, (a.y + b.y) / 2);
      apply();
    } else if (pts.size === 1 && z > 1) {
      vx = (e.clientX - prev.x) * .6; vy = (e.clientY - prev.y) * .6;
      tx += e.clientX - prev.x; ty += e.clientY - prev.y; g.moved = true; g.lt = performance.now();
      apply();
    } else if (g.x != null && Math.hypot(e.clientX - g.x, e.clientY - g.y) > 6) g.moved = true;
  });
  const up = (e) => {
    if (!pts.delete(e.pointerId)) return;
    if (pts.size === 0 && g && !g.d && e.type === 'pointerup') {
      if (!g.moved) {
        const t = performance.now();
        if (t - lastTap < 320) { lastTap = 0; zoomAt(z > 1 ? 1 : 2.6, e.clientX, e.clientY); img.classList.add('anim'); apply(); setTimeout(() => img.classList.remove('anim'), 300); }
        else lastTap = t;
      } else if (z > 1 && performance.now() - g.lt < 60) glide();
    }
    g = pts.size ? { x: null, moved: true, lt: performance.now() } : null;
  };
  box.addEventListener('pointerup', up);
  box.addEventListener('pointercancel', up);
  box.addEventListener('wheel', (e) => {
    if (!e.ctrlKey && z <= 1 && !document.body.classList.contains('vp')) return;
    e.preventDefault();
    zoomAt(clamp(z * Math.exp(-e.deltaY * (e.ctrlKey ? .012 : .002)), 1, 6), e.clientX, e.clientY);
    apply();
  }, { passive: false });
  cleanup.push(() => cancelAnimationFrame(raf));
}

function audioBody(item, body, root, at, cleanup, ctx) {
  const tp = topicOf(item);
  const m = at.m != null ? item.mo?.[at.m] : null;
  const am = m?.k === 'a' ? m : null;
  const t0 = at.t || am?.t || 0;
  const quiet = !!am?.g || griefOnly(item) || at.muted;
  const a = el('audio', { preload: 'auto', crossorigin: 'anonymous', src: asset(item.media) });
  const ring = el('div', { class: 'ring', html: ringSvg(item.wave || new Array(240).fill(10)) });
  const glass = el('button', { class: 'gorb', 'aria-label': 'Play', style: `background:${glassOf(tp)}` }, el('i'));
  const orb = el('div', { class: 'aorb', style: `--c:${tp?.grad[1] || '#888'}` }, ring, glass);
  const c = controls(a, item, (item.mo || []).filter((x) => x.k === 'a' && !x.g).map((x) => x.t), false);
  const wrap = el('div', { class: 'aud' }, orb, c.row(), a);
  body.append(wrap);
  const lines = [...ring.querySelectorAll('line')];
  let lit = -1, raf = 0, actx = null, an = null, buf = null;
  const paint = () => {
    const k = Math.floor((a.currentTime / (a.duration || item.duration || 1)) * lines.length);
    if (k !== lit) { lines.forEach((l, i) => l.classList.toggle('on', i <= k)); lit = k; }
  };
  const draw = () => {
    raf = requestAnimationFrame(draw);
    paint();
    if (an && !reduced.matches) {
      an.getByteTimeDomainData(buf);
      let s = 0; for (const x of buf) s += (x - 128) * (x - 128);
      glass.style.transform = `scale(${1 + Math.min(.06, Math.sqrt(s / buf.length) / 128 * .5)})`;
    }
  };
  a.addEventListener('loadedmetadata', () => { if (t0) a.currentTime = Math.min(t0, a.duration - 1); }, { once: true });
  a.addEventListener('seeked', paint);
  const play = async () => {
    if (!actx) {
      try { actx = new AudioContext(); an = actx.createAnalyser(); an.fftSize = 512; buf = new Uint8Array(an.fftSize); actx.createMediaElementSource(a).connect(an); an.connect(actx.destination); } catch { an = null; }
    }
    if (actx?.state === 'suspended') await actx.resume().catch(() => {});
    if (a.paused) await a.play().catch(() => {}); else a.pause();
  };
  c.btn.addEventListener('click', play);
  glass.addEventListener('click', play);
  a.addEventListener('play', () => { cancelAnimationFrame(raf); draw(); orb.classList.add('on'); wrap.querySelector('.next')?.remove(); });
  a.addEventListener('pause', () => { cancelAnimationFrame(raf); glass.style.transform = ''; orb.classList.remove('on'); });
  a.addEventListener('ended', () => { const nc = nextCard(item, ctx); if (nc && !wrap.querySelector('.next')) wrap.append(nc); });
  if (!quiet) play();
  cleanup.push(() => { cancelAnimationFrame(raf); a.pause(); a.removeAttribute('src'); a.load(); actx?.close(); });
}

export async function shareItem(item, at = {}) {
  const url = fileLink(item.id, at);
  if (embedded) { try { await bridge('share', { url }); return; } catch (e) { if (e.code !== 'unsupported') return; } }
  try { if (navigator.share) { await navigator.share({ url }); return; } } catch { return; }
  try { await navigator.clipboard.writeText(url); } catch {}
}

export function openItem(item, { m = null, page = null, t = null, muted = false, onClose, onOpen, from } = {}) {
  const stage = stageEl();
  const at = { m: m != null && item.mo?.[m] ? m : null, page, t, muted };
  let root;
  if (open) {
    open.cleanup.forEach((f) => f());
    open.cleanup = [];
    root = open.root;
    root.querySelector('#pc')?.remove();
    root.replaceChildren();
    open.onClose = onClose || open.onClose;
    open.onOpen = onOpen || open.onOpen;
    open.same = false;
    if (!reduced.matches) root.animate([{ opacity: .3 }, { opacity: 1 }], { duration: 240 });
  } else {
    root = el('div', { id: 'viewer', role: 'dialog', 'aria-modal': 'true' });
    const ret = document.activeElement;
    const inert = [...stage.children].filter((n) => !n.inert);
    inert.forEach((n) => { n.inert = true; });
    stage.append(root);
    open = { root, onClose, onOpen, cleanup: [], ret, inert, from, same: true, sheet: null };
    nav.push(closeViewer);
    if (embedded && !document.body.classList.contains('vp')) stage.scrollIntoView({ block: 'nearest' });
    if (!reduced.matches) {
      if (from) root.animate([{ clipPath: insetOf(from), opacity: .4 }, { clipPath: FULL, opacity: 1 }], { duration: 420, easing: EASE });
      else root.animate([{ opacity: 0, transform: 'translateY(10px)' }, { opacity: 1, transform: 'none' }], { duration: 300, easing: EASE });
    }
  }
  const dark = item.type === 'video' || item.type === 'image';
  root.className = [dark ? 'dark' : '', item.type === 'document' ? 'docv' : ''].join(' ').trim();
  root.setAttribute('aria-label', item.title);
  const cleanup = open.cleanup;
  const head = el('div', { id: 'vh' });
  const body = el('div', { id: 'vb' });
  let doc = null;
  const here = () => {
    if (item.type === 'document') {
      const n = Number(root.querySelector('#pc')?.textContent.split(' / ')[0]) || 1;
      const mk = (item.mo || []).findIndex((x) => x.k === 'p' && x.p === n && !x.g);
      return mk >= 0 ? { m: mk } : { page: n };
    }
    const md = root.querySelector('video,audio');
    if (md && md.currentTime > 1) {
      const mk = (item.mo || []).findIndex((x) => (x.k === 'v' || x.k === 'a') && Math.abs(x.t - md.currentTime) < 12 && !x.g);
      return mk >= 0 ? { m: mk } : { t: md.currentTime };
    }
    return at.m != null && !item.mo[at.m].g ? { m: at.m } : {};
  };
  head.append(
    el('button', { class: 'ic', 'aria-label': 'Back', html: icon.back, onclick: () => nav.back() }),
    el('button', { id: 'vt', 'aria-label': `${item.title}. About this file`, onclick: () => about(item, root, doc) }, el('b', {}, item.title), el('span', {}, meta(item))),
    el('button', { class: 'ic', 'aria-label': 'Share', html: icon.share, onclick: () => shareItem(item, here()) }),
  );
  root.append(body, head);
  const ctx = { onClose: open.onClose, onOpen: open.onOpen };
  if (item.type === 'document') doc = documentBody(item, body, root, at, cleanup, ctx);
  else if (item.type === 'video') videoBody(item, body, root, at, cleanup, ctx);
  else if (item.type === 'image') imageBody(item, body, cleanup);
  else if (item.type === 'audio') audioBody(item, body, root, at, cleanup, ctx);
  root.tabIndex = -1;
  root.focus({ preventScroll: true });
}
