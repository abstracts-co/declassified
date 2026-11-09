import puppeteer from 'puppeteer-core';
const [,, url, out = 'shot.png', w = '580', h = '900', steps = ''] = process.argv;
const b = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', headless: 'new', args: ['--no-sandbox', '--enable-gpu', '--use-angle=gl', '--autoplay-policy=no-user-gesture-required', '--hide-scrollbars'] });
try {
  const p = await b.newPage();
  await p.setViewport({ width: Number(w), height: Number(h), deviceScaleFactor: 2 });
  p.on('console', (m) => console.log('console:', m.type(), m.text()));
  p.on('pageerror', (e) => console.log('pageerror:', e.message));
  await p.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });
  await new Promise((r) => setTimeout(r, 2500));
  let n = 0;
  for (const s of steps.split(' | ').filter(Boolean)) {
    const [cmd, ...a] = s.split(':');
    const frame = p.frames().find((f) => f.url().includes('index.html')) || p.mainFrame();
    if (cmd === 'click') { await p.mouse.click(Number(a[0]), Number(a[1])); }
    else if (cmd === 'drag') { const [x0, y0, x1] = a.map(Number); await p.mouse.move(x0, y0); await p.mouse.down(); for (let i = 1; i <= 12; i++) { await p.mouse.move(x0 + (x1 - x0) * i / 12, y0); await new Promise((r) => setTimeout(r, 16)); } await p.mouse.up(); }
    else if (cmd === 'wait') { await new Promise((r) => setTimeout(r, Number(a[0]))); }
    else if (cmd === 'eval') { console.log('eval:', JSON.stringify(await frame.evaluate(a.join(':')))); }
    else if (cmd === 'shot') { await p.screenshot({ path: a[0] || out.replace('.png', `-${++n}.png`) }); }
    else if (cmd === 'key') { await p.keyboard.press(a[0]); }
  }
  await p.screenshot({ path: out });
} finally { await b.close(); }
