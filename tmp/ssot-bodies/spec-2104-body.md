# Scope
This SPEC governs how `mdwrk-pages` classifies Google Search structured-data support versus local Schema.org support.

# Requirements
Google Search feature status must be tracked separately from local semantic support in `@mdwrk/structured-data` and local concrete rendering support in `@mdwrk/lander-react-structured-data`.

For active Google-targeted types, planned coverage is incomplete unless both of the following exist:
- the structured-data builder and input surface in `@mdwrk/structured-data`, and
- the concrete React wrapper plus intent-registry support in `@mdwrk/lander-react-structured-data`.

Deprecated, deprecating, or otherwise not practically targeted Google Search features must not be treated as blockers when the repository intentionally supports the underlying Schema.org type locally.

Warning-only Google Search rows must recommend the preferred replacement type or discovery path when one exists.

`FAQPage` must remain warning-only for Google Search targeting, with `QAPage` preferred for single-question user-answer content and `Article` or `TechArticle` preferred for explanatory help content.

`Dataset` must remain warning-only for ordinary Google Search discovery, with `Article` or `TechArticle` preferred for normal web discovery while `Dataset` may remain supported for Dataset Search use cases.

# Verification
Governance and runtime evidence must prove that active Google-targeted gaps are closed across both the builder layer and the concrete React layer, while warning-only types remain documented as supported but non-blocking.
