import * as THREE from 'three';
import { makeOrbMaterial, makeShadowMaterial, makeCardMaterial, makeBackground, hex } from './orb.js';
import { openItem, viewerOpen, closeViewer } from './viewer.js';
import { openFind, findOpen, closeFind } from './find.js';
import { asset, state, year, bridge } from './data.js';

const $ = (s) => document.querySelector(s);
const stage = $('#stage');
const canvas = $('#gl');
const embedded = window.parent !== window;
const SHOT = new URLSearchParams(location.hash.slice(1)).get('shot');
let viewport = !embedded;
document.body.classList.toggle('vp', viewport);

const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const mix = (a, b, t) => a + (b - a) * t;
const smooth = (a, b, x) => { const t = clamp((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); };
const ease = (t) => (t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
const damp = (a, b, k, dt) => b + (a - b) * Math.exp(-k * dt);

function wantHeight() { return Math.round(clamp(stage.clientWidth * 1.35, 540, 760)); }
function postHeight() {
  if (!embedded || viewport) return;
  parent.postMessage({ abstractsHeight: Math.ceil(document.body.getBoundingClientRect().height) }, '*');
}
addEventListener('message', (e) => {
  if (e.source !== parent || !e.data || e.data.abstractsLayout !== 'viewport' || viewport) return;
  viewport = true;
  document.body.classList.add('vp');
  parent.postMessage({ abstractsLayout: 'viewport' }, '*');
  sizeStage();
});
if (embedded) parent.postMessage({ abstractsLayout: 'request' }, '*');

const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 2));
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.setClearColor('#f3f3f4');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(30, 1, .1, 100);
camera.position.set(0, 0, 8);
const bg = makeBackground();
scene.add(bg);
const loader = new THREE.TextureLoader();
loader.setCrossOrigin('anonymous');
const texCache = new Map();
function tex(url) {
  if (!texCache.has(url)) {
    texCache.set(url, new Promise((res) => loader.load(url, (t) => {
      t.colorSpace = THREE.SRGBColorSpace;
      t.anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy());
      res(t);
    }, undefined, () => res(null))));
  }
  return texCache.get(url);
}

let W = 1, H = 1, VW = 1, VH = 1;
function resize() {
  W = stage.clientWidth; H = stage.clientHeight;
  renderer.setSize(W, H, false);
  camera.aspect = W / H;
  camera.updateProjectionMatrix();
  VH = 2 * Math.tan(THREE.MathUtils.degToRad(15)) * 8;
  VW = VH * camera.aspect;
  bg.material.uniforms.uAspect.value = W / H;
  wake();
}
function sizeStage() {
  if (SHOT) {
    const [w, h] = { logo: [512, 512], banner: [1500, 500], cover: [1200, 750] }[SHOT] || [1200, 750];
    Object.assign(stage.style, { width: `${w}px`, height: `${h}px` });
    document.body.classList.add('shot', `shot-${SHOT}`);
    resize();
    return;
  }
  stage.style.height = viewport ? '' : `${wantHeight()}px`;
  resize();
  postHeight();
}

const geo = new THREE.SphereGeometry(1, 96, 64);
const quad = new THREE.PlaneGeometry(1, 1);
const playTex = (() => {
  const c = document.createElement('canvas'); c.width = c.height = 128;
  const g = c.getContext('2d');
  g.fillStyle = 'rgba(255,255,255,.28)'; g.beginPath(); g.arc(64, 64, 60, 0, 7); g.fill();
  g.strokeStyle = 'rgba(255,255,255,.6)'; g.lineWidth = 2; g.stroke();
  g.fillStyle = '#fff'; g.beginPath(); g.moveTo(52, 42); g.lineTo(52, 86); g.lineTo(88, 64); g.closePath(); g.fill();
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
})();

const T = [];
const home = { pos: 0, target: 0 };
const flow = { pos: 0, target: 0 };
let entered = false, enter = 0, cur = 0, pending = null;

