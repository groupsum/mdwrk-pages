import assert from "node:assert/strict";
import test from "node:test";
import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const packageRoot = path.resolve(here, "..");
const packageJson = JSON.parse(readFileSync(path.join(packageRoot, "package.json"), "utf8"));
const srcIndex = readFileSync(path.join(packageRoot, "src", "index.tsx"), "utf8");

test("T0: lander-react-commerce exposes provider, hook, and cart actions without owning a payment provider", () => {
  assert.equal(packageJson.name, "@mdwrk/lander-react-commerce");
  assert.ok(srcIndex.includes("export function CommerceProvider"));
  assert.ok(srcIndex.includes("export function useCommerce"));
  assert.ok(srcIndex.includes("export function AddToCartButton"));
  assert.ok(srcIndex.includes("export function CheckoutButton"));
  assert.equal(srcIndex.includes("Stripe"), false);
  assert.equal(srcIndex.includes("zustand"), false);
});
