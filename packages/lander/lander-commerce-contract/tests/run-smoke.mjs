import assert from "node:assert/strict";

const mod = await import(new URL("../dist/index.js", import.meta.url));

assert.equal(typeof mod.LANDER_COMMERCE_CONTRACT_VERSION, "string");
assert.ok("LANDER_COMMERCE_CONTRACT_VERSION" in mod);
