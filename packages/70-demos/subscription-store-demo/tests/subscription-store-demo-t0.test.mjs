import assert from "node:assert/strict";
import test from "node:test";
import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const packageRoot = path.resolve(here, "..");
const packageJson = JSON.parse(readFileSync(path.join(packageRoot, "package.json"), "utf8"));
const mainSource = readFileSync(path.join(packageRoot, "src", "main.tsx"), "utf8");
const siteSource = readFileSync(path.join(packageRoot, "src", "demo-site.ts"), "utf8");
const dockerfile = readFileSync(path.join(packageRoot, "Dockerfile"), "utf8");
const compose = readFileSync(path.join(packageRoot, "compose.yaml"), "utf8");

test("T0: subscription-store demo wires storefront content, visible rendering, and commerce runtime", () => {
  assert.equal(packageJson.dependencies["@mdwrk/subscription-store-content-pack"]?.startsWith("^"), true);
  assert.equal(packageJson.dependencies["@mdwrk/lander-react-commerce"]?.startsWith("^"), true);
  assert.ok(mainSource.includes('import { VisibleLanderPage } from "@mdwrk/lander-react";'));
  assert.ok(mainSource.includes('from "@mdwrk/lander-react-commerce";'));
  assert.ok(mainSource.includes("AddToCartButton"));
  assert.ok(mainSource.includes('import { LanderStructuredData, buildLanderJsonLdGraph } from "@mdwrk/lander-react-structured-data";'));
  assert.ok(mainSource.includes("CommerceProvider"));
  assert.ok(mainSource.includes("Current offers"));
  assert.ok(mainSource.includes("In-memory cart"));
  assert.ok(siteSource.includes("subscriptionStoreContentPack"));
  assert.ok(siteSource.includes("buildCommerceCatalog"));
  assert.ok(siteSource.includes('slug === "/store/pricing/"'));
  assert.ok(siteSource.includes('name: "Markdown Store"'));
  assert.ok(dockerfile.includes("packages/70-demos/subscription-store-demo/dist"));
  assert.ok(dockerfile.includes("nginx:1.27-alpine"));
  assert.ok(compose.includes("4192:80"));
});