let country = 'us';
const FLAG = $('#flag').innerHTML;
function build() {
  orbVideo(null);
  for (const o of T.splice(0)) {
    scene.remove(o.orb, o.sh);
    o.orb.material.dispose(); o.sh.material.dispose();
    for (const c of o.cards || []) { scene.remove(c.mesh); c.mesh.material.dispose(); if (c.play) { scene.remove(c.play); c.play.material.dispose(); } }
  }
  const flag = $('#flag');
  flag.innerHTML = country === 'us' ? FLAG : `<b style="font-size:11px;font-weight:600">${country.toUpperCase()}</b>`;
  flag.setAttribute('aria-label', state.countries.find((c) => c.id === country)?.name || country);
  state.topics.filter((t) => (t.country || 'us') === country).forEach((t, i) => {
    const orb = new THREE.Mesh(geo, makeOrbMaterial(t.orb, { seed: i * 3.71 + 1.3, matte: !!t.matte }));
    orb.userData = { kind: 'orb', i };
    const sh = new THREE.Mesh(quad, makeShadowMaterial(t.shadow || '#2b3342'));
    sh.renderOrder = -1;
    scene.add(sh, orb);
    T.push({ t, orb, sh, cards: null, glow: hex(t.grad[1]), top: hex(t.grad[0]), bot: hex(t.grad[2]), sub: t.subject || null, still: null, bloom: -99 });
  });
}

function makeCard(item, ti, j) {
  if (item.type === 'audio') {
    const p = T[ti].t.orb;
    const mesh = new THREE.Mesh(geo, makeOrbMaterial(['#2b3442', '#4b5a70', '#9aa6b8', '#eef3f8'].map((c, k) => (k === 3 ? p[3] : c)), { matte: true }));
    mesh.userData = { kind: 'card', ti, j };
    scene.add(mesh);
    return { item, mesh, orb: true, aspect: 1 };
  }
  const aspect = item.aspect || (item.type === 'video' ? 16 / 9 : .773);
  const mat = makeCardMaterial(aspect, { paper: item.type === 'document', tint: T[ti].t.grad[0] });
  const mesh = new THREE.Mesh(quad, mat);
  mesh.userData = { kind: 'card', ti, j };
  scene.add(mesh);
  let play = null;
  if (item.type === 'video') {
    play = new THREE.Mesh(quad, new THREE.MeshBasicMaterial({ map: playTex, transparent: true, depthWrite: false }));
    play.renderOrder = 2;
    scene.add(play);
  }
  if (item.thumb) tex(asset(item.thumb)).then((t) => { if (t && !mat.userData.video) { mat.uniforms.uMap.value = t; mat.uniforms.uHas.value = 1; wake(); } });
  return { item, mesh, mat, play, aspect };
}

function ensureCards(i) {
  const o = T[i];
  if (!o.cards) o.cards = o.t.items.map((id, j) => makeCard(state.items[id], i, j));
  return o.cards;
}

function ensureSubject(o) {
  if (!o.sub || o.subReq) return;
  o.subReq = true;
  tex(asset(o.sub.img)).then((t) => {
    if (!t) return;
    t.wrapS = t.wrapT = THREE.MirroredRepeatWrapping; t.needsUpdate = true;
    o.still = t;
    const m = o.orb.material.uniforms;
    if (!m.uTex.value) m.uTex.value = t;
    m.uHasTex.value = 1;
    wake();
  });
}
let ov = null;
function orbVideo(o) {
  if (ov && ov.o === o) return;
  if (ov) {
    ov.el.pause(); ov.el.removeAttribute('src'); ov.el.load();
    ov.o.orb.material.uniforms.uTex.value = ov.o.still;
    ov.tex.dispose();
    ov = null;
  }
  if (!o || !o.sub?.video || !o.still) return;
  const el = document.createElement('video');
  Object.assign(el, { muted: true, loop: true, playsInline: true, crossOrigin: 'anonymous', preload: 'auto' });
  el.setAttribute('muted', ''); el.setAttribute('playsinline', '');
  el.src = asset(o.sub.video);
  const t = new THREE.VideoTexture(el);
  t.colorSpace = THREE.SRGBColorSpace; t.wrapS = t.wrapT = THREE.MirroredRepeatWrapping;
  ov = { o, el, tex: t };
  el.addEventListener('playing', () => { if (ov?.el === el) o.orb.material.uniforms.uTex.value = t; }, { once: true });
  el.play().catch(() => {});
}
let vid = null;
function focusVideo(card) {
  if (vid && vid.card === card) return;
  if (vid) {
    vid.el.pause(); vid.el.removeAttribute('src'); vid.el.load();
    vid.card.mat.userData.video = false;
    if (vid.prev) { vid.card.mat.uniforms.uMap.value = vid.prev; } else vid.card.mat.uniforms.uHas.value = 0;
    vid.tex.dispose();
    vid = null;
  }
  if (!card || !card.item.loop) return;
  const el = document.createElement('video');
  Object.assign(el, { muted: true, loop: true, playsInline: true, crossOrigin: 'anonymous', preload: 'auto' });
  el.setAttribute('muted', ''); el.setAttribute('playsinline', '');
  el.src = asset(card.item.loop);
  const t = new THREE.VideoTexture(el); t.colorSpace = THREE.SRGBColorSpace;
  vid = { card, el, tex: t, prev: card.mat.uniforms.uMap.value };
  el.addEventListener('playing', () => {
    if (vid?.el !== el) return;
    card.mat.userData.video = true;
    card.mat.uniforms.uMap.value = t; card.mat.uniforms.uHas.value = 1;
  }, { once: true });
  el.play().catch(() => {});
}

