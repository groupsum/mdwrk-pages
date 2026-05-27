# @mdwrk/lander-react-structured-data

**React JSON-LD wrappers for portable landers**

<p align="center">
  <a href="https://github.com/groupsum/mdwrk-pages/blob/master/packages/machine/lander-react-structured-data/README.md"><img alt="Hits" src="https://visitor-badge.laobi.icu/badge?page_id=groupsum.mdwrk_pages.packages_machine_lander_react_structured_data_README&amp;left_text=hits" /></a>
  <a href="https://www.npmjs.com/package/@mdwrk/lander-react-structured-data"><img alt="Downloads" src="https://img.shields.io/npm/dm/%40mdwrk%2Flander-react-structured-data?label=downloads" /></a>
  <a href="../../../package.json"><img alt="Node" src="https://img.shields.io/badge/node-20.x%20%7C%2021.x%20%7C%2022.x-339933?logo=node.js&amp;logoColor=white" /></a>
  <a href="../../../LICENSE"><img alt="License: Apache-2.0" src="https://img.shields.io/badge/license-Apache--2.0-blue.svg" /></a>
</p>

This package provides reusable React JSON-LD wrappers, schema-intent rendering, and graph emission for compiled lander pages.

## Why
Use it when you want typed Schema.org emission on top of compiled lander pages without mixing that ownership into the visible UI package.

## What
- Type-specific React JSON-LD wrapper components.
- Compiled structured-data intent registry and renderer.
- Portable JSON-LD graph generation for compiled lander pages.
- Explicit supported-intent lookup helpers for fail-closed registry use.

## Installation
Node.js 20.x through 22.x, matching the workspace engine contract in the root package manifest.

```bash
npm install @mdwrk/lander-react-structured-data @mdwrk/structured-data @mdwrk/lander-core
```

## Usage
```tsx
import { buildLanderJsonLdGraph, JsonLd } from "@mdwrk/lander-react-structured-data";

export function LanderStructuredData({ site, page }) {
  return <JsonLd graph={buildLanderJsonLdGraph(site, page)} />;
}
```

Or consume the package at the page level without app-local schema-type selection:

```tsx
import { LanderStructuredData } from "@mdwrk/lander-react-structured-data";

export function PageStructuredData({ site, page }) {
  return <LanderStructuredData site={site} page={page} />;
}
```

## Related
- [Packages index](../../README.md) - family and package navigation
- [lander-react](../../ui/lander-react/README.md) - visible UI renderer
- [Root README](../../../README.md) - repo overview
