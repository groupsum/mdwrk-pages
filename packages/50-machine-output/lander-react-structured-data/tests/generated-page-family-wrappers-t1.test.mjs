import assert from "node:assert/strict";
import test from "node:test";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";

import { validateStructuredDataByType } from "../../../00-contracts/lander-content-contract/dist/index.js";
import { importStructuredDataReactDist } from "./load-dist.mjs";
import { generatedPassThroughArtifacts, sampleForGeneratedArtifact } from "../../../../tests/generated-schemaorg-artifact-helpers.mjs";

function extractJsonLd(markup) {
  const match = markup.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/i);
  assert.ok(match?.[1], "Rendered wrapper markup must include a JSON-LD payload");
  return JSON.parse(match[1]);
}

test("T1: generated structured-data wrappers emit schema-conformant JSON-LD for every promoted artifact kind", async () => {
  const mod = await importStructuredDataReactDist();
  const renderableArtifacts = generatedPassThroughArtifacts.flatMap((artifact) => {
    try {
      return [{ artifact, sample: sampleForGeneratedArtifact(artifact) }];
    } catch {
      return [];
    }
  });

  for (const { artifact, sample } of renderableArtifacts) {
    const Component = mod[artifact.wrapperExportName];
    const payload = extractJsonLd(renderToStaticMarkup(React.createElement(Component, { data: sample })));
    assert.deepEqual(
      validateStructuredDataByType(artifact.name, payload),
      [],
      `${artifact.wrapperExportName} should emit schema-conformant JSON-LD`,
    );
  }
});
