import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

function workspaceDistPath(relativePath: string) {
  const pathname = decodeURIComponent(new URL(relativePath, import.meta.url).pathname);
  return /^\/[A-Za-z]:\//.test(pathname) ? pathname.slice(1) : pathname;
}

export default defineConfig({
  root: workspaceDistPath("./"),
  plugins: [react()],
  resolve: {
    alias: {
      "@mdwrk/lander-content-contract": workspaceDistPath(
        "../../../packages/00-contracts/lander-content-contract/dist/index.js",
      ),
      "@mdwrk/lander-commerce-contract": workspaceDistPath(
        "../../../packages/00-contracts/lander-commerce-contract/dist/index.js",
      ),
      "@mdwrk/lander-core": workspaceDistPath("../../../packages/10-core/lander-core/dist/index.js"),
      "@mdwrk/lander-page-templates": workspaceDistPath("../../../packages/20-page-systems/lander-page-templates/dist/index.js"),
      "@mdwrk/lander-page-template-presets": workspaceDistPath(
        "../../../packages/20-page-systems/lander-page-template-presets/dist/index.js",
      ),
      "@mdwrk/structured-data": workspaceDistPath("../../../packages/00-contracts/structured-data/dist/index.js"),
      "@mdwrk/lander-react": workspaceDistPath("../../../packages/40-react-renderers/lander-react/dist/index.js"),
      "@mdwrk/lander-react-commerce": workspaceDistPath("../../../packages/40-react-renderers/lander-react-commerce/dist/index.js"),
      "@mdwrk/lander-react-structured-data": workspaceDistPath(
        "../../../packages/50-machine-output/lander-react-structured-data/dist/index.js",
      ),
      "@mdwrk/subscription-store-content-pack": workspaceDistPath(
        "../../../packages/60-content-packs/subscription-store-content-pack/dist/index.js",
      )
    }
  }
});
