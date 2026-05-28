import assert from "node:assert/strict";
import test from "node:test";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const demoRoot = path.resolve(here, "..");

const dockerfile = fs.readFileSync(path.join(demoRoot, "Dockerfile"), "utf8");
const compose = fs.readFileSync(path.join(demoRoot, "compose.yaml"), "utf8");
const nginx = fs.readFileSync(path.join(demoRoot, "nginx.conf"), "utf8");
const readme = fs.readFileSync(path.join(demoRoot, "README.md"), "utf8");
const packageJson = JSON.parse(fs.readFileSync(path.join(demoRoot, "package.json"), "utf8"));

test("T0: semantic components demo defines a Docker deployment contract without compose port publishing", () => {
  assert.ok(packageJson.scripts.test.includes("docker-delivery-t0.test.mjs"));
  assert.ok(dockerfile.includes("examples/semantic-components-demo/nginx.conf"));
  assert.ok(dockerfile.includes("npm run build -w @mdwrk/example-semantic-components-demo"));
  assert.ok(compose.includes("dockerfile: examples/semantic-components-demo/Dockerfile"));
  assert.ok(compose.includes("image: mdwrk-semantic-components-demo:local"));
  assert.ok(compose.includes("expose:"));
  assert.equal(compose.includes("ports:"), false);
  assert.ok(nginx.includes("location = /healthz"));
  assert.ok(nginx.includes('return 200 "ok\\n";'));
  assert.ok(readme.includes("does not publish host ports"));
  assert.ok(readme.includes("mdwrk-semantic-components-demo-live"));
});
