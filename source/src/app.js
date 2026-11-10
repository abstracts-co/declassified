import * as THREE from 'three';
import { makeOrbMaterial, makeShadowMaterial, makeCardMaterial, makeBackground, hex, darken } from './orb.js';
import { openItem, viewerOpen, shareItem } from './viewer.js';
import { openFind, findOpen } from './find.js';
import { asset, state, bridge, meta, quoteOf, firstMoment, griefOnly, reduced, todayPick, nav, fmtDate } from './data.js';

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
const outCubic = (t) => 1 - Math.pow(1 - t, 3);

function wantHeight() { return Math.round(clamp(stage.clientWidth * 1.42, 560, 780)); }
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

const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance', alpha: false });
const DPR = Math.min(devicePixelRatio || 1, 2);
renderer.setPixelRatio(DPR);
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
function tex(url, mirror) {
  const key = url + (mirror ? '#m' : '');
  if (!texCache.has(key)) {
    texCache.set(key, new Promise((res) => loader.load(url, (t) => {
      t.colorSpace = THREE.SRGBColorSpace;
      t.anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy());
      if (mirror) t.wrapS = t.wrapT = THREE.MirroredRepeatWrapping;
      res(t);
    }, undefined, () => res(null))));
  }
  return texCache.get(key);
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
  lastHq = '';
  wake();
}
function sizeStage() {
  if (SHOT) {
    const [w, h] = { logo: [512, 512], banner: [1500, 500], cover: [1200, 750], share: [1200, 630] }[SHOT] || [1200, 750];
    Object.assign(stage.style, { width: `${w}px`, height: `${h}px` });
    document.body.classList.add('shot', `shot-${SHOT}`);
    resize();
    return;
  }
  if (findOpen()) { postHeight(); return; }
  stage.style.height = viewport ? '' : `${wantHeight()}px`;
  resize();
  postHeight();
}

const geo = new THREE.SphereGeometry(1, 96, 64);
const quad = new THREE.PlaneGeometry(1, 1);
const playTex = (() => {
  const c = document.createElement('canvas'); c.width = c.height = 128;
  const g = c.getContext('2d');
  g.fillStyle = 'rgba(0,0,0,.28)'; g.beginPath(); g.arc(64, 64, 60, 0, 7); g.fill();
  g.strokeStyle = 'rgba(255,255,255,.55)'; g.lineWidth = 2; g.stroke();
  g.fillStyle = '#fff'; g.beginPath(); g.moveTo(52, 42); g.lineTo(52, 86); g.lineTo(88, 64); g.closePath(); g.fill();
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
})();
function ringTex(wave) {
  const c = document.createElement('canvas'); c.width = c.height = 512;
  const g = c.getContext('2d');
  g.translate(256, 256);
  const n = wave.length;
  g.strokeStyle = 'rgba(255,255,255,.82)'; g.lineCap = 'round'; g.lineWidth = 3.2;
  for (let i = 0; i < n; i += 2) {
    const a = (i / n) * Math.PI * 2 - Math.PI / 2;
    const v = Math.max(.06, wave[i] / 99);
    const r0 = 196, r1 = 196 + v * 54;
    g.beginPath(); g.moveTo(Math.cos(a) * r0, Math.sin(a) * r0); g.lineTo(Math.cos(a) * r1, Math.sin(a) * r1); g.stroke();
  }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}

const T = [];
const home = { pos: 0, vel: 0, target: 0, drag: false };
const flow = { pos: 0, vel: 0, target: 0, drag: false };
let entered = false, enter = 0, cur = 0, pending = null, lastTopic = -1, homeA = 0;
const tw = { from: 0, to: 0, t0: -9, dur: .42 };
const fades = new Set();

let country = 'us';
const HOME_TOP = hex('#f5f5f6'), HOME_MID = hex('#f1f1f3'), HOME_BOT = hex('#e4e4e8');

const itemOf = (id) => state.items[id];
function orbContent(o, ref) {
  const it = itemOf(ref?.id);
  const m = it?.mo?.[ref?.k];
  if (it && m?.o) return { ref, it, img: asset(it.dir + m.o), video: m.os && !reduced.matches ? asset(it.dir + m.os) : null, paper: m.k === 'p', zoom: m.k === 'p' ? .7 : .54 };
  if (it && SHOT === 'share') return { ref, it, img: null, video: null, paper: false, zoom: .5 };
  if (o.t.subject) return { ref, it, img: asset(o.t.subject.img), video: null, paper: false, zoom: o.t.subject.zoom || .6 };
  return { ref, it, img: null, video: null, paper: false, zoom: .5 };
}
function leadRef(t) {
  if (t.lead && itemOf(t.lead[0])) return { id: t.lead[0], k: t.lead[1] };
  for (const id of t.items) { const k = (itemOf(id)?.mo || []).findIndex((m) => m.o && !m.g); if (k >= 0) return { id, k }; }
  return null;
}
const kOf = (it) => (entered && T[cur]?.show.ref?.id === it.id ? T[cur].show.ref.k : firstMoment(it));

