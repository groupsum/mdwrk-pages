import assert from "node:assert/strict";
import test from "node:test";
import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const packageRoot = path.resolve(here, "..");
const distRoot = path.join(packageRoot, "dist");
const assetDir = path.join(distRoot, "assets");
const assetFile = readdirSync(assetDir).find((name) => name.endsWith(".js"));
const bundle = readFileSync(path.join(assetDir, assetFile), "utf8");

test("T1: built demo bundle includes storefront routes and commerce widgets", () => {
  assert.ok(bundle.includes("/store/"));
  assert.ok(bundle.includes("/store/catalog/"));
  assert.ok(bundle.includes("/store/pricing/"));
  assert.ok(bundle.includes("/store/pricing/basic/"));
  assert.ok(bundle.includes("/store/support/billing/"));
  assert.ok(bundle.includes("Markdown Store storefront + cart demo"));
  assert.ok(bundle.includes("Subscription Pricing"));
  assert.ok(bundle.includes("Basic"));
  assert.ok(bundle.includes("Team"));
  assert.ok(bundle.includes("Add to Cart"));
  assert.ok(bundle.includes("Cart summary"));
  assert.ok(bundle.includes("Checkout"));
  assert.ok(bundle.includes("JSON-LD graph preview"));
});
