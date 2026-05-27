import assert from "node:assert/strict";
import test from "node:test";
import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const packageRoot = path.resolve(here, "..");
const packageJson = JSON.parse(readFileSync(path.join(packageRoot, "package.json"), "utf8"));
const srcIndex = readFileSync(path.join(packageRoot, "src", "types.ts"), "utf8");

test("T0: lander-commerce-contract exposes a standalone commerce contract package", () => {
  assert.equal(packageJson.name, "@mdwrk/lander-commerce-contract");
  assert.ok(packageJson.description.includes("commerce"));
  assert.ok(packageJson.scripts.test.includes("contract-t0.test.mjs"));
  assert.ok(srcIndex.includes("export interface CommerceProduct"));
  assert.ok(srcIndex.includes("export interface CommerceCart"));
  assert.ok(srcIndex.includes("export interface CommerceRuntimeAdapter"));
});
