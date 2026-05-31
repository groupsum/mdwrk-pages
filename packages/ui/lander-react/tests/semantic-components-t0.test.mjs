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

test("T0: supporting-family fused components expose distinct layout hooks for actions, regions, offer stacks, alignments, audiences, and audio transcripts", async () => {
  const mod = await importLanderReactDist();
  const actionMarkup = renderToStaticMarkup(React.createElement(mod.Action, { name: "Read docs", target: "https://mdwrk.test/docs", agent: { name: "MDWRK" }, object: "Docs", result: "Guide opened" }));
  const areaMarkup = renderToStaticMarkup(React.createElement(mod.AdministrativeArea, { name: "Illinois", containedInPlace: "United States" }));
  const offerMarkup = renderToStaticMarkup(React.createElement(mod.AggregateOffer, { name: "Offer range", lowPrice: "10.00", highPrice: "30.00", offers: [{ name: "Starter", price: "10.00" }] }));
  const alignmentMarkup = renderToStaticMarkup(React.createElement(mod.AlignmentObject, { name: "Curriculum alignment", targetName: "Prompt operations", targetDescription: "Maps to the operations competency band." }));
  const audienceMarkup = renderToStaticMarkup(React.createElement(mod.Audience, { name: "Operators", audienceType: "Prompt operators", geographicArea: "Illinois" }));
  const audioMarkup = renderToStaticMarkup(React.createElement(mod.AudioObject, { name: "Release call", transcript: "Release transcript." }));

  assert.ok(actionMarkup.includes("lander-semantic__action-flow"));
  assert.ok(actionMarkup.includes("lander-semantic__action-result"));
  assert.ok(areaMarkup.includes("United States"));
  assert.ok(offerMarkup.includes("lander-semantic__offer-stack"));
  assert.ok(alignmentMarkup.includes("lander-semantic__alignment-target"));
  assert.ok(audienceMarkup.includes("Prompt operators"));
  assert.ok(audioMarkup.includes("lander-semantic__audio-transcript"));
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
  assert.ok(courseMarkup.includes("lander-semantic__section-header"));
  assert.ok(courseMarkup.includes("lander-semantic__module-index"));
  assert.ok(courseMarkup.includes("lander-semantic__course-stat-grid"));
  assert.ok(courseMarkup.includes("lander-semantic__outcomes-list"));
  assert.ok(courseMarkup.includes("lander-semantic__outcome-chip"));
  const courseInstanceMarkup = renderToStaticMarkup(React.createElement(mod.CourseInstance, { name: "Course instance", startDate: "2026-07-01", location: "Remote" }));
  assert.ok(courseInstanceMarkup.includes("lander-semantic__session-facts"));
  assert.ok(quizMarkup.includes("lander-semantic__quiz-grid"));
  assert.ok(quizMarkup.includes("lander-semantic__quiz-card"));
  assert.ok(quizMarkup.includes("lander-semantic__assessment-brief"));
  assert.ok(quizMarkup.includes("lander-semantic__quiz-response-label"));
  assert.ok(qaMarkup.includes("lander-semantic__prompt-panel"));
  assert.ok(qaMarkup.includes("lander-semantic__accepted-answer"));
  assert.ok(qaMarkup.includes("lander-semantic__suggested-answer-list"));
  assert.ok(qaMarkup.includes("lander-semantic__suggested-answer-card"));
  assert.ok(answerMarkup.includes("lander-semantic__answer-prose"));
  assert.ok(answerMarkup.includes("lander-semantic__answer-kicker"));
  assert.ok(howToMarkup.includes("lander-semantic__how-to-steps"));
  assert.ok(howToMarkup.includes("lander-semantic__how-to-overview"));
  assert.ok(howToMarkup.includes("lander-semantic__how-to-step-kicker"));
  assert.ok(resourceMarkup.includes("lander-semantic__learning-resource-tags"));
  assert.ok(resourceMarkup.includes("lander-semantic__resource-rail"));
  assert.ok(resourceMarkup.includes("lander-semantic__learning-tag"));
  assert.ok(mathMarkup.includes("lander-semantic__math-expression"));
  assert.ok(mathMarkup.includes("lander-semantic__solver-brief"));
  assert.ok(mathMarkup.includes("lander-semantic__math-targets"));
  assert.ok(mathMarkup.includes("lander-semantic__math-panel"));
  assert.ok(solveMarkup.includes("lander-semantic__solve-math-summary"));
  assert.ok(solveMarkup.includes("lander-semantic__solve-math-row"));
  assert.ok(faqMarkup.includes("lander-semantic__faq-overview"));
  assert.ok(faqMarkup.includes("lander-semantic__faq-list"));
  assert.ok(faqMarkup.includes("lander-semantic__faq-item"));
  assert.ok(faqMarkup.includes("lander-semantic__faq-kicker"));
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

test("T0: media-family fused components expose distinct layout hooks for runtime, timelines, live badges, captions, and cast lists", async () => {
  const mod = await importLanderReactDist();
  const videoMarkup = renderToStaticMarkup(React.createElement(mod.VideoObject, { name: "Video", thumbnailUrl: "https://mdwrk.test/thumb.png", uploadDate: "2026-05-27", duration: "PT2M", clip: [{ name: "Segment A" }] }));
  const clipMarkup = renderToStaticMarkup(React.createElement(mod.Clip, { name: "Latency section", startOffset: 10, endOffset: 30 }));
  const broadcastMarkup = renderToStaticMarkup(React.createElement(mod.BroadcastEvent, { name: "Prompt Ops Live", isLiveBroadcast: true }));
  const imageMarkup = renderToStaticMarkup(React.createElement(mod.ImageObject, { name: "Dashboard", contentUrl: "https://mdwrk.test/image.png", caption: "Overview panel" }));
  const movieMarkup = renderToStaticMarkup(React.createElement(mod.Movie, { name: "Prompt City", actor: [{ name: "MDWRK" }] }));

  assert.ok(videoMarkup.includes("lander-semantic__media-stat"));
  assert.ok(videoMarkup.includes("lander-semantic__clip-list"));
  assert.ok(clipMarkup.includes("lander-semantic__timeline-band"));
  assert.ok(broadcastMarkup.includes("lander-semantic__live-badge"));
  assert.ok(imageMarkup.includes("lander-semantic__figure-caption"));
  assert.ok(movieMarkup.includes("lander-semantic__cast-list"));
});

test("T0: identity-family fused components expose distinct layout hooks for profiles, network chips, hours cards, page facts, breadcrumb trails, and selector blocks", async () => {
  const mod = await importLanderReactDist();
  const profileMarkup = renderToStaticMarkup(React.createElement(mod.ProfilePage, { name: "MDWRK", mainEntity: "Chris", description: "Builder profile" }));
  const organizationMarkup = renderToStaticMarkup(React.createElement(mod.Organization, { name: "MDWRK", sameAs: ["https://example.com/x"] }));
  const businessMarkup = renderToStaticMarkup(React.createElement(mod.LocalBusiness, { name: "MDWRK Studio", address: "Austin", openingHours: ["Mon-Fri 9-5"] }));
  const memberMarkup = renderToStaticMarkup(React.createElement(mod.MemberProgram, { name: "Member+", provider: "MDWRK" }));
  const pageMarkup = renderToStaticMarkup(React.createElement(mod.WebPage, { name: "Prompt guide", primaryType: "Guide", datePublished: "2026-05-28" }));
  const siteMarkup = renderToStaticMarkup(React.createElement(mod.WebSite, { name: "MDWRK", publisher: "MDWRK Media" }));
  const breadcrumbMarkup = renderToStaticMarkup(React.createElement(mod.BreadcrumbList, { items: [{ label: "Home", href: "/" }, { label: "Guide" }] }));
  const speakableMarkup = renderToStaticMarkup(React.createElement(mod.SpeakableSpecification, { cssSelector: [".hero"], xpath: ["//main/h1"] }));

  assert.ok(profileMarkup.includes("lander-semantic__profile-summary"));
  assert.ok(organizationMarkup.includes("lander-semantic__network-list"));
  assert.ok(businessMarkup.includes("lander-semantic__hours-card"));
  assert.ok(memberMarkup.includes("lander-semantic__member-provider"));
  assert.ok(pageMarkup.includes("lander-semantic__page-facts"));
  assert.ok(siteMarkup.includes("lander-semantic__publisher-band"));
  assert.ok(breadcrumbMarkup.includes("lander-semantic__breadcrumb-trail"));
  assert.ok(breadcrumbMarkup.includes("lander-semantic__breadcrumb-separator"));
  assert.ok(speakableMarkup.includes("lander-semantic__selector-grid"));
  assert.ok(speakableMarkup.includes("lander-semantic__selector-block"));
});

test("T0: catalog-family fused components expose distinct layout hooks for keyword clouds, ranked lists, recipe cards, app specs, amenities, vehicle stats, salary bands, target previews, and event badges", async () => {
  const mod = await importLanderReactDist();
  const datasetMarkup = renderToStaticMarkup(React.createElement(mod.Dataset, { name: "Prompt metrics", keywords: ["latency", "quality"] }));
  const itemListMarkup = renderToStaticMarkup(React.createElement(mod.ItemList, { name: "Top prompts", items: [{ name: "Prompt A", url: "/a" }] }));
  const bookMarkup = renderToStaticMarkup(React.createElement(mod.Book, { name: "Prompt Systems", author: { name: "MDWRK" }, isbn: "123-456" }));
  const recipeMarkup = renderToStaticMarkup(React.createElement(mod.Recipe, { name: "Starter", recipeIngredient: ["Flour"], recipeInstructions: [{ name: "Mix", text: "Combine." }] }));
  const softwareMarkup = renderToStaticMarkup(React.createElement(mod.SoftwareApplication, { name: "Desktop Studio", applicationCategory: "IDE", operatingSystem: "Windows" }));
  const webAppMarkup = renderToStaticMarkup(React.createElement(mod.WebApplication, { name: "Prompt Cloud", applicationCategory: "SaaS", softwareVersion: "2.4" }));
  const sourceMarkup = renderToStaticMarkup(React.createElement(mod.SoftwareSourceCode, { name: "SDK", programmingLanguage: ["TypeScript", "Rust"] }));
  const rentalMarkup = renderToStaticMarkup(React.createElement(mod.VacationRental, { name: "Lake House", containsPlace: [{ name: "Deck" }, { name: "Sauna" }] }));
  const vehicleMarkup = renderToStaticMarkup(React.createElement(mod.Vehicle, { name: "Transit", brand: { name: "MDWRK Motors" }, price: 32000, priceCurrency: "USD", vehicleModelDate: "2026" }));
  const jobMarkup = renderToStaticMarkup(React.createElement(mod.JobPosting, { name: "Senior Prompt Engineer", title: "Senior Prompt Engineer", datePosted: "2026-05-28", hiringOrganization: "MDWRK", employmentType: ["Full-time"], baseSalary: "$180k" }));
  const readMarkup = renderToStaticMarkup(React.createElement(mod.ReadAction, { target: "https://mdwrk.test/docs" }));
  const eventMarkup = renderToStaticMarkup(React.createElement(mod.Event, { name: "Launch", startDate: "2026-05-28", eventStatus: "Scheduled", eventAttendanceMode: "OnlineEventAttendanceMode" }));

  assert.ok(datasetMarkup.includes("lander-semantic__keyword-cloud"));
  assert.ok(itemListMarkup.includes("lander-semantic__item-list-grid"));
  assert.ok(itemListMarkup.includes("lander-semantic__item-rank"));
  assert.ok(bookMarkup.includes("lander-semantic__book-spine"));
  assert.ok(recipeMarkup.includes("lander-semantic__ingredient-list"));
  assert.ok(recipeMarkup.includes("lander-semantic__recipe-step"));
  assert.ok(softwareMarkup.includes("lander-semantic__app-spec-grid"));
  assert.ok(webAppMarkup.includes("lander-semantic__app-spec-grid"));
  assert.ok(sourceMarkup.includes("lander-semantic__language-list"));
  assert.ok(rentalMarkup.includes("lander-semantic__amenity-list"));
  assert.ok(vehicleMarkup.includes("lander-semantic__vehicle-dashboard"));
  assert.ok(jobMarkup.includes("lander-semantic__salary-band"));
  assert.ok(readMarkup.includes("lander-semantic__target-preview"));
  assert.ok(eventMarkup.includes("lander-semantic__event-badges"));
});
