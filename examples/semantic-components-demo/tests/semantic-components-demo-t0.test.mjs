import assert from "node:assert/strict";
import test from "node:test";
import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  buildGeneratedArtifactView,
  buildGovernedCoreGroups,
  highlightsView,
  qaViewLinks,
  showcaseModes,
  showcaseStats,
} from "../src/showcase-catalog.mjs";

const here = path.dirname(fileURLToPath(import.meta.url));
const demoRoot = path.resolve(here, "..");
const packageJson = JSON.parse(readFileSync(path.join(demoRoot, "package.json"), "utf8"));
const mainSource = readFileSync(path.join(demoRoot, "src", "main.tsx"), "utf8");
const showcaseSource = readFileSync(path.join(demoRoot, "src", "showcase-component.mjs"), "utf8");
const tokenStyles = readFileSync(path.join(demoRoot, "src", "token-styles.css"), "utf8");
const stylesCss = readFileSync(path.join(demoRoot, "src", "styles.css"), "utf8");
const readme = readFileSync(path.join(demoRoot, "README.md"), "utf8");

test("T0: semantic components demo is a mode-driven explorer over the full generated surface", () => {
  assert.equal(packageJson.name, "@mdwrk/example-semantic-components-demo");
  assert.ok(packageJson.dependencies["@mdwrk/lander-react"]);
  assert.ok(packageJson.scripts.test.includes("semantic-components-demo-t0.test.mjs"));
  assert.ok(mainSource.includes('import "./token-styles.css";'));
  assert.ok(mainSource.includes("SemanticShowcase"));
  assert.ok(showcaseSource.includes("generated-surface"));
  assert.ok(showcaseSource.includes("governed-core"));
  assert.equal(showcaseModes.length, 3);
  assert.equal(showcaseStats.totalArtifacts, 1228);
  assert.equal(showcaseStats.types, 232);
  assert.equal(showcaseStats.properties, 935);
  assert.equal(showcaseStats.enumerations, 54);
  assert.equal(showcaseStats.datatypes, 7);
  assert.ok(highlightsView.groups.length >= 6);
  assert.ok(buildGovernedCoreGroups().length >= 10);
  assert.ok(buildGeneratedArtifactView({ kind: "type" }).total >= 200);
  assert.ok(buildGeneratedArtifactView({ kind: "type", surface: "page-or-listing" }).total < buildGeneratedArtifactView({ kind: "type" }).total);
  assert.ok(buildGeneratedArtifactView({ kind: "property" }).total >= 900);
  assert.ok(buildGeneratedArtifactView({ kind: "property" }).entries.length > 0);
  assert.ok(buildGeneratedArtifactView({ kind: "enumeration" }).total >= 50);
  assert.ok(buildGeneratedArtifactView({ kind: "datatype" }).total >= 7);
  assert.equal(qaViewLinks.length, 7);
  assert.ok(tokenStyles.includes("generated-semantic-surface.css"));
  assert.ok(tokenStyles.includes("root.css"));
  assert.ok(stylesCss.includes("Atkinson Hyperlegible") || stylesCss.includes("var(--mdwrk-font-ui)"));
  assert.ok(!tokenStyles.includes("semantic-about-page.css"));
  assert.ok(!readme.includes("all `58`"));
  assert.ok(readme.includes("full generated surface"));
});
