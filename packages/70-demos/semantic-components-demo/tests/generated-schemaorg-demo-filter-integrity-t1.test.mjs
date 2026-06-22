import assert from "node:assert/strict";
import test from "node:test";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";

import { buildGeneratedArtifactView } from "../src/showcase-catalog.mjs";
import { foundationalGeneratedProperties, foundationalGeneratedTypes } from "../../../tests/generated-schemaorg-artifact-helpers.mjs";
import { importShowcaseComponent } from "./load-showcase-component.mjs";

const { SemanticShowcase } = await importShowcaseComponent();

test("T1: generated-surface filters stay truthful and do not hide implemented foundational artifacts", () => {
  const typeView = buildGeneratedArtifactView({ kind: "type", pageSize: 24 });
  const pageListingView = buildGeneratedArtifactView({ kind: "type", surface: "page-or-listing", pageSize: 24 });
  assert.ok(typeView.total >= 200, "unfiltered type view should expose the full promoted generated type set");
  assert.ok(pageListingView.total < typeView.total, "page/listing surface focus should filter the type set");
  assert.ok(pageListingView.entries.every((entry) => entry.surfaceFocus === "page" || entry.surfaceFocus === "listing" || entry.surfaceFocus === "page-or-listing"));

  for (const name of foundationalGeneratedTypes) {
    const searchView = buildGeneratedArtifactView({ kind: "type", search: name, pageSize: 24 });
    assert.ok(searchView.entries.some((entry) => entry.name === name), `unfiltered generated search should expose type ${name}`);
  }

  for (const name of foundationalGeneratedProperties) {
    const searchView = buildGeneratedArtifactView({ kind: "property", surface: "page-or-listing", search: name, pageSize: 24 });
    assert.ok(searchView.entries.some((entry) => entry.name === name), `surface focus should not hide property ${name}`);
  }

  const markup = renderToStaticMarkup(
    React.createElement(SemanticShowcase, {
      initialState: { mode: "generated-surface", kind: "type", search: "Thing", pageSize: 12 },
    }),
  );
  assert.ok(markup.includes("Thing"));
  assert.ok(markup.includes("Surface focus"));
});
