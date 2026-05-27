import assert from "node:assert/strict";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { existsSync } from "node:fs";

import {
  getStructuredDataSchemaBySchemaId,
  getStructuredDataSchemaByType,
  listStructuredDataSchemas,
} from "../dist/index.js";

const packageRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

test("T0: structured-data schema registry publishes the governed phase-1 surface", () => {
  const registry = listStructuredDataSchemas();
  const types = registry.map((entry) => entry.type);
  const governedTypes = [
    "Answer",
    "Article",
    "BlogPosting",
    "BroadcastEvent",
    "BreadcrumbList",
    "ClaimReview",
    "Clip",
    "Course",
    "DiscussionForumPosting",
    "EmployerAggregateRating",
    "Event",
    "HowTo",
    "ImageObject",
    "ItemList",
    "JobPosting",
    "LearningResource",
    "LocalBusiness",
    "MathSolver",
    "MerchantReturnPolicy",
    "MonetaryAmountDistribution",
    "Movie",
    "NewsArticle",
    "OfferShippingDetails",
    "Product",
    "ProductGroup",
    "ProfilePage",
    "QAPage",
    "Question",
    "Quiz",
    "Recipe",
    "Review",
    "SoftwareApplication",
    "SolveMathAction",
    "VacationRental",
    "Vehicle",
    "VideoObject",
  ];

  assert.equal(registry.length, governedTypes.length);
  assert.deepEqual([...types].sort(), [...governedTypes].sort());
  assert.equal(getStructuredDataSchemaByType("Dataset"), undefined);
  assert.equal(getStructuredDataSchemaByType("FAQPage"), undefined);
});

test("T0: structured-data schema registry entries are stable, frozen, and asset-backed", () => {
  const registry = listStructuredDataSchemas();

  assert.ok(Object.isFrozen(registry));
  for (const entry of registry) {
    assert.ok(Object.isFrozen(entry), `${entry.type} entry should be frozen`);
    assert.ok(Object.isFrozen(entry.schema), `${entry.type} schema should be frozen`);
    assert.ok(entry.schemaId.startsWith("https://schemas.mdwrk.com/structured-data/"));
    assert.ok(entry.assetPath.startsWith("./schemas/structured-data/"));
    assert.equal(getStructuredDataSchemaBySchemaId(entry.schemaId)?.type, entry.type);

    const assetPath = path.join(packageRoot, entry.assetPath.replace(/^\.\//, "").replaceAll("/", path.sep));
    assert.ok(existsSync(assetPath), `Expected schema asset for ${entry.type} at ${entry.assetPath}`);
  }
});
