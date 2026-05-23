import assert from "node:assert/strict";
import test from "node:test";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { readFileSync } from "node:fs";
import { importStructuredDataReactDist } from "./load-dist.mjs";

const here = path.dirname(fileURLToPath(import.meta.url));
const packageRoot = path.resolve(here, "..");
const packageJson = JSON.parse(readFileSync(path.join(packageRoot, "package.json"), "utf8"));
const srcIndex = readFileSync(path.join(packageRoot, "src", "index.tsx"), "utf8");
const landerReactDistIndex = readFileSync(
  path.join(packageRoot, "..", "lander-react", "dist", "index.js"),
  "utf8",
);

test("T0: structured-data package owns the registry surface", async () => {
  assert.equal(packageJson.name, "@mdwrk/lander-react-structured-data");
  assert.ok(packageJson.scripts.test.includes("intent-registry-t0.test.mjs"));
  assert.ok(srcIndex.includes("SUPPORTED_LANDER_STRUCTURED_DATA_INTENT_KINDS"));
  assert.ok(srcIndex.includes("getStructuredDataIntentRendererEntry"));

  const mod = await importStructuredDataReactDist();
  assert.equal(Array.isArray(mod.SUPPORTED_LANDER_STRUCTURED_DATA_INTENT_KINDS), true);
  assert.equal(typeof mod.getStructuredDataIntentRendererEntry, "function");
});

test("T0: visible lander-react only exposes deprecated compatibility delegates for the intent registry surface", () => {
  assert.equal(landerReactDistIndex.includes('"@mdwrk/structured-data"'), false);
  assert.equal(landerReactDistIndex.includes("structuredDataReact.landerStructuredDataIntentRegistry"), true);
  assert.equal(landerReactDistIndex.includes("structuredDataReact.renderStructuredDataIntent"), true);
  assert.equal(landerReactDistIndex.includes("structuredDataReact.SUPPORTED_LANDER_STRUCTURED_DATA_INTENT_KINDS"), true);
  assert.equal(landerReactDistIndex.includes("deprecated from @mdwrk/lander-react"), true);
});
