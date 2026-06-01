import assert from "node:assert/strict";
import test from "node:test";

import * as structuredData from "../dist/index.js";
import {
  cloneJsonLike,
  deepFreeze,
  generatedPassThroughArtifacts,
  sampleForGeneratedArtifact,
} from "../../../../tests/generated-schemaorg-artifact-helpers.mjs";

function toPascalCase(value) {
  return value
    .replace(/[^A-Za-z0-9]+/g, " ")
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .split(/\s+/u)
    .filter(Boolean)
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join("");
}

function toCamelCase(value) {
  const pascal = toPascalCase(value);
  return pascal.charAt(0).toLowerCase() + pascal.slice(1);
}

function nodeExportNameForArtifact(artifact) {
  return artifact.kind === "property"
    ? `${toCamelCase(artifact.name)}PropertyNode`
    : `${toCamelCase(artifact.name)}Node`;
}

test("T2: generated structured-data builders stay deterministic and do not mutate frozen promoted artifact payloads", () => {
  const renderableArtifacts = generatedPassThroughArtifacts.flatMap((artifact) => {
    try {
      return [{ artifact, sample: sampleForGeneratedArtifact(artifact) }];
    } catch {
      return [];
    }
  });

  for (const { artifact, sample } of renderableArtifacts) {
    const exportName = nodeExportNameForArtifact(artifact);
    const builder = structuredData[exportName];
    const baseline = cloneJsonLike(sample);
    deepFreeze(sample);

    const first = builder(sample);
    const second = builder(sample);

    assert.deepEqual(first, second, `${exportName} should produce deterministic output`);
    assert.deepEqual(sample, baseline, `${exportName} should not mutate frozen input`);
  }
});
