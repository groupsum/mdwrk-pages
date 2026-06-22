import { defineConfig } from "vite";

function workspaceDistPath(relativePath: string) {
  const pathname = decodeURIComponent(new URL(relativePath, import.meta.url).pathname);
  return /^\/[A-Za-z]:\//.test(pathname) ? pathname.slice(1) : pathname;
}

export default defineConfig({
  root: workspaceDistPath("./"),
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules/react")) return "react-vendor";
          if (id.includes("packages/30-ui-foundation/lander-primitives")) return "lander-primitives";
          if (id.includes("packages/00-contracts/lander-content-contract/dist/generated-schemaorg-page-family-metadata")) return "schemaorg-generated-metadata";
          if (id.includes("packages/00-contracts/lander-content-contract/dist")) return "schemaorg-contract";
          return undefined;
        },
      },
    },
  },
  resolve: {
    alias: {
      "@mdwrk/lander-content-contract": workspaceDistPath(
        "../../../packages/00-contracts/lander-content-contract/dist/index.js",
      ),
      "@mdwrk/lander-core": workspaceDistPath("../../../packages/10-core/lander-core/dist/index.js"),
      "@mdwrk/lander-primitives": workspaceDistPath("../../../packages/30-ui-foundation/lander-primitives/dist/index.js"),
      "@mdwrk/lander-react": workspaceDistPath("../../../packages/40-react-renderers/lander-react/dist/index.js"),
      "@mdwrk/lander-react-structured-data": workspaceDistPath(
        "../../../packages/50-machine-output/lander-react-structured-data/dist/index.js",
      ),
      "@mdwrk/structured-data": workspaceDistPath("../../../packages/00-contracts/structured-data/dist/index.js")
    },
  },
});
