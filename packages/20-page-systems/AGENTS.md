# MdWrk Pages Page-System Package Agents

This layer owns reusable page recipes, template graphs, presets, link-slot semantics, and graph-to-page conversion.

- Keep templates and presets framework-neutral and content-source agnostic.
- Do not place visible rendering, theme CSS, structured-data emission, commerce runtime, or host-app routing in this layer.
- Page-system package changes must preserve template IDs, graph semantics, public exports, and package test coverage.
