import assert from "node:assert/strict";
import test from "node:test";

import { validateStructuredDataByType } from "../../../../packages/00-contracts/lander-content-contract/dist/index.js";
import { generatedArtifactEntries } from "../src/showcase-catalog.mjs";
import { generatedPassThroughArtifacts, sampleForGeneratedArtifact } from "../../../tests/generated-schemaorg-artifact-helpers.mjs";

const generatedPassThroughNames = new Set(generatedPassThroughArtifacts.map((artifact) => `${artifact.kind}:${artifact.name}`));

function payloadFromEntry(entry) {
  if (entry.artifactKind === "type" || entry.artifactKind === "property") {
    const { description, examples, ...payload } = entry.props;
    return payload.value !== undefined && Object.keys(payload).length === 1 ? payload.value : payload;
  }
  return entry.props.value;
}

test("T1: generated demo payloads stay schema-valid for the full promoted pass-through surface", () => {
  const passThroughEntries = generatedArtifactEntries
    .filter((entry) => generatedPassThroughNames.has(`${entry.artifactKind}:${entry.name}`))
    .filter((entry) => {
      try {
        sampleForGeneratedArtifact({ kind: entry.artifactKind, name: entry.name, slug: entry.slug });
        return true;
      } catch {
        return false;
      }
    });
  assert.ok(passThroughEntries.length >= 800, "expected the schema-derivable generated pass-through surface");

  for (const entry of passThroughEntries) {
    const payload = payloadFromEntry(entry);
    assert.deepEqual(
      validateStructuredDataByType(entry.name, payload),
      [],
      `${entry.name} demo payload should remain schema-valid for ${entry.artifactKind}`,
    );
  }
});
