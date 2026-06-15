import assert from "node:assert/strict";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { resolve } from "node:path";
import test from "node:test";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { buildGeneratedArtifactView, generatedArtifactEntries, highlightsView } from "../src/showcase-catalog.mjs";
import { buildGeneratedDetailManifest, usageForSpecimen } from "../src/showcase-artifact-manifest.mjs";
import { buildPrimitiveDetailManifest } from "../src/showcase-primitive-manifest.mjs";
import { importShowcaseComponent } from "./load-showcase-component.mjs";

const { SemanticShowcase } = await importShowcaseComponent();

test("T1: highlights mode lands on curated high-signal surfaces instead of the full mega-grid", () => {
  const markup = renderToStaticMarkup(React.createElement(SemanticShowcase, { initialState: { mode: "highlights" } }));
  assert.ok(markup.includes("Full fused semantic surface explorer"));
  assert.ok(markup.includes('data-mdwrk-primitive="tabs"'));
  assert.ok(markup.includes('data-mdwrk-primitive="toolbar"'));
  assert.ok(markup.includes('data-mdwrk-primitive="search-field"'));
  assert.ok(markup.includes(highlightsView.groups[0].entries[0].name));
  assert.ok(markup.includes("QA Views"));
});

test("T1: governed core mode exposes authored runtime families with filtering controls", () => {
  const markup = renderToStaticMarkup(
    React.createElement(SemanticShowcase, { initialState: { mode: "governed-core", family: "Education family", surface: "page", theme: "lander-dark" } }),
  );
  assert.ok(markup.includes("Governed Core"));
  assert.ok(markup.includes("Education family"));
  assert.ok(markup.includes("Family"));
  assert.ok(markup.includes("Surface focus"));
  assert.ok(markup.includes("Theme"));
  assert.ok(markup.includes('data-lander-theme="lander-dark"'));
  assert.ok(markup.includes('data-mdwrk-primitive="card"'));
});

test("T1: generated surface mode renders each artifact kind through the explorer controls", () => {
  for (const kind of ["type", "property", "enumeration", "datatype"]) {
    const view = buildGeneratedArtifactView({ kind, pageSize: 12 });
    const markup = renderToStaticMarkup(
      React.createElement(SemanticShowcase, { initialState: { mode: "generated-surface", kind, pageSize: 12 } }),
    );
    assert.ok(markup.includes(view.title), `expected generated title for ${kind}`);
    assert.ok(markup.includes(view.entries[0].name), `expected first generated artifact for ${kind}`);
    assert.ok(markup.includes("Batch size"), `expected generated controls for ${kind}`);
    assert.ok(markup.includes('data-mdwrk-primitive="pagination"'), `expected primitive pagination for ${kind}`);
  }
});

test("T1: generated type mode supports pages and listings filtering", () => {
  const view = buildGeneratedArtifactView({ kind: "type", pageSize: 12, surface: "page-or-listing" });
  const markup = renderToStaticMarkup(
    React.createElement(SemanticShowcase, { initialState: { mode: "generated-surface", kind: "type", pageSize: 12, surface: "page-or-listing" } }),
  );
  assert.ok(markup.includes("Surface focus"));
  assert.ok(view.total < buildGeneratedArtifactView({ kind: "type", pageSize: 12 }).total);
  assert.ok(markup.includes(view.entries[0].name));
  assert.ok(view.entries.every((entry) => entry.surfaceFocus === "page" || entry.surfaceFocus === "listing" || entry.surfaceFocus === "page-or-listing"));
});

test("T1: generated type mode renders reader-facing previews instead of structured-field grids", () => {
  const markup = renderToStaticMarkup(
    React.createElement(SemanticShowcase, { initialState: { mode: "generated-surface", kind: "type", pageSize: 12 } }),
  );

  for (const field of [
    "Preview",
    "@type",
    "Answer",
    "text",
    "AggregateOffer",
    "AlignmentObject",
  ]) {
    assert.ok(markup.includes(field), `expected generated surface markup to include ${field}`);
  }
  assert.equal(markup.includes("semantic-demo__structured-panel"), false);
  assert.equal(markup.includes("lander-semantic__field-card"), false);
  assert.equal(markup.includes("Structured fields"), false);
});

