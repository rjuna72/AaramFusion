import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import { resolve } from 'node:path';

const source = resolve(process.argv[2] || 'assets/originals');
await mkdir('public/images', { recursive: true });
for (const width of [640, 1200, 1800]) {
  await sharp(resolve(source, 'illustrative-avocado-toast.jpg')).resize({ width }).webp({ quality: 80 }).toFile(`public/images/breakfast-${width}.webp`);
}
for (const width of [480, 900]) {
  await sharp(resolve(source, 'illustrative-coffee.jpg')).resize(width, Math.round(width * 4 / 3), { fit: 'cover', position: 'attention' }).webp({ quality: 80 }).toFile(`public/images/coffee-${width}.webp`);
}
console.log('Prepared five responsive WebP assets.');
