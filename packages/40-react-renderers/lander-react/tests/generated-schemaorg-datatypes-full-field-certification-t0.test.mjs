import assert from "node:assert/strict";
import test from "node:test";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";

import { importLanderReactDist } from "./load-dist.mjs";
import { generatedArtifactsByKind, propsForGeneratedArtifact } from "../../../../tests/generated-schemaorg-artifact-helpers.mjs";

const datatypeArtifacts = generatedArtifactsByKind("datatype");

function extractJsonLd(markup) {
  const match = markup.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/i);
  assert.ok(match?.[1], "Rendered markup must contain a JSON-LD payload");
  return JSON.parse(match[1]);
}

test("T0: generated datatype components render visible shells and apply className", async () => {
  const semantic = await importLanderReactDist();

  for (const artifact of datatypeArtifacts) {
    const Component = semantic[artifact.visibleExportName];
    assert.equal(typeof Component, "function", `missing generated datatype export ${artifact.visibleExportName}`);

    const markup = renderToStaticMarkup(
      React.createElement(Component, { ...propsForGeneratedArtifact(artifact), className: "generated-probe" }),
    );

    assert.ok(markup.includes(artifact.shellSelector.slice(1)), `${artifact.visibleExportName} should render its shell class`);
    assert.ok(markup.includes("generated-probe"), `${artifact.visibleExportName} should apply caller className`);
    assert.equal(typeof Component.toStructuredData, "function", `${artifact.visibleExportName} should expose toStructuredData`);
    assert.deepEqual(
      Component.toStructuredData(propsForGeneratedArtifact(artifact)),
      extractJsonLd(markup),
      `${artifact.visibleExportName} toStructuredData should match emitted JSON-LD`,
    );
  }
});
