import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const pages = ['', 'menu', 'visit'];
test('exported pages have unique metadata, accessible headings and local links that exist', () => {
  const titles = new Set();
  for (const route of pages) {
    const html = readFileSync(join('out', route, 'index.html'), 'utf8');
    const title = html.match(/<title>(.*?)<\/title>/)?.[1];
    assert.ok(title); titles.add(title);
    assert.equal((html.match(/<h1[\s>]/g) || []).length, 1);
    assert.match(html, /name="description"/);
    assert.match(html, /property="og:title"/);
    assert.match(html, /property="og:description"/);
    assert.match(html, /name="robots" content="noindex, nofollow"/);
    assert.match(html, /rel="canonical"/);
    for (const [, href] of html.matchAll(/(?:href|src)="(\/[^"?#]*)/g)) {
      const local = href.endsWith('/') ? href + 'index.html' : href;
      assert.ok(existsSync(join('out', local)), `Broken local asset/link ${href} on ${route || '/'}`);
    }
    assert.doesNotMatch(html, /tel:|mailto:|aggregateRating|openingHoursSpecification|priceRange/);
  }
  assert.equal(titles.size, 3);
});
test('structured data uses only researched facts and preview crawlers are blocked', () => {
  const html = readFileSync('out/index.html', 'utf8');
  const json = html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)?.[1];
  const schema = JSON.parse(json);
  assert.equal(schema['@type'], 'Restaurant');
  assert.equal(schema.address.addressLocality, 'Rochedale');
  assert.equal(schema.address.postalCode, '4123');
  assert.equal(schema.name, 'Aaram Fusion');
  assert.ok(schema.hasMenu.endsWith('/menu/'));
  assert.equal(schema.telephone, undefined);
  assert.match(readFileSync('out/robots.txt', 'utf8'), /Disallow: \//);
  const sitemap = readFileSync('out/sitemap.xml', 'utf8');
  assert.equal((sitemap.match(/<loc>/g) || []).length, 3);
  assert.doesNotMatch(sitemap, /localhost|example\.com/);
});
