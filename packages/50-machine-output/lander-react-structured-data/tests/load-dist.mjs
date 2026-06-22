import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const testRoot = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(testRoot, "..", "..", "..", "..");
const distRoot = path.resolve(testRoot, "..", "dist");

export async function importStructuredDataReactDist() {
  const suffix = `${process.pid}-${Date.now()}-${Math.random().toString(16).slice(2)}`;
  const distIndex = path.join(distRoot, "index.js");
  const smokeIndex = path.join(distRoot, `index.${suffix}.smoke.mjs`);
  const structuredDataDist = path.join(
    repoRoot,
    "packages",
    "contracts",
    "structured-data",
    "dist",
    "index.js",
  ).replace(/\\/g, "/");

  fs.writeFileSync(
    smokeIndex,
    fs.readFileSync(distIndex, "utf8").replace(
      '"@mdwrk/structured-data"',
      `"file:///${structuredDataDist}"`,
    ),
  );

  try {
    return await import(`file:///${smokeIndex.replace(/\\/g, "/")}?t=${Date.now()}`);
  } finally {
    fs.rmSync(smokeIndex, { force: true });
  }
}
