import assert from "node:assert/strict";
import test from "node:test";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { importLanderReactDist } from "./load-dist.mjs";
import { semanticFixtures } from "./semantic-fixtures.mjs";

test("T0: every fused semantic component exports, renders visible markup, and emits JSON-LD by default", async () => {
  const mod = await importLanderReactDist();

  for (const fixture of semanticFixtures) {
    assert.equal(typeof mod[fixture.name], "function", `${fixture.name} must be exported`);
    const markup = renderToStaticMarkup(React.createElement(mod[fixture.name], fixture.props));
    assert.ok(markup.includes("application/ld+json"), `${fixture.name} must emit JSON-LD`);
    assert.ok(markup.includes(`"@type":"${fixture.expectedType}"`), `${fixture.name} must emit ${fixture.expectedType}`);
    for (const snippet of fixture.visible) {
      assert.ok(markup.includes(snippet), `${fixture.name} must render visible snippet: ${snippet}`);
    }
  }
});

test("T0: article-family fused components render distinct shell classes for their family-specific token surfaces", async () => {
  const mod = await importLanderReactDist();
  const articleMarkup = renderToStaticMarkup(React.createElement(mod.Article, { title: "Article", body: React.createElement("p", null, "body") }));
  const blogMarkup = renderToStaticMarkup(React.createElement(mod.BlogPosting, { title: "Blog", body: React.createElement("p", null, "body") }));
  const newsMarkup = renderToStaticMarkup(React.createElement(mod.NewsArticle, { title: "News", body: React.createElement("p", null, "body") }));
  const techMarkup = renderToStaticMarkup(React.createElement(mod.TechArticle, { title: "Tech", body: React.createElement("p", null, "body") }));
  const discussionMarkup = renderToStaticMarkup(React.createElement(mod.DiscussionForumPosting, { title: "Thread", articleBody: "Discussion body" }));
  const claimMarkup = renderToStaticMarkup(React.createElement(mod.ClaimReview, { title: "Claim", claimReviewed: "Claim text" }));

  assert.ok(articleMarkup.includes("lander-semantic--article"));
  assert.ok(blogMarkup.includes("lander-semantic--blog-posting"));
  assert.ok(newsMarkup.includes("lander-semantic--news-article"));
  assert.ok(techMarkup.includes("lander-semantic--tech-article"));
  assert.ok(discussionMarkup.includes("lander-semantic--discussion-forum-posting"));
  assert.ok(claimMarkup.includes("lander-semantic--claim-review"));
  assert.ok(claimMarkup.includes("lander-semantic__callout"));
});

