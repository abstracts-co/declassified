import puppeteer from 'puppeteer-core';
import { readFileSync, writeFileSync, existsSync, statSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const data = join(root, 'out/data');
const base = process.env.BASE || 'https://abstracts-co.github.io/declassified-data/';
const url = process.env.URL || 'http://127.0.0.1:8794/index.html';
const cat = JSON.parse(readFileSync(join(data, 'catalog.json'), 'utf8'));
const force = !!process.env.FORCE;

const yr = (d) => String(d || '').slice(0, 4);
const metaOf = (it) => [it.title, it.agency, yr(it.date)].filter(Boolean).join(' · ');
const nested = (q) => q.replace(/[“"]([^“”"]*)[”"]/g, '‘$1’');
function cut(q, n = 70) {
  q = nested(q);
  if (q.length <= n) return q;
  const head = q.slice(0, n);
  const at = Math.max(...[', ', '; ', ': ', '. ', ' — '].map((p) => head.lastIndexOf(p)));
  const end = at > n * .45 ? at + 1 : head.lastIndexOf(' ');
  return `${q.slice(0, end).replace(/[,;:—\s]+$/, '')}…`;
}

const jobs = [];
for (const [id, it] of Object.entries(cat.items)) {
  if (it.type === 'audio') {
    const k = (it.mo || []).findIndex((m) => !m.g);
    if (k >= 0) jobs.push({ id, k, it, out: join(data, `${it.dir}share-m${k}.jpg`), src: join(data, it.media) });
    continue;
  }
  (it.mo || []).forEach((m, k) => {
    if (m.g || !m.o) return;
    jobs.push({ id, k, it, out: join(data, `${it.dir}share-m${k}.jpg`), src: join(data, it.dir + m.o) });
  });
}

const b = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', headless: 'new', args: ['--no-sandbox', '--enable-gpu', '--use-angle=gl', '--hide-scrollbars'] });
const only = process.env.ONLY ? new Set(process.env.ONLY.split(',')) : null;
const done = new Set();
try {
  const p = await b.newPage();
  await p.setViewport({ width: 1200, height: 630, deviceScaleFactor: 1 });
  for (const j of jobs) {
    if (only && !only.has(j.id)) continue;
    if (!force && existsSync(j.out) && statSync(j.out).mtimeMs > statSync(j.src).mtimeMs) { done.add(`${j.id}:${j.k}`); continue; }
    await p.goto(`${url}?r=${encodeURIComponent(j.id)}-${j.k}#shot=share&f=${encodeURIComponent(j.id)}&m=${j.k}`, { waitUntil: 'load' });
    try { await p.waitForFunction('window.__shotReady === true', { timeout: 20000, polling: 100 }); } catch { console.log('timeout', j.id, j.k); continue; }
    const png = join(root, 'work/_m/share.png');
    await p.screenshot({ path: png });
    execFileSync('nice', ['-n', '19', 'ffmpeg', '-y', '-v', 'error', '-i', png, '-q:v', '3', j.out]);
    done.add(`${j.id}:${j.k}`);
    console.log('ok', j.id, j.k);
  }
} finally { await b.close(); }

const items = {};
const entry = (it, k) => {
  const m = it.mo[k];
  const q = m.k === 'p' ? m.q : null;
  return { title: q ? cut(q) : it.title, description: q ? metaOf(it) : [it.agency, yr(it.date)].filter(Boolean).join(' · '), image: `${base}${it.dir}share-m${k}.jpg` };
};
for (const j of jobs) if (done.has(`${j.id}:${j.k}`)) items[`file=${j.id}&m=${j.k}`] = entry(j.it, j.k);
for (const t of cat.topics) {
  const lead = t.lead && done.has(`${t.lead[0]}:${t.lead[1]}`) ? entry(cat.items[t.lead[0]], t.lead[1]) : null;
  for (const id of t.items) {
    const it = cat.items[id];
    const k = (it.mo || []).findIndex((m, i) => !m.g && done.has(`${id}:${i}`));
    items[`file=${id}`] = k >= 0 ? entry(it, k) : { title: it.title, description: [it.agency, yr(it.date)].filter(Boolean).join(' · ') };
  }
  if (lead) items[`topic=${t.id}`] = { title: t.name, description: lead.title, image: lead.image };
}
writeFileSync(join(data, 'share.json'), JSON.stringify({ v: 1, items }));
console.log('share entries', Object.keys(items).length);