test("T1: every generated artifact kind renders JSON-LD and visible previews through the fused component card", () => {
  const expectedTotals = new Map(
    ["type", "property", "enumeration", "datatype"].map((kind) => [
      kind,
      generatedArtifactEntries.filter((entry) => entry.artifactKind === kind).length,
    ]),
  );

  for (const kind of ["type", "property", "enumeration", "datatype"]) {
    let renderedEntries = 0;
    let renderedPreviewPanels = 0;
    let renderedStructuredPanels = 0;
    let renderedJsonLdScripts = 0;
    const pageSize = 96;
    const firstView = buildGeneratedArtifactView({ kind, pageSize });

    for (let page = 1; page <= firstView.totalPages; page += 1) {
      const view = buildGeneratedArtifactView({ kind, page, pageSize });
      const markup = renderToStaticMarkup(
        React.createElement(SemanticShowcase, { initialState: { mode: "generated-surface", kind, page, pageSize } }),
      );
      renderedEntries += view.entries.length;
      renderedPreviewPanels += (markup.match(/lander-semantic__preview-section/g) ?? []).length;
      renderedStructuredPanels += (markup.match(/semantic-demo__structured-panel/g) ?? []).length;
      renderedJsonLdScripts += (markup.match(/application\/ld\+json/g) ?? []).length;

      for (const entry of view.entries) {
        const cardId = `artifact-${entry.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`;
        assert.ok(markup.includes(cardId), `expected rendered card for ${entry.name}`);
      }
    }

    assert.equal(renderedEntries, expectedTotals.get(kind), `expected to page through every ${kind} artifact`);
    assert.ok(renderedPreviewPanels > 0, `expected ${kind} artifacts to render visible previews where generated fallbacks are used`);
    assert.equal(renderedStructuredPanels, 0, `did not expect ${kind} visible overview cards to render structured-field panels`);
    assert.ok(renderedJsonLdScripts >= expectedTotals.get(kind), `expected every ${kind} artifact to emit JSON-LD`);
  }
});

test("T1: generated property mode renders concrete property cards instead of an empty result pane", () => {
  const view = buildGeneratedArtifactView({ kind: "property", pageSize: 12 });
  const markup = renderToStaticMarkup(
    React.createElement(SemanticShowcase, { initialState: { mode: "generated-surface", kind: "property", pageSize: 12 } }),
  );
  assert.ok(view.entries.length > 0);
  assert.ok(markup.includes("935 matching artifacts"));
  assert.ok(markup.includes(view.entries[0].name));
});

test("T1: generated artifact detail pages render manifest-driven documentation tabs", () => {
  const markup = renderToStaticMarkup(
    React.createElement(SemanticShowcase, {
      initialState: {
        mode: "generated-surface",
        kind: "type",
        detailKind: "type",
        detailName: "Thing",
      },
    }),
  );

  for (const section of ["Overview", "Visible Specimen", "JSON-LD Specimen", "Schema", "Field Coverage", "React Usage", "Styling", "Source and Proof"]) {
    assert.ok(markup.includes(section), `expected generated detail section ${section}`);
  }
  assert.ok(markup.includes("Thing"));
  assert.ok(markup.includes("Back to explorer"));
  assert.ok(markup.includes("Support summary"));
  assert.ok(markup.includes("Specimen"));
  assert.ok(markup.includes("Emitted"));
  assert.ok(markup.includes("Accepted"));
  assert.ok(markup.includes("Fail-closed"));
  assert.equal((markup.match(/semantic-demo__detail-specimen-select/g) ?? []).length, 1);
  assert.ok(markup.includes("semantic-demo__detail-specimen-row"));
  assert.ok(markup.includes("semantic-demo__detail-aside"));
  assert.ok(markup.includes("semantic-demo__detail-summary-columns"));
  assert.equal((markup.match(/semantic-demo__detail-summary-columns/g) ?? []).length, 1);
  assert.ok(!markup.includes('semantic-demo__detail-summary"'));
  assert.ok(markup.includes("Purpose"));
  assert.ok(markup.includes("Metadata"));
  assert.ok(markup.includes("Package"));
  assert.ok(!markup.includes("Visible specimen"));
  const manifest = buildGeneratedDetailManifest("Thing", "type", "lander-light");
  assert.ok(manifest.specimens.typical.jsonLd);
  assert.equal(manifest.specimens.typical.jsonLd["@type"], "Thing");
  assert.ok(manifest.usage.production.includes("<Thing"));
  assert.ok(markup.includes("mdwrk-primitive__text-fit-heading"));
});