const tmp = new THREE.Vector3();
const cTop = new THREE.Color(), cMid = new THREE.Color(), cBot = new THREE.Color(), cGlow = new THREE.Color();
const HOME_TOP = hex('#f4f4f5'), HOME_MID = hex('#f2f2f3'), HOME_BOT = hex('#e8e8ea');
const pill = $('#pill'), label = $('#label'), tname = $('#tname'), dots = $('#dots');
let lastPill = -1, lastLabel = '', lastDots = '';

function orbRadius() { return SHOT === 'logo' ? VH * .34 : SHOT === 'banner' ? VH * .37 : SHOT === 'cover' ? VH * .31 : Math.min(VW * .31, VH * .235); }
const px = (wy) => wy / VH * H;

function layout(t, dt) {
  if (!T.length) return;
  home.pos = damp(home.pos, home.target, 9, dt);
  flow.pos = damp(flow.pos, flow.target, 9, dt);
  enter = damp(enter, entered ? 1 : 0, entered ? 4.2 : 5.2, dt);
  if (Math.abs(enter - (entered ? 1 : 0)) < .001) enter = entered ? 1 : 0;
  const e = ease(enter);
  const r = orbRadius();
  const orbY = SHOT ? (SHOT === 'cover' ? VH * .06 : VH * .03) : VH * .035;
  const headY = VH / 2 - (52 / H) * VH;
  const near = Math.round(home.pos);

  const a0 = Math.floor(home.pos), a1 = Math.min(T.length - 1, a0 + 1), f = home.pos - a0;
  const ga = T[clamp(a0, 0, T.length - 1)], gb = T[a1];
  const tc = T[cur];
  cGlow.copy(ga.glow).lerp(gb.glow, f);
  cTop.copy(HOME_TOP).lerp(tc.top, e);
  cMid.copy(HOME_MID).lerp(tc.glow, e);
  cBot.copy(HOME_BOT).lerp(cGlow, .1).lerp(tc.bot, e);
  const u = bg.material.uniforms;
  u.uTop.value.copy(cTop); u.uMid.value.copy(cMid); u.uBot.value.copy(cBot);
  u.uMidAt.value = mix(.6, .52, e);
  u.uGlow.value.copy(cGlow); u.uGlowA.value = .16 * (1 - e); u.uGlowY.value = .5 + orbY / VH; u.uGlowR.value = .42;

  T.forEach((o, i) => {
    const d = i - home.pos, ad = Math.abs(d), sg = Math.sign(d);
    let x = sg * (Math.min(ad, 1) * r * 2.12 + Math.max(ad - 1, 0) * r * 1.25);
    let z = -Math.min(ad, 3) * 1.7;
    let s = r * (1 - Math.min(ad, 2) * .2);
    let y = orbY + Math.sin(t * .6 + i) * .018;
    let a = 1 - smooth(SHOT === 'banner' ? 3.2 : 1.5, SHOT === 'banner' ? 3.8 : 2.3, ad);
    if (SHOT === 'logo' && i !== near) a = 0;
    const hx = x, hy = y, hz = z, hs = s;
    if (i === cur) {
      x = mix(x, 0, e); y = mix(y, headY, e); z = mix(z, 0, e); s = mix(s, Math.max(.15, (19 / H) * VH), e);
    } else {
      a *= 1 - e; x += sg * e * 1.2;
    }
    o.orb.position.set(x, y, z); o.orb.scale.setScalar(s);
    o.orb.visible = a > .005;
    const m = o.orb.material.uniforms;
    m.uAlpha.value = a; m.uTime.value = t + i * 10; m.uSpin.value = t * .045 + i;
    if (o.sub && SHOT !== 'logo') {
      if (ad < 2.5 || i === cur || SHOT) ensureSubject(o);
      if (i === near && o.bloom < -9 && o.still) o.bloom = t;
      if (i !== near && ad > 1.5) o.bloom = -99;
      const z0 = o.sub.zoom || .7;
      const k = o.bloom > -9 ? Math.exp(-(t - o.bloom) * .7) : 1;
      const mo = o.sub.motion;
      m.uZoom.value = z0 * (1 + .7 * k) * (mo === 'push' ? 1 + .06 * Math.sin(t * .22 + i) : 1);
      m.uRot.value = mo === 'drift' ? .1 * Math.sin(t * .11 + i) : 0;
      if (mo === 'drift') m.uPan.value.set(.025 * Math.sin(t * .09 + i), .02 * Math.cos(t * .12 + i));
      m.uCenter.value.copy(o.orb.position);
    }
    o.orb.updateMatrixWorld();
    m.uCamO.value.copy(camera.position); o.orb.worldToLocal(m.uCamO.value);
    o.orb.material.depthWrite = a > .98;
    o.sh.position.set(x, y - s * 1.16, z - .02);
    o.sh.scale.set(s * 2.3, s * .52, 1);
    o.sh.material.uniforms.uAlpha.value = a * (1 - e) * .5;
    o.sh.visible = o.orb.visible && e < .99;

    const showRing = i === cur && enter > .001 && !SHOT;
    if (!showRing) { if (o.cards) o.cards.forEach((c) => hideCard(c)); return; }
    const cards = ensureCards(i);
    const ringA = 0;
    const hb = Math.min(VH * .47, VW * .9);
    cards.forEach((c, j) => {
      const ang = (j / cards.length) * Math.PI * 2;
      const rx = hx + Math.cos(ang) * hs * .25;
      const ry = hy + Math.sin(ang) * hs * .25;
      const rz = hz;
      const rs = hs * .12;
      let fx = rx, fy = ry, fz = rz, fs = rs, fr = 0, fa = 0, dim = 0;
      if (i === cur) {
        const fd = j - flow.pos, fad = Math.abs(fd), fsg = Math.sign(fd);
        fx = fsg * (Math.min(fad, 1) * VW * .64 + Math.max(fad - 1, 0) * VW * .16);
        fz = -Math.min(fad, 3) * 1.7;
        fy = VH * .02 + Math.sin(t * .8 + j) * .012;
        fr = -fsg * Math.min(fad, 1) * .5;
        fa = 1 - smooth(2.2, 3.1, fad);
        dim = Math.min(fad, 1) * .3;
        fs = (c.orb ? hb * .34 : Math.min(hb, (VW * .74) / c.aspect)) * (1 - Math.min(fad, 1) * .14);
      }
      const k = i === cur ? e : 0;
      const cx = mix(rx, fx, k), cy = mix(ry, fy, k), cz = mix(rz, fz, k), cs = mix(rs, fs, k);
      const ca = mix(ringA, fa, smooth(.05, .55, k));
      c.mesh.visible = ca > .005;
      c.mesh.position.set(cx, cy, cz);
      if (c.orb) {
        c.mesh.scale.setScalar(cs * (c.orb && k < 1 ? mix(.42, 1, k) : 1));
        const mu = c.mesh.material.uniforms;
        mu.uAlpha.value = ca; mu.uTime.value = t;
        mu.uPulse.value = .5 + .5 * Math.sin(t * 2.4);
        c.mesh.updateMatrixWorld();
        mu.uCamO.value.copy(camera.position); c.mesh.worldToLocal(mu.uCamO.value);
      } else {
        c.mesh.scale.set(cs * c.aspect, cs, 1);
        c.mesh.rotation.y = mix(0, fr, k);
        c.mat.uniforms.uAlpha.value = ca;
        c.mat.uniforms.uDim.value = mix(0, dim, k);
        c.mat.uniforms.uRadius.value = mix(.06, .022, k);
      }
      if (c.play) {
        const ps = cs * .24;
        c.play.visible = c.mesh.visible && !(vid && vid.card === c && c.mat.userData.video);
        c.play.position.set(cx, cy, cz + .01);
        c.play.rotation.y = c.mesh.rotation.y;
        c.play.scale.set(ps, ps, 1);
        c.play.material.opacity = ca;
      }
    });
  });

  if (!entered && Math.abs(home.pos - near) < .18 && enter < .05) {
    const o = T[near];
    tmp.copy(o.orb.position).project(camera);
    pill.style.left = `${(tmp.x * .5 + .5) * W}px`;
    pill.style.top = `${(-tmp.y * .5 + .5) * H}px`;
    if (lastPill !== near) { pill.textContent = o.t.name; pill.style.background = `${o.t.orb[1]}73`; lastPill = near; }
    pill.classList.remove('out');
  } else pill.classList.add('out');

  orbVideo(!entered && enter < .05 && Math.abs(home.pos - near) < .25 && !SHOT ? T[near] : (SHOT ? T[near] : null));
  const fi = clamp(Math.round(flow.pos), 0, (T[cur].cards?.length || 1) - 1);
  if (entered) {
    const c = T[cur].cards?.[fi];
    const key = c ? c.item.id : '';
    if (key !== lastLabel) {
      lastLabel = key;
      label.querySelector('b').textContent = c ? c.item.title : '';
      label.querySelector('span').textContent = c ? [c.item.agency, year(c.item.date)].filter(Boolean).join(' · ') : '';
    }
    focusVideo(enter > .9 && c && Math.abs(flow.pos - fi) < .3 && c.item.type === 'video' ? c : null);
  } else focusVideo(null);
  const dk = entered ? `f${cur}:${fi}:${T[cur].cards?.length || 0}` : `h${near}`;
  if (dk !== lastDots) {
    lastDots = dk;
    const n = entered ? (T[cur].cards?.length || 0) : T.length;
    const on = entered ? fi : near;
    if (dots.children.length !== n) dots.innerHTML = '<i></i>'.repeat(n);
    [...dots.children].forEach((el, k) => el.classList.toggle('on', k === on));
    const max = entered ? n - 1 : T.length - 1;
    const p = entered ? fi : near;
    $('#prev').classList.toggle('can', p > 0);
    $('#next').classList.toggle('can', p < max);
  }
  stage.classList.toggle('dark', false);
}

