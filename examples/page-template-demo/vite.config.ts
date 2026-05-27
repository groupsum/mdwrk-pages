import { defineConfig } from "vite";

export default defineConfig({
  resolve: {
    alias: {
      "@mdwrk/lander-content-contract": "../../packages/contracts/lander-content-contract/dist/index.js",
      "@mdwrk/lander-core": "../../packages/core/lander-core/dist/index.js",
      "@mdwrk/lander-page-templates": "../../packages/core/lander-page-templates/dist/index.js",
      "@mdwrk/lander-page-template-presets": "../../packages/core/lander-page-template-presets/dist/index.js",
      "@mdwrk/lander-react": "../../packages/ui/lander-react/dist/index.js",
      "@mdwrk/lander-react-structured-data": "../../packages/machine/lander-react-structured-data/dist/index.js",
      "@mdwrk/page-template-demo-content-pack": "../../packages/content/page-template-demo-content-pack/dist/index.js",
      "@mdwrk/structured-data": "../../packages/contracts/structured-data/dist/index.js",
    },
  },
});