test("T0: education-family fused components expose distinct layout hooks for their richer token surfaces", async () => {
  const mod = await importLanderReactDist();
  const courseMarkup = renderToStaticMarkup(React.createElement(mod.Course, { name: "Course", modules: [{ title: "Module A", summary: "Foundations" }], viewModel: { outcomes: ["Ship prompts"] } }));
  const quizMarkup = renderToStaticMarkup(React.createElement(mod.Quiz, { name: "Quiz", questions: [{ prompt: "What is drift?", answer: "Behavior change." }] }));
  const qaMarkup = renderToStaticMarkup(React.createElement(mod.QAPage, { question: "What is prompt drift?", acceptedAnswer: { text: "Behavior change." }, suggestedAnswer: [{ text: "Latency issue." }] }));
  const answerMarkup = renderToStaticMarkup(React.createElement(mod.Answer, { text: "Behavior change.", author: { name: "MDWRK" } }));
  const howToMarkup = renderToStaticMarkup(React.createElement(mod.HowTo, { name: "Ship prompts", steps: [{ name: "Baseline", text: "Capture current behavior." }] }));
  const resourceMarkup = renderToStaticMarkup(React.createElement(mod.LearningResource, { name: "Guide", teaches: ["Prompt validation"] }));
  const mathMarkup = renderToStaticMarkup(React.createElement(mod.MathSolver, { name: "Solver", mathExpression: "2x+4=10", potentialAction: [{ target: "https://mdwrk.test/math" }] }));
  const solveMarkup = renderToStaticMarkup(React.createElement(mod.SolveMathAction, { target: "https://mdwrk.test/math", mathExpressionInput: "x+2=4" }));
  const faqMarkup = renderToStaticMarkup(React.createElement(mod.FAQPage, { items: [{ question: "What is drift?", answer: "Behavior change." }], viewModel: { collapsible: true } }));

  assert.ok(courseMarkup.includes("lander-semantic__module-list"));
  assert.ok(courseMarkup.includes("lander-semantic__outcomes-list"));
  assert.ok(quizMarkup.includes("lander-semantic__quiz-grid"));
  assert.ok(quizMarkup.includes("lander-semantic__quiz-card"));
  assert.ok(qaMarkup.includes("lander-semantic__accepted-answer"));
  assert.ok(qaMarkup.includes("lander-semantic__suggested-answer-list"));
  assert.ok(answerMarkup.includes("lander-semantic__answer-prose"));
  assert.ok(howToMarkup.includes("lander-semantic__how-to-steps"));
  assert.ok(resourceMarkup.includes("lander-semantic__learning-resource-tags"));
  assert.ok(mathMarkup.includes("lander-semantic__math-expression"));
  assert.ok(mathMarkup.includes("lander-semantic__math-targets"));
  assert.ok(solveMarkup.includes("lander-semantic__solve-math-summary"));
  assert.ok(faqMarkup.includes("lander-semantic__faq-list"));
  assert.ok(faqMarkup.includes("lander-semantic__faq-item"));
});

test("T0: commerce-family fused components expose distinct layout hooks for pricing, rating, variant, and policy surfaces", async () => {
  const mod = await importLanderReactDist();
  const productMarkup = renderToStaticMarkup(React.createElement(mod.Product, { name: "Studio", price: 49, priceCurrency: "USD", offersCta: { label: "Buy", href: "/buy" } }));
  const groupMarkup = renderToStaticMarkup(React.createElement(mod.ProductGroup, { name: "Studio", variesBy: ["Region"], hasVariant: [{ name: "US" }, { name: "EU" }] }));
  const reviewMarkup = renderToStaticMarkup(React.createElement(mod.Review, { name: "Launch review", itemReviewed: "Studio", ratingValue: 5, reviewBody: "Great release." }));
  const ratingMarkup = renderToStaticMarkup(React.createElement(mod.AggregateRating, { ratingValue: 4.8, reviewCount: 12 }));
  const shippingMarkup = renderToStaticMarkup(React.createElement(mod.OfferShippingDetails, { name: "Shipping", shippingDestination: "US", shippingRate: "Free" }));
  const returnMarkup = renderToStaticMarkup(React.createElement(mod.MerchantReturnPolicy, { name: "Returns", merchantReturnDays: 30 }));
  const distributionMarkup = renderToStaticMarkup(React.createElement(mod.MonetaryAmountDistribution, { name: "Band", currency: "USD", median: 120000, percentile10: 90000, percentile90: 150000 }));
  const employerMarkup = renderToStaticMarkup(React.createElement(mod.EmployerAggregateRating, { employerName: "MDWRK", ratingValue: 4.4, reviewCount: 7 }));

  assert.ok(productMarkup.includes("lander-semantic__price-band"));
  assert.ok(groupMarkup.includes("lander-semantic__variant-list"));
  assert.ok(groupMarkup.includes("lander-semantic__variation-axes"));
  assert.ok(reviewMarkup.includes("lander-semantic__review-score"));
  assert.ok(reviewMarkup.includes("lander-semantic__review-quote"));
  assert.ok(ratingMarkup.includes("lander-semantic__rating-score"));
  assert.ok(shippingMarkup.includes("lander-semantic__policy-facts"));
  assert.ok(returnMarkup.includes("lander-semantic__policy-facts"));
  assert.ok(distributionMarkup.includes("lander-semantic__distribution-grid"));
  assert.ok(employerMarkup.includes("lander-semantic__rating-score"));
});
