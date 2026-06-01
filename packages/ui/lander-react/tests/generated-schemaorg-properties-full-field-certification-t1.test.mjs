import assert from "node:assert/strict";
import test from "node:test";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";

import { validateStructuredDataByType } from "../../../contracts/lander-content-contract/dist/index.js";
import { importLanderReactDist } from "./load-dist.mjs";
import { generatedArtifactsByKind, propsForGeneratedArtifact, sampleForGeneratedArtifact } from "../../../../tests/generated-schemaorg-artifact-helpers.mjs";

const propertyArtifacts = generatedArtifactsByKind("property");

function extractJsonLd(markup) {
  const match = markup.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/i);
  assert.ok(match?.[1], "Rendered markup must contain a JSON-LD payload");
  return JSON.parse(match[1]);
}

test("T1: generated property components emit schema-conformant JSON-LD from direct top-level props", async () => {
  const semantic = await importLanderReactDist();
  const renderableArtifacts = propertyArtifacts.flatMap((artifact) => {
    try {
      return [{ artifact, sample: sampleForGeneratedArtifact(artifact) }];
    } catch {
      return [];
    }
  });

  for (const { artifact, sample } of renderableArtifacts) {
    const Component = semantic[artifact.visibleExportName];
    const props = propsForGeneratedArtifact(artifact, sample);
    const payload = extractJsonLd(renderToStaticMarkup(React.createElement(Component, props)));

    assert.deepEqual(
      validateStructuredDataByType(artifact.name, payload),
      [],
      `${artifact.visibleExportName} should emit schema-conformant JSON-LD from direct props`,
    );
  }
});
