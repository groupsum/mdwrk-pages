import { defineConfig } from "vite";

function workspaceDistPath(relativePath: string) {
  const pathname = decodeURIComponent(new URL(relativePath, import.meta.url).pathname);
  return /^\/[A-Za-z]:\//.test(pathname) ? pathname.slice(1) : pathname;
}

export default defineConfig({
  root: workspaceDistPath("./"),
  resolve: {
    alias: {
      "@mdwrk/lander-content-contract": workspaceDistPath(
        "../../../packages/00-contracts/lander-content-contract/dist/index.js",
      ),
      "@mdwrk/lander-core": workspaceDistPath("../../../packages/10-core/lander-core/dist/index.js"),
      "@mdwrk/lander-page-templates": workspaceDistPath("../../../packages/20-page-systems/lander-page-templates/dist/index.js"),
      "@mdwrk/lander-page-template-presets": workspaceDistPath(
        "../../../packages/20-page-systems/lander-page-template-presets/dist/index.js",
      ),
      "@mdwrk/lander-react": workspaceDistPath("../../../packages/40-react-renderers/lander-react/dist/index.js"),
      "@mdwrk/lander-react-structured-data": workspaceDistPath(
        "../../../packages/50-machine-output/lander-react-structured-data/dist/index.js",
      ),
      "@mdwrk/page-template-demo-content-pack": workspaceDistPath(
        "../../../packages/60-content-packs/page-template-demo-content-pack/dist/index.js",
      ),
      "@mdwrk/structured-data": workspaceDistPath("../../../packages/00-contracts/structured-data/dist/index.js"),
    },
  },
});
