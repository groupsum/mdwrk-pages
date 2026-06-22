import assert from "node:assert/strict";
import test from "node:test";
import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const packageRoot = path.resolve(here, "..");
const packageJson = JSON.parse(readFileSync(path.join(packageRoot, "package.json"), "utf8"));

function collectFiles(dir, extension) {
  const entries = readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...collectFiles(fullPath, extension));
      continue;
    }
    if (entry.isFile() && fullPath.endsWith(extension)) files.push(fullPath);
  }
  return files;
}

const forbiddenPatterns = [
  /\bfrom\s+["']react["']/,
  /\bfrom\s+["']react-dom["']/,
  /\brequire\(["']react["']\)/,
  /\brequire\(["']react-dom["']\)/,
  /\bReact\b/,
  /\bjsx\b/,
  /\bdangerouslySetInnerHTML\b/,
];

test("T0: package metadata keeps structured-data as a pure builder layer", () => {
  assert.equal(packageJson.name, "@mdwrk/structured-data");
  assert.equal(packageJson.type, "module");

  for (const field of ["dependencies", "peerDependencies", "optionalDependencies", "devDependencies"]) {
    const deps = packageJson[field] ?? {};
    assert.equal("react" in deps, false, `${field} must not include react`);
    assert.equal("react-dom" in deps, false, `${field} must not include react-dom`);
  }

  assert.deepEqual(
    Object.keys(packageJson.exports).sort(),
    [".", "./version"],
    "The package surface should stay minimal and non-React-specific",
  );
});

test("T0: source and built output contain no React or JSX runtime coupling", () => {
  const sourceFiles = collectFiles(path.join(packageRoot, "src"), ".ts");
  const builtFiles = collectFiles(path.join(packageRoot, "dist"), ".js");
  assert.ok(sourceFiles.length > 0, "Expected structured-data source files to exist");
  assert.ok(builtFiles.length > 0, "Expected built structured-data files to exist");

  for (const filePath of [...sourceFiles, ...builtFiles]) {
    const content = readFileSync(filePath, "utf8");
    for (const pattern of forbiddenPatterns) {
      assert.equal(pattern.test(content), false, `${path.relative(packageRoot, filePath)} must not match ${pattern}`);
    }
  }
});