function hideCard(c) {
  c.mesh.visible = false;
  if (c.play) c.play.visible = false;
}

let raf = 0, last = 0, awake = true, visible = true;
const clock0 = performance.now();
function wake() { if (!raf && visible && !viewerOpen()) { last = performance.now(); raf = requestAnimationFrame(loop); } }
let dpr = Math.min(devicePixelRatio || 1, 2), slow = 0, frames = 0;
function adapt(ms) {
  if (++frames < 20 || dpr <= 1) return;
  slow = ms > 24 ? slow + 1 : Math.max(0, slow - 1);
  if (slow > 30) { dpr = Math.max(1, dpr - .35); renderer.setPixelRatio(dpr); renderer.setSize(W, H, false); slow = 0; }
}
function loop(now) {
  raf = 0;
  adapt(now - last);
  const dt = Math.min(.05, (now - last) / 1000); last = now;
  const t = (now - clock0) / 1000;
  layout(t, dt);
  if (pending && Math.abs(home.pos - pending.ti) < .05) { const p = pending; pending = null; enterTopic(p.ti, p.j); }
  renderer.render(scene, camera);
  if (awake && visible && !viewerOpen()) raf = requestAnimationFrame(loop);
}
new IntersectionObserver((es) => { visible = es[0].isIntersecting; if (visible) wake(); }).observe(stage);
document.addEventListener('visibilitychange', () => { visible = !document.hidden; if (visible) wake(); });

