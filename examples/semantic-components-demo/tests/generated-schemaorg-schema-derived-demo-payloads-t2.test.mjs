import assert from "node:assert/strict";
import test from "node:test";

import { buildGeneratedArtifactView, generatedArtifactEntries } from "../src/showcase-catalog.mjs";
import { cloneJsonLike, generatedPassThroughArtifacts } from "../../../tests/generated-schemaorg-artifact-helpers.mjs";

const generatedPassThroughNames = new Set(generatedPassThroughArtifacts.map((artifact) => `${artifact.kind}:${artifact.name}`));

function payloadFromEntry(entry) {
  if (entry.artifactKind === "type" || entry.artifactKind === "property") {
    const { description, examples, ...payload } = entry.props;
    return payload.value !== undefined && Object.keys(payload).length === 1 ? payload.value : payload;
  }
  return entry.props.value;
}

test("T2: generated demo payload derivation stays deterministic and does not mutate the promoted pass-through surface", () => {
  const passThroughEntries = generatedArtifactEntries.filter((entry) =>
    generatedPassThroughNames.has(`${entry.artifactKind}:${entry.name}`),
  );

  const baseline = new Map(
    passThroughEntries.map((entry) => [`${entry.artifactKind}:${entry.name}`, cloneJsonLike(entry.props)]),
  );

  const firstView = buildGeneratedArtifactView({ kind: "type", pageSize: 96 });
  const secondView = buildGeneratedArtifactView({ kind: "type", pageSize: 96 });
  assert.deepEqual(firstView.entries, secondView.entries, "type view generation should stay deterministic");

  const firstPayloads = new Map(
    passThroughEntries.map((entry) => [`${entry.artifactKind}:${entry.name}`, payloadFromEntry(entry)]),
  );
  const secondPayloads = new Map(
    passThroughEntries.map((entry) => [`${entry.artifactKind}:${entry.name}`, payloadFromEntry(entry)]),
  );
  assert.deepEqual([...firstPayloads.entries()], [...secondPayloads.entries()], "payload derivation should stay deterministic");

  for (const entry of passThroughEntries) {
    const key = `${entry.artifactKind}:${entry.name}`;
    assert.deepEqual(entry.props, baseline.get(key), `${key} props should not be mutated while deriving demo payloads`);
  }
});
