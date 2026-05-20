# MdWrk Pages

MdWrk Pages is the typed content-to-site package suite formerly developed under the lander package family.

This repo owns page/content contracts, static-site compilation, SEO and AI-discovery artifacts, markdown ingestion, React rendering, themes, reusable page templates, page-template presets, and Pages examples.

## Package Families

- `packages/lander` contains the current package family. These packages should be renamed to `@mdwrk/pages-*` over a compatibility window.
- `packages/shared/structured-data` contains structured-data builders used by Pages rendering and discovery output.
- `packages/content/page-template-demo-content-pack` contains reusable demo content for page-template examples.
- `examples/page-template-demo` validates downstream package consumption.

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

MdWrk Pages consumes core MdWrk packages where needed. The mdwrk.com site and first-party content pack live in `mdwrkcom`.
