import assert from "node:assert/strict";
import test from "node:test";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const demoRoot = path.resolve(here, "..");
const repoRoot = path.resolve(demoRoot, "..", "..");

const mainSource = fs.readFileSync(path.join(demoRoot, "src", "main.tsx"), "utf8");
const styles = fs.readFileSync(path.join(demoRoot, "src", "styles.css"), "utf8");
const dockerfile = fs.readFileSync(path.join(demoRoot, "Dockerfile"), "utf8");
const compose = fs.readFileSync(path.join(demoRoot, "compose.yaml"), "utf8");
const dockerIgnore = fs.readFileSync(path.join(repoRoot, ".dockerignore"), "utf8");
const readme = fs.readFileSync(path.join(demoRoot, "README.md"), "utf8");

test("T0: the showcase source and docker surfaces explicitly present the renderer split", () => {
  assert.ok(mainSource.includes("One experience, two renderer layers"));
  assert.ok(mainSource.includes("Visible experience"));
  assert.ok(mainSource.includes("Search profile"));
  assert.ok(mainSource.includes("Markdown to site"));
  assert.ok(mainSource.includes("Source Markdown"));
  assert.ok(mainSource.includes("Compiled site output"));
  assert.ok(mainSource.includes("content/pages/demo-home.md"));
  assert.ok(mainSource.includes("Declared "));
  assert.ok(mainSource.includes("product.home"));
  assert.ok(mainSource.includes("Reusable page-template rule set"));
  assert.ok(mainSource.includes("Resolved Acme Notebook instance"));
  assert.ok(mainSource.includes("Compiled home-page instance"));
  assert.ok(mainSource.includes("@mdwrk/lander-react-structured-data"));
  assert.ok(mainSource.includes("@mdwrk/lander-react"));
  assert.ok(styles.includes(".demo-split__grid"));
  assert.ok(styles.includes(".demo-split__card"));
  assert.ok(styles.includes(".demo-markdown-flow__grid"));
  assert.ok(styles.includes(".demo-markdown-flow__code"));
  assert.ok(styles.includes(".demo-schema__contract-grid"));
  assert.ok(styles.includes(".demo-schema__chip"));

  assert.ok(dockerfile.includes("COPY examples/page-template-demo/nginx.conf"));
  assert.ok(dockerfile.includes("npm run build -w @mdwrk/example-page-template-demo"));
  assert.ok(compose.includes("4189:80"));
  assert.ok(compose.includes("healthcheck:"));
  assert.ok(dockerIgnore.includes("node_modules"));
  assert.ok(readme.includes("the actual Markdown source file beside the compiled site output it produces"));
  assert.ok(readme.includes("page-level JSON-LD emitted with `@mdwrk/lander-react-structured-data`"));
  assert.ok(readme.includes("the reusable `product.home` structured-data link contract beside a compiled Acme Notebook instance"));
});
