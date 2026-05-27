# @mdwrk/lander-react

**React components for product landers**

<p align="center">
  <a href="https://github.com/groupsum/mdwrk-pages/blob/master/packages/ui/lander-react/README.md"><img alt="Hits" src="https://visitor-badge.laobi.icu/badge?page_id=groupsum.mdwrk_pages.packages_ui_lander_react_README&amp;left_text=hits" /></a>
  <a href="https://www.npmjs.com/package/@mdwrk/lander-react"><img alt="Downloads" src="https://img.shields.io/npm/dm/%40mdwrk%2Flander-react?label=downloads" /></a>
  <a href="../../../package.json"><img alt="Node" src="https://img.shields.io/badge/node-20.x%20%7C%2021.x%20%7C%2022.x-339933?logo=node.js&amp;logoColor=white" /></a>
  <a href="../../../LICENSE"><img alt="License: Apache-2.0" src="https://img.shields.io/badge/license-Apache--2.0-blue.svg" /></a>
</p>

This package provides reusable visible React components for rendering compiled lander pages, breadcrumbs, FAQs, CTA sections, package grids, and page shells.

## Why
Use it when you want a render-time component layer on top of the lander content contract and compiler outputs.

## What
- Page shell and section rendering components.
- FAQ, breadcrumb, package-grid, and proof-matrix components.
- Delegation to `@mdwrk/lander-react-structured-data` for JSON-LD graph emission.

## Installation
Node.js 20.x through 22.x, matching the workspace engine contract in the root package manifest.

```bash
npm install @mdwrk/lander-react @mdwrk/lander-core @mdwrk/lander-content-contract
```

## Usage
```tsx
import { LanderPage } from "@mdwrk/lander-react";

export function Page({ site, page }) {
  return <LanderPage site={site} page={page} />;
}
```

For split-package consumers that want visible rendering without deprecated structured-data delegates:

```tsx
import { VisibleLanderPage } from "@mdwrk/lander-react";
import { LanderStructuredData } from "@mdwrk/lander-react-structured-data";

export function Page({ site, page }) {
  return (
    <>
      <LanderStructuredData site={site} page={page} />
      <VisibleLanderPage page={page} />
    </>
  );
}
```

## Structured Data
Use [@mdwrk/lander-react-structured-data](../../machine/lander-react-structured-data/README.md) for type-specific JSON-LD React wrappers and schema-intent rendering.

`@mdwrk/lander-react` still provides temporary deprecated compatibility re-exports for structured-data wrappers while downstream consumers migrate. New code should import those surfaces directly from `@mdwrk/lander-react-structured-data`.

## Related
- [Packages index](../../README.md) - family and package navigation
- [Root README](../../../README.md) - repo overview

