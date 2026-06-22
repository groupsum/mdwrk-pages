# MdWrk Pages React Renderer Package Agents

This layer owns visible React rendering packages and React commerce UI surfaces.

- Keep visible rendering and React integration package-scoped.
- Do not move core compilation, page-template graph ownership, or structured-data registry ownership into this layer.
- React renderer changes must preserve public exports, package tests, and compatibility surfaces relied on by demos.
