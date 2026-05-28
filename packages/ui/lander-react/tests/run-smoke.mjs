import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

const testRoot = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(testRoot, '..', '..', '..', '..');
const distRoot = path.resolve(testRoot, '..', 'dist');
const distIndex = path.join(distRoot, 'index.js');
const smokeIndex = path.join(distRoot, 'index.smoke.mjs');
const semanticDistRoot = path.join(distRoot, 'semantic');
const semanticSmokeRoot = path.join(distRoot, 'semantic.smoke');
const structuredDataReactDist = path.join(repoRoot, 'packages', 'machine', 'lander-react-structured-data', 'dist', 'index.js');
const structuredDataReactSmoke = path.join(repoRoot, 'packages', 'machine', 'lander-react-structured-data', 'dist', 'index.smoke.mjs');
const structuredDataDist = path.join(repoRoot, 'packages', 'contracts', 'structured-data', 'dist', 'index.js').replace(/\\/g, '/');

fs.writeFileSync(
  structuredDataReactSmoke,
  fs.readFileSync(structuredDataReactDist, 'utf8').replace('"@mdwrk/structured-data"', `"file:///${structuredDataDist}"`),
);

fs.writeFileSync(
  smokeIndex,
  fs.readFileSync(distIndex, 'utf8').replace(
    '"@mdwrk/lander-react-structured-data"',
    `"file:///${structuredDataReactSmoke.replace(/\\/g, '/')}"`,
  ).replaceAll('"./semantic/', '"./semantic.smoke/'),
);

fs.mkdirSync(semanticSmokeRoot, { recursive: true });
for (const fileName of fs.readdirSync(semanticDistRoot)) {
  if (!fileName.endsWith('.js')) continue;
  fs.writeFileSync(
    path.join(semanticSmokeRoot, fileName),
    fs.readFileSync(path.join(semanticDistRoot, fileName), 'utf8').replace(
      '"@mdwrk/lander-react-structured-data"',
      `"file:///${structuredDataReactSmoke.replace(/\\/g, '/')}"`,
    ),
  );
}

const {
  Article,
  BreadcrumbList,
  Course,
  FaqPage,
  Hero,
  LanderPage,
  MarkdownSectionView,
  PricingTable,
  Product,
  Quiz,
  SectionRenderer,
  SupportHub,
  TrustPolicySummary,
} = await import(`file:///${smokeIndex.replace(/\\/g, '/')}`);
fs.rmSync(smokeIndex, { force: true });
fs.rmSync(structuredDataReactSmoke, { force: true });
fs.rmSync(semanticSmokeRoot, { recursive: true, force: true });
const heroMarkup = renderToStaticMarkup(React.createElement(Hero, {
  section: { id: 'hero', kind: 'hero', title: 'Visible hero', subtitle: 'Visible shell only.' },
}));
assert.ok(heroMarkup.includes('Visible hero'));
assert.ok(heroMarkup.includes('lander-page__hero'));

const articleMarkup = renderToStaticMarkup(React.createElement(Article, {
  title: 'Prompt Delivery Studio',
  body: React.createElement('p', null, 'Article body'),
}));
assert.ok(articleMarkup.includes('application/ld+json'));
assert.ok(articleMarkup.includes('Prompt Delivery Studio'));

const productMarkup = renderToStaticMarkup(React.createElement(Product, {
  name: 'Prompt Delivery Studio',
  price: 49,
  priceCurrency: 'USD',
}));
assert.ok(productMarkup.includes('Prompt Delivery Studio'));
assert.ok(productMarkup.includes('USD 49'));

const courseMarkup = renderToStaticMarkup(React.createElement(Course, {
  name: 'Prompt Delivery 101',
  modules: [{ title: 'Module A' }],
}));
assert.ok(courseMarkup.includes('Module A'));

const quizMarkup = renderToStaticMarkup(React.createElement(Quiz, {
  name: 'Prompt QA',
  questions: [{ prompt: 'What is latency?', answer: 'Elapsed time.' }],
}));
assert.ok(quizMarkup.includes('What is latency?'));

const markdownMarkup = renderToStaticMarkup(React.createElement(MarkdownSectionView, {
  section: { id: 'install', kind: 'markdown', title: 'Install', body: 'Install and use the package.' },
}));
assert.ok(markdownMarkup.includes('Install and use the package.'));

const faqMarkup = renderToStaticMarkup(React.createElement(FaqPage, { items: [{ question: 'Does the lander emit JSON-LD?', answer: 'Yes, through the structured-data companion package.' }] }));
assert.ok(faqMarkup.includes('Frequently Asked Questions'));
assert.ok(faqMarkup.includes('Does the lander emit JSON-LD?'));

