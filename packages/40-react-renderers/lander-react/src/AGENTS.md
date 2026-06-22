# Lander React Visible UI Source Instructions

This source tree owns the visible React composition for portable lander pages.

- Use the `uix_specialist` custom agent for delegated work in this directory.
- Prefer reusable visible component composition over page-specific conditionals scattered through app code.
- Keep schema emission delegated to `@mdwrk/lander-react-structured-data`; this package should not regain JSON-LD wrapper ownership or schema-intent registries.
- Treat `@mdwrk/lander-content-contract` and `@mdwrk/lander-core` as the upstream truth for compiled visible page intent.
