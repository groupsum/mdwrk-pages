# @mdwrk/lander-page-template-presets

Ready-made graph presets for `@mdwrk/lander-page-templates`.

Templates define reusable page recipes. Presets compose those templates into complete starter page systems: product home plus legal/support links, FAQ hubs with Q&A pages, learning paths with courses/modules/quizzes, docs hubs with ordered guides, package catalogs, and trust hubs.

Downstream content packs can use a preset as a starting graph, replace any instance data, add or remove edges, then pass the graph to `buildPageSpecsFromGraph`. Presets also preserve their named page map so downstream code can resolve entry pages and stable authored keys without hardcoding page IDs.

## Usage

```ts
import { buildPageSpecsFromGraph } from "@mdwrk/lander-page-templates";
import {
  createEducationPathPreset,
  getPresetEntryPageId,
  getPresetPageId,
} from "@mdwrk/lander-page-template-presets";

const preset = createEducationPathPreset({
  baseSlug: "/learn",
  title: "Getting Started",
});

const { pages, diagnostics } = buildPageSpecsFromGraph(preset.graph);
const entryPageId = getPresetEntryPageId(preset);
const coursePageId = getPresetPageId(preset, "course");
```
