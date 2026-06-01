import assert from "node:assert/strict";
import test from "node:test";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";

import { buildGeneratedArtifactView, qaViewLinks } from "../src/showcase-catalog.mjs";
import { foundationalGeneratedProperties, foundationalGeneratedTypes } from "../../../tests/generated-schemaorg-artifact-helpers.mjs";
import { importShowcaseComponent } from "./load-showcase-component.mjs";

const { SemanticShowcase } = await importShowcaseComponent();

test("T2: generated-surface discoverability stays deterministic across case-insensitive search, routing links, and repeated renders", () => {
  for (const name of foundationalGeneratedTypes) {
    const lower = buildGeneratedArtifactView({ kind: "type", surface: "page-or-listing", search: name.toLowerCase(), pageSize: 24 });
    const upper = buildGeneratedArtifactView({ kind: "type", surface: "page-or-listing", search: name.toUpperCase(), pageSize: 24 });
    assert.deepEqual(lower.entries, upper.entries, `type search for ${name} should stay case-insensitive and deterministic`);
    assert.ok(lower.entries.some((entry) => entry.name === name), `${name} should remain discoverable`);
  }

  for (const name of foundationalGeneratedProperties) {
    const lower = buildGeneratedArtifactView({ kind: "property", search: name.toLowerCase(), pageSize: 24 });
    const upper = buildGeneratedArtifactView({ kind: "property", search: name.toUpperCase(), pageSize: 24 });
    assert.deepEqual(lower.entries, upper.entries, `property search for ${name} should stay case-insensitive and deterministic`);
    assert.ok(lower.entries.some((entry) => entry.name === name), `${name} should remain discoverable`);
  }

  assert.ok(
    qaViewLinks.some((entry) => entry.href === "?mode=generated-surface&kind=type&surface=page-or-listing"),
    "QA links should preserve the pages + listings discoverability route",
  );
});

test("T2: generated-surface showcase markup stays deterministic for discoverability-focused entry states", () => {
  const props = {
    initialState: { mode: "generated-surface", kind: "type", surface: "page-or-listing", search: "thing", pageSize: 12 },
  };
  const firstMarkup = renderToStaticMarkup(React.createElement(SemanticShowcase, props));
  const secondMarkup = renderToStaticMarkup(React.createElement(SemanticShowcase, props));

  assert.equal(firstMarkup, secondMarkup, "discoverability showcase state should render deterministically");
  assert.ok(firstMarkup.includes("Thing"));
  assert.ok(firstMarkup.includes("Pages + Listings"));
});
