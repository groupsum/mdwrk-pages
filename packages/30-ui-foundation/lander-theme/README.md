# @mdwrk/lander-theme

**Portable lander styles and tokens**

<p align="center">
  <a href="https://github.com/groupsum/mdwrk-pages/blob/master/packages/30-ui-foundation/lander-theme/README.md"><img alt="Hits" src="https://visitor-badge.laobi.icu/badge?page_id=groupsum.mdwrk_pages.packages_ui_lander_theme_README&amp;left_text=hits" /></a>
  <a href="https://www.npmjs.com/package/@mdwrk/lander-theme"><img alt="Downloads" src="https://img.shields.io/npm/dm/%40mdwrk%2Flander-theme?label=downloads" /></a>
  <a href="../../../package.json"><img alt="Node" src="https://img.shields.io/badge/node-20.x%20%7C%2021.x%20%7C%2022.x-339933?logo=node.js&amp;logoColor=white" /></a>
  <a href="../../../LICENSE"><img alt="License: Apache-2.0" src="https://img.shields.io/badge/license-Apache--2.0-blue.svg" /></a>
</p>

This package provides the default theme layer for generic lander components and is the first-party implementation of the shared MdWrk markdown token contract on public pages.

## Why
Use it when you want a baseline visual system for lander components before product-specific styling is layered on top.

## What
- Portable default styles for lander components.
- A shared theme baseline for first-party and downstream lander surfaces.
- A styling layer that stays separate from content, compile, and React logic.
- Implementation of the shared `mdwrk` markdown/editor token subset through page-safe token mappings.
- Pages-only extension tokens for nav height, hero spacing, card geometry, and other public-site concerns.

## Installation
Node.js 20.x through 22.x, matching the workspace engine contract in the root package manifest.

```bash
npm install @mdwrk/lander-theme
```

## Usage
Import the package styles into your lander app or component library entrypoint. The package will implement the shared MdWrk markdown token contract and then extend it with Pages-level tokens.

## Related
- [Packages index](../../README.md) - family and package navigation
- [Root README](../../../README.md) - repo overview

