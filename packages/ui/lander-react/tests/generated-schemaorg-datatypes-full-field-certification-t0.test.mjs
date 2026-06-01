import assert from "node:assert/strict";
import test from "node:test";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";

import { importLanderReactDist } from "./load-dist.mjs";
import { generatedArtifactsByKind, propsForGeneratedArtifact } from "../../../../tests/generated-schemaorg-artifact-helpers.mjs";

const datatypeArtifacts = generatedArtifactsByKind("datatype");

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
  }
});
