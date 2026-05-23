import assert from "node:assert/strict";
import test from "node:test";
import { pathToFileURL } from "node:url";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { generatedGraph, nodes } from "./fixtures.mjs";

const here = path.dirname(fileURLToPath(import.meta.url));
const packageRoot = path.resolve(here, "..");
const distEntry = pathToFileURL(path.join(packageRoot, "dist", "index.js")).href;

test("T1: structured-data builders load in plain Node without DOM or React globals", async () => {
  const previousDocument = globalThis.document;
  const previousWindow = globalThis.window;
  const previousNavigator = globalThis.navigator;

  Reflect.deleteProperty(globalThis, "document");
  Reflect.deleteProperty(globalThis, "window");
  Reflect.deleteProperty(globalThis, "navigator");

  try {
    const mod = await import(distEntry);
    assert.equal(typeof mod.webPageSchema, "function");
    assert.equal(typeof mod.softwareApplicationNode, "function");
    assert.equal(typeof mod.buildJsonLdGraph, "function");
  } finally {
    if (previousDocument !== undefined) globalThis.document = previousDocument;
    if (previousWindow !== undefined) globalThis.window = previousWindow;
    if (previousNavigator !== undefined) globalThis.navigator = previousNavigator;
  }
});

test("T1: emitted outputs are plain JSON-LD data structures", () => {
  assert.equal(Array.isArray(nodes), true);
  assert.equal(Array.isArray(generatedGraph), true);
  assert.ok(generatedGraph.length > 0, "Expected generated JSON-LD graph entries");

  for (const entry of generatedGraph) {
    assert.equal(typeof entry, "object");
    assert.notEqual(entry, null);
    assert.equal(Array.isArray(entry), false);
    assert.equal(typeof entry["@type"], "string");
    assert.equal("render" in entry, false, "JSON-LD nodes must not expose renderer methods");
    assert.equal("props" in entry, false, "JSON-LD nodes must not look like React elements");
  }

  const serialized = JSON.stringify(generatedGraph);
  assert.ok(serialized.includes("\"@type\":\"WebPage\""));
  assert.ok(serialized.includes("\"@type\":\"FAQPage\""));
});
