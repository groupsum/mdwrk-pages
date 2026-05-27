import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@mdwrk/lander-content-contract": "../../packages/contracts/lander-content-contract/dist/index.js",
      "@mdwrk/lander-commerce-contract": "../../packages/contracts/lander-commerce-contract/dist/index.js",
      "@mdwrk/lander-core": "../../packages/core/lander-core/dist/index.js",
      "@mdwrk/lander-page-templates": "../../packages/core/lander-page-templates/dist/index.js",
      "@mdwrk/lander-page-template-presets": "../../packages/core/lander-page-template-presets/dist/index.js",
      "@mdwrk/structured-data": "../../packages/contracts/structured-data/dist/index.js",
      "@mdwrk/lander-react": "../../packages/ui/lander-react/dist/index.js",
      "@mdwrk/lander-react-commerce": "../../packages/ui/lander-react-commerce/dist/index.js",
      "@mdwrk/lander-react-structured-data": "../../packages/machine/lander-react-structured-data/dist/index.js",
      "@mdwrk/subscription-store-content-pack": "../../packages/content/subscription-store-content-pack/dist/index.js"
    }
  }
});
