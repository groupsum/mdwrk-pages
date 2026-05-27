import assert from "node:assert/strict";
import test from "node:test";
import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const packageRoot = path.resolve(here, "..");
const nginx = readFileSync(path.join(packageRoot, "nginx.conf"), "utf8");
const compose = readFileSync(path.join(packageRoot, "compose.yaml"), "utf8");
const distRoot = path.join(packageRoot, "dist");
const assetDir = path.join(distRoot, "assets");
const assetFile = readdirSync(assetDir).find((name) => name.endsWith(".js"));
const bundle = readFileSync(path.join(assetDir, assetFile), "utf8");

test("T2: demo runtime preserves SPA delivery, health checks, and machine-readable output", () => {
  assert.ok(nginx.includes("try_files $uri $uri/ /index.html;"));
  assert.ok(nginx.includes('return 200 "ok\\n";'));
  assert.ok(compose.includes("healthcheck"));
  assert.ok(bundle.includes("application/ld+json"));
  assert.ok(bundle.includes("Pretend checkout"));
  assert.ok(bundle.includes("pushState"));
  assert.ok(bundle.includes("popstate"));
  assert.ok(bundle.includes("Visible storefront"));
  assert.ok(bundle.includes("Machine-readable output"));
  assert.ok(bundle.includes("Storefront pipeline"));
});
