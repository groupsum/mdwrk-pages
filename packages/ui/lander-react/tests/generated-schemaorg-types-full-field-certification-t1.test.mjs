import assert from "node:assert/strict";
import test from "node:test";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";

import { validateStructuredDataByType } from "../../../contracts/lander-content-contract/dist/index.js";
import { importLanderReactDist } from "./load-dist.mjs";
import { generatedPassThroughArtifacts, propsForGeneratedArtifact, sampleForGeneratedArtifact } from "../../../../tests/generated-schemaorg-artifact-helpers.mjs";

const typeArtifacts = generatedPassThroughArtifacts.filter((artifact) => artifact.kind === "type");

function extractJsonLd(markup) {
  const match = markup.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/i);
  assert.ok(match?.[1], "Rendered markup must contain a JSON-LD payload");
  return JSON.parse(match[1]);
}

function extractJsonLdScripts(markup) {
  return [...markup.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi)].map((match) => JSON.parse(match[1]));
}

test("T1: generated type components emit schema-conformant JSON-LD from direct top-level props", async () => {
  const semantic = await importLanderReactDist();
  const renderableArtifacts = typeArtifacts.flatMap((artifact) => {
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

test("T1: generated type components contribute object payloads to page-level JSON-LD graphs", async () => {
  const semantic = await importLanderReactDist();
  const artifact = typeArtifacts.find((entry) => {
    try {
      sampleForGeneratedArtifact(entry);
      return true;
    } catch {
      return false;
    }
  });
  assert.ok(artifact, "expected at least one generated type artifact");

  const Component = semantic[artifact.visibleExportName];
  const props = propsForGeneratedArtifact(artifact, sampleForGeneratedArtifact(artifact));
  const markup = renderToStaticMarkup(
    React.createElement(semantic.SemanticStructuredDataGraph, null, React.createElement(Component, props)),
  );
  const scripts = extractJsonLdScripts(markup);

  assert.equal(scripts.length, 1, `${artifact.visibleExportName} should be collected into one graph script`);
  assert.deepEqual(scripts[0]["@graph"], [Component.toStructuredData(props)]);
});
