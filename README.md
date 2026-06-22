# MdWrk Pages

MdWrk Pages is the typed content-to-site package suite formerly developed under the lander package family.

This repo owns page/content contracts, static-site compilation, SEO and AI-discovery artifacts, markdown ingestion, React rendering, themes, reusable page templates, page-template presets, and Pages examples.

## Package Families

- `packages/00-contracts` contains portable contracts and structured-data builders.
- `packages/10-core` contains framework-neutral compilation and markdown adaptation.
- `packages/20-page-systems` contains reusable page templates and presets.
- `packages/30-ui-foundation` contains tokens, theme, and primitive UI building blocks.
- `packages/40-react-renderers` contains visible React renderers and React commerce UI.
- `packages/50-machine-output` contains structured-data and SEO/discovery output helpers.
- `packages/60-content-packs` contains reusable demo/content bundles.
- `packages/70-demos` contains runnable integration demos.
- `packages/00-contracts/structured-data` contains structured-data builders used by Pages rendering and discovery output.
- `packages/60-content-packs/page-template-demo-content-pack` contains reusable demo content for page-template examples.
- `packages/70-demos/page-template-demo` validates downstream package consumption.

## Commands

```bash
npm install
npm run build
npm run ci:governance
npm run typecheck
npm run test
```

## Documentation Pointers

- [Pages docs](docs/README.md)
- [Specs index](.ssot/specs/SPEC-2001-specs-index.yaml)
- [Repository governance spec](.ssot/specs/SPEC-2002-repository-governance.yaml)
- [Contributing](CONTRIBUTING.md)
- [Code of conduct](CODE_OF_CONDUCT.md)
- [License](LICENSE)
- [Agent instructions](AGENTS.md)

## Split Boundary

MdWrk Pages consumes core MdWrk packages where needed, but it owns the public-page implementation layer:

- `mdwrk` owns package-facing markdown, renderer, editor, and preview token contracts.
- `mdwrk-pages` implements those shared tokens for public pages and introduces Pages-only extension tokens where page chrome needs more surface area.
- `mdwrk-studio` owns workspace shell and application chrome tokens.
- `mdwrkcom` stays a thin theme/content consumer on top of Pages.