function build() {
  orbVideo(null);
  for (const o of T.splice(0)) {
    scene.remove(o.orb, o.sh);
    o.orb.material.dispose(); o.sh.material.dispose();
    if (o.cards) dropCards(o);
    if (o.vid) { o.vid.el.pause(); o.vid.el.removeAttribute('src'); o.vid.el.load(); o.vid.tex.dispose(); }
  }
  const pick = todayPick();
  state.topics.filter((t) => (t.country || 'us') === country).forEach((t, i) => {
    const orb = new THREE.Mesh(geo, makeOrbMaterial(t.orb));
    orb.material.uniforms.uFloor.value.copy(HOME_BOT);
    orb.userData = { kind: 'orb', i };
    const sh = new THREE.Mesh(quad, makeShadowMaterial(darken(t.grad[1], .5)));
    sh.renderOrder = -1;
    scene.add(sh, orb);
    const today = pick && itemOf(pick.id)?.topic === t.id ? pick : null;
    const o = { t, i, orb, sh, cards: null, glow: hex(t.grad[1]), top: hex(t.grad[0]), mid: hex(t.grad[1]), bot: darken(t.grad[1], .38), floor: darken(t.grad[1], .2), land: -99, vid: null, head: false, day: !!today?.day };
    o.show = orbContent(o, today || leadRef(t));
    T.push(o);
  });
}

function setTex(m, t) {
  if (!t || m.uTex.value === t) return;
  if (m.uTex.value && m.uHasTex.value > .5) { m.uTex2.value = m.uTex.value; m.uMix.value = 0; } else m.uMix.value = 1;
  m.uTex.value = t;
  fades.add(m);
  wake();
}
function ensureOrbTex(o) {
  if (o.req || !o.show.img) return;
  o.req = true;
  tex(o.show.img, true).then((t) => {
    if (!t) return;
    o.still = t;
    if (!o.vid?.on) setTex(o.orb.material.uniforms, t);
  });
}
function orbVideo(o) {
  for (const x of T) if (x.vid && x !== o && x.vid.on) { x.vid.on = false; x.vid.el.pause(); if (x.still) setTex(x.orb.material.uniforms, x.still); }
  if (!o || !o.show.video || !o.still || o.vid?.dead) return;
  if (!o.vid) {
    const el = document.createElement('video');
    Object.assign(el, { muted: true, loop: true, playsInline: true, crossOrigin: 'anonymous', preload: 'auto' });
    el.setAttribute('muted', ''); el.setAttribute('playsinline', '');
    el.src = o.show.video;
    const t = new THREE.VideoTexture(el);
    t.colorSpace = THREE.SRGBColorSpace; t.wrapS = t.wrapT = THREE.MirroredRepeatWrapping;
    o.vid = { el, tex: t, on: false, dead: false };
    el.addEventListener('playing', () => { if (o.vid?.on) setTex(o.orb.material.uniforms, t); });
  }
  if (!o.vid.on) { o.vid.on = true; o.vid.el.play().catch(() => { o.vid.on = false; o.vid.dead = true; }); }
}

function makeCard(item, ti, j) {
  const o = T[ti];
  if (item.type === 'audio') {
    const mesh = new THREE.Mesh(geo, makeOrbMaterial(o.t.orb));
    mesh.material.uniforms.uFloor.value.copy(o.floor);
    mesh.userData = { kind: 'card', ti, j };
    scene.add(mesh);
    let ring = null;
    if (item.wave?.length) {
      ring = new THREE.Mesh(quad, new THREE.MeshBasicMaterial({ map: ringTex(item.wave), transparent: true, depthWrite: false }));
      ring.renderOrder = -1;
      scene.add(ring);
    }
    return { item, mesh, ring, orb: true, aspect: 1 };
  }
  const vm = item.type === 'video' ? (item.mo || []).find((m) => m.k === 'v' && !m.g) : null;
  const aspect = item.type === 'document' ? (item.fa || item.aspect || .773) : (vm?.a || item.aspect || (item.type === 'video' ? 16 / 9 : 1));
  const mat = makeCardMaterial(aspect, { tint: o.t.grad[0] });
  const mesh = new THREE.Mesh(quad, mat);
  mesh.userData = { kind: 'card', ti, j };
  scene.add(mesh);
  const sh = new THREE.Mesh(quad, makeShadowMaterial(darken(o.t.grad[1], .6)));
  sh.renderOrder = -1;
  scene.add(sh);
  let play = null;
  if (item.type === 'video') {
    play = new THREE.Mesh(quad, new THREE.MeshBasicMaterial({ map: playTex, transparent: true, depthWrite: false }));
    play.renderOrder = 2;
    scene.add(play);
  }
  const card = { item, mesh, mat, sh, play, aspect, face: null, url: null };
  const face = item.type === 'document' ? (item.face || item.thumb) : item.type === 'video' ? (item.poster || item.thumb) : item.thumb;
  if (face) {
    card.url = asset(face);
    tex(card.url).then((t) => {
      if (!t || card.gone) return;
      card.face = t;
      if (!mat.userData.video) { mat.uniforms.uMap.value = t; fades.add(mat.uniforms); wake(); }
    });
  }
  return card;
}
function dropCards(o) {
  if (vid && o.cards.includes(vid.card)) focusVideo(null);
  for (const c of o.cards) {
    c.gone = true;
    scene.remove(c.mesh); c.mesh.material.dispose();
    for (const x of [c.play, c.sh, c.ring]) if (x) { scene.remove(x); x.material.dispose(); }
    if (c.ring) c.ring.material.map?.dispose();
    if (c.face) { c.face.dispose(); texCache.delete(c.url); }
    if (c.mat) fades.delete(c.mat.uniforms);
  }
  o.cards = null;
}
function ensureCards(i) {
  const o = T[i];
  if (!o.cards) o.cards = o.t.items.map((id, j) => makeCard(itemOf(id), i, j));
  return o.cards;
}

