import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@mdwrk/lander-content-contract": "../../packages/lander/lander-content-contract/dist/index.js",
      "@mdwrk/lander-core": "../../packages/lander/lander-core/dist/index.js",
      "@mdwrk/lander-page-templates": "../../packages/lander/lander-page-templates/dist/index.js",
      "@mdwrk/lander-page-template-presets": "../../packages/lander/lander-page-template-presets/dist/index.js",
      "@mdwrk/lander-react": "../../packages/lander/lander-react/dist/index.js",
      "@mdwrk/lander-react-structured-data": "../../packages/lander/lander-react-structured-data/dist/index.js",
      "@mdwrk/structured-data": "../../packages/shared/structured-data/dist/index.js"
    }
  }
});
