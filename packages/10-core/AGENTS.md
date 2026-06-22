# MdWrk Pages Core Package Agents

This layer owns framework-neutral MdWrk Pages compilation and source adaptation packages.

- Keep site compilation, validation, diagnostics, and markdown adaptation reusable across consumers.
- Do not place page-template graph recipes, React rendering, theme assets, or host-app behavior in this layer.
- Core package changes must preserve publishable metadata, public exports, and package test coverage.
