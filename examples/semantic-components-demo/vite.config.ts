import { defineConfig } from "vite";

function workspaceDistPath(relativePath: string) {
  const pathname = decodeURIComponent(new URL(relativePath, import.meta.url).pathname);
  return /^\/[A-Za-z]:\//.test(pathname) ? pathname.slice(1) : pathname;
}

export default defineConfig({
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
