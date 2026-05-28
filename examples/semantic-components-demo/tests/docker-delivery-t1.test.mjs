import assert from "node:assert/strict";
import test from "node:test";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const demoRoot = path.resolve(here, "..");
const repoRoot = path.resolve(demoRoot, "..", "..");

const compose = fs.readFileSync(path.join(demoRoot, "compose.yaml"), "utf8");
const dockerfile = fs.readFileSync(path.join(demoRoot, "Dockerfile"), "utf8");
const dockerIgnore = fs.readFileSync(path.join(repoRoot, ".dockerignore"), "utf8");
const styles = fs.readFileSync(path.join(demoRoot, "src", "styles.css"), "utf8");

test("T1: semantic components demo container contract stays health-check ready and responsive", () => {
  assert.ok(dockerfile.includes("FROM node:20.19-alpine AS build"));
  assert.ok(dockerfile.includes("FROM nginx:1.27-alpine"));
  assert.ok(dockerfile.includes("COPY --from=build /workspace/examples/semantic-components-demo/dist /usr/share/nginx/html"));
  assert.ok(compose.includes("wget -qO- http://127.0.0.1/healthz || exit 1"));
  assert.equal(compose.includes("ports:"), false);
  assert.ok(styles.includes("@media (max-width: 1100px)"));
  assert.ok(styles.includes(".semantic-demo__summary"));
  assert.ok(styles.includes(".semantic-demo__grid"));

  for (const ignored of [".venv", ".uv-cache", ".tmp", "artifacts"]) {
    assert.ok(dockerIgnore.includes(ignored), `expected dockerignore to include ${ignored}`);
  }
});
