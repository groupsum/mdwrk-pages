import assert from "node:assert/strict";
import test from "node:test";

import { validateStructuredDataByType } from "../../../../packages/00-contracts/lander-content-contract/dist/index.js";
import { generatedArtifactEntries } from "../src/showcase-catalog.mjs";
import { generatedPassThroughArtifacts } from "../../../tests/generated-schemaorg-artifact-helpers.mjs";

function payloadFromEntry(entry) {
  if (entry.artifactKind === "type" || entry.artifactKind === "property") {
    const { description, examples, ...payload } = entry.props;
    return payload.value !== undefined && Object.keys(payload).length === 1 ? payload.value : payload;
  }
  return entry.props.value;
}

test("T0: generated demo payloads are schema-derived across the foundational artifact set", () => {
  const representativeType = generatedPassThroughArtifacts.find((artifact) => artifact.kind === "type")?.name;
  const expectedArtifacts = [
    ["type", representativeType],
    ["property", "about"],
    ["property", "potentialAction"],
    ["property", "itemListElement"],
    ["enumeration", "ActionStatusType"],
    ["datatype", "Boolean"],
  ].filter((entry) => entry[1]);

  for (const [artifactKind, name] of expectedArtifacts) {
    const entry = generatedArtifactEntries.find((candidate) => candidate.artifactKind === artifactKind && candidate.name === name);
    assert.ok(entry, `expected generated demo entry for ${artifactKind} ${name}`);
    const payload = payloadFromEntry(entry);
    assert.deepEqual(validateStructuredDataByType(name, payload), [], `${name} demo payload should validate against its schema`);
  }
});
