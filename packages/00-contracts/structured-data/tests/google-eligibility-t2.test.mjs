import assert from "node:assert/strict";
import test from "node:test";

import {
  googleDiscussionForumPostingNode,
  googleJobPostingNode,
  googleSoftwareApplicationNode,
  validateGoogleRichResult,
} from "../dist/google/index.js";

test("T2: discussion forum validation fails closed on incomplete content and malformed comments", () => {
  const missingContent = validateGoogleRichResult("discussion-forum", {
    "@type": "DiscussionForumPosting",
    name: "Incomplete",
    articleBody: "articleBody alone is not Google's required text property",
    datePublished: "2026-08-11T12:00:00Z",
    author: { "@type": "Person", name: "Alice" },
  });
  assert.equal(missingContent.eligible, false);
  assert.ok(missingContent.issues.some((entry) => entry.path === "text|image|video"));

  const malformed = validateGoogleRichResult("discussion-forum", {
    "@type": "DiscussionForumPosting",
    name: "Malformed",
    text: "Visible topic text",
    datePublished: "not-a-date",
    author: { "@type": "Person", name: "" },
    commentCount: 0,
    comment: [{
      "@type": "Comment",
      text: "",
      datePublished: "2026-08-11T12:05:00Z",
      author: { "@type": "Person", name: "Bob" },
    }],
  });
  assert.equal(malformed.eligible, false);
  assert.ok(malformed.issues.some((entry) => entry.code === "google.forum.author.name.required"));
  assert.ok(malformed.issues.some((entry) => entry.code === "google.forum.comment.text.required"));
  assert.ok(malformed.issues.some((entry) => entry.code === "google.forum.comment_count.inconsistent"));
});

test("T2: discussion forum output is deterministic and preserves backward-compatible articleBody", () => {
  const legacy = {
    name: "Legacy-compatible",
    text: "Visible body",
    articleBody: "Legacy body",
    datePublished: "2026-08-11T12:00:00Z",
    author: { "@type": "Organization", name: "Forum operators" },
  };
  const first = googleDiscussionForumPostingNode(legacy);
  const second = googleDiscussionForumPostingNode(legacy);
  assert.deepEqual(second, first);
  assert.equal(first.text, "Visible body");
  assert.equal(first.articleBody, "Legacy body");
  assert.equal(first.image, undefined);
});

test("T2: nested malformed reputation data fails closed", () => {
  const result = validateGoogleRichResult("software-application", {
    "@type": "SoftwareApplication",
    name: "Malformed",
    offers: { "@type": "Offer", price: 0 },
    aggregateRating: { "@type": "AggregateRating", ratingValue: 4.5, ratingCount: 0 },
  });
  assert.equal(result.eligible, false);
  assert.ok(result.issues.some((entry) => entry.code === "google.aggregate_rating.count.required"));
});

test("T2: remote jobs require applicant location requirements", () => {
  const invalid = validateGoogleRichResult("job-posting", {
    "@type": "JobPosting",
    title: "Remote Engineer",
    description: "Build remotely.",
    datePosted: "2026-07-13",
    hiringOrganization: { "@type": "Organization", name: "Example" },
    jobLocationType: "TELECOMMUTE",
  });
  assert.equal(invalid.eligible, false);
  assert.ok(invalid.issues.some((entry) => entry.path === "applicantLocationRequirements"));

  const valid = googleJobPostingNode({
    name: "Remote Engineer",
    title: "Remote Engineer",
    description: "Build remotely.",
    datePosted: "2026-07-13",
    hiringOrganization: { "@type": "Organization", name: "Example" },
    jobLocationType: "TELECOMMUTE",
    applicantLocationRequirements: { "@type": "Country", name: "United States" },
  });
  assert.equal(valid.jobLocationType, "TELECOMMUTE");
});

test("T2: output is deterministic and builders never synthesize claims", () => {
  const input = {
    name: "Deterministic",
    offers: { name: "Free", price: 0, priceCurrency: "USD" },
    aggregateRating: { ratingValue: 5, ratingCount: 1 },
  };
  const first = googleSoftwareApplicationNode(input);
  const second = googleSoftwareApplicationNode(input);
  assert.deepEqual(second, first);
  assert.equal(first.review, undefined);
  assert.equal(first.availability, undefined);
});

test("T2: unknown feature identifiers fail closed at runtime", () => {
  const result = validateGoogleRichResult("unknown-feature", { "@type": "Thing" });
  assert.equal(result.eligible, false);
  assert.equal(result.issues[0].code, "google.feature.unsupported");
});
