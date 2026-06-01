import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const testRoot = path.dirname(fileURLToPath(import.meta.url));
const demoRoot = path.resolve(testRoot, "..");
const repoRoot = path.resolve(demoRoot, "..", "..");

export async function importShowcaseComponent() {
  const sourcePath = path.join(demoRoot, "src", "showcase-component.mjs");
  const suffix = `${process.pid}-${Date.now()}-${Math.random().toString(16).slice(2)}`;
  const tempPath = path.join(demoRoot, "src", `showcase-component.${suffix}.smoke.mjs`);
  const landerReactDistRoot = path.join(repoRoot, "packages", "ui", "lander-react", "dist");
  const landerReactDist = path.join(landerReactDistRoot, "index.js");
  const landerReactSmoke = path.join(landerReactDistRoot, `index.${suffix}.smoke.mjs`);
  const semanticDistRoot = path.join(landerReactDistRoot, "semantic");
  const semanticSmokeRoot = path.join(landerReactDistRoot, `semantic.${suffix}.smoke`);
  const structuredDataReactDistRoot = path.join(
    repoRoot,
    "packages",
    "machine",
    "lander-react-structured-data",
    "dist",
  );
  const structuredDataReactDist = path.join(structuredDataReactDistRoot, "index.js");
  const structuredDataReactSmoke = path.join(structuredDataReactDistRoot, `index.${suffix}.smoke.mjs`);
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
    landerReactSmoke,
    fs.readFileSync(landerReactDist, "utf8")
      .replace(
        '"@mdwrk/lander-react-structured-data"',
        `"file:///${structuredDataReactSmoke.replace(/\\/g, "/")}"`,
      )
      .replaceAll('"./semantic/', `"./semantic.${suffix}.smoke/`),
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

  fs.writeFileSync(
    tempPath,
    fs.readFileSync(sourcePath, "utf8").replace(
      '"@mdwrk/lander-react"',
      `"file:///${landerReactSmoke.replace(/\\/g, "/")}"`,
    ),
  );

  try {
    return await import(`file:///${tempPath.replace(/\\/g, "/")}?t=${Date.now()}`);
  } finally {
    fs.rmSync(tempPath, { force: true });
    fs.rmSync(landerReactSmoke, { force: true });
    fs.rmSync(structuredDataReactSmoke, { force: true });
    fs.rmSync(semanticSmokeRoot, { recursive: true, force: true });
  }
}
