import { createServer } from 'node:http';
import { createReadStream, statSync, existsSync } from 'node:fs';
import { join, extname, normalize } from 'node:path';
const root = process.argv[2] || '.';
const port = Number(process.argv[3] || 8790);
const types = { '.html': 'text/html', '.js': 'text/javascript', '.json': 'application/json', '.webp': 'image/webp', '.png': 'image/png', '.jpg': 'image/jpeg', '.mp4': 'video/mp4', '.m4a': 'audio/mp4', '.mp3': 'audio/mpeg', '.css': 'text/css', '.svg': 'image/svg+xml' };
createServer((req, res) => {
  const p = normalize(decodeURIComponent(new URL(req.url, 'http://x').pathname)).replace(/^(\.\.[/\\])+/, '');
  let f = join(root, p);
  if (existsSync(f) && statSync(f).isDirectory()) f = join(f, 'index.html');
  if (!existsSync(f)) { res.writeHead(404, { 'access-control-allow-origin': '*' }); return res.end('nf'); }
  const size = statSync(f).size;
  const h = { 'content-type': types[extname(f)] || 'application/octet-stream', 'access-control-allow-origin': '*', 'accept-ranges': 'bytes', 'cache-control': 'no-store' };
  const m = /bytes=(\d*)-(\d*)/.exec(req.headers.range || '');
  if (m) { const s = Number(m[1] || 0), e = m[2] ? Number(m[2]) : size - 1; res.writeHead(206, { ...h, 'content-range': `bytes ${s}-${e}/${size}`, 'content-length': e - s + 1 }); return createReadStream(f, { start: s, end: e }).pipe(res); }
  res.writeHead(200, { ...h, 'content-length': size }); createReadStream(f).pipe(res);
}).listen(port, '127.0.0.1', () => console.log('serving', root, port));
