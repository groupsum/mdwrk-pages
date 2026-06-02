import assert from "node:assert/strict";
import test from "node:test";
import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  buildGeneratedArtifactDetailEntry,
  buildGeneratedArtifactDetailHref,
  buildGeneratedArtifactView,
  buildGovernedCoreGroups,
  generatedArtifactEntries,
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
const detailSource = readFileSync(path.join(demoRoot, "src", "showcase-detail.mjs"), "utf8");
const primitiveSource = readFileSync(path.join(demoRoot, "src", "showcase-primitives.mjs"), "utf8");
const tokenStyles = readFileSync(path.join(demoRoot, "src", "token-styles.css"), "utf8");
const stylesCss = readFileSync(path.join(demoRoot, "src", "styles.css"), "utf8");
const readme = readFileSync(path.join(demoRoot, "README.md"), "utf8");

test("T0: semantic components demo is a mode-driven explorer over the full generated surface", () => {
  assert.equal(packageJson.name, "@mdwrk/example-semantic-components-demo");
  assert.ok(packageJson.dependencies["@mdwrk/lander-react"]);
  assert.ok(packageJson.dependencies["@mdwrk/lander-primitives"]);
  assert.ok(packageJson.scripts.test.includes("semantic-components-demo-t0.test.mjs"));
  assert.ok(mainSource.includes('import "./token-styles.css";'));
  assert.ok(mainSource.includes("SemanticShowcase"));
  assert.ok(showcaseSource.includes("generated-surface"));
  assert.ok(showcaseSource.includes("governed-core"));
  assert.ok(showcaseSource.includes("DetailPage"));
  assert.ok(showcaseSource.includes("@mdwrk/lander-primitives"));
  assert.ok(showcaseSource.includes("PrimitiveSearchField"));
  assert.ok(showcaseSource.includes("PrimitiveSelectField"));
  assert.ok(showcaseSource.includes("Pagination"));
  assert.ok(detailSource.includes("Schema"));
  assert.ok(detailSource.includes("JSON-LD"));
  assert.ok(primitiveSource.includes("primitiveGroups"));
  assert.equal(showcaseModes.length, 4);
  assert.ok(showcaseModes.some((mode) => mode.value === "primitives"));
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
  assert.equal(qaViewLinks.length, 9);
  assert.ok(qaViewLinks.some((link) => link.href === "?mode=primitives"));
  assert.ok(qaViewLinks.some((link) => link.href === "?mode=primitives&theme=lander-dark"));
  assert.ok(tokenStyles.includes("generated-semantic-surface.css"));
  assert.ok(tokenStyles.includes("root.css"));
  assert.ok(tokenStyles.includes("primitive-actions.css"));
  assert.ok(tokenStyles.includes("primitive-forms.css"));
  assert.ok(tokenStyles.includes("primitive-navigation.css"));
  assert.ok(tokenStyles.includes("primitive-content.css"));
  assert.ok(stylesCss.includes("Atkinson Hyperlegible") || stylesCss.includes("var(--mdwrk-font-ui)"));
  assert.ok(stylesCss.includes("semantic-demo__detail"));
  assert.ok(!tokenStyles.includes("semantic-about-page.css"));
  assert.ok(!readme.includes("all `58`"));
  assert.ok(readme.includes("full generated surface"));
});

test("T0: every generated artifact exposes structured fields for the fused component surface", () => {
  const byKind = new Map([
    ["type", 0],
    ["property", 0],
    ["enumeration", 0],
    ["datatype", 0],
  ]);

  for (const entry of generatedArtifactEntries) {
    assert.ok(entry.structuredFields && typeof entry.structuredFields === "object", `${entry.name} must expose structured fields`);
    assert.ok(Object.keys(entry.structuredFields).length > 0, `${entry.name} must expose at least one structured field`);
    assert.equal(entry.structuredFields["@type"], entry.name, `${entry.name} structured fields must include @type`);
    byKind.set(entry.artifactKind, (byKind.get(entry.artifactKind) ?? 0) + 1);
  }

  assert.equal(byKind.get("type"), showcaseStats.types);
  assert.equal(byKind.get("property"), showcaseStats.properties);
  assert.equal(byKind.get("enumeration"), showcaseStats.enumerations);
  assert.equal(byKind.get("datatype"), showcaseStats.datatypes);
});

test("T0: generated artifacts and primitive gallery routes expose dedicated detail route plumbing", () => {
  assert.ok(primitiveSource.includes("buildHref"));
  assert.ok(detailSource.includes("buildPrimitiveDetailHref"));
  assert.ok(detailSource.includes("resolveDetailEntry"));
  assert.ok(detailSource.includes("Schema"));
  assert.ok(detailSource.includes("Proof"));
  for (const artifact of generatedArtifactEntries) {
    const href = buildGeneratedArtifactDetailHref({ kind: artifact.artifactKind, name: artifact.name, theme: "lander-light" });
    assert.ok(href.includes(`detailKind=${artifact.artifactKind}`));
    const detail = buildGeneratedArtifactDetailEntry(artifact.name, artifact.artifactKind);
    assert.ok(detail, `missing generated detail manifest for ${artifact.name}`);
    assert.ok(detail.schemaRows.length > 0, `${artifact.name} must expose schema rows`);
    assert.ok(detail.tokenFiles.length > 0, `${artifact.name} must expose token ownership`);
  }
});
