import puppeteer from 'puppeteer-core';
import { mkdirSync, writeFileSync, rmSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
const [,, url, out = 'demo.webm', w = '580', h = '760', script = 'tour'] = process.argv;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const b = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', headless: 'new', args: ['--no-sandbox', '--enable-gpu', '--use-angle=gl', '--autoplay-policy=no-user-gesture-required', '--hide-scrollbars'] });
try {
  const p = await b.newPage();
  await p.setViewport({ width: Number(w), height: Number(h), deviceScaleFactor: 1 });
  p.on('pageerror', (e) => console.log('pageerror:', e.message));
  await p.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });
  await sleep(1500);
  const frame = () => p.frames().find((f) => f.url().includes('index.html')) || p.mainFrame();
  const W = Number(w), H = Number(h);
  const swipe = async (x0, x1, y = H * .5, ms = 520) => {
    await p.mouse.move(x0, y); await p.mouse.down();
    const n = Math.round(ms / 16);
    for (let i = 1; i <= n; i++) { const t = i / n; const e = t < .5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2; await p.mouse.move(x0 + (x1 - x0) * e, y); await sleep(16); }
    await p.mouse.up();
  };
  const tap = async (x, y) => { await p.mouse.move(x, y); await sleep(120); await p.mouse.down(); await sleep(60); await p.mouse.up(); };
  const dir = `${out}.frames`; rmSync(dir, { recursive: true, force: true }); mkdirSync(dir);
  const cdp = await p.createCDPSession();
  const shots = [];
  cdp.on('Page.screencastFrame', async (f) => {
    const n = shots.length; writeFileSync(`${dir}/${String(n).padStart(5, '0')}.jpg`, Buffer.from(f.data, 'base64'));
    shots.push(f.metadata.timestamp);
    cdp.send('Page.screencastFrameAck', { sessionId: f.sessionId }).catch(() => {});
  });
  await cdp.send('Page.startScreencast', { format: 'jpeg', quality: 92, everyNthFrame: 1 });
  const rec = { stop: async () => {
    await cdp.send('Page.stopScreencast');
    const end = Date.now() / 1000;
    const lines = shots.map((t, i) => `file '${String(i).padStart(5, '0')}.jpg'\nduration ${((shots[i + 1] ?? end) - t).toFixed(4)}`);
    writeFileSync(`${dir}/list.txt`, lines.join('\n') + `\nfile '${String(shots.length - 1).padStart(5, '0')}.jpg'\n`);
    execFileSync('ffmpeg', ['-v', 'error', '-y', '-f', 'concat', '-safe', '0', '-i', `${dir}/list.txt`, '-vf', 'fps=30,scale=trunc(iw/2)*2:trunc(ih/2)*2,format=yuv420p', '-c:v', 'libx264', '-crf', '20', '-movflags', '+faststart', out]);
    rmSync(dir, { recursive: true, force: true });
    console.log('frames', shots.length, 'seconds', (end - shots[0]).toFixed(1));
  } };
  const ev = (f) => frame().evaluate(f).catch(() => {});
  if (script === 'desktop') {
    await sleep(2200);
    for (let k = 0; k < 4; k++) { await swipe(W * .78, W * .3); await sleep(1250); }
    await swipe(W * .3, W * .75, H * .5, 420); await sleep(1100);
    await ev(() => document.querySelector('#pill').click()); await sleep(2300);
    await swipe(W * .75, W * .3); await sleep(1700);
    await swipe(W * .75, W * .3); await sleep(1500);
    await tap(W * .5, H * .44); await sleep(1700);
    await ev(() => document.querySelector('#vb').scrollBy({ top: 700, behavior: 'smooth' })); await sleep(1300);
    await ev(() => document.querySelector('#vh [aria-label=Contents]').click()); await sleep(1900);
    await ev(() => document.querySelectorAll('.toc button')[3]?.click()); await sleep(1700);
    await ev(() => document.querySelector('#vh .ic').click()); await sleep(900);
    await ev(() => document.querySelector('#back').click()); await sleep(1600);
    await swipe(W * .78, W * .3); await sleep(1000); await swipe(W * .78, W * .3); await sleep(1300);
    await ev(() => document.querySelector('#pill').click()); await sleep(2200);
    await swipe(W * .75, W * .3); await sleep(1200); await swipe(W * .75, W * .3); await sleep(2600);
    await tap(W * .5, H * .44); await sleep(3800);
    await ev(() => document.querySelector('#vh .ic').click()); await sleep(800);
    await ev(() => document.querySelector('#back').click()); await sleep(1500);
    await ev(() => document.querySelector('#search').click()); await sleep(700);
    await ev(() => { const q = document.querySelector('#q'); q.value = 'saucer'; q.dispatchEvent(new Event('input')); }); await sleep(2200);
    await ev(() => document.querySelectorAll('.hit')[0]?.click()); await sleep(3200);
    await ev(() => document.querySelector('#vh .ic').click()); await sleep(1500);
  } else if (script === 'phone') {
    await sleep(1800);
    for (let k = 0; k < 3; k++) { await swipe(W * .62, W * .12, H * .42); await sleep(1100); }
    await ev(() => document.querySelector('#pill').click()); await sleep(2200);
    await swipe(W * .6, W * .12, H * .42); await sleep(1600);
    await swipe(W * .6, W * .12, H * .42); await sleep(1600);
    await tap(180, H * .4); await sleep(1800);
    await ev(() => document.querySelector('#vb').scrollBy({ top: 600, behavior: 'smooth' })); await sleep(1500);
    await ev(() => document.querySelector('#vh .ic').click()); await sleep(900);
    await ev(() => document.querySelector('#dice').click()); await sleep(1200);
    await ev(() => document.querySelector('#back').click()); await sleep(800);
    await ev(() => document.querySelector('#dice').click()); await sleep(3500);
  } else {
    await sleep(Number(script) || 6000);
  }
  await rec.stop();
} finally { await b.close(); }
