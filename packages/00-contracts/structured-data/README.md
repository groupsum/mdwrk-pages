# @mdwrk/structured-data

**Schema.org and JSON-LD helpers**

<p align="center">
  <a href="https://github.com/groupsum/mdwrk-pages/blob/master/packages/00-contracts/structured-data/README.md"><img alt="Hits" src="https://visitor-badge.laobi.icu/badge?page_id=groupsum.mdwrk_pages.packages_contracts_structured_data_README&amp;left_text=hits" /></a>
  <a href="https://www.npmjs.com/package/@mdwrk/structured-data"><img alt="Downloads" src="https://img.shields.io/npm/dm/%40mdwrk%2Fstructured-data?label=downloads" /></a>
  <a href="../../../package.json"><img alt="Node" src="https://img.shields.io/badge/node-20.x%20%7C%2021.x%20%7C%2022.x-339933?logo=node.js&amp;logoColor=white" /></a>
  <a href="../../../LICENSE"><img alt="License: Apache-2.0" src="https://img.shields.io/badge/license-Apache--2.0-blue.svg" /></a>
</p>

This package provides reusable Schema.org and JSON-LD builders for MdWrk apps, packages, public content, and discovery surfaces.

## Why
Use it when you need structured-data output without rewriting low-level Schema.org node creation logic.

## What
- Builders for WebPage, WebSite, FAQPage, SoftwareApplication, TechArticle, Product, Dataset, and more.
- Helpers for canonical ids and graph assembly.
- A shared discovery layer consumed heavily by the lander stack.

## Installation
Node.js 20.x through 22.x, matching the workspace engine contract in the root package manifest.

```bash
npm install @mdwrk/structured-data
```

## Usage
```ts
import { faqPageSchema, jsonLdGraph, softwareApplicationNode } from "@mdwrk/structured-data";

const graph = jsonLdGraph([
  softwareApplicationNode({ name: "MdWrk", url: "https://mdwrk.com" }),
  faqPageSchema({ items: [{ question: "What is MdWrk?", answer: "A markdown workspace platform." }] }),
]);
```

## Google Search eligibility

Schema.org validity and Google search-feature eligibility are intentionally separate contracts. Use the Google entry point only when the page visibly supports every emitted fact:

```ts
import { googleSoftwareApplicationNode } from "@mdwrk/structured-data/google";

const application = googleSoftwareApplicationNode({
  name: "Example",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Web",
  offers: { name: "Free", price: 0, priceCurrency: "USD" },
  aggregateRating: { ratingValue: 4.8, ratingCount: 42 },
});
```

Ratings, reviews, prices, availability, addresses, and job facts must be genuine and visible. The Google builders never invent them. For hand-authored JSON-LD, use `validateGoogleRichResult(...)` or `assertGoogleRichResult(...)` from the same entry point.

## Explicit graph entities

The default graph emits defensible organization, website, page, breadcrumb, and applicable page-content nodes. Optional software, product, job, offer, review, and rating entities are explicit:

```ts
const nodes = buildJsonLdGraph(site, page, { entities: [application] });
```

Starting in 0.2.0, `buildJsonLdGraph` no longer infers `SoftwareApplication` from `site.product`.

## Schema Conformance Policy
- Emitted JSON-LD is generator-backed and must remain valid against the Schema.org-derived contract surface in `@mdwrk/lander-content-contract`.
- Repo-local authored helper fields must not leak into emitted JSON-LD unless they are mapped to a real Schema.org field.
- Current fail-closed helper examples:
  - `SearchResultsPageInput.query` is authoring-only and is never emitted.
  - `SolveMathActionInput.mathExpressionInput` is authoring-only and is never emitted.
  - `LoyaltyProgramInput.provider` is authoring-only in the current governed surface and is never emitted.
  - `estimatedSalaryNode(...).unitText` is authoring-only; it is mapped only when it is already a schema-valid ISO duration, otherwise it is dropped.
- Run `npm run test:schema-conformance -w @mdwrk/structured-data` to prove the builder layer still honors this contract.

## Related
- [Packages index](../../README.md) - family and package navigation
- [Root README](../../../README.md) - repo overview

