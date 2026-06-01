import assert from "node:assert/strict";
import test from "node:test";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";

import { importLanderReactDist } from "./load-dist.mjs";
import { generatedArtifactsByKind, propsForGeneratedArtifact } from "../../../../tests/generated-schemaorg-artifact-helpers.mjs";

const enumerationArtifacts = generatedArtifactsByKind("enumeration");

test("T0: generated enumeration components render visible shells and apply className", async () => {
  const semantic = await importLanderReactDist();

  for (const artifact of enumerationArtifacts) {
    const Component = semantic[artifact.visibleExportName];
    assert.equal(typeof Component, "function", `missing generated enumeration export ${artifact.visibleExportName}`);

    const markup = renderToStaticMarkup(
      React.createElement(Component, { ...propsForGeneratedArtifact(artifact), className: "generated-probe" }),
    );

    assert.ok(markup.includes(artifact.shellSelector.slice(1)), `${artifact.visibleExportName} should render its shell class`);
    assert.ok(markup.includes("generated-probe"), `${artifact.visibleExportName} should apply caller className`);
  }
});
