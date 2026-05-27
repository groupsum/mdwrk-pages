import assert from "node:assert/strict";
import test from "node:test";
import { readFileSync, readdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { importLanderReactDist } from "./load-dist.mjs";

const here = path.dirname(fileURLToPath(import.meta.url));
const packageRoot = path.resolve(here, "..");
const packageJson = JSON.parse(readFileSync(path.join(packageRoot, "package.json"), "utf8"));
const srcIndex = readFileSync(path.join(packageRoot, "src", "index.tsx"), "utf8");
const distIndex = readFileSync(path.join(packageRoot, "dist", "index.js"), "utf8");

const forbiddenNames = [
  "StructuredDataNode",
];

test("T0: lander-react manifest delegates structured data ownership to the new package", () => {
  assert.equal(packageJson.name, "@mdwrk/lander-react");
  assert.equal(packageJson.dependencies?.["@mdwrk/lander-react-structured-data"]?.startsWith("^"), true);
  assert.equal("@mdwrk/structured-data" in (packageJson.dependencies ?? {}), false);
  assert.ok(packageJson.scripts.test.includes("visible-only-t0.test.mjs"));
  assert.ok(packageJson.scripts.test.includes("compat-reexports-t0.test.mjs"));
});

test("T0: source and dist stay free of direct structured-data ownership while allowing compat delegates", async () => {
  assert.ok(srcIndex.includes('from "@mdwrk/lander-react-structured-data"'));
  assert.equal(srcIndex.includes('from "@mdwrk/structured-data"'), false);

  const mod = await importLanderReactDist();
  const exportKeys = Object.keys(mod);
  assert.equal(mod.LANDER_REACT_STRUCTURED_DATA_REEXPORTS_DEPRECATED, true);
  assert.ok(exportKeys.includes("WebPageStructuredData"));
  assert.ok(exportKeys.includes("renderStructuredDataIntent"));
  assert.ok(exportKeys.includes("landerStructuredDataIntentRegistry"));

  for (const name of forbiddenNames) {
    assert.equal(exportKeys.includes(name), false, `${name} must not be exported from @mdwrk/lander-react`);
    assert.equal(distIndex.includes(`export { ${name}`), false);
    assert.equal(distIndex.includes(`function ${name}`), false);
  }

  assert.equal(srcIndex.includes('from "@mdwrk/structured-data"'), false);
  assert.equal(distIndex.includes('"@mdwrk/structured-data"'), false);

  const testFiles = readdirSync(path.join(packageRoot, "tests"));
  assert.ok(testFiles.includes("run-smoke.mjs"));
});
