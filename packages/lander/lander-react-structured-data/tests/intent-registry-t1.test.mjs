import assert from "node:assert/strict";
import test from "node:test";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { importStructuredDataReactDist } from "./load-dist.mjs";

test("T1: every supported intent kind resolves to a wrapper entry and renders JSON-LD", async () => {
  const mod = await importStructuredDataReactDist();
  const {
    SUPPORTED_LANDER_STRUCTURED_DATA_INTENT_KINDS,
    getStructuredDataIntentRendererEntry,
    renderStructuredDataIntent,
  } = mod;

  assert.ok(SUPPORTED_LANDER_STRUCTURED_DATA_INTENT_KINDS.length >= 40);

  for (const kind of SUPPORTED_LANDER_STRUCTURED_DATA_INTENT_KINDS) {
    const entry = getStructuredDataIntentRendererEntry(kind);
    assert.equal(typeof entry.componentName, "string");
    assert.equal(typeof entry.render, "function");

    const markup = renderToStaticMarkup(
      renderStructuredDataIntent({
        id: `intent:${kind.toLowerCase()}`,
        kind,
        pagePath: "/registry/",
        source: "schema",
        data: defaultDataForKind(kind),
      }),
    );
    assert.ok(markup.includes("application/ld+json"), `${kind} must emit a JSON-LD script`);
    assert.ok(markup.includes(`"${kind}"`), `${kind} payload must include the type name`);
  }
});

function defaultDataForKind(kind) {
  switch (kind) {
    case "AggregateRating":
    case "EmployerAggregateRating":
      return { ratingValue: 5, reviewCount: 1 };
    case "Answer":
      return { text: "A." };
    case "Article":
    case "NewsArticle":
    case "TechArticle":
    case "BlogPosting":
      return { name: kind, url: `https://mdwrk.test/${kind.toLowerCase()}`, headline: kind };
    case "Book":
      return { name: kind, url: "https://mdwrk.test/book" };
    case "BroadcastEvent":
      return { name: kind, startDate: "2026-05-23T10:00:00Z", isLiveBroadcast: true };
    case "BreadcrumbList":
      return { items: [{ label: "Home", href: "https://mdwrk.test/" }] };
    case "ClaimReview":
      return { name: kind, url: "https://mdwrk.test/claim-review", claimReviewed: "Claim" };
    case "Clip":
      return { name: kind, url: "https://mdwrk.test/video?t=10", startOffset: 10, endOffset: 20 };
    case "Course":
      return { name: kind, url: "https://mdwrk.test/course" };
    case "CourseInstance":
      return { name: kind, url: "https://mdwrk.test/course-instance" };
    case "Dataset":
      return { name: kind, url: "https://mdwrk.test/dataset" };
    case "DiscussionForumPosting":
      return { name: kind, url: "https://mdwrk.test/discussion" };
    case "Event":
      return { name: kind, url: "https://mdwrk.test/event", startDate: "2026-05-23" };
    case "FAQPage":
      return { items: [{ question: "Q?", answer: "A." }] };
    case "HowTo":
      return { name: kind, url: "https://mdwrk.test/how-to", steps: [{ name: "Step", text: "Do it." }] };
    case "ImageObject":
      return { name: kind, url: "https://mdwrk.test/image.png" };
    case "ItemList":
      return { name: kind, items: [{ name: "Item 1", url: "https://mdwrk.test/item-1" }] };
    case "JobPosting":
      return { name: kind, title: kind, url: "https://mdwrk.test/job", datePosted: "2026-05-23", hiringOrganization: "https://mdwrk.test/#org" };
    case "LearningResource":
      return { name: kind, url: "https://mdwrk.test/learning-resource", learningResourceType: "Math Solver", teaches: ["Algebra"] };
    case "LocalBusiness":
    case "Movie":
    case "Product":
    case "ProductGroup":
    case "ProfilePage":
    case "VacationRental":
    case "Vehicle":
    case "WebPage":
    case "WebSite":
    case "Organization":
    case "SoftwareApplication":
    case "WebApplication":
    case "SoftwareSourceCode":
      return { name: kind, url: `https://mdwrk.test/${kind.toLowerCase()}` };
    case "MathSolver":
      return { name: kind, url: "https://mdwrk.test/math", mathExpression: "1+1" };
    case "MemberProgram":
      return { name: kind, url: "https://mdwrk.test/member-program" };
    case "MerchantReturnPolicy":
    case "OfferShippingDetails":
      return { name: kind };
    case "MonetaryAmountDistribution":
      return { name: kind, currency: "USD", minValue: 1, maxValue: 2, unitText: "HOUR" };
    case "QAPage":
      return { question: "Q?", acceptedAnswer: { text: "A." }, suggestedAnswer: [{ text: "B." }], answerCount: 2, url: "https://mdwrk.test/qa" };
    case "Question":
      return { name: "Q?", acceptedAnswer: { text: "A." }, suggestedAnswer: [{ text: "B." }], answerCount: 2, eduQuestionType: "Flashcard" };
    case "Quiz":
      return { name: kind, hasPart: [{ name: "Q?", acceptedAnswer: { text: "A." }, suggestedAnswer: [{ text: "B." }], answerCount: 2, eduQuestionType: "Flashcard" }] };
    case "ReadAction":
      return { target: "https://mdwrk.test/book" };
    case "Recipe":
      return { name: kind, url: "https://mdwrk.test/recipe", recipeIngredient: ["salt"], recipeInstructions: "Mix." };
    case "Review":
      return { name: kind, url: "https://mdwrk.test/review", itemReviewed: "https://mdwrk.test/product", reviewBody: "Solid." };
    case "SolveMathAction":
      return { target: "https://mdwrk.test/math?q={mathExpression}", mathExpressionInput: "required name=mathExpression", eduQuestionType: ["Algebra"] };
    case "SpeakableSpecification":
      return { cssSelector: [".answer"] };
    case "VideoObject":
      return {
        name: kind,
        url: "https://mdwrk.test/video",
        thumbnailUrl: "https://mdwrk.test/video.png",
        uploadDate: "2026-05-23",
        clip: [{ name: "Key moment", url: "https://mdwrk.test/video?t=10", startOffset: 10, endOffset: 20 }],
        publication: [{ name: "Live stream", startDate: "2026-05-23T10:00:00Z", isLiveBroadcast: true }],
      };
    default:
      throw new Error(`Unhandled intent kind fixture: ${kind}`);
  }
}
