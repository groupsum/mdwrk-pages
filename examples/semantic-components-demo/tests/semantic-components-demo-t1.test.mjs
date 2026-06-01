import assert from "node:assert/strict";
import test from "node:test";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { buildGeneratedArtifactView, generatedArtifactEntries, highlightsView } from "../src/showcase-catalog.mjs";
import { importShowcaseComponent } from "./load-showcase-component.mjs";

const { SemanticShowcase } = await importShowcaseComponent();

test("T1: highlights mode lands on curated high-signal surfaces instead of the full mega-grid", () => {
  const markup = renderToStaticMarkup(React.createElement(SemanticShowcase, { initialState: { mode: "highlights" } }));
  assert.ok(markup.includes("Full fused semantic surface explorer"));
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
