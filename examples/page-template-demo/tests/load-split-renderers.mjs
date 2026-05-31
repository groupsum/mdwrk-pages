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
    "contracts",
    "structured-data",
    "dist",
    "index.js",
  ).replace(/\\/g, "/");
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
  const landerReactDist = path.join(repoRoot, "packages", "ui", "lander-react", "dist", "index.js");
  const landerReactSmoke = path.join(
    repoRoot,
    "packages",
    "ui",
    "lander-react",
    "dist",
    `index.${suffix}.smoke.mjs`,
  );
  const semanticDistRoot = path.join(repoRoot, "packages", "ui", "lander-react", "dist", "semantic");
  const semanticSmokeRoot = path.join(
    repoRoot,
    "packages",
    "ui",
    "lander-react",
    "dist",
    `semantic.${suffix}.smoke`,
  );

  rewriteModule(
    structuredDataReactDist,
    [['"@mdwrk/structured-data"', `"file:///${structuredDataDist}"`]],
    structuredDataReactSmoke,
  );
  rewriteModule(
    landerReactDist,
    [
      ['"@mdwrk/lander-react-structured-data"', `"file:///${structuredDataReactSmoke.replace(/\\/g, "/")}"`],
      ['"./semantic/', `"./semantic.${suffix}.smoke/`],
    ],
    landerReactSmoke,
  );

  fs.mkdirSync(semanticSmokeRoot, { recursive: true });
  for (const fileName of fs.readdirSync(semanticDistRoot)) {
    if (!fileName.endsWith(".js")) continue;
    rewriteModule(
      path.join(semanticDistRoot, fileName),
      [['"@mdwrk/lander-react-structured-data"', `"file:///${structuredDataReactSmoke.replace(/\\/g, "/")}"`]],
      path.join(semanticSmokeRoot, fileName),
    );
  }

  try {
    const landerReact = await import(`file:///${landerReactSmoke.replace(/\\/g, "/")}?t=${Date.now()}`);
    const structuredDataReact = await import(
      `file:///${structuredDataReactSmoke.replace(/\\/g, "/")}?t=${Date.now() + 1}`
    );
    return { landerReact, structuredDataReact };
  } finally {
    fs.rmSync(landerReactSmoke, { force: true });
    fs.rmSync(structuredDataReactSmoke, { force: true });
    fs.rmSync(semanticSmokeRoot, { recursive: true, force: true });
  }
}
