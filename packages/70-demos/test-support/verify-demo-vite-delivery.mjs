import assert from "node:assert/strict";
import path from "node:path";
import { createServer, loadConfigFromFile, mergeConfig } from "vite";

const importPattern = /(?:import|export)\s+(?:[^"'`]*?\s+from\s+)?["']([^"'`]+)["']/g;

function extractImports(source) {
  const imports = [];
  for (const match of source.matchAll(importPattern)) {
    imports.push(match[1]);
  }
  return imports;
}

function shouldFollowImport(specifier, repoRoot) {
  if (specifier.startsWith("/src/")) return true;
  if (specifier.startsWith("/@fs/")) {
    return specifier.includes(repoRoot.replace(/\\/g, "/"));
  }
  return false;
}

function isJavascriptLike(url, body) {
  return url.includes(".js") || url.includes(".ts") || url.includes(".tsx") || body.startsWith("import ");
}

export async function verifyDemoViteDelivery({ demoRoot, entry = "/src/main.tsx" }) {
  const repoRoot = path.resolve(demoRoot, "..", "..");
  const configPath = path.join(demoRoot, "vite.config.ts");
  const loadedConfig = await loadConfigFromFile(
    { command: "serve", mode: "test" },
    configPath,
    demoRoot,
  );

  assert.ok(loadedConfig?.config, `Expected Vite config at ${configPath}`);

  const server = await createServer(
    mergeConfig(loadedConfig.config, {
      configFile: false,
      logLevel: "silent",
      root: demoRoot,
    }),
  );

  try {
    const visited = new Set();
    const queue = [entry];

    while (queue.length > 0) {
      const url = queue.shift();
      if (!url || visited.has(url)) continue;
      visited.add(url);

      const result = await server.transformRequest(url);
      assert.ok(result?.code, `Expected Vite to transform ${url}`);
      const body = result.code;
      assert.equal(
        body.includes("[plugin:vite:import-analysis] Failed to resolve import"),
        false,
        `Vite import analysis failed for ${url}`,
      );

      if (!isJavascriptLike(url, body)) continue;

      for (const specifier of extractImports(body)) {
        if (!shouldFollowImport(specifier, repoRoot)) continue;
        if (!visited.has(specifier)) queue.push(specifier);
      }
    }
  } finally {
    await server.close();
  }
}