let vid = null;
function focusVideo(card) {
  if (vid && vid.card === card) return;
  if (vid) {
    vid.el.pause(); vid.el.removeAttribute('src'); vid.el.load();
    const u = vid.card.mat.uniforms;
    vid.card.mat.userData.video = false;
    u.uMap.value = vid.card.face; u.uHas.value = vid.card.face ? 1 : 0;
    vid.tex.dispose();
    vid = null;
  }
  if (!card || !card.item.loop || card.noLoop || reduced.matches || griefOnly(card.item)) return;
  const el = document.createElement('video');
  Object.assign(el, { muted: true, loop: true, playsInline: true, crossOrigin: 'anonymous', preload: 'auto' });
  el.setAttribute('muted', ''); el.setAttribute('playsinline', '');
  el.src = asset(card.item.loop);
  const t = new THREE.VideoTexture(el); t.colorSpace = THREE.SRGBColorSpace;
  vid = { card, el, tex: t };
  el.addEventListener('playing', () => {
    if (vid?.el !== el) return;
    card.mat.userData.video = true;
    card.mat.uniforms.uMap.value = t; card.mat.uniforms.uHas.value = 1;
  }, { once: true });
  el.play().catch(() => { card.noLoop = true; });
}

const tmp = new THREE.Vector3();
const cTop = new THREE.Color(), cMid = new THREE.Color(), cBot = new THREE.Color(), cGlow = new THREE.Color(), cFloor = new THREE.Color();
const label = $('#label'), tname = $('#tname'), dots = $('#dots'), tn = $('#tn'), hq = $('#hq');
let lastLabel = '', lastDots = '', lastHq = '';

function geom() {
  if (SHOT) {
    const audio = SHOT === 'share' && T[Math.round(home.pos)]?.show.it?.type === 'audio';
    const rpx = SHOT === 'logo' ? H * .34 : SHOT === 'banner' ? H * .37 : SHOT === 'share' ? H * (audio ? .33 : .44) : H * .31;
    const cy = H * (SHOT === 'cover' ? .44 : SHOT === 'share' ? .5 : .47);
    return { rpx, r: rpx / H * VH, y: VH / 2 - cy / H * VH, cy };
  }
  const top = 58, bottom = 38, text = W > 900 ? 150 : 116;
  const rpx = Math.max(60, Math.min(W * .38, (H - top - bottom - text - 24) / 2.36));
  const cy = top + Math.max(0, (H - top - bottom - (rpx * 2.36 + text)) / 2) + rpx;
  return { rpx, r: rpx / H * VH, y: VH / 2 - cy / H * VH, cy };
}

function spring(sc, dt) {
  if (sc.drag) return false;
  const K = reduced.matches ? 400 : 160, C = reduced.matches ? 40 : 25;
  const n = 3, h = dt / n;
  for (let i = 0; i < n; i++) { sc.vel += (-K * (sc.pos - sc.target) - C * sc.vel) * h; sc.pos += sc.vel * h; }
  if (Math.abs(sc.pos - sc.target) < 2e-4 && Math.abs(sc.vel) < 2e-3) { sc.pos = sc.target; sc.vel = 0; return false; }
  return true;
}

function fitQuote(b) {
  b.style.fontSize = '';
  const base = parseFloat(getComputedStyle(b).fontSize) || 20;
  for (const k of [1, .9, .82]) {
    b.style.fontSize = k === 1 ? '' : `${(base * k).toFixed(1)}px`;
    if (b.scrollHeight <= base * k * 1.24 * 3.25) break;
  }
}

