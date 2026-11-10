import { build } from 'esbuild';
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const out = process.env.OUT || join(root, 'out');
const assets = process.env.ASSETS || './data/';
mkdirSync(out, { recursive: true });
await build({ entryPoints: [join(root, 'src/app.js')], bundle: true, format: 'esm', minify: !process.env.DEV, target: 'es2020', outfile: join(out, 'app.js'), legalComments: 'none', logLevel: 'warning', absWorkingDir: join(root, 'build'), nodePaths: [join(root, 'build/node_modules')] });
function homeData() {
  let cat;
  try { cat = JSON.parse(readFileSync(join(root, 'out/data/catalog.json'), 'utf8')); } catch { return null; }
  const fmt = (d) => {
    const [y, m, day] = String(d || '').split('-');
    if (!m || !day) return '';
    return `${Number(day)} ${['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][Number(m) - 1]} ${y}`;
  };
  const tix = Object.fromEntries(cat.topics.map((t, i) => [t.id, i]));
  let lq = {};
  try { lq = JSON.parse(readFileSync(join(root, 'work/lq.json'), 'utf8')); } catch {}
  const entry = (id, k) => {
    const it = cat.items[id];
    if (!it) return null;
    const mo = it.mo?.[k];
    const q = mo && mo.k === 'p' && !mo.g ? mo.q.replace(/[“"]([^“”"]*)[”"]/g, '‘$1’') : null;
    const yr = String(it.date || '').slice(0, 4);
    return [tix[it.topic], q, q ? null : it.title, [it.agency, yr].filter(Boolean).join(' · '), [it.agency, fmt(it.date)].filter(Boolean).join(' · '), lq[`${id}:${k}`] || null];
  };
  const m = {};
  const d = cat.daily || null;
  if (d) for (const r of [...d.rot, ...Object.values(d.pins)]) m[`${r[0]}:${r[1]}`] = entry(r[0], r[1]);
  const l = cat.topics.map((t) => (t.lead ? entry(t.lead[0], t.lead[1]) : [tix[t.id], null, t.name, '', '']));
  return { t: cat.topics.map((t) => [t.id, t.name, t.orb]), l, m, daily: d };
}
const home = homeData();
const html = readFileSync(join(root, 'src/index.html'), 'utf8')
  .replace('globalThis.__ASSETS__ = "./data/"', `globalThis.__ASSETS__ = ${JSON.stringify(assets)}`)
  .replace('globalThis.__HOME__ = null', `globalThis.__HOME__ = ${JSON.stringify(home).replace(/</g, '\\u003c')}`);
writeFileSync(join(out, 'index.html'), html);
console.log('built', out, assets);
