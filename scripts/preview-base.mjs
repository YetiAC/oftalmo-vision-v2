// Prepara dist/ para la vista previa en GitHub Pages (https://<usuario>.github.io/<repo>/):
// antepone la ruta base a los enlaces absolutos y bloquea la indexación.
// No se usa para el sitio real de Hostinger.
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const base = (process.env.PREVIEW_BASE || '').replace(/\/$/, '');
if (!base) throw new Error('Define PREVIEW_BASE, por ejemplo /oftalmo-vision-v2');
const dist = fileURLToPath(new URL('../dist/', import.meta.url));

const fix = (u) => (u.startsWith('/') && !u.startsWith('//') && !u.startsWith(base + '/') ? base + u : u);

async function* walk(dir) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) yield* walk(p); else yield p;
  }
}

let n = 0;
for await (const file of walk(dist)) {
  if (!/\.(html|css)$/.test(file)) continue;
  let s = await readFile(file, 'utf8');
  const before = s;
  s = s.replace(/\b(href|src|action|poster)="([^"]*)"/g, (_, a, u) => `${a}="${fix(u)}"`);
  s = s.replace(/\bsrcset="([^"]*)"/g, (_, v) => `srcset="${v.split(',').map((part) => { const t = part.trim(); const [u, ...rest] = t.split(/\s+/); return [fix(u), ...rest].join(' '); }).join(', ')}"`);
  s = s.replace(/url\((['"]?)(\/[^)'"]*)\1\)/g, (_, q, u) => `url(${q}${fix(u)}${q})`);
  if (s !== before) { await writeFile(file, s); n++; }
}
await writeFile(join(dist, 'robots.txt'), 'User-agent: *\nDisallow: /\n');
console.log(`Vista previa lista con base ${base}: ${n} archivos ajustados, robots.txt bloquea indexación.`);