function layout(t, dt) {
  if (!T.length) return false;
  let busy = spring(home, dt) | spring(flow, dt) | home.drag | flow.drag;
  const k = clamp((t - tw.t0) / tw.dur, 0, 1);
  enter = tw.from + (tw.to - tw.from) * outCubic(k);
  if (k < 1) busy = true;
  const e = enter;
  const G = geom();
  const r = G.r, orbY = G.y;
  const headY = VH / 2 - (50 / H) * VH;
  const near = clamp(Math.round(home.pos), 0, T.length - 1);

  const a0 = clamp(Math.floor(home.pos), 0, T.length - 1), a1 = Math.min(T.length - 1, a0 + 1), f = clamp(home.pos - a0, 0, 1);
  const tc = T[cur];
  cGlow.copy(T[a0].glow).lerp(T[a1].glow, f);
  cTop.copy(HOME_TOP).lerp(tc.top, e);
  cMid.copy(HOME_MID).lerp(tc.mid, e);
  cBot.copy(HOME_BOT).lerp(tc.bot, e);
  cFloor.copy(HOME_BOT).lerp(tc.floor, e);
  const u = bg.material.uniforms;
  u.uTop.value.copy(cTop); u.uMid.value.copy(cMid); u.uBot.value.copy(cBot);
  u.uMidAt.value = mix(.62, .56, e);
  u.uGlow.value.copy(cGlow); u.uGlowA.value = .13 * (1 - e); u.uGlowY.value = .5 + orbY / VH; u.uGlowR.value = .45;
  if (SHOT === 'share') {
    const o = T[near];
    u.uTop.value.copy(o.top); u.uMid.value.copy(o.top).lerp(o.mid, .45); u.uBot.value.copy(o.mid); u.uMidAt.value = .55;
    u.uGlow.value.set('#ffffff'); u.uGlowA.value = .35; u.uGlowR.value = .5;
    cFloor.copy(o.mid);
  }

  T.forEach((o, i) => {
    const d = i - home.pos, ad = Math.abs(d), sg = Math.sign(d);
    let x = sg * (Math.min(ad, 1) * r * 2.18 + Math.max(ad - 1, 0) * r * 1.3);
    let z = -Math.min(ad, 3) * 1.7;
    let s = r * (1 - Math.min(ad, 2) * .2);
    let y = orbY;
    let a = 1 - smooth(SHOT === 'banner' ? 3.2 : 1.5, SHOT === 'banner' ? 3.8 : 2.3, ad);
    if ((SHOT === 'logo' || SHOT === 'share') && i !== near) a = 0;
    const hx = x, hy = y, hz = z, hs = s;
    if (i === cur) {
      x = mix(x, 0, e); y = mix(y, headY, e); z = mix(z, 0, e); s = mix(s, Math.max(.15, (19 / H) * VH), e);
    } else {
      a *= 1 - e; x += sg * e * 1.2;
    }
    o.orb.position.set(x, y, z); o.orb.scale.setScalar(s);
    o.orb.visible = a > .005;
    const m = o.orb.material.uniforms;
    m.uAlpha.value = a;
    m.uFloor.value.copy(cFloor);
    if (ad < 2.6 || i === cur || SHOT) ensureOrbTex(o);
    const focus = i === near && ad < .02 && !entered;
    if (focus && o.land < -9) o.land = t;
    if (!focus && ad > .5) o.land = -99;
    const moving = o.land > -9 && !reduced.matches && !SHOT;
    const push = moving ? outCubic(clamp((t - o.land) / 7, 0, 1)) : 0;
    if (moving && t - o.land < 7) busy = true;
    const paper = o.show.paper;
    const lean = clamp(d, -1.3, 1.3);
    const want = o.head || !m.uTex.value ? 0 : 1;
    if (m.uHasTex.value !== want) { m.uHasTex.value = clamp(m.uHasTex.value + Math.sign(want - m.uHasTex.value) * dt / .3, 0, 1); busy = true; }
    m.uZoom.value = o.show.zoom * (1 + .04 * push);
    m.uPan.value.set(lean * (paper ? .03 : .055), 0);
    m.uRot.value = paper ? 0 : lean * .05;
    m.uDisp.value = paper ? 0 : .006;
    m.uTint.value = mix(paper ? .03 : .08, .6, smooth(.05, 1.1, ad)) * (1 - e * .6);
    m.uGlow.value = 1 - smooth(.2, 1.2, ad) * .5;
    m.uCenter.value.copy(o.orb.position);
    o.orb.material.depthWrite = a > .98;
    o.sh.position.set(x, y - s * 1.14, z - .02);
    o.sh.scale.set(s * 2.3, s * .5, 1);
    o.sh.material.uniforms.uAlpha.value = a * (1 - e) * .42;
    o.sh.visible = o.orb.visible && e < .99;
    if (o.ring) {
      o.ring.position.set(x, y, z - .01);
      o.ring.scale.setScalar(s * 2.62);
    }

    const showRing = i === cur && enter > .001 && !SHOT;
    if (!showRing) { if (o.cards) o.cards.forEach(hideCard); return; }
    const cards = ensureCards(i);
    const hb = Math.min(VH * (W > 700 ? .55 : .46), VW * .9);
    const tilt = clamp(-flow.vel * .035, -.22, .22);
    cards.forEach((c, j) => {
      const ang = (j / cards.length) * Math.PI * 2;
      const rx = hx + Math.cos(ang) * hs * .25, ry = hy + Math.sin(ang) * hs * .25, rz = hz, rs = hs * .12;
      const fd = j - flow.pos, fad = Math.abs(fd), fsg = Math.sign(fd);
      const ej = reduced.matches ? e : clamp(e * 1.24 - Math.min(fad, 3) * .08, 0, 1);
      const fx = fsg * (Math.min(fad, 1) * VW * .64 + Math.max(fad - 1, 0) * VW * .16);
      const fz = -Math.min(fad, 3) * 1.7;
      const fy = VH * .01;
      const fr = -fsg * Math.min(fad, 1) * .5 + tilt;
      const fa = 1 - smooth(2.2, 3.1, fad);
      const dim = Math.min(fad, 1) * .28;
      const fs = (c.orb ? hb * .3 : Math.min(hb, (VW * .74) / c.aspect)) * (1 - Math.min(fad, 1) * .14);
      const cx = mix(rx, fx, ej), cy = mix(ry, fy, ej), cz = mix(rz, fz, ej), cs = mix(rs, fs, ej);
      const ca = fa * smooth(.05, .55, ej);
      c.mesh.visible = ca > .005;
      c.mesh.position.set(cx, cy, cz);
      if (c.orb) {
        c.mesh.scale.setScalar(cs);
        const mu = c.mesh.material.uniforms;
        mu.uAlpha.value = ca; mu.uCenter.value.copy(c.mesh.position); mu.uFloor.value.copy(cFloor);
        if (c.ring) {
          c.ring.visible = c.mesh.visible;
          c.ring.position.set(cx, cy, cz - .01);
          c.ring.scale.setScalar(cs * 2.62);
          c.ring.material.opacity = ca * (1 - Math.min(fad, 1) * .5);
        }
      } else {
        c.mesh.scale.set(cs * c.aspect, cs, 1);
        c.mesh.rotation.y = fr * ej;
        c.mat.uniforms.uAlpha.value = ca;
        c.mat.uniforms.uDim.value = dim * ej;
        c.mat.uniforms.uRadius.value = mix(.06, .02, ej);
        c.sh.visible = c.mesh.visible;
        c.sh.position.set(cx, cy - cs * .5, cz - .05);
        c.sh.scale.set(cs * c.aspect * 1.25, cs * .14, 1);
        c.sh.material.uniforms.uAlpha.value = ca * .55 * ej;
      }
      if (c.play) {
        const ps = cs * .22;
        c.play.visible = c.mesh.visible && !(vid && vid.card === c && c.mat.userData.video);
        c.play.position.set(cx, cy, cz + .01);
        c.play.rotation.y = c.mesh.rotation.y;
        c.play.scale.set(ps, ps, 1);
        c.play.material.opacity = ca;
      }
    });
  });

  const off = Math.abs(home.pos - near);
  homeA = (1 - smooth(.08, .42, off)) * (1 - smooth(0, .25, e));
  if (`${near}` !== lastHq) {
    lastHq = `${near}`;
    const o = T[near];
    const it = o.show.it;
    const q = it ? quoteOf(it, o.show.ref.k) : null;
    const b = hq.querySelector('b');
    b.textContent = q || it?.title || '';
    b.classList.toggle('q', !!q);
    hq.querySelector('span').textContent = it ? (o.day ? [it.agency, fmtDate(it.date)].filter(Boolean).join(' · ') : meta(it)) : '';
    hq.style.top = `${G.cy + G.rpx * 1.22}px`;
    fitQuote(b);
    tn.textContent = o.t.name;
  }
  hq.style.opacity = homeA;
  tn.style.opacity = homeA;

  if (!SHOT) orbVideo(!entered && off < .03 && enter < .02 ? T[near] : null);
  if (T.some((o) => o.vid?.on && !o.vid.el.paused)) busy = true;
  const fi = clamp(Math.round(flow.pos), 0, (T[cur].cards?.length || 1) - 1);
  if (entered) {
    const c = T[cur].cards?.[fi];
    const key = c ? c.item.id : '';
    if (key !== lastLabel) {
      lastLabel = key;
      const it = c?.item;
      const q = it ? quoteOf(it, kOf(it)) : null;
      const b = label.querySelector('b');
      b.textContent = q || it?.title || '';
      b.classList.toggle('q', !!q);
      label.querySelector('span').textContent = it ? (q ? `${it.title} · ${meta(it)}` : meta(it)) : '';
      fitQuote(b);
    }
    label.style.opacity = (1 - smooth(.08, .42, Math.abs(flow.pos - fi))) * smooth(.5, 1, e);
    focusVideo(enter > .9 && c && Math.abs(flow.pos - fi) < .2 && c.item.type === 'video' ? c : null);
    if (vid && !vid.el.paused) busy = true;
  } else { focusVideo(null); label.style.opacity = 0; }
  const dk = entered ? `f${cur}:${fi}:${T[cur].cards?.length || 0}` : `h${near}`;
  if (dk !== lastDots) {
    lastDots = dk;
    const n = entered ? (T[cur].cards?.length || 0) : T.length;
    const on = entered ? fi : near;
    if (dots.children.length !== n) dots.innerHTML = '<i></i>'.repeat(n);
    [...dots.children].forEach((el, j) => el.classList.toggle('on', j === on));
    $('#prev').classList.toggle('can', on > 0);
    $('#next').classList.toggle('can', on < n - 1);
  }
  for (const m of fades) {
    if (m.uHas) { m.uHas.value = Math.min(1, m.uHas.value + dt / .28); if (m.uHas.value >= 1) fades.delete(m); }
    else { m.uMix.value = Math.min(1, m.uMix.value + dt / .32); if (m.uMix.value >= 1) fades.delete(m); }
    busy = true;
  }
  return !!busy;
}

