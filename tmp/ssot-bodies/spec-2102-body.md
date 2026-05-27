# Scope
This SPEC governs authored page-template payload schemas, registry helpers, and fail-closed validation before `PageSpec` generation.

# Requirements
`@mdwrk/lander-content-contract` must export raw JSON Schema assets for governed template payloads and must also export registry helpers that resolve schemas by template id and schema id.

The template-data registry must support validation of authored data for reusable template instances without depending on app-specific code.

`@mdwrk/lander-page-templates` must bind templates to stable schema ids and surface schema-validation failures through template diagnostics.

Schema validation must run against imperative instance data and markdown/frontmatter-derived instance data before a page is built. Invalid instances must not produce `PageSpec` output.

Relationship topology validation and authored payload validation remain distinct checks and must both contribute diagnostics.

# Verification
Tests must prove that template schema assets load, that registry helpers resolve template and schema identifiers, that invalid authored data produces deterministic diagnostics, and that invalid instances are skipped during `PageSpec` generation.
