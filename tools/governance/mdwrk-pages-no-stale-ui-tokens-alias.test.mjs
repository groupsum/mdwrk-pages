import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import path from "node:path";
import test from "node:test";

const repoRoot = path.resolve(import.meta.dirname, "..", "..");

test("pages repo does not claim mdwrk editor or shell package aliases", async () => {
  const tsconfig = await readFile(path.join(repoRoot, "tsconfig.base.json"), "utf8");

  assert.equal(tsconfig.includes('"@mdwrk/ui-tokens"'), false);
  assert.equal(tsconfig.includes('"@mdwrk/markdown-editor-react"'), false);
  assert.equal(tsconfig.includes('"@mdwrk/markdown-renderer-react"'), false);
  assert.equal(tsconfig.includes('"@mdwrk/extension-theme-studio"'), false);
});
