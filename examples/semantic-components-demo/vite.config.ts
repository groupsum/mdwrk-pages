import { defineConfig } from "vite";

function workspaceDistPath(relativePath: string) {
  const pathname = decodeURIComponent(new URL(relativePath, import.meta.url).pathname);
  return /^\/[A-Za-z]:\//.test(pathname) ? pathname.slice(1) : pathname;
}

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules/react")) return "react-vendor";
          if (id.includes("packages/ui/lander-primitives")) return "lander-primitives";
          if (id.includes("packages/contracts/lander-content-contract/dist/generated-schemaorg-page-family-metadata")) return "schemaorg-generated-metadata";
          if (id.includes("packages/contracts/lander-content-contract/dist")) return "schemaorg-contract";
          if (id.includes("packages/ui/lander-react/dist/semantic")) return "semantic-runtime";
          return undefined;
        },
      },
    },
  },
  resolve: {
    alias: {
      "@mdwrk/lander-content-contract": workspaceDistPath(
        "../../packages/contracts/lander-content-contract/dist/index.js",
      ),
      "@mdwrk/lander-core": workspaceDistPath("../../packages/core/lander-core/dist/index.js"),
      "@mdwrk/lander-primitives": workspaceDistPath("../../packages/ui/lander-primitives/dist/index.js"),
      "@mdwrk/lander-react": workspaceDistPath("../../packages/ui/lander-react/dist/index.js"),
      "@mdwrk/lander-react-structured-data": workspaceDistPath(
        "../../packages/machine/lander-react-structured-data/dist/index.js",
      ),
      "@mdwrk/structured-data": workspaceDistPath("../../packages/contracts/structured-data/dist/index.js")
    },
  },
});