function hideCard(c) {
  c.mesh.visible = false;
  for (const x of [c.play, c.sh, c.ring]) if (x) x.visible = false;
}

let raf = 0, last = 0, visible = true, firstFrame = false, woke = true;
const clock0 = performance.now();
const asleep = () => !visible || viewerOpen() || findOpen();
export function wake() { if (!raf && !asleep()) { last = performance.now(); woke = true; raf = requestAnimationFrame(loop); } }
let dpr = DPR, slow = 0, good = 0, frames = 0, pace = 1e9, raised = false;
function adapt(ms) {
  if (woke || ms < 7 || ++frames < 30) return;
  pace = Math.min(pace * 1.002, ms);
  if (pace > 28) return;
  if (ms > pace * 1.7) { slow++; good = 0; } else { slow = Math.max(0, slow - 1); good++; }
  if (slow > 30 && dpr > 1) { dpr = Math.max(1, dpr - .35); slow = 0; }
  else if (good > 300 && dpr < DPR && !raised) { dpr = Math.min(DPR, dpr + .35); raised = true; good = 0; }
  else return;
  renderer.setPixelRatio(dpr); renderer.setSize(W, H, false);
}
function loop(ts) {
  raf = 0;
  adapt(ts - last);
  woke = false;
  const dt = Math.min(.05, Math.max(.001, (ts - last) / 1000)); last = ts;
  const now = (ts - clock0) / 1000;
  const busy = layout(now, dt);
  if (pending && !asleep() && Math.abs(home.pos - pending.ti) < .05) { const p = pending; pending = null; enterTopic(p.ti, p.j); }
  renderer.render(scene, camera);
  if (SHOT && T.length) { const o = T[Math.round(home.pos)]; const u = o?.orb.material.uniforms; window.__shotReady = !!u && (!o.show.img || (u.uHasTex.value >= 1 && u.uMix.value >= 1)) && !busy; }
  if (!firstFrame && T.length && T[clamp(Math.round(home.pos), 0, T.length - 1)].orb.material.uniforms.uHasTex.value > .99) firstPaint();
  if (asleep()) { orbVideo(null); focusVideo(null); return; }
  if (busy || pending || !firstFrame) raf = requestAnimationFrame(loop);
}
function firstPaint() {
  if (firstFrame) return;
  firstFrame = true;
  const fp = $('#fp');
  if (!fp) return;
  fp.classList.add('out');
  setTimeout(() => fp.remove(), 400);
}
new IntersectionObserver((es) => { visible = es[0].isIntersecting; if (visible) wake(); }).observe(stage);
document.addEventListener('visibilitychange', () => { visible = !document.hidden; if (visible) wake(); });
canvas.addEventListener('webglcontextrestored', () => wake());

