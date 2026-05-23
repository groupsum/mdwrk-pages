import assert from "node:assert/strict";
import test from "node:test";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const demoRoot = path.resolve(here, "..");
const repoRoot = path.resolve(demoRoot, "..", "..");

const styles = fs.readFileSync(path.join(demoRoot, "src", "styles.css"), "utf8");
const dockerfile = fs.readFileSync(path.join(demoRoot, "Dockerfile"), "utf8");
const compose = fs.readFileSync(path.join(demoRoot, "compose.yaml"), "utf8");
const nginx = fs.readFileSync(path.join(demoRoot, "nginx.conf"), "utf8");
const dockerIgnore = fs.readFileSync(path.join(repoRoot, ".dockerignore"), "utf8");

test("T2: the showcase delivery contract stays responsive and health-check ready", () => {
  assert.ok(styles.includes("@media (max-width: 860px)"));
  assert.ok(styles.includes(".demo-split__grid"));
  assert.ok(styles.includes(".demo-node-grid"));
  assert.ok(styles.includes(".demo-page-frame"));

  assert.ok(dockerfile.includes("FROM node:20.19-alpine AS build"));
  assert.ok(dockerfile.includes("FROM nginx:1.27-alpine"));
  assert.ok(dockerfile.includes("COPY --from=build /workspace/examples/page-template-demo/dist /usr/share/nginx/html"));

  assert.ok(compose.includes("dockerfile: examples/page-template-demo/Dockerfile"));
  assert.ok(compose.includes("wget -qO- http://127.0.0.1/healthz || exit 1"));

  assert.ok(nginx.includes("location = /healthz"));
  assert.ok(nginx.includes('return 200 "ok\\n";'));

  for (const ignored of [".venv", ".uv-cache", ".tmp", "artifacts"]) {
    assert.ok(dockerIgnore.includes(ignored), `expected dockerignore to include ${ignored}`);
  }
});
