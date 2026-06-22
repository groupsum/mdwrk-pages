import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const testRoot = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(testRoot, "..", "..", "..", "..");
const distRoot = path.resolve(testRoot, "..", "dist");

function copySemanticTree(srcRoot, destRoot, structuredDataReactSmoke, primitivesDist) {
  fs.mkdirSync(destRoot, { recursive: true });
  for (const entry of fs.readdirSync(srcRoot, { withFileTypes: true })) {
    const srcPath = path.join(srcRoot, entry.name);
    const destPath = path.join(destRoot, entry.name);
    if (entry.isDirectory()) {
      copySemanticTree(srcPath, destPath, structuredDataReactSmoke, primitivesDist);
      continue;
    }
    if (!entry.name.endsWith(".js")) continue;
    fs.mkdirSync(path.dirname(destPath), { recursive: true });
    fs.writeFileSync(
      destPath,
      fs.readFileSync(srcPath, "utf8")
        .replace(
          '"@mdwrk/lander-react-structured-data"',
          `"file:///${structuredDataReactSmoke.replace(/\\/g, "/")}"`,
        )
        .replace(
          '"@mdwrk/lander-primitives"',
          `"file:///${primitivesDist}"`,
        ),
    );
  }
}

function rmTree(targetPath) {
  for (let attempt = 0; attempt < 5; attempt += 1) {
    try {
      fs.rmSync(targetPath, { recursive: true, force: true, maxRetries: 5, retryDelay: 50 });
      return;
    } catch (error) {
      if (attempt === 4) throw error;
      Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 50);
    }
  }
}

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
  const primitivesDist = path.join(
    repoRoot,
    "packages",
    "ui",
    "lander-primitives",
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
    ).replace(
      '"@mdwrk/lander-primitives"',
      `"file:///${primitivesDist}"`,
    ).replaceAll('"./semantic/', `"./semantic.${suffix}.smoke/`),
  );

  copySemanticTree(semanticDistRoot, semanticSmokeRoot, structuredDataReactSmoke, primitivesDist);

  try {
    return await import(`file:///${smokeIndex.replace(/\\/g, "/")}?t=${Date.now()}`);
  } finally {
    fs.rmSync(smokeIndex, { force: true });
    fs.rmSync(structuredDataReactSmoke, { force: true });
    rmTree(semanticSmokeRoot);
  }
}