function startEnter(to) {
  tw.from = enter; tw.to = to; tw.t0 = (performance.now() - clock0) / 1000; tw.dur = reduced.matches ? .001 : to ? .46 : .36;
  if (reduced.matches) canvas.animate([{ opacity: .35 }, { opacity: 1 }], { duration: 180 });
}
let topicNav = false;
const topicClose = () => { topicNav = false; leaveTopic(); };
function enterTopic(i, j, { push = true } = {}) {
  const o = T[i];
  if (j == null) { const ref = o.show.ref; j = Math.max(0, ref ? o.t.items.indexOf(ref.id) : 0); }
  for (const x of T) if (x.cards && x !== o && x.i !== lastTopic) dropCards(x);
  lastTopic = i;
  cur = i; entered = true;
  ensureCards(i);
  flow.pos = flow.target = j; flow.vel = 0;
  home.target = i;
  document.body.classList.add('in');
  tname.textContent = o.t.name;
  lastLabel = '';
  startEnter(1);
  if (!topicNav) { topicNav = true; if (push) nav.push(topicClose); else nav.soft(topicClose); }
  o.head = o.show.paper;
  wake();
}
function leaveTopic() {
  if (!entered) return;
  entered = false;
  const o = T[cur];
  o.head = false;
  document.body.classList.remove('in');
  startEnter(0);
  wake();
}
function go(dir) {
  pending = null;
  const sc = entered ? flow : home;
  const n = entered ? T[cur].cards.length : T.length;
  sc.target = clamp(Math.round(sc.target) + dir, 0, n - 1);
  wake();
}

