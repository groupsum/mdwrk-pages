import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { semanticNames } from "./semantic-fixtures.mjs";

const here = path.dirname(fileURLToPath(import.meta.url));
const packageRoot = path.resolve(here, "..");
const semanticDir = path.join(packageRoot, "dist", "semantic");
const familyFileNames = [
  "infrastructure-family.d.ts",
  "taxonomy-family.d.ts",
  "supporting-family.d.ts",
  "reference-family.d.ts",
  "data-family.d.ts",
  "article-family.d.ts",
  "education-family.d.ts",
  "commerce-family.d.ts",
  "media-family.d.ts",
  "identity-family.d.ts",
  "page-family.d.ts",
  "catalog-family.d.ts",
];

function read(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function collectDts(fileOrDirPath) {
  const stat = fs.statSync(fileOrDirPath);
  if (stat.isFile()) return [fileOrDirPath];
  return fs.readdirSync(fileOrDirPath, { withFileTypes: true }).flatMap((entry) =>
    collectDts(path.join(fileOrDirPath, entry.name)),
  );
}

test("T1: semantic declaration files expose emitted-override controls but no raw payload bag props", () => {
  const dts = collectDts(semanticDir)
    .filter((filePath) => filePath.endsWith(".d.ts"))
    .map(read)
    .join("\n");
  for (const name of semanticNames) {
    assert.match(dts, new RegExp(`\\b${name}Props\\b`, "m"));
  }
  for (const fileName of familyFileNames) {
    const familyBaseName = fileName.replace(/\.d\.ts$/, "");
    const filePath = path.join(semanticDir, fileName);
    const dirPath = path.join(semanticDir, familyBaseName);
    const family = [
      read(filePath),
      ...(fs.existsSync(dirPath) ? collectDts(dirPath).filter((entry) => entry.endsWith(".d.ts")).map(read) : []),
    ].join("\n");
    assert.match(family, /emitStructuredData\?: boolean;/);
    assert.match(family, /structuredDataOverrides\?: Partial</);
    assert.doesNotMatch(family, /\bstructuredData:\b/);
  }
});

test("T1: family declaration files exist for the full fused surface", () => {
  const entries = new Set(fs.readdirSync(semanticDir));
  for (const fileName of familyFileNames) {
    assert.ok(entries.has(fileName), `${fileName} must exist in dist/semantic`);
  }
});
