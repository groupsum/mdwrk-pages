import assert from "node:assert/strict";
import test from "node:test";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";

import { importStructuredDataReactDist } from "./load-dist.mjs";
import { generatedPassThroughArtifacts, sampleForGeneratedArtifact } from "../../../../tests/generated-schemaorg-artifact-helpers.mjs";

function extractJsonLd(markup) {
  const match = markup.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/i);
  assert.ok(match?.[1], "Rendered wrapper markup must include a JSON-LD payload");
  return JSON.parse(match[1]);
}

test("T0: generated structured-data wrappers exist and emit JSON-LD for every promoted artifact kind", async () => {
  const mod = await importStructuredDataReactDist();
  const renderableArtifacts = generatedPassThroughArtifacts.flatMap((artifact) => {
    try {
      return [{ artifact, sample: sampleForGeneratedArtifact(artifact) }];
    } catch {
      return [];
    }
  });
  const artifactsByKind = new Map(["type", "property", "enumeration", "datatype"].map((kind) => [kind, 0]));

  for (const { artifact, sample } of renderableArtifacts) {
    const Component = mod[artifact.wrapperExportName];
    assert.equal(typeof Component, "function", `missing generated wrapper ${artifact.wrapperExportName}`);

    const payload = extractJsonLd(renderToStaticMarkup(React.createElement(Component, { data: sample })));
    assert.deepEqual(payload, sample, `${artifact.wrapperExportName} should preserve the generated payload`);
    artifactsByKind.set(artifact.kind, (artifactsByKind.get(artifact.kind) ?? 0) + 1);
  }

  assert.ok((artifactsByKind.get("type") ?? 0) >= 10, "expected broad generated type wrapper coverage");
  assert.ok((artifactsByKind.get("property") ?? 0) >= 100, "expected broad generated property wrapper coverage");
  assert.ok((artifactsByKind.get("enumeration") ?? 0) >= 50, "expected generated enumeration wrapper coverage");
  assert.ok((artifactsByKind.get("datatype") ?? 0) >= 7, "expected generated datatype wrapper coverage");
});
