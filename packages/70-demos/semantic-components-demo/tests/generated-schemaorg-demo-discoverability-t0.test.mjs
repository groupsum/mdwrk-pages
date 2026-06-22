import assert from "node:assert/strict";
import test from "node:test";

import {
  buildGeneratedArtifactView,
  generatedArtifactKindOptions,
  showcaseStats,
} from "../src/showcase-catalog.mjs";
import { foundationalGeneratedProperties, foundationalGeneratedTypes } from "../../../tests/generated-schemaorg-artifact-helpers.mjs";

test("T0: generated-surface demo exposes the foundational generated types and properties", () => {
  assert.ok(generatedArtifactKindOptions.some((option) => option.value === "type"));
  assert.ok(generatedArtifactKindOptions.some((option) => option.value === "property"));
  assert.equal(showcaseStats.types, 232);
  assert.equal(showcaseStats.properties, 935);

  for (const name of foundationalGeneratedTypes) {
    const view = buildGeneratedArtifactView({ kind: "type", search: name, pageSize: 24 });
    assert.ok(view.entries.some((entry) => entry.name === name), `type discoverability should expose ${name}`);
  }

  for (const name of foundationalGeneratedProperties) {
    const view = buildGeneratedArtifactView({ kind: "property", search: name, pageSize: 24 });
    assert.ok(view.entries.some((entry) => entry.name === name), `property discoverability should expose ${name}`);
  }
});
