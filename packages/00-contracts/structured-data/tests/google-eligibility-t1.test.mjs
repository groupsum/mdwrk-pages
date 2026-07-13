import assert from "node:assert/strict";
import test from "node:test";

import {
  GoogleEligibilityError,
  assertGoogleRichResult,
  googleJobPostingNode,
  googleProductSnippetNode,
  googleSoftwareApplicationNode,
  validateGoogleRichResult,
} from "../dist/google/index.js";

test("T1: Google builders accept eligible software, product, and physical job inputs", () => {
  const application = googleSoftwareApplicationNode({
    name: "Verified Application",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Web",
    offers: { name: "Free", price: 0, priceCurrency: "USD" },
    aggregateRating: { ratingValue: 4.8, ratingCount: 42 },
  });
  assert.equal(application["@type"], "SoftwareApplication");
  assert.equal(application.offers.price, 0);
  assert.equal(application.aggregateRating.ratingCount, 42);

  const product = googleProductSnippetNode({
    name: "Verified Product",
    offers: { name: "Standard", price: 25, priceCurrency: "USD" },
  });
  assert.equal(product["@type"], "Product");

  const job = googleJobPostingNode({
    name: "Platform Engineer",
    title: "Platform Engineer",
    description: "Build and operate the platform.",
    datePosted: "2026-07-13",
    hiringOrganization: { "@type": "Organization", name: "Example" },
    jobLocation: {
      "@type": "Place",
      address: { "@type": "PostalAddress", addressCountry: "US", addressLocality: "Chicago" },
    },
  });
  assert.equal(job["@type"], "JobPosting");
});

test("T1: validators return precise paths and assertions throw structured errors", () => {
  const node = { "@type": "SoftwareApplication", name: "Incomplete", offers: { "@type": "Offer" } };
  const result = validateGoogleRichResult("software-application", node);
  assert.equal(result.eligible, false);
  assert.deepEqual(
    result.issues.map((entry) => entry.path),
    ["offers.price", "aggregateRating|review"],
  );
  assert.throws(() => assertGoogleRichResult("software-application", node), GoogleEligibilityError);
});