function enterTopic(i, j = 0) {
  cur = i; entered = true;
  ensureCards(i);
  flow.pos = flow.target = j; if (enter < .5) flow.pos = j;
  home.target = i;
  document.body.classList.add('in');
  tname.textContent = T[i].t.name;
  lastLabel = '';
  wake();
}
function leaveTopic() {
  entered = false;
  document.body.classList.remove('in');
  wake();
}
function go(dir) {
  if (entered) flow.target = clamp(Math.round(flow.target) + dir, 0, T[cur].cards.length - 1);
  else home.target = clamp(Math.round(home.target) + dir, 0, T.length - 1);
  wake();
}
function openCurrent() {
  if (!entered) return enterTopic(Math.round(home.target));
  const c = T[cur].cards[Math.round(flow.target)];
  if (c) openItem(c.item, { onClose: wake });
}

const ray = new THREE.Raycaster();
const ndc = new THREE.Vector2();
function pick(cx, cy) {
  const rect = canvas.getBoundingClientRect();
  ndc.set(((cx - rect.left) / rect.width) * 2 - 1, -((cy - rect.top) / rect.height) * 2 + 1);
  ray.setFromCamera(ndc, camera);
  const objs = [];
  T.forEach((o, i) => {
    if (o.orb.visible) objs.push(o.orb);
    if (o.cards && (entered ? i === cur : true)) o.cards.forEach((c) => c.mesh.visible && objs.push(c.mesh));
  });
  const hit = ray.intersectObjects(objs, false)[0];
  if (!hit) return;
  const ud = hit.object.userData;
  if (ud.kind === 'orb') {
    if (entered) { if (ud.i === cur) leaveTopic(); return; }
    if (ud.i === Math.round(home.pos)) enterTopic(ud.i); else { home.target = ud.i; wake(); }
  } else if (ud.kind === 'card') {
    if (!entered) { enterTopic(ud.ti, ud.j); return; }
    if (ud.j === Math.round(flow.pos)) openCurrent(); else { flow.target = ud.j; wake(); }
  }
}

