import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const packageRoot = path.resolve(here, "..");
const distIndexDts = path.join(packageRoot, "dist", "index.d.ts");
const semanticDir = path.join(packageRoot, "dist", "semantic");

function read(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

test("T0: fused semantic components are exported from the package entrypoint", () => {
  const indexDts = read(distIndexDts);
  for (const name of ["Article", "Product", "Course", "Quiz"]) {
    assert.match(indexDts, new RegExp(`export\\s*\\{[^}]*\\b${name}\\b`, "m"));
  }
});

test("T0: fused semantic component prop contracts stay prop-native and do not expose raw structuredData or tokens", () => {
  for (const fileName of ["article.d.ts", "product.d.ts", "course.d.ts", "quiz.d.ts"]) {
    const dts = read(path.join(semanticDir, fileName));
    assert.match(dts, /className\?: string;/);
    assert.match(dts, /emitStructuredData\?: boolean;/);
    assert.match(dts, /structuredDataOverrides\?: Partial</);
    assert.doesNotMatch(dts, /\bstructuredData\?:/);
    assert.doesNotMatch(dts, /\btokens\?:/);
  }
});