function rectOf(mesh, round) {
  tmp.copy(mesh.position).project(camera);
  const k = H / (VH * (camera.position.z - mesh.position.z) / 8);
  const w = (round ? mesh.scale.x * 2 : mesh.scale.x) * k, h = (round ? mesh.scale.x * 2 : mesh.scale.y) * k;
  return { x: (tmp.x * .5 + .5) * W - w / 2, y: (-tmp.y * .5 + .5) * H - h / 2, w, h, r: round ? h / 2 : 10 };
}
const follow = (id) => {
  const j = entered ? T[cur].t.items.indexOf(id) : -1;
  if (j >= 0) { flow.pos = flow.target = j; flow.vel = 0; lastLabel = ''; }
};
function openCard(c) {
  openItem(c.item, { m: kOf(c.item), from: rectOf(c.mesh, c.orb), onClose: wake, onOpen: follow });
}
function openCurrent() {
  if (!entered) return enterTopic(Math.round(home.target));
  const c = T[cur].cards[Math.round(flow.target)];
  if (c) openCard(c);
}
function openLead() {
  const o = T[clamp(Math.round(home.pos), 0, T.length - 1)];
  if (o?.show.it) openItem(o.show.it, { m: o.show.ref.k, from: rectOf(o.orb, true), onClose: wake });
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
    if (o.cards && entered && i === cur) o.cards.forEach((c) => c.mesh.visible && objs.push(c.mesh));
  });
  const hit = ray.intersectObjects(objs, false)[0];
  if (!hit) return;
  const ud = hit.object.userData;
  if (ud.kind === 'orb') {
    if (entered) { if (ud.i === cur) nav.back(); return; }
    if (ud.i === Math.round(home.pos)) enterTopic(ud.i); else { home.target = ud.i; wake(); }
  } else if (ud.kind === 'card') {
    if (ud.j === Math.round(flow.pos)) openCurrent(); else { flow.target = ud.j; wake(); }
  }
}
function tap(x, y) {
  const inside = (el) => { const r = el.getBoundingClientRect(); return x >= r.left && x <= r.right && y >= r.top && y <= r.bottom; };
  if (!entered && homeA > .6 && inside(hq)) return openLead();
  if (entered && enter > .9 && inside(label)) return openCurrent();
  pick(x, y);
}

let drag = null;
const stepPx = () => (entered ? .64 * W : (geom().r * 2.18 / VW) * W);
stage.addEventListener('pointerdown', (e) => {
  if (e.button !== 0 || drag?.on || asleep() || e.target.closest('#top,.nav,.sheet')) return;
  pending = null;
  const sc = entered ? flow : home;
  drag = { x: e.clientX, y: e.clientY, t: performance.now(), pos0: sc.pos, sc, on: false, v: 0, lx: e.clientX, lt: performance.now(), id: e.pointerId };
});
stage.addEventListener('pointermove', (e) => {
  if (!drag || e.pointerId !== drag.id) return;
  const dx = e.clientX - drag.x, dy = e.clientY - drag.y;
  if (!drag.on) {
    if (Math.abs(dx) > 6 && Math.abs(dx) > Math.abs(dy) * 1.1) {
      drag.on = true; drag.x = e.clientX; drag.pos0 = drag.sc.pos; drag.sc.drag = true; drag.sc.vel = 0;
      stage.setPointerCapture(e.pointerId); canvas.classList.add('drag');
    } else if (Math.abs(dy) > 10) { drag = null; return; } else return;
  }
  const step = stepPx();
  const n = entered ? T[cur].cards.length : T.length;
  const t = performance.now();
  const inst = -((e.clientX - drag.lx) / step) / Math.max(.001, (t - drag.lt) / 1000);
  drag.v = mix(drag.v, inst, .45);
  drag.lx = e.clientX; drag.lt = t;
  let p = drag.pos0 - (e.clientX - drag.x) / step;
  if (p < 0) p *= .3; if (p > n - 1) p = n - 1 + (p - n + 1) * .3;
  drag.sc.pos = drag.sc.target = p;
  wake();
});
const endDrag = (e) => {
  if (!drag || e.pointerId !== drag.id) return;
  const d = drag; drag = null;
  canvas.classList.remove('drag');
  if (d.on) {
    d.sc.drag = false;
    const n = entered ? T[cur].cards.length : T.length;
    const stale = performance.now() - d.lt > 90;
    const v = stale ? 0 : clamp(d.v, -14, 14);
    const base = Math.round(d.pos0);
    let to = reduced.matches ? Math.round(d.sc.pos + Math.sign(v) * (Math.abs(v) > .8 ? .5 : 0)) : Math.round(d.sc.pos + v * .2);
    to = clamp(clamp(to, base - 4, base + 4), 0, n - 1);
    d.sc.target = to; d.sc.vel = reduced.matches ? 0 : v;
    wake();
  } else if (e.type === 'pointerup' && performance.now() - d.t < 450) tap(e.clientX, e.clientY);
};
stage.addEventListener('pointerup', endDrag);
stage.addEventListener('pointercancel', endDrag);
// Touch pointers start implicitly captured by the canvas; moving capture to the stage fires lostpointercapture on the canvas.
stage.addEventListener('lostpointercapture', (e) => { if (e.target === stage) endDrag(e); });
let wheelAcc = 0, wheelT = 0;
canvas.addEventListener('wheel', (e) => {
  const dx = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : (viewport || e.shiftKey ? e.deltaY : 0);
  if (!dx) return;
  e.preventDefault();
  const t = performance.now();
  if (t - wheelT > 260) wheelAcc = 0;
  wheelT = t; wheelAcc += dx;
  if (Math.abs(wheelAcc) > 60) { go(Math.sign(wheelAcc)); wheelAcc = 0; wheelT = t + 200; }
}, { passive: false });
addEventListener('keydown', (e) => {
  if (e.key === 'Escape') { nav.back(); return; }
  if (asleep() || e.target.closest?.('input,textarea')) return;
  if (e.key === 'ArrowRight') { go(1); e.preventDefault(); }
  else if (e.key === 'ArrowLeft') { go(-1); e.preventDefault(); }
  else if (e.key === 'Enter' && (e.target === canvas || e.target === document.body)) { openCurrent(); e.preventDefault(); }
});
hq.addEventListener('click', openLead);
label.addEventListener('click', openCurrent);
$('#back').addEventListener('click', () => nav.back());
$('#prev').addEventListener('click', () => go(-1));
$('#next').addEventListener('click', () => go(1));
$('#share').addEventListener('click', () => {
  if (entered) {
    const c = T[cur]?.cards?.[Math.round(flow.target)];
    if (c) shareItem(c.item, { m: kOf(c.item) });
    return;
  }
  const o = T[clamp(Math.round(home.pos), 0, T.length - 1)];
  if (o?.show.it) shareItem(o.show.it, { m: o.show.ref.k });
});
$('#search').addEventListener('click', () => openFind({ openFile: showFile, onClose: () => { sizeStage(); wake(); } }));
$('#dice').addEventListener('click', () => {
  const all = [];
  for (const o of T) for (const id of o.t.items) (itemOf(id)?.mo || []).forEach((m, k) => { if (!m.g) all.push([id, k]); });
  if (!all.length) return;
  const [id, k] = all[Math.floor(Math.random() * all.length)];
  showFile(id, { m: k });
});

