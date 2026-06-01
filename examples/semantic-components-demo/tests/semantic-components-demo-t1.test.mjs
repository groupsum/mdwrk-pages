import assert from "node:assert/strict";
import test from "node:test";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { buildGeneratedArtifactView, highlightsView } from "../src/showcase-catalog.mjs";
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
    React.createElement(SemanticShowcase, { initialState: { mode: "governed-core", family: "Education family", surface: "page" } }),
  );
  assert.ok(markup.includes("Governed Core"));
  assert.ok(markup.includes("Education family"));
  assert.ok(markup.includes("Family"));
  assert.ok(markup.includes("Surface focus"));
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
  assert.equal(view.total, buildGeneratedArtifactView({ kind: "type", pageSize: 12 }).total);
  assert.ok(markup.includes(view.entries[0].name));
  assert.ok(view.entries.some((entry) => entry.surfaceFocus === "page" || entry.surfaceFocus === "page-or-listing"));
});
