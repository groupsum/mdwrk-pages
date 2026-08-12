import assert from "node:assert/strict";
import test from "node:test";

import {
  GoogleEligibilityError,
  assertGoogleRichResult,
  googleDiscussionForumPostingNode,
  googleJobPostingNode,
  googleProductSnippetNode,
  googleSoftwareApplicationNode,
  validateGoogleRichResult,
} from "../dist/google/index.js";

test("T1: Google discussion forum builder emits eligible nested discussion data", () => {
  const posting = googleDiscussionForumPostingNode({
    id: "https://forum.example/topics/hello#posting",
    name: "Hello",
    headline: "Hello",
    url: "https://forum.example/topics/hello",
    text: "Complete visible topic text.",
    datePublished: "2026-08-11T12:00:00Z",
    author: {
      "@type": "Person",
      name: "Alice",
      url: "https://forum.example/u/alice",
      agentInteractionStatistic: {
        "@type": "InteractionCounter",
        interactionType: "https://schema.org/WriteAction",
        userInteractionCount: 4,
      },
    },
    commentCount: 2,
    interactionStatistic: [
      { "@type": "InteractionCounter", interactionType: "https://schema.org/LikeAction", userInteractionCount: 3 },
      { "@type": "InteractionCounter", interactionType: "https://schema.org/ViewAction", userInteractionCount: 20 },
    ],
    comment: [{
      "@type": "Comment",
      text: "First reply.",
      datePublished: "2026-08-11T12:05:00Z",
      author: { "@type": "Person", name: "Bob", url: "https://forum.example/u/bob" },
      comment: [{
        "@type": "Comment",
        text: "Nested reply.",
        datePublished: "2026-08-11T12:10:00Z",
        author: { "@type": "Person", name: "Alice", url: "https://forum.example/u/alice" },
      }],
    }],
  });

  assert.equal(posting["@type"], "DiscussionForumPosting");
  assert.equal(posting.text, "Complete visible topic text.");
  assert.equal(posting.comment[0].comment[0].text, "Nested reply.");
  assert.equal(posting.articleBody, undefined);
});

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