let drag = null;
canvas.addEventListener('pointerdown', (e) => {
  if (e.button !== 0) return;
  const sc = entered ? flow : home;
  drag = { x: e.clientX, y: e.clientY, t: performance.now(), pos0: sc.target, sc, on: false, vx: 0, lx: e.clientX, lt: performance.now(), id: e.pointerId };
});
canvas.addEventListener('pointermove', (e) => {
  if (!drag || e.pointerId !== drag.id) return;
  const dx = e.clientX - drag.x, dy = e.clientY - drag.y;
  if (!drag.on) {
    if (Math.abs(dx) > 7 && Math.abs(dx) > Math.abs(dy) * 1.1) { drag.on = true; canvas.setPointerCapture(e.pointerId); canvas.classList.add('drag'); }
    else if (Math.abs(dy) > 10) { drag = null; return; }
    else return;
  }
  const step = entered ? .64 * W : (orbRadius() * 2.12 / VW) * W;
  const n = entered ? T[cur].cards.length : T.length;
  const now = performance.now();
  drag.vx = mix(drag.vx, (e.clientX - drag.lx) / Math.max(1, now - drag.lt), .4);
  drag.lx = e.clientX; drag.lt = now;
  let p = drag.pos0 - dx / step;
  if (p < 0) p *= .35; if (p > n - 1) p = n - 1 + (p - n + 1) * .35;
  drag.sc.target = p;
  drag.sc.pos = mix(drag.sc.pos, p, .6);
  wake();
});
const endDrag = (e) => {
  if (!drag || e.pointerId !== drag.id) return;
  const d = drag; drag = null;
  canvas.classList.remove('drag');
  if (d.on) {
    const n = entered ? T[cur].cards.length : T.length;
    const step = entered ? .64 * W : (orbRadius() * 2.12 / VW) * W;
    d.sc.target = clamp(Math.round(d.sc.target - clamp((d.vx * 110) / step, -.6, .6)), 0, n - 1);
    wake();
  } else if (e.type === 'pointerup' && performance.now() - d.t < 450) pick(e.clientX, e.clientY);
};
canvas.addEventListener('pointerup', endDrag);
canvas.addEventListener('pointercancel', endDrag);
let wheelAcc = 0, wheelT = 0;
canvas.addEventListener('wheel', (e) => {
  const dx = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : (viewport || e.shiftKey ? e.deltaY : 0);
  if (!dx) return;
  e.preventDefault();
  const now = performance.now();
  if (now - wheelT > 260) wheelAcc = 0;
  wheelT = now; wheelAcc += dx;
  if (Math.abs(wheelAcc) > 60) { go(Math.sign(wheelAcc)); wheelAcc = 0; wheelT = now + 200; }
}, { passive: false });
addEventListener('keydown', (e) => {
  if (e.key === 'Escape') { if (findOpen()) closeFind(); else if (viewerOpen()) closeViewer(); else if (entered) leaveTopic(); return; }
  if (findOpen() || viewerOpen() || e.target.closest?.('input,textarea,button,a')) return;
  if (e.key === 'ArrowRight') { go(1); e.preventDefault(); }
  else if (e.key === 'ArrowLeft') { go(-1); e.preventDefault(); }
  else if (e.key === 'Enter' && e.target === canvas) { openCurrent(); e.preventDefault(); }
});
pill.addEventListener('click', () => enterTopic(Math.round(home.pos)));
$('#back').addEventListener('click', leaveTopic);
$('#prev').addEventListener('click', () => go(-1));
$('#next').addEventListener('click', () => go(1));
$('#search').addEventListener('click', () => openFind({ goTopic: (id) => { const t = state.topics.find((x) => x.id === id); if (!t) return; setCountry(t.country || 'us'); if (entered) leaveTopic(); home.target = T.findIndex((o) => o.t.id === id); wake(); }, openFile: showFile }));
$('#flag').addEventListener('click', () => {
  if (state.countries.length < 2) return;
  const list = document.createElement('div');
  list.className = 'sheet';
  list.innerHTML = '<div class="grab"></div>';
  for (const c of state.countries) {
    const b = document.createElement('button');
    b.className = 'hit';
    b.textContent = c.name;
    b.onclick = () => { list.remove(); setCountry(c.id); };
    list.append(b);
  }
  const off = (e) => { if (!list.contains(e.target)) { list.remove(); removeEventListener('pointerdown', off, true); } };
  addEventListener('pointerdown', off, true);
  stage.append(list);
});
$('#dice').addEventListener('click', () => {
  const ids = T.flatMap((o) => o.t.items);
  const id = ids[Math.floor(Math.random() * ids.length)];
  showFile(id, { open: false });
});