test("T1: generated detail specimens use production-like payloads across visible, JSON-LD, and React usage surfaces", () => {
  const manifest = buildGeneratedDetailManifest("Action", "type", "lander-dark");
  const maximal = manifest.specimens.maximal;
  const usage = usageForSpecimen(manifest, maximal);

  assert.equal(maximal.props.name, "Review release checklist");
  assert.equal(maximal.props.actionStatus, "CompletedActionStatus");
  assert.equal(maximal.jsonLd.name, maximal.props.name);
  assert.equal(maximal.jsonLd.target, maximal.props.target);
  assert.ok(usage.production.includes("Review release checklist"));
  assert.ok(usage.production.includes("CompletedActionStatus"));
  assert.ok(!usage.production.includes("structuredDataOverrides"));
  assert.ok(usage.specimen.includes('"identifier"'));
});

test("T1: generated detail React usage renders as code-first blocks instead of cards", () => {
  const source = readFileSync(resolve("src/showcase-artifact-detail.mjs"), "utf8");
  const renderReactUsageSource = source.slice(source.indexOf("function renderReactUsage"), source.indexOf("function renderStyling"));

  assert.ok(source.includes("function ReactUsageBlock"));
  assert.ok(source.includes("semantic-demo__react-usage-block"));
  assert.ok(source.includes("semantic-demo__react-usage-label"));
  assert.ok(renderReactUsageSource.includes("semantic-demo__react-usage semantic-demo__detail-section--wide"));
  assert.ok(renderReactUsageSource.includes('title: "Minimal usage"'));
  assert.ok(renderReactUsageSource.includes('title: "Production usage"'));
  assert.ok(renderReactUsageSource.includes('title: "Specimen payload"'));
  assert.ok(!renderReactUsageSource.includes("createElement(Card"));
});

test("T1: AboutPage detail visible specimen is component-authored instead of demo schema-card injected", () => {
  const source = readFileSync(resolve("src/showcase-client-semantic.mjs"), "utf8");

  assert.ok(source.includes('specimenContext.manifest?.name === "AboutPage"'));
  assert.ok(source.includes("return props;"));
  assert.ok(source.includes("createElement(AuthoredSpecimenPanel"));
});

test("T1: primitive detail pages render dedicated primitive documentation sections", () => {
  const markup = renderToStaticMarkup(
    React.createElement(SemanticShowcase, {
      initialState: {
        mode: "primitives",
        theme: "lander-dark",
        detailKind: "primitive",
        detailName: "Button",
      },
    }),
  );

  assert.ok(markup.includes("primitive artifact"));
  assert.ok(markup.includes("Button"));
  assert.ok(markup.includes("Open detail page") === false);
  assert.ok(markup.includes("Overview"));
  assert.ok(markup.includes("Visible Specimen"));
  assert.ok(markup.includes("JSON-LD Specimen"));
  assert.ok(markup.includes("Field Coverage"));
  assert.ok(markup.includes("React Usage"));
  assert.ok(markup.includes("Styling"));
  assert.ok(markup.includes("Source and Proof"));
  const manifest = buildPrimitiveDetailManifest("Button", "lander-dark", [{
    name: "Button",
    slug: "button",
    family: "Actions",
    familySlug: "actions",
    description: "Button primitive.",
  }]);
  assert.equal(manifest.specimens.typical.jsonLd, null);
  assert.ok(manifest.dataAttributes.includes('data-mdwrk-primitive="button"'));
  assert.ok(manifest.tokenFiles.includes("packages/ui/pages-ui-tokens/src/styles/primitive-actions.css"));
  assert.ok(markup.includes("mdwrk-primitive__text-fit-preserve"));
});

