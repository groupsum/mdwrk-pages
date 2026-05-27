# Lander React Structured Data Agent Instructions

This package owns the reusable React JSON-LD emission layer for MdWrk lander surfaces.

- Use the `uix_specialist` custom agent for delegated frontend and structured-data rendering work in this package.
- Keep JSON-LD emission deterministic, SSR-safe, and builder-backed. Do not hand-write per-page schema blobs when the same behavior can be expressed through `@mdwrk/structured-data`.
- Preserve the package split: visible UI belongs in `@mdwrk/lander-react`, typed schema builders belong in `@mdwrk/structured-data`, and schema-intent rendering belongs here.
- Coordinate schema-intent and compiled-page changes with `@mdwrk/lander-core`, `@mdwrk/structured-data`, and `@mdwrk/lander-react`.
