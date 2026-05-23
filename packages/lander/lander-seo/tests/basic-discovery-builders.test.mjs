import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const testRoot = path.dirname(fileURLToPath(import.meta.url));
const seoDistRoot = path.resolve(testRoot, '..', 'dist');
const seoDistIndex = path.join(seoDistRoot, 'index.js');
const seoSmokeIndex = path.join(seoDistRoot, 'index.basic-discovery.mjs');
const coreDistIndex = path.resolve(testRoot, '..', '..', 'lander-core', 'dist', 'index.js').replace(/\\/g, '/');
const contentContractDist = path.resolve(testRoot, '..', '..', 'lander-content-contract', 'dist', 'index.js').replace(/\\/g, '/');
const coreSmokeIndex = path.resolve(testRoot, '..', '..', 'lander-core', 'dist', 'index.basic-discovery-core.mjs');

fs.writeFileSync(
  coreSmokeIndex,
  fs.readFileSync(coreDistIndex, 'utf8').replaceAll('"@mdwrk/lander-content-contract"', `"file:///${contentContractDist}"`),
);
fs.writeFileSync(
  seoSmokeIndex,
  fs.readFileSync(seoDistIndex, 'utf8').replaceAll('"@mdwrk/lander-core"', `"file:///${coreSmokeIndex.replace(/\\/g, '/')}"`),
);

const { compileLanderSite } = await import(`file:///${coreSmokeIndex.replace(/\\/g, '/')}`);
const seoModule = await import(`file:///${seoSmokeIndex.replace(/\\/g, '/')}`);

fs.rmSync(coreSmokeIndex, { force: true });
fs.rmSync(seoSmokeIndex, { force: true });

const { buildLlmsTxt, buildRobotsTxt, buildSitemap } = seoModule;

assert.equal(typeof buildSitemap, 'function');
assert.equal(typeof buildRobotsTxt, 'function');
assert.equal(typeof buildLlmsTxt, 'function');

const site = compileLanderSite({
  product: {
    name: 'Example',
    slug: 'example',
    tagline: 'Example tagline',
    description: 'Example portable product.',
    category: 'Software',
    canonicalUrl: 'https://example.test',
  },
  pages: [
    {
      kind: 'home',
      slug: '/',
      title: 'Example Home',
      description: 'Example home page for basic discovery builders.',
      h1: 'Example',
      intro: 'Example intro text that gives crawlers a useful first paragraph.',
      sections: [{ id: 'hero', kind: 'hero', title: 'Example', subtitle: 'Portable lander.' }],
    },
    {
      kind: 'answer',
      slug: '/docs/',
      title: 'Docs',
      description: 'Public docs page that should appear in discovery artifacts.',
      h1: 'Docs',
      intro: 'Public docs page with enough crawlable text to appear in llms and sitemap outputs.',
      sections: [{ id: 'body', kind: 'markdown', title: 'Body', body: 'Portable docs page for discovery coverage.' }],
    },
    {
      kind: 'answer',
      slug: '/draft/',
      title: 'Draft',
      description: 'Private draft page.',
      h1: 'Draft',
      intro: 'Private draft page that should stay out of public discovery outputs.',
      seo: { noindex: true },
      sections: [{ id: 'body', kind: 'markdown', title: 'Body', body: 'Private draft.' }],
    },
  ],
});

assert.deepEqual(
  buildSitemap(site),
  [
    { loc: 'https://example.test/' },
    { loc: 'https://example.test/docs/' },
  ],
);
assert.match(buildRobotsTxt(site), /Sitemap: https:\/\/example\.test\/sitemap\.xml/);
assert.match(buildRobotsTxt(site), /User-agent: OAI-SearchBot/);
assert.match(buildLlmsTxt(site), /# Example/);
assert.match(buildLlmsTxt(site), /\[Docs]\(https:\/\/example\.test\/docs\/\)/);
assert.doesNotMatch(buildLlmsTxt(site), /https:\/\/example\.test\/draft\//);
