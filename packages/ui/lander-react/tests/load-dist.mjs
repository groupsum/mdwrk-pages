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
  const semanticDistRoot = path.join(distRoot, "semantic");
  const semanticSmokeRoot = path.join(distRoot, `semantic.${suffix}.smoke`);
  const structuredDataReactDist = path.join(
    repoRoot,
    "packages",
    "machine",
    "lander-react-structured-data",
    "dist",
    "index.js",
  );
  const structuredDataReactSmoke = path.join(
    repoRoot,
    "packages",
    "machine",
    "lander-react-structured-data",
    "dist",
    `index.${suffix}.smoke.mjs`,
  );
  const structuredDataDist = path.join(
    repoRoot,
    "packages",
    "contracts",
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
    ).replaceAll('"./semantic/', `"./semantic.${suffix}.smoke/`),
  );

  fs.mkdirSync(semanticSmokeRoot, { recursive: true });
  for (const fileName of fs.readdirSync(semanticDistRoot)) {
    if (!fileName.endsWith(".js")) continue;
    fs.writeFileSync(
      path.join(semanticSmokeRoot, fileName),
      fs.readFileSync(path.join(semanticDistRoot, fileName), "utf8").replace(
        '"@mdwrk/lander-react-structured-data"',
        `"file:///${structuredDataReactSmoke.replace(/\\/g, "/")}"`,
      ),
    );
  }

  try {
    return await import(`file:///${smokeIndex.replace(/\\/g, "/")}?t=${Date.now()}`);
  } finally {
    fs.rmSync(smokeIndex, { force: true });
    fs.rmSync(structuredDataReactSmoke, { force: true });
    fs.rmSync(semanticSmokeRoot, { recursive: true, force: true });
  }
}
