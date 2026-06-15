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
        "../../packages/contracts/lander-content-contract/dist/index.js",
      ),
      "@mdwrk/lander-commerce-contract": workspaceDistPath(
        "../../packages/contracts/lander-commerce-contract/dist/index.js",
      ),
      "@mdwrk/lander-core": workspaceDistPath("../../packages/core/lander-core/dist/index.js"),
      "@mdwrk/lander-page-templates": workspaceDistPath("../../packages/core/lander-page-templates/dist/index.js"),
      "@mdwrk/lander-page-template-presets": workspaceDistPath(
        "../../packages/core/lander-page-template-presets/dist/index.js",
      ),
      "@mdwrk/structured-data": workspaceDistPath("../../packages/contracts/structured-data/dist/index.js"),
      "@mdwrk/lander-react": workspaceDistPath("../../packages/ui/lander-react/dist/index.js"),
      "@mdwrk/lander-react-commerce": workspaceDistPath("../../packages/ui/lander-react-commerce/dist/index.js"),
      "@mdwrk/lander-react-structured-data": workspaceDistPath(
        "../../packages/machine/lander-react-structured-data/dist/index.js",
      ),
      "@mdwrk/subscription-store-content-pack": workspaceDistPath(
        "../../packages/content/subscription-store-content-pack/dist/index.js",
      )
    }
  }
});
