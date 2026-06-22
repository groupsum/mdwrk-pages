import assert from "node:assert/strict";
import test from "node:test";

import * as structuredData from "../dist/index.js";
import { validateStructuredDataByType } from "../../../00-contracts/lander-content-contract/dist/index.js";
import { generatedPassThroughArtifacts, sampleForGeneratedArtifact } from "../../../../tests/generated-schemaorg-artifact-helpers.mjs";

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

test("T1: generated structured-data builders preserve schema-valid payloads for every promoted artifact kind", () => {
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
    const built = builder(sample);
    assert.deepEqual(
      validateStructuredDataByType(artifact.name, built),
      [],
      `${exportName} should preserve a schema-valid generated payload`,
    );
  }
});