const pricingMarkup = renderToStaticMarkup(React.createElement(PricingTable, {
  section: {
    id: 'pricing',
    kind: 'pricing',
    title: 'Plans',
    plans: [{ id: 'basic', name: 'Basic', price: '$9', interval: 'mo', featureBullets: ['One workspace'] }],
  },
}));
assert.ok(pricingMarkup.includes('Basic'));
assert.ok(pricingMarkup.includes('$9'));

const supportMarkup = renderToStaticMarkup(React.createElement(SupportHub, {
  section: {
    id: 'support',
    kind: 'support_channels',
    title: 'Support',
    channels: [{ title: 'Billing help', description: 'Resolve billing questions.', href: '/support/billing/' }],
  },
}));
assert.ok(supportMarkup.includes('Billing help'));

const policyMarkup = renderToStaticMarkup(React.createElement(TrustPolicySummary, {
  section: {
    id: 'policy',
    kind: 'policy_summary',
    title: 'Policies',
    policies: [{ title: 'Refunds', summary: 'Review the cancellation and refund window.' }],
  },
}));
assert.ok(policyMarkup.includes('Refunds'));

const breadcrumbsMarkup = renderToStaticMarkup(React.createElement(BreadcrumbList, {
  items: [
    { label: 'MdWrk', href: '/' },
    { label: 'Packages', href: '/packages/' },
    { label: 'Structured Data Package', href: '/packages/structured-data/' },
  ],
}));
assert.ok(breadcrumbsMarkup.includes('MdWrk'));
assert.ok(breadcrumbsMarkup.includes('Structured Data Package'));
assert.ok(breadcrumbsMarkup.includes('class="lander-breadcrumbs"'));
assert.ok(breadcrumbsMarkup.includes('class="lander-breadcrumbs__list"'));
assert.ok(breadcrumbsMarkup.includes('class="lander-breadcrumbs__link"'));
assert.ok(breadcrumbsMarkup.includes('class="lander-breadcrumbs__current"'));
assert.ok(breadcrumbsMarkup.includes('aria-current="page"'));

const site = {
  product: {
    name: 'MdWrk',
    slug: 'mdwrk',
    tagline: 'Local-first Markdown workspace',
    description: 'MdWrk is a local-first Markdown workspace with reusable lander packages.',
    category: 'ProductivityApplication',
    canonicalUrl: 'https://mdwrk.test',
    logo: { src: 'https://mdwrk.test/favicon.svg', alt: 'MdWrk logo' },
    sameAs: ['https://github.com/groupsum/mdwrk-pages'],
  },
  pages: [],
  pageByPath: new Map(),
  diagnostics: [],
  seo: {
    defaultImage: { src: 'https://mdwrk.test/og.png', alt: 'MdWrk preview image', width: 1200, height: 630 },
  },
};

const page = {
  kind: 'package',
  slug: '/packages/structured-data/',
  path: '/packages/structured-data/',
  title: 'Structured Data Package | MdWrk',
  description: 'The structured data package emits JSON-LD nodes for lander pages.',
  h1: 'Structured Data Package',
  intro: 'Use this page to validate the visible lander renderer.',
  canonicalUrl: 'https://mdwrk.test/packages/structured-data/',
  breadcrumbs: [
    { label: 'MdWrk', href: '/' },
    { label: 'Packages', href: '/packages/' },
    { label: 'Structured Data Package', href: '/packages/structured-data/' },
  ],
  internalLinks: [],
  wordCount: 120,
  sections: [
    {
      id: 'hero',
      kind: 'hero',
      title: 'Structured Data Package',
      subtitle: 'Visible renderer smoke page.',
    },
    {
      id: 'install',
      kind: 'markdown',
      title: 'Install',
      body: 'Install and use the structured data package.',
    },
  ],
  faq: [{ question: 'Does the lander emit JSON-LD?', answer: 'Yes, visible FAQ content is mirrored into FAQPage JSON-LD.' }],
  seo: {
    keywords: ['structured-data', 'json-ld'],
    image: { src: 'https://mdwrk.test/package.png', alt: 'Structured data package screenshot' },
  },
  schema: [
    { kind: 'WebPage' },
    { kind: 'Organization' },
    { kind: 'WebSite' },
    { kind: 'FAQPage' },
    { kind: 'BreadcrumbList' },
  ],
};

const sectionMarkup = renderToStaticMarkup(React.createElement(SectionRenderer, { section: page.sections[1] }));
assert.ok(sectionMarkup.includes('Install'));
assert.ok(sectionMarkup.includes('Install and use the structured data package.'));

const fullMarkup = renderToStaticMarkup(React.createElement(LanderPage, { site, page }));
assert.ok(fullMarkup.includes('application/ld+json'));
assert.ok(fullMarkup.includes('Structured Data Package'));
assert.ok(fullMarkup.includes('lander-page__hero'));

