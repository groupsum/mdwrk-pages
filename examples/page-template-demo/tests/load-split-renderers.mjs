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
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, source);
}

function copySemanticTree(srcRoot, destRoot, replacements) {
  fs.mkdirSync(destRoot, { recursive: true });
  for (const entry of fs.readdirSync(srcRoot, { withFileTypes: true })) {
    const srcPath = path.join(srcRoot, entry.name);
    const destPath = path.join(destRoot, entry.name);
    if (entry.isDirectory()) {
      copySemanticTree(srcPath, destPath, replacements);
      continue;
    }
    if (!entry.name.endsWith(".js")) continue;
    rewriteModule(srcPath, replacements, destPath);
  }
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
  const primitivesDist = path.join(
    repoRoot,
    "packages",
    "ui",
    "lander-primitives",
    "dist",
    "index.js",
  ).replace(/\\/g, "/");
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
      ['"@mdwrk/lander-primitives"', `"file:///${primitivesDist}"`],
      ['"./semantic/', `"./semantic.${suffix}.smoke/`],
    ],
    landerReactSmoke,
  );

  copySemanticTree(semanticDistRoot, semanticSmokeRoot, [
    ['"@mdwrk/lander-react-structured-data"', `"file:///${structuredDataReactSmoke.replace(/\\/g, "/")}"`],
    ['"@mdwrk/lander-primitives"', `"file:///${primitivesDist}"`],
  ]);

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
