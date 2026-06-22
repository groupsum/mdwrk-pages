# @mdwrk/lander-seo

**Metadata, scoring, and discovery helpers**

<p align="center">
  <a href="https://github.com/groupsum/mdwrk-pages/blob/master/packages/50-machine-output/lander-seo/README.md"><img alt="Hits" src="https://visitor-badge.laobi.icu/badge?page_id=groupsum.mdwrk_pages.packages_machine_lander_seo_README&amp;left_text=hits" /></a>
  <a href="https://www.npmjs.com/package/@mdwrk/lander-seo"><img alt="Downloads" src="https://img.shields.io/npm/dm/%40mdwrk%2Flander-seo?label=downloads" /></a>
  <a href="../../../package.json"><img alt="Node" src="https://img.shields.io/badge/node-20.x%20%7C%2021.x%20%7C%2022.x-339933?logo=node.js&amp;logoColor=white" /></a>
  <a href="../../../LICENSE"><img alt="License: Apache-2.0" src="https://img.shields.io/badge/license-Apache--2.0-blue.svg" /></a>
</p>

This package provides metadata assembly, page scoring, AI summary helpers, basic sitemap/robots/llms builders, and the fuller discovery artifact pipeline.

## Why
Use it when you want lander SEO and AI-discovery helpers above the raw compiler output.

## What
- Page metadata builders.
- SEO scoring and diagnostics.
- Basic sitemap, robots.txt, and llms.txt builders plus the richer crawl/discovery artifact pipeline.

## Installation
Node.js 20.x through 22.x, matching the workspace engine contract in the root package manifest.

```bash
npm install @mdwrk/lander-seo @mdwrk/lander-core
```

## Usage
```ts
import { buildAiSummary, buildPageMetadata, scoreSeoPage } from "@mdwrk/lander-seo";

console.log(buildAiSummary);
console.log(buildPageMetadata, scoreSeoPage);
```

## Related
- [Packages index](../../README.md) - family and package navigation
- [Root README](../../../README.md) - repo overview

