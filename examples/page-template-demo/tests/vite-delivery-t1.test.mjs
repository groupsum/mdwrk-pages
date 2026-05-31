import test from "node:test";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { verifyDemoViteDelivery } from "../../test-support/verify-demo-vite-delivery.mjs";

const here = path.dirname(fileURLToPath(import.meta.url));
const packageRoot = path.resolve(here, "..");

test("T1: page-template demo Vite dev delivery resolves workspace imports without runtime overlay errors", async () => {
  await verifyDemoViteDelivery({ demoRoot: packageRoot });
});
