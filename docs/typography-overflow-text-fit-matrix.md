# Typography Overflow And Text-Fit Matrix

This matrix defines the canonical UIX contract for the semantic-components demo and `@mdwrk/lander-primitives`.

## Rules

| Surface | Default policy | Notes |
| --- | --- | --- |
| Page and section headings | `clamp()` via `mdwrk-primitive__text-fit-heading` | Wrap and hyphenate; do not line-clamp by default. |
| Card titles | `clamp()` plus wrapping | Preserve full primary identifiers whenever practical. |
| Card descriptions and helper copy | `mdwrk-primitive__text-fit-preview` | Line-clamp only in preview contexts. |
| Form labels and values | `mdwrk-primitive__text-fit-preserve` | Never line-clamp. Preserve field-shell width and native control ownership. |
| Search and select controls | Preserve full control shell | No inner-pill anchoring; no line-clamp. |
| Structured field labels and values | Preserve and wrap | Use `mdwrk-primitive__text-fit-preserve` for readable labels and scalar values. |
| JSON, code, token, class-name, and path displays | `mdwrk-primitive__text-fit-structured` | Preserve content with aggressive breaking or scrolling; never line-clamp. |
| Generated type and property names | Preserve first | Truncate only in explicitly secondary preview copy, not as the primary artifact title. |
| Breadcrumb, tab, and nav labels | Bounded sizing plus wrap/scroll by component contract | Prefer readability over forced shrink. |

## Utility hooks

- `mdwrk-primitive__text-fit-heading`: responsive heading clamp with wrap support
- `mdwrk-primitive__text-fit-preserve`: preservable prose/control/value text
- `mdwrk-primitive__text-fit-preview`: preview-only truncation
- `mdwrk-primitive__text-fit-structured`: structured strings such as JSON, code, tokens, class hooks, and paths

## Deferred

True autofit remains deferred. If a future surface requires exact fit inside a fixed box, add an explicit JS primitive such as `AutoFitText` or `FitHeading` instead of shrinking text globally.
