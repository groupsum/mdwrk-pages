import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const testRoot = path.dirname(fileURLToPath(import.meta.url));
const demoRoot = path.resolve(testRoot, "..");
const repoRoot = path.resolve(demoRoot, "..", "..");
const cleanupWaitArray = new Int32Array(new SharedArrayBuffer(4));

function sleep(milliseconds) {
  Atomics.wait(cleanupWaitArray, 0, 0, milliseconds);
}

function removePathWithRetries(targetPath, options) {
  for (let attempt = 0; attempt < 6; attempt += 1) {
    try {
      fs.rmSync(targetPath, options);
      return;
    } catch (error) {
      if (!["ENOTEMPTY", "EPERM", "EBUSY"].includes(error?.code)) return;
      sleep(25 * (attempt + 1));
    }
  }
  try {
    fs.rmSync(targetPath, options);
  } catch {}
}

function copySemanticRuntimeTree(sourceRoot, targetRoot, structuredDataReactSmoke, primitivesDist) {
  fs.mkdirSync(targetRoot, { recursive: true });
  for (const entry of fs.readdirSync(sourceRoot, { withFileTypes: true })) {
    const sourcePath = path.join(sourceRoot, entry.name);
    const targetPath = path.join(targetRoot, entry.name);
    if (entry.isDirectory()) {
      copySemanticRuntimeTree(sourcePath, targetPath, structuredDataReactSmoke, primitivesDist);
      continue;
    }
    if (!entry.name.endsWith(".js")) continue;
    fs.writeFileSync(
      targetPath,
      fs.readFileSync(sourcePath, "utf8")
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

export async function importShowcaseComponent() {
  const sourcePath = path.join(demoRoot, "src", "showcase-component.mjs");
  const primitivesSourcePath = path.join(demoRoot, "src", "showcase-primitives.mjs");
  const detailSourcePath = path.join(demoRoot, "src", "showcase-detail.mjs");
  const suffix = `${process.pid}-${Date.now()}-${Math.random().toString(16).slice(2)}`;
  const tempPath = path.join(demoRoot, "src", `showcase-component.${suffix}.smoke.mjs`);
  const primitivesTempPath = path.join(demoRoot, "src", `showcase-primitives.${suffix}.smoke.mjs`);
  const detailTempPath = path.join(demoRoot, "src", `showcase-detail.${suffix}.smoke.mjs`);
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
  const primitivesDist = path.join(repoRoot, "packages", "ui", "lander-primitives", "dist", "index.js").replace(/\\/g, "/");

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
      .replace(
        '"@mdwrk/lander-primitives"',
        `"file:///${primitivesDist}"`,
      )
      .replaceAll('"./semantic/', `"./semantic.${suffix}.smoke/`),
  );

  copySemanticRuntimeTree(semanticDistRoot, semanticSmokeRoot, structuredDataReactSmoke, primitivesDist);

  fs.writeFileSync(
    primitivesTempPath,
    fs.readFileSync(primitivesSourcePath, "utf8").replace(
      '"@mdwrk/lander-primitives"',
      `"file:///${primitivesDist}"`,
    ),
  );

  fs.writeFileSync(
    detailTempPath,
    fs.readFileSync(detailSourcePath, "utf8")
      .replace(
        '"@mdwrk/lander-react"',
        `"file:///${landerReactSmoke.replace(/\\/g, "/")}"`,
      )
      .replace(
        '"@mdwrk/lander-primitives"',
        `"file:///${primitivesDist}"`,
      )
      .replace(
        '"./showcase-primitives.mjs"',
        `"file:///${primitivesTempPath.replace(/\\/g, "/")}"`,
      ),
  );

  fs.writeFileSync(
    tempPath,
    fs.readFileSync(sourcePath, "utf8").replace(
      '"@mdwrk/lander-react"',
      `"file:///${landerReactSmoke.replace(/\\/g, "/")}"`,
    ).replace(
      '"@mdwrk/lander-primitives"',
      `"file:///${primitivesDist}"`,
    ).replace(
      '"./showcase-primitives.mjs"',
      `"file:///${primitivesTempPath.replace(/\\/g, "/")}"`,
    ).replace(
      '"./showcase-detail.mjs"',
      `"file:///${detailTempPath.replace(/\\/g, "/")}"`,
    ),
  );

  try {
    return await import(`file:///${tempPath.replace(/\\/g, "/")}?t=${Date.now()}`);
  } finally {
    removePathWithRetries(tempPath, { force: true });
    removePathWithRetries(primitivesTempPath, { force: true });
    removePathWithRetries(detailTempPath, { force: true });
    removePathWithRetries(landerReactSmoke, { force: true });
    removePathWithRetries(structuredDataReactSmoke, { force: true });
    removePathWithRetries(semanticSmokeRoot, { recursive: true, force: true });
  }
}
