import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const testRoot = path.dirname(fileURLToPath(import.meta.url));
const packageRoot = path.resolve(testRoot, "..");

async function importShim() {
  const smokeRoot = path.resolve(packageRoot, ".smoke-dist");
  const presetSmokeRoot = path.resolve(packageRoot, ".smoke-presets-dist");
  const templateSmokeRoot = path.resolve(packageRoot, ".smoke-templates-dist");
  const distRoot = path.resolve(packageRoot, "dist");
  const presetsDistRoot = path.resolve(packageRoot, "..", "..", "core", "lander-page-template-presets", "dist");
  const templatesDistRoot = path.resolve(packageRoot, "..", "..", "core", "lander-page-templates", "dist");
  const contractDist = path.resolve(packageRoot, "..", "..", "contracts", "lander-content-contract", "dist", "index.js").replace(/\\/g, "/");

  fs.rmSync(smokeRoot, { recursive: true, force: true });
  fs.rmSync(presetSmokeRoot, { recursive: true, force: true });
  fs.rmSync(templateSmokeRoot, { recursive: true, force: true });
  fs.cpSync(distRoot, smokeRoot, { recursive: true });
  fs.cpSync(presetsDistRoot, presetSmokeRoot, { recursive: true });
  fs.cpSync(templatesDistRoot, templateSmokeRoot, { recursive: true });

  for (const file of fs.readdirSync(templateSmokeRoot, { recursive: true })) {
    if (typeof file !== "string" || !file.endsWith(".js")) continue;
    const target = path.join(templateSmokeRoot, file);
    fs.writeFileSync(
      target,
      fs.readFileSync(target, "utf8").replaceAll('"@mdwrk/lander-content-contract"', `"file:///${contractDist}"`),
    );
  }

  const templatesDist = path.resolve(templateSmokeRoot, "index.js").replace(/\\/g, "/");
  for (const file of fs.readdirSync(path.join(presetSmokeRoot, "presets"))) {
    if (!file.endsWith(".js")) continue;
    const target = path.join(presetSmokeRoot, "presets", file);
    fs.writeFileSync(
      target,
      fs.readFileSync(target, "utf8").replaceAll('"@mdwrk/lander-page-templates"', `"file:///${templatesDist}"`),
    );
  }

  const presetsDist = path.join(presetSmokeRoot, "index.js").replace(/\\/g, "/");
  for (const file of fs.readdirSync(smokeRoot)) {
    if (!file.endsWith(".js")) continue;
    const target = path.join(smokeRoot, file);
    fs.writeFileSync(
      target,
      fs.readFileSync(target, "utf8")
        .replaceAll('"@mdwrk/lander-page-template-presets"', `"file:///${presetsDist}"`)
        .replaceAll('"@mdwrk/lander-page-templates"', `"file:///${templatesDist}"`),
    );
  }

  const imported = await import(`file:///${path.join(smokeRoot, "index.js").replace(/\\/g, "/")}`);
  fs.rmSync(smokeRoot, { recursive: true, force: true });
  fs.rmSync(presetSmokeRoot, { recursive: true, force: true });
  fs.rmSync(templateSmokeRoot, { recursive: true, force: true });
  return imported;
}

const {
  SUBSCRIPTION_STORE_CONTENT_PACK_NAME,
  getSubscriptionStoreHomeLinks,
  getSubscriptionStoreHomeNavigation,
  getSubscriptionStorePage,
  subscriptionStoreContentPack,
  subscriptionStorePreset,
} = await importShim();

assert.equal(SUBSCRIPTION_STORE_CONTENT_PACK_NAME, "@mdwrk/subscription-store-content-pack");
assert.equal(subscriptionStorePreset.id, "preset.subscription-store");
assert.equal(subscriptionStoreContentPack.pages.length, subscriptionStorePreset.graph.instances.length);
assert.deepEqual(subscriptionStoreContentPack.diagnostics.filter((item) => item.level === "error"), []);

const pricing = getSubscriptionStorePage("/store/pricing/");
assert.equal(pricing?.kind, "pricing");
assert.equal(pricing?.sections.some((section) => section.kind === "pricing"), true);

const billing = getSubscriptionStorePage("/store/support/billing/");
assert.equal(billing?.faq?.length, 2);

const refunds = getSubscriptionStorePage("/store/refunds/");
assert.equal(refunds?.sections.some((section) => section.kind === "policy_summary"), true);
assert.equal(refunds?.sections.some((section) => section.kind === "support_channels"), true);

const links = getSubscriptionStoreHomeLinks();
assert.deepEqual(links.legal.map((item) => item.href), ["/store/privacy/", "/store/terms/", "/store/refunds/"]);
assert.deepEqual(
  getSubscriptionStoreHomeNavigation().related.map((item) => item.href),
  ["/store/catalog/", "/store/product/", "/store/features/editor/", "/store/pricing/", "/store/pricing/basic/", "/store/support/", "/store/support/billing/", "/store/privacy/", "/store/terms/", "/store/refunds/"],
);