function setCountry(id) {
  if (id === country || !state.countries.some((c) => c.id === id)) return;
  focusVideo(null);
  country = id; entered = false; enter = 0; cur = 0; lastTopic = -1;
  document.body.classList.remove('in');
  build();
  home.pos = home.target = 0; lastHq = ''; lastDots = '';
  wake();
}
function showFile(id, { m, page, t, muted } = {}) {
  const item = itemOf(id);
  if (!item) return;
  const topic = state.topics.find((x) => x.id === item.topic);
  if (!topic) return;
  setCountry(topic.country || 'us');
  const ti = T.findIndex((o) => o.t.id === item.topic);
  const j = T[ti].t.items.indexOf(id);
  openItem(item, { m, page, t, muted, onClose: wake, onOpen: follow });
  if (entered && cur === ti) { flow.pos = flow.target = j; flow.vel = 0; lastLabel = ''; return; }
  if (entered) leaveTopic();
  home.pos = home.target = ti; home.vel = 0;
  pending = { ti, j };
}

async function bridgeLaunch() {
  if (!embedded) {
    const q = new URLSearchParams((location.search + '&' + location.hash.slice(1)).replace(/^\?/, ''));
    return { file: q.get('file'), m: q.get('m'), page: q.get('page'), t: q.get('t'), topic: q.get('topic') };
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
    const r = await fetch(asset('catalog.json?v=2'));
    if (!r.ok) throw new Error(r.status);
    const cat = await r.json();
    Object.assign(state, { topics: cat.topics, items: cat.items, countries: cat.countries, daily: cat.daily || null });
  } catch (err) {
    $('#err').hidden = false;
    $('#err').textContent = 'Could not load the files. Try again later.';
    $('#fp')?.remove();
    return;
  }
  country = state.countries[0]?.id || 'us';
  build();
  if (SHOT === 'share') {
    const h = new URLSearchParams(location.hash.slice(1));
    const it = itemOf(h.get('f'));
    const i = it ? T.findIndex((o) => o.t.id === it.topic) : -1;
    if (i >= 0) {
      const o = T[i];
      o.show = orbContent(o, { id: it.id, k: Number(h.get('m') || 0) });
      o.show.video = null;
      if (it.type === 'audio' && it.wave?.length) {
        o.ring = new THREE.Mesh(quad, new THREE.MeshBasicMaterial({ map: ringTex(it.wave), transparent: true, depthWrite: false }));
        o.ring.renderOrder = -1;
        scene.add(o.ring);
      }
      home.pos = home.target = i;
      ensureOrbTex(o);
    }
    wake();
    return;
  }
  if (SHOT) {
    home.pos = home.target = Math.max(0, T.findIndex((o) => o.t.id === new URLSearchParams(location.hash.slice(1)).get('t')));
    wake();
    return;
  }
  const pk = todayPick();
  const start = Math.max(0, pk ? T.findIndex((o) => o.t.id === itemOf(pk.id)?.topic) : 0);
  home.pos = home.target = start;
  T.slice(Math.max(0, start - 1), start + 2).forEach(ensureOrbTex);
  wake();
  setTimeout(firstPaint, 4000);
  const l = await bridgeLaunch();
  if (l?.file && itemOf(l.file)) {
    const it = itemOf(l.file);
    const m = l.m != null && it.mo?.[Number(l.m)] ? Number(l.m) : (l.page || l.t ? null : firstMoment(it));
    showFile(l.file, { m, page: Number(l.page) || null, t: Number(l.t) || null, muted: true });
    return;
  }
  const lt = state.topics.find((x) => x.id === l?.topic);
  if (lt) {
    setCountry(lt.country || 'us');
    const i = T.findIndex((o) => o.t.id === lt.id);
    home.pos = home.target = i;
    enterTopic(i, undefined, { push: false });
  }
}
boot();
