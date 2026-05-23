import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const testRoot = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(testRoot, "..", "..", "..", "..");
const distRoot = path.resolve(testRoot, "..", "dist");

export async function importLanderReactDist() {
  const distIndex = path.join(distRoot, "index.js");
  const suffix = `${process.pid}-${Date.now()}-${Math.random().toString(16).slice(2)}`;
  const smokeIndex = path.join(distRoot, `index.${suffix}.smoke.mjs`);
  const structuredDataReactDist = path.join(
    repoRoot,
    "packages",
    "lander",
    "lander-react-structured-data",
    "dist",
    "index.js",
  );
  const structuredDataReactSmoke = path.join(
    repoRoot,
    "packages",
    "lander",
    "lander-react-structured-data",
    "dist",
    `index.${suffix}.smoke.mjs`,
  );
  const structuredDataDist = path.join(
    repoRoot,
    "packages",
    "shared",
    "structured-data",
    "dist",
    "index.js",
  ).replace(/\\/g, "/");

  fs.writeFileSync(
    structuredDataReactSmoke,
    fs.readFileSync(structuredDataReactDist, "utf8").replace(
      '"@mdwrk/structured-data"',
      `"file:///${structuredDataDist}"`,
    ),
  );

  fs.writeFileSync(
    smokeIndex,
    fs.readFileSync(distIndex, "utf8").replace(
      '"@mdwrk/lander-react-structured-data"',
      `"file:///${structuredDataReactSmoke.replace(/\\/g, "/")}"`,
    ),
  );

  try {
    return await import(`file:///${smokeIndex.replace(/\\/g, "/")}?t=${Date.now()}`);
  } finally {
    fs.rmSync(smokeIndex, { force: true });
    fs.rmSync(structuredDataReactSmoke, { force: true });
  }
}
