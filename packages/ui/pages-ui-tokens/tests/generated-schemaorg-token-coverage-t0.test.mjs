import assert from "node:assert/strict";
import test from "node:test";

import { GENERATED_SCHEMAORG_PAGE_FAMILY_ARTIFACTS } from "../../../contracts/lander-content-contract/dist/generated-schemaorg-page-family-metadata.js";
import { semanticTokenFixtures } from "./semantic-token-fixtures.mjs";

test("T0: generated semantic token fixtures cover every promoted generated artifact", () => {
  assert.equal(semanticTokenFixtures.length, GENERATED_SCHEMAORG_PAGE_FAMILY_ARTIFACTS.length);

  for (const artifact of GENERATED_SCHEMAORG_PAGE_FAMILY_ARTIFACTS) {
    assert.ok(
      semanticTokenFixtures.some((fixture) => fixture.name === artifact.visibleExportName && fixture.slug === artifact.slug),
      `missing token fixture for ${artifact.visibleExportName}`,
    );
  }
});