function setCountry(id) {
  if (id === country || !state.countries.some((c) => c.id === id)) return;
  focusVideo(null);
  country = id; entered = false; enter = 0; cur = 0;
  document.body.classList.remove('in');
  build();
  home.pos = home.target = 0; lastPill = -1; lastDots = '';
  wake();
}
function showFile(id, { open = true, page } = {}) {
  const item = state.items[id];
  if (!item) return;
  const topic = state.topics.find((t) => t.id === item.topic);
  if (!topic) return;
  setCountry(topic.country || 'us');
  const ti = T.findIndex((o) => o.t.id === item.topic);
  const j = T[ti].t.items.indexOf(id);
  if (open) openItem(item, { page, onClose: wake });
  if (entered && cur === ti) { flow.target = j; wake(); return; }
  if (entered) leaveTopic();
  home.target = ti;
  pending = { ti, j };
  wake();
}

async function bridgeLaunch() {
  if (!embedded) {
    const q = new URLSearchParams((location.search + '&' + location.hash.slice(1)).replace(/^\?/, ''));
    return { file: q.get('file'), topic: q.get('topic') };
  }
  const ask = () => bridge('hello', {}, 500).catch(() => null);
  for (let k = 0; k < 3; k++) { const v = await ask(); if (v) return v.launch || null; }
  return null;
}

async function boot() {
  sizeStage();
  addEventListener('resize', sizeStage);
  new ResizeObserver(postHeight).observe(document.body);
  try {
    const r = await fetch(asset('catalog.json'));
    if (!r.ok) throw new Error(r.status);
    const cat = await r.json();
    state.topics = cat.topics;
    state.items = cat.items;
    state.countries = cat.countries;
  } catch (err) {
    $('#err').hidden = false;
    $('#err').textContent = 'Could not load the files. Try again later.';
    $('#load').remove();
    return;
  }
  country = state.countries[0]?.id || 'us';
  build();
  T.slice(0, 3).forEach((o) => o.t.items.forEach((id) => state.items[id]?.thumb && tex(asset(state.items[id].thumb))));
  wake();
  requestAnimationFrame(() => { const l = $('#load'); l.style.opacity = 0; setTimeout(() => l.remove(), 700); });
  const l = await bridgeLaunch();
  const lt = state.topics.find((t) => t.id === (l?.topic || new URLSearchParams(location.hash.slice(1)).get('t')));
  if (l?.file && state.items[l.file]) showFile(l.file);
  else if (lt) { setCountry(lt.country || 'us'); home.pos = home.target = T.findIndex((o) => o.t.id === lt.id); wake(); }
}
boot();
