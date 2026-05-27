import assert from "node:assert/strict";
import test from "node:test";
import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { importLanderReactDist } from "./load-dist.mjs";
import { importStructuredDataReactDist } from "../../../machine/lander-react-structured-data/tests/load-dist.mjs";

const here = path.dirname(fileURLToPath(import.meta.url));
const packageRoot = path.resolve(here, "..");
const packageJson = JSON.parse(readFileSync(path.join(packageRoot, "package.json"), "utf8"));
const readme = readFileSync(path.join(packageRoot, "README.md"), "utf8");

test("T0: lander-react exposes deprecated structured-data compatibility exports", async () => {
  const landerReact = await importLanderReactDist();
  const structuredDataReact = await importStructuredDataReactDist();

  assert.equal(landerReact.LANDER_REACT_STRUCTURED_DATA_REEXPORTS_DEPRECATED, true);
  assert.ok(packageJson.scripts.test.includes("compat-reexports-t0.test.mjs"));
  assert.ok(readme.includes("@mdwrk/lander-react-structured-data"));

  for (const name of [
    "JsonLd",
    "WebPageStructuredData",
    "BreadcrumbListStructuredData",
    "renderStructuredDataIntent",
    "getStructuredDataIntentRendererEntry",
    "landerStructuredDataIntentRegistry",
    "SUPPORTED_LANDER_STRUCTURED_DATA_INTENT_KINDS",
  ]) {
    assert.ok(name in landerReact, `${name} must be exported from @mdwrk/lander-react`);
    assert.ok(name in structuredDataReact, `${name} must be exported from @mdwrk/lander-react-structured-data`);
  }
});
