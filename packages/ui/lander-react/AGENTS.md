# Lander React Agent Instructions

This package is the reusable and portable visible React implementation layer for MdWrk lander surfaces. It should express visible lander behavior through reusable components and helpers, not app-local one-off markup.

- Use the `uix_specialist` custom agent for delegated frontend, UIX, component, and layout work in this package.
- Keep JSON-LD React wrappers, schema-intent registries, and non-visual structured-data emission in `@mdwrk/lander-react-structured-data` rather than in this visible UI package.
- Keep the package portable across MdWrk lander apps: avoid app-specific file-system assumptions, route wiring, or one-site-only branching unless the public component contract explicitly allows it.
- Keep React output deterministic and static-safe for SSR and pre-rendered builds.
- Coordinate contract changes with `@mdwrk/lander-content-contract`, `@mdwrk/lander-core`, and `@mdwrk/lander-react-structured-data`, and update package tests when any visible component behavior changes.
- When a change affects rendered public output, verify the impacted views with screenshots in addition to package-local smoke validation.