test("T1: primitives mode renders every shared primitive family through lightweight index cards", () => {
  const markup = renderToStaticMarkup(
    React.createElement(SemanticShowcase, { initialState: { mode: "primitives", theme: "lander-dark" } }),
  );

  for (const family of ["Actions", "Content", "Feedback", "Forms", "Navigation", "Media", "Overlays", "Layout"]) {
    assert.ok(markup.includes(`${family} primitives`), `expected ${family} primitive family`);
  }

  for (const primitiveName of ["ActionRail", "Accordion", "AddressField", "JsonPreview", "Map", "Modal", "Navbar", "Tooltip", "FirstNameField"]) {
    assert.ok(markup.includes(primitiveName), `expected primitive index entry for ${primitiveName}`);
  }

  for (const deprecatedCombinedLabel of [
    "ActionRail + Fab",
    "Card + ArticleBlock",
    "CodeBlock + JsonPreview",
    "Badge + Pill",
    "Alert + Toast",
    "Progress + StatusDot",
    "SearchField + FilterBar",
    "TextInput + TextArea",
    "ColorPicker + FileDropzone",
    "Tabs + ViewToggle",
    "Breadcrumbs + Pagination",
    "Tree + Explorer",
    "Icon + IconGrid",
    "ImageFrame + Gallery",
    "VideoFrame + AudioPlayer",
    "Dialog + Sheet",
    "Popover + Bubble",
    "Stack + Cluster",
    "Split + Grid",
    "Pane + Gutter",
    "Lists",
  ]) {
    assert.ok(!markup.includes(deprecatedCombinedLabel), `did not expect combined primitive card ${deprecatedCombinedLabel}`);
  }

  assert.ok(markup.includes("Open detail page"));
  assert.ok(markup.includes("Marker"));
  assert.ok(!markup.includes("Please compare these specimens"), "did not expect chat prompt specimen on overview");
  assert.ok(!markup.includes("Assistant"), "did not expect bubble specimen on overview");
  assert.ok(!markup.includes('data-mdwrk-primitive="task-list"'), "did not expect live primitive specimen markers on overview");

  assert.ok(markup.includes('data-lander-theme="lander-dark"'));
});

test("T1: demo stylesheet maps preserve, preview, and structured text policies onto explorer surfaces", () => {
  const css = readFileSync(resolve("src/styles.css"), "utf8");

  for (const selector of [
    ".semantic-demo__entry .lander-semantic__description",
    ".semantic-demo__detail-list code",
    ".semantic-demo__detail .mdwrk-primitive--json-preview",
    ".semantic-demo__primitive-card-header h3",
    ".semantic-demo__field input",
    ".semantic-demo__detail-aside",
  ]) {
    assert.ok(css.includes(selector), `expected demo style selector ${selector}`);
  }

  assert.ok(css.includes("-webkit-line-clamp: 3;"));
  assert.ok(css.includes("overflow-wrap: anywhere;"));
  assert.ok(css.includes("position: absolute;"));
  assert.ok(css.includes("top: 1.25rem;"));
  assert.ok(css.includes("right: 1.25rem;"));
});

test("T1: demo dark theme uses warm graphite tokens instead of steel-blue and teal accents", () => {
  const css = readFileSync(resolve("src/styles.css"), "utf8");
  const darkTheme = css.slice(css.indexOf('[data-lander-theme="lander-dark"]'));

  for (const rejectedColor of ["#60a5fa", "#5dd9b0", "#7dd3b0", "#7ec0ff", "#8fe7bf", "#0c1620", "#101c28"]) {
    assert.ok(!darkTheme.includes(rejectedColor), `did not expect rejected dark-theme color ${rejectedColor}`);
  }

  for (const expectedColor of ["#100d0a", "#17120e", "#d39b57", "#f1c77f"]) {
    assert.ok(darkTheme.includes(expectedColor), `expected warm dark-theme color ${expectedColor}`);
  }
});

