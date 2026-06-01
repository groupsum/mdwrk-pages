import assert from "node:assert/strict";
import test from "node:test";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";

import { validateStructuredDataByType } from "../../../contracts/lander-content-contract/dist/index.js";
import { importLanderReactDist } from "./load-dist.mjs";
import { generatedArtifactsByKind, propsForGeneratedArtifact } from "../../../../tests/generated-schemaorg-artifact-helpers.mjs";

const datatypeArtifacts = generatedArtifactsByKind("datatype");

function extractJsonLd(markup) {
  const match = markup.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/i);
  assert.ok(match?.[1], "Rendered markup must contain a JSON-LD payload");
  return JSON.parse(match[1]);
}

test("T1: generated datatype components emit schema-conformant JSON-LD", async () => {
  const semantic = await importLanderReactDist();

  for (const artifact of datatypeArtifacts) {
    const Component = semantic[artifact.visibleExportName];
    const payload = extractJsonLd(renderToStaticMarkup(React.createElement(Component, propsForGeneratedArtifact(artifact))));
    assert.deepEqual(validateStructuredDataByType(artifact.name, payload), [], `${artifact.visibleExportName} should emit schema-conformant JSON-LD`);
  }
});
