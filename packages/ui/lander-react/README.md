# @mdwrk/lander-react

**React components for product landers**

<p align="center">
  <a href="https://github.com/groupsum/mdwrk-pages/blob/master/packages/ui/lander-react/README.md"><img alt="Hits" src="https://visitor-badge.laobi.icu/badge?page_id=groupsum.mdwrk_pages.packages_ui_lander_react_README&amp;left_text=hits" /></a>
  <a href="https://www.npmjs.com/package/@mdwrk/lander-react"><img alt="Downloads" src="https://img.shields.io/npm/dm/%40mdwrk%2Flander-react?label=downloads" /></a>
  <a href="../../../package.json"><img alt="Node" src="https://img.shields.io/badge/node-20.x%20%7C%2021.x%20%7C%2022.x-339933?logo=node.js&amp;logoColor=white" /></a>
  <a href="../../../LICENSE"><img alt="License: Apache-2.0" src="https://img.shields.io/badge/license-Apache--2.0-blue.svg" /></a>
</p>

This package provides reusable visible React components for rendering compiled lander pages plus first-class fused semantic components that render visible UI and emit matching JSON-LD.

## Why
Use it when you want a render-time component layer on top of the lander content contract and compiler outputs.

## What
- Page shell and section rendering components.
- FAQ, breadcrumb, package-grid, and proof-matrix components.
- First-class fused semantic exports for all `58` supported structured-data kinds.
- Delegation to `@mdwrk/lander-react-structured-data` for low-level JSON-LD graph emission and type-specific wrappers.

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

For prop-native fused semantic authoring:

```tsx
import { Article, ProductGroup, FAQPage } from "@mdwrk/lander-react";

export function LandingContent() {
  return (
    <>
      <Article
        title="Prompt Delivery Studio"
        description="Visible article plus JSON-LD from one component."
        body={<p>Article body</p>}
      />
      <ProductGroup
        name="Prompt Delivery Studio"
        variesBy={["Region"]}
        hasVariant={[{ name: "US" }, { name: "EU" }]}
      />
      <FAQPage
        items={[{ question: "What is prompt drift?", answer: "Behavior change over time." }]}
      />
    </>
  );
}
```

## Structured Data
Use [@mdwrk/lander-react-structured-data](../../machine/lander-react-structured-data/README.md) for type-specific JSON-LD React wrappers and schema-intent rendering.

`@mdwrk/lander-react` now owns the preferred prop-native fused semantic front door. `@mdwrk/lander-react-structured-data` remains the low-level wrapper surface for consumers that explicitly want direct JSON-LD component control.

`@mdwrk/lander-react` still provides temporary deprecated compatibility re-exports for older structured-data wrapper imports while downstream consumers migrate. New low-level wrapper imports should come directly from `@mdwrk/lander-react-structured-data`.

## Related
- [Packages index](../../README.md) - family and package navigation
- [Root README](../../../README.md) - repo overview

