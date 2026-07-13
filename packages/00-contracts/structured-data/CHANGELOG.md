# @mdwrk/structured-data

All notable changes to this package will be documented in this file.

## 0.2.0 - 2026-07-13

### Added

- Added the `@mdwrk/structured-data/google` entry point with a dated Google Search eligibility profile.
- Added throwing and non-throwing eligibility validation for software applications, product snippets, and job postings.
- Added typed Google feature builders that delegate to generic Schema.org builders without fabricating commercial or reputation facts.
- Added explicit optional entity composition to `buildJsonLdGraph` with stable `@id` de-duplication.

### Changed

- `buildJsonLdGraph` no longer infers `SoftwareApplication` from every `site.product` object.

### Migration

- Consumers that require a software application entity must construct it explicitly and pass it through `buildJsonLdGraph(site, page, { entities })`.
