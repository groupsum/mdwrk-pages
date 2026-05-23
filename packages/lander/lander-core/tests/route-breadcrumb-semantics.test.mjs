import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const testRoot = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(testRoot, '..', '..', '..', '..');
const distRoot = path.resolve(testRoot, '..', 'dist');
const distIndex = path.join(distRoot, 'index.js');
const smokeIndex = path.join(distRoot, 'index.route-boundary.mjs');
const contentContractDist = path.join(repoRoot, 'packages', 'lander', 'lander-content-contract', 'dist', 'index.js').replace(/\\/g, '/');

fs.writeFileSync(
  smokeIndex,
  fs.readFileSync(distIndex, 'utf8').replaceAll('"@mdwrk/lander-content-contract"', `"file:///${contentContractDist}"`),
);

const coreModule = await import(`file:///${smokeIndex.replace(/\\/g, '/')}`);

fs.rmSync(smokeIndex, { force: true });

const { compileLanderSite, normalizeRouteSlug, canonicalForSlug } = coreModule;

assert.equal(normalizeRouteSlug('docs/getting-started'), '/docs/getting-started/');
assert.equal(canonicalForSlug('https://example.test/', 'docs/getting-started'), 'https://example.test/docs/getting-started/');
assert.equal('buildSitemap' in coreModule, false);
assert.equal('buildRobotsTxt' in coreModule, false);
assert.equal('buildLlmsTxt' in coreModule, false);

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
      description: 'Example home page for route semantics validation.',
      h1: 'Example',
      intro: 'Example intro text that gives crawlers and validators a useful first paragraph.',
      sections: [{ id: 'hero', kind: 'hero', title: 'Example', subtitle: 'Portable lander.' }],
    },
    {
      kind: 'answer',
      slug: '/docs/getting-started/',
      title: 'Getting Started',
      description: 'Detailed getting started guide for route and breadcrumb semantics.',
      h1: 'Getting Started',
      intro: 'Route semantics should expose stable breadcrumb inputs without owning breadcrumb UI or schema rendering.',
      sections: [{ id: 'body', kind: 'markdown', title: 'Body', body: 'See the [home page](/) and continue through the setup flow.' }],
    },
  ],
});

const docsPage = site.pageByPath.get('/docs/getting-started/');
assert.ok(docsPage);
assert.equal(docsPage?.canonicalUrl, 'https://example.test/docs/getting-started/');
assert.deepEqual(docsPage?.internalLinks, ['/']);
assert.deepEqual(
  docsPage?.breadcrumbs,
  [
    { label: 'Home', href: '/' },
    { label: 'Docs', href: '/docs/' },
    { label: 'Getting Started', href: '/docs/getting-started/' },
  ],
);
assert.ok(docsPage?.componentIntents.some((intent) => intent.kind === 'breadcrumbs'));
assert.equal(site.diagnostics.filter((item) => item.level === 'error').length, 0);
