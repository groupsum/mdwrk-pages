import assert from "node:assert/strict";
import test from "node:test";

import * as structuredData from "../dist/index.js";
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

test("T0: generated structured-data builders exist and preserve representative artifact payloads", () => {
  const renderableArtifacts = generatedPassThroughArtifacts.flatMap((artifact) => {
    try {
      return [{ artifact, sample: sampleForGeneratedArtifact(artifact) }];
    } catch {
      return [];
    }
  });
  const artifactsByKind = new Map(["type", "property", "enumeration", "datatype"].map((kind) => [kind, 0]));

  for (const { artifact, sample } of renderableArtifacts) {
    const exportName = nodeExportNameForArtifact(artifact);
    const builder = structuredData[exportName];
    assert.equal(typeof builder, "function", `missing generated builder export ${exportName}`);

    const built = builder(sample);
    assert.deepEqual(built, sample, `${exportName} should preserve the generated artifact sample`);
    artifactsByKind.set(artifact.kind, (artifactsByKind.get(artifact.kind) ?? 0) + 1);
  }

  assert.ok((artifactsByKind.get("type") ?? 0) >= 10, "expected broad generated pass-through type builder coverage");
  assert.ok((artifactsByKind.get("property") ?? 0) >= 100, "expected broad generated property builder coverage");
  assert.ok((artifactsByKind.get("enumeration") ?? 0) >= 50, "expected generated enumeration builder coverage");
  assert.ok((artifactsByKind.get("datatype") ?? 0) >= 7, "expected generated datatype builder coverage");
});
