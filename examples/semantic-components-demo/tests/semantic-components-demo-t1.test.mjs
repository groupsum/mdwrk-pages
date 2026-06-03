import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import test from "node:test";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { buildGeneratedArtifactView, generatedArtifactEntries, highlightsView } from "../src/showcase-catalog.mjs";
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

test("T1: generated type mode exposes structured fields for governed first-class types", () => {
  const markup = renderToStaticMarkup(
    React.createElement(SemanticShowcase, { initialState: { mode: "generated-surface", kind: "type", pageSize: 12 } }),
  );

  for (const field of [
    "Structured fields",
    "@type",
    "Answer",
    "text",
    "upvote Count",
    "AggregateOffer",
    "low Price",
    "high Price",
    "price Currency",
    "AlignmentObject",
    "alignment Type",
    "target Name",
    "target Description",
  ]) {
    assert.ok(markup.includes(field), `expected generated surface markup to include ${field}`);
  }
});

test("T1: every generated artifact kind renders JSON-LD and structured fields through the fused component card", () => {
  const expectedTotals = new Map(
    ["type", "property", "enumeration", "datatype"].map((kind) => [
      kind,
      generatedArtifactEntries.filter((entry) => entry.artifactKind === kind).length,
    ]),
  );

  for (const kind of ["type", "property", "enumeration", "datatype"]) {
    let renderedEntries = 0;
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
      renderedStructuredPanels += (markup.match(/semantic-demo__structured-panel/g) ?? []).length;
      renderedJsonLdScripts += (markup.match(/application\/ld\+json/g) ?? []).length;

      for (const entry of view.entries) {
        const cardId = `artifact-${entry.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`;
        assert.ok(markup.includes(cardId), `expected rendered card for ${entry.name}`);
      }
    }

    assert.equal(renderedEntries, expectedTotals.get(kind), `expected to page through every ${kind} artifact`);
    assert.equal(renderedStructuredPanels, expectedTotals.get(kind), `expected every ${kind} artifact to render structured fields`);
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

test("T1: generated artifact detail pages render schema, specimen, JSON-LD, class names, tokens, and proof sections", () => {
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

  for (const section of ["Live specimen", "Example specimen", "Schema", "JSON-LD", "Class names", "Tokens", "Proof"]) {
    assert.ok(markup.includes(section), `expected generated detail section ${section}`);
  }
  assert.ok(markup.includes("Thing"));
  assert.ok(markup.includes("Back to explorer"));
  assert.ok(markup.includes("Support summary"));
  assert.ok(markup.includes("semantic-thing.css"));
  assert.ok(markup.includes("mdwrk-primitive__text-fit-heading"));
  assert.ok(markup.includes("mdwrk-primitive__text-fit-structured"));
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

  assert.ok(markup.includes("primitive surface"));
  assert.ok(markup.includes("Button"));
  assert.ok(markup.includes("Open detail page") === false);
  assert.ok(markup.includes("This primitive is visible-only and does not emit JSON-LD."));
  assert.ok(markup.includes('data-mdwrk-primitive="button"'));
  assert.ok(markup.includes("primitive-actions.css"));
  assert.ok(markup.includes("mdwrk-primitive__text-fit-preserve"));
});

test("T1: primitives mode renders every shared primitive family through live demo cards", () => {
  const markup = renderToStaticMarkup(
    React.createElement(SemanticShowcase, { initialState: { mode: "primitives", theme: "lander-dark" } }),
  );

  for (const family of ["Actions", "Content", "Feedback", "Forms", "Navigation", "Media", "Overlays", "Layout"]) {
    assert.ok(markup.includes(`${family} primitives`), `expected ${family} primitive family`);
  }

  for (const primitiveName of [
    "action-rail",
    "accordion",
    "accordion-item",
    "address-field",
    "address-field-set",
    "article-block",
    "audio-player",
    "badge",
    "bookmark",
    "bubble",
    "breadcrumbs",
    "button",
    "button-group",
    "card",
    "card-body",
    "card-footer",
    "card-grid",
    "card-header",
    "cards",
    "chat-prompt",
    "checkbox-field",
    "checkbox-group",
    "code-block",
    "color-picker",
    "console-footer",
    "data-table",
    "date-field",
    "date-range-field",
    "datetime-field",
    "datetime-range-field",
    "decimal-quantity-field",
    "dialog",
    "duration-field",
    "email-field",
    "explorer",
    "fab",
    "favorite",
    "filter-bar",
    "file-dropzone",
    "gallery",
    "grid",
    "gutter",
    "icon",
    "icon-button",
    "icon-button-group",
    "icon-grid",
    "image-frame",
    "integer-quantity-field",
    "json-preview",
    "last-name-field",
    "middle-name-field",
    "map",
    "map-beacon",
    "map-box",
    "map-path",
    "map-point",
    "modal",
    "name-field-set",
    "nav-item",
    "navbar",
    "ordered-list",
    "pagination",
    "pane",
    "pill",
    "popover",
    "progress",
    "radio-group",
    "secret-field",
    "search-field",
    "select-field",
    "sheet",
    "split",
    "spinner",
    "stack",
    "star-rating",
    "status-dot",
    "surface",
    "table-of-contents",
    "tagged-crud-field",
    "task-list",
    "telephone-field",
    "text-area",
    "text-completion-field",
    "text-input",
    "time-picker-field",
    "time-range-field",
    "tabs",
    "toast",
    "todo-list",
    "tooltip",
    "toggle-section",
    "toolbar",
    "tree",
    "unordered-list",
    "url-field",
    "video-frame",
    "view-toggle",
    "website-field",
    "first-name-field",
  ]) {
    assert.ok(markup.includes(`data-mdwrk-primitive="${primitiveName}"`), `expected ${primitiveName} marker`);
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

  assert.ok(markup.includes('data-mdwrk-primitive="task-list"'));
  assert.ok(markup.includes('data-mdwrk-primitive="todo-list"'));
  assert.ok(markup.includes('type="checkbox"'), "expected task list to render checkbox inputs");
  assert.ok(markup.includes('mdwrk-primitive__control--swatch'), "expected color picker to render a swatch control");
  assert.ok(markup.includes("Please compare these specimens"), "expected chat prompt specimen");
  assert.ok(markup.includes("Assistant"), "expected two-party conversation specimen");
  assert.ok(markup.includes("Reviewer"), "expected reply specimen");

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
  ]) {
    assert.ok(css.includes(selector), `expected demo style selector ${selector}`);
  }

  assert.ok(css.includes("-webkit-line-clamp: 3;"));
  assert.ok(css.includes("overflow-wrap: anywhere;"));
});
