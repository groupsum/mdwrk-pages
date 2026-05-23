import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const testRoot = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(testRoot, "..", "..", "..");

function rewriteModule(inputPath, replacements, outputPath) {
  let source = fs.readFileSync(inputPath, "utf8");
  for (const [from, to] of replacements) {
    source = source.replaceAll(from, to);
  }
  fs.writeFileSync(outputPath, source);
}

export async function importSplitRenderers() {
  const suffix = `${process.pid}-${Date.now()}-${Math.random().toString(16).slice(2)}`;
  const structuredDataDist = path.join(
    repoRoot,
    "packages",
    "shared",
    "structured-data",
    "dist",
    "index.js",
  ).replace(/\\/g, "/");
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
  const landerReactDist = path.join(repoRoot, "packages", "lander", "lander-react", "dist", "index.js");
  const landerReactSmoke = path.join(
    repoRoot,
    "packages",
    "lander",
    "lander-react",
    "dist",
    `index.${suffix}.smoke.mjs`,
  );

  rewriteModule(
    structuredDataReactDist,
    [['"@mdwrk/structured-data"', `"file:///${structuredDataDist}"`]],
    structuredDataReactSmoke,
  );
  rewriteModule(
    landerReactDist,
    [['"@mdwrk/lander-react-structured-data"', `"file:///${structuredDataReactSmoke.replace(/\\/g, "/")}"`]],
    landerReactSmoke,
  );

  try {
    const landerReact = await import(`file:///${landerReactSmoke.replace(/\\/g, "/")}?t=${Date.now()}`);
    const structuredDataReact = await import(
      `file:///${structuredDataReactSmoke.replace(/\\/g, "/")}?t=${Date.now() + 1}`
    );
    return { landerReact, structuredDataReact };
  } finally {
    fs.rmSync(landerReactSmoke, { force: true });
    fs.rmSync(structuredDataReactSmoke, { force: true });
  }
}