test("T1: detail tabs render lazily behind route-level and app-level error boundaries", () => {
  const detailSource = readFileSync(resolve("src/showcase-artifact-detail.mjs"), "utf8");
  const semanticSource = readFileSync(resolve("src/showcase-client-semantic.mjs"), "utf8");
  const semanticLoaderSource = readFileSync(resolve("src/showcase-semantic-component-loader.mjs"), "utf8");
  const semanticPropertyLoaderSource = readFileSync(resolve("src/semantic-loaders/module-property-a-f.mjs"), "utf8");
  const semanticStyleLoaderSource = readFileSync(resolve("src/semantic-loaders/style-p-r-a-m.mjs"), "utf8");
  const mainSource = readFileSync(resolve("src/main.tsx"), "utf8");

  assert.ok(detailSource.includes("class DetailTabErrorBoundary"), "expected detail-tab error boundary");
  assert.ok(detailSource.includes("function ArtifactDetailPanel"), "expected isolated active detail panel renderer");
  assert.ok(detailSource.includes("renderVisibleSpecimen: renderLiveSpecimen"), "expected visible specimen renderer prop to avoid name shadowing");
  assert.ok(!detailSource.includes("const tabPanels = {"), "expected tabs to avoid eager panel construction");
  assert.ok(semanticSource.includes('import("./showcase-semantic-component-loader.mjs")'), "expected detail renderer to lazy-load the semantic component loader");
  assert.ok(semanticLoaderSource.includes("function prefixedArtifactSlug"), "expected generated component loader to normalize prefixed manifest slugs");
  assert.ok(semanticLoaderSource.includes("function styleCandidatesForEntry"), "expected generated component loader to resolve artifact CSS candidates");
  assert.ok(semanticLoaderSource.includes("await loadSemanticArtifactStyle(entry);"), "expected generated component loader to load CSS with the component");
  assert.ok(!semanticSource.includes("generated-semantic-surface.css"), "did not expect generated runtime to import aggregate semantic CSS");
  assert.ok(semanticSource.includes("function AuthoredSpecimenPanel"), "expected visible specimens to include an authored primitive-backed panel");
  assert.ok(!semanticSource.includes("structuredDataOverrides: specimen.jsonLd"), "expected live specimens to use direct schema props instead of override bags");
  assert.ok(semanticLoaderSource.includes("property-family/components/${moduleSlug}.js"), "expected exact property component path candidate");
  assert.ok(semanticPropertyLoaderSource.includes("property-family/components/schema-property-a*.js"), "expected property components to load from alphabet-bucketed property registries");
  assert.ok(semanticStyleLoaderSource.includes("semantic-schema-property-pra*.css"), "expected semantic styles to load from prefix-aware alphabet-bucketed registries");
  assert.ok(semanticSource.includes("componentResolved"), "expected component loading to distinguish not-found from still-loading");
  assert.ok(mainSource.includes("class ShowcaseErrorBoundary"), "expected root app error boundary");
});

test("T1: semantic demo build emits artifact-scoped CSS instead of a multi-megabyte aggregate semantic stylesheet", () => {
  const assetsRoot = resolve("dist/assets");
  const assetNames = readdirSync(assetsRoot);
  const indexHtml = readFileSync(resolve("dist/index.html"), "utf8");
  const entryScriptMatch = indexHtml.match(/<script[^>]+src="\/assets\/([^"]+\.js)"/u);
  const cssAssets = readdirSync(assetsRoot)
    .filter((filename) => filename.endsWith(".css"))
    .map((filename) => ({
      filename,
      bytes: statSync(resolve(assetsRoot, filename)).size,
    }));

  assert.ok(cssAssets.length > 0, "expected built CSS assets");
  assert.ok(entryScriptMatch, "expected an HTML module entry script");
  const entryScript = {
    filename: entryScriptMatch[1],
    bytes: statSync(resolve(assetsRoot, entryScriptMatch[1])).size,
  };
  assert.ok(entryScript.bytes < 128 * 1024, `expected client entry script below 128KB, got ${JSON.stringify(entryScript)}`);
  assert.ok(!cssAssets.some((asset) => asset.filename.startsWith("showcase-client-semantic-")), "did not expect a semantic aggregate CSS chunk");
  const oversizedSemanticRuntimeAssets = assetNames
    .filter((filename) => filename.startsWith("semantic-runtime-") && /\.(?:js|css)$/u.test(filename))
    .map((filename) => ({
      filename,
      bytes: statSync(resolve(assetsRoot, filename)).size,
    }))
    .filter((asset) => asset.bytes >= 512 * 1024);
  assert.deepEqual(oversizedSemanticRuntimeAssets, [], "did not expect an oversized grouped semantic runtime asset");
  const oversizedRuntimeAssets = assetNames
    .filter((filename) => /\.(?:js|css)$/u.test(filename))
    .map((filename) => ({
      filename,
      bytes: statSync(resolve(assetsRoot, filename)).size,
    }))
    .filter((asset) => asset.bytes >= 300 * 1024);
  assert.deepEqual(oversizedRuntimeAssets, [], "did not expect any JS or CSS runtime chunk at or above 300KB");
  assert.ok(cssAssets.every((asset) => asset.bytes < 300 * 1024), `expected all CSS assets below 300KB, got ${JSON.stringify(cssAssets)}`);
});
