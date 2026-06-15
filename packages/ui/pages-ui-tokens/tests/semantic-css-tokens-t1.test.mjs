import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import test from "node:test";

import * as tokenExports from "../dist/index.js";
import { semanticTokenFixtures } from "./semantic-token-fixtures.mjs";

const sharedSemanticShellSource = readFileSync(resolve("../lander-react/src/semantic/shared.tsx"), "utf8");
const semanticSource = readFileSync(resolve("../lander-react/src/semantic/index.ts"), "utf8");
const generatedFamilyEntrypoints = new Map([
  ["type", './generated-type-family.js'],
  ["datatype", './datatype-family.js'],
  ["enumeration", './enumeration-family.js'],
  ["property", './property-family.js'],
]);

const shellClassContract = [
  "lander-semantic__header",
  "lander-semantic__eyebrow",
  "lander-semantic__title",
  "lander-semantic__subtitle",
  "lander-semantic__description",
  "lander-semantic__meta",
  "lander-semantic__image",
  "lander-semantic__body",
  "lander-semantic__actions",
  "lander-semantic__footer",
];

function readCssFile(filename) {
  return readFileSync(resolve("src/styles", filename), "utf8");
}

function assertUsesToken(cssText, tokenName, label) {
  const tokenRef = `var(--${tokenName})`;
  assert.ok(cssText.includes(tokenRef), `${label} should consume ${tokenRef}`);
}

test("T1: fused semantic token CSS aligns with the shared visible semantic shell contract", () => {
  for (const className of shellClassContract) {
    assert.ok(sharedSemanticShellSource.includes(className), `SemanticShell should render ${className}`);
  }

  for (const fixture of semanticTokenFixtures) {
    const generatedEntrypoint = generatedFamilyEntrypoints.get(fixture.kind);
    assert.ok(
      semanticSource.includes(fixture.name) || (generatedEntrypoint && semanticSource.includes(`export * from "${generatedEntrypoint}";`)),
      `semantic entrypoint should export ${fixture.name}`,
    );

    const cssText = readCssFile(fixture.cssFilename);
    assert.ok(cssText.includes(fixture.shellSelector), `${fixture.cssFilename} should target ${fixture.shellSelector}`);

    for (const className of shellClassContract) {
      assert.ok(
        cssText.includes(`${fixture.shellSelector} .${className}`),
        `${fixture.cssFilename} should target ${fixture.shellSelector} .${className}`,
      );
    }
  }
});

test("T1: every per-type semantic token file consumes its own token family", () => {
  for (const fixture of semanticTokenFixtures) {
    const cssText = readCssFile(fixture.cssFilename);
    const tokenNames = tokenExports[fixture.tokenConstExportName];
    assert.ok(Array.isArray(tokenNames) && tokenNames.length > 0, `missing token export ${fixture.tokenConstExportName}`);
    for (const tokenName of tokenNames) {
      assertUsesToken(cssText, tokenName, fixture.cssFilename);
    }
  }
});

test("T1: article-family token files define distinct layout hooks beyond the shared shell baseline", () => {
  const articleCss = readCssFile("semantic-article.css");
  const blogCss = readCssFile("semantic-blog-posting.css");
  const newsCss = readCssFile("semantic-news-article.css");
  const techCss = readCssFile("semantic-tech-article.css");
  const discussionCss = readCssFile("semantic-discussion-forum-posting.css");
  const claimCss = readCssFile("semantic-claim-review.css");

  assert.ok(articleCss.includes("grid-template-areas"), "article should use editorial split layout");
  assert.ok(blogCss.includes("border-left"), "blog posting should use notebook-style body rail");
  assert.ok(newsCss.includes("border-top"), "news article should use bulletin-style meta or footer rule");
  assert.ok(techCss.includes("font-family: var(--mdwrk-font-mono)"), "tech article should expose code-oriented typography");
  assert.ok(discussionCss.includes("background: rgba(255, 255, 255, 0.74)"), "discussion posting should style its body as a thread panel");
  assert.ok(claimCss.includes(".lander-semantic__callout"), "claim review should style the reviewed-claim callout");
  const rootCss = readCssFile("root.css");
  assert.ok(rootCss.includes(".lander-semantic__preview-section"), "root should style generated semantic preview sections");
  assert.ok(rootCss.includes(".lander-semantic__preview-item"), "root should style generated semantic preview items");
});

test("T1: education-family token files define distinct layout hooks beyond the shared shell baseline", () => {
  const courseCss = readCssFile("semantic-course.css");
  const courseInstanceCss = readCssFile("semantic-course-instance.css");
  const quizCss = readCssFile("semantic-quiz.css");
  const qaCss = readCssFile("semantic-qa-page.css");
  const questionCss = readCssFile("semantic-question.css");
  const answerCss = readCssFile("semantic-answer.css");
  const faqCss = readCssFile("semantic-faq-page.css");
  const howToCss = readCssFile("semantic-how-to.css");
  const resourceCss = readCssFile("semantic-learning-resource.css");
  const mathCss = readCssFile("semantic-math-solver.css");
  const solveCss = readCssFile("semantic-solve-math-action.css");

  assert.ok(courseCss.includes(".lander-semantic__module-list"), "course should style module cards");
  assert.ok(courseCss.includes(".lander-semantic__course-stat-grid"), "course should style course summary stats");
  assert.ok(courseCss.includes(".lander-semantic__outcome-chip"), "course should style completion chips");
  assert.ok(courseInstanceCss.includes(".lander-semantic__session-facts"), "course instance should style session fact cards");
  assert.ok(quizCss.includes(".lander-semantic__quiz-card"), "quiz should style quiz cards");
  assert.ok(quizCss.includes(".lander-semantic__assessment-brief"), "quiz should style assessment summary stats");
  assert.ok(quizCss.includes(".lander-semantic__quiz-option"), "quiz should style response options");
  assert.ok(qaCss.includes(".lander-semantic__prompt-panel"), "qa page should style prompt framing");
  assert.ok(qaCss.includes(".lander-semantic__suggested-answer-card"), "qa page should style suggested answer cards");
  assert.ok(questionCss.includes(".lander-semantic__prompt-panel"), "question should style prompt framing");
  assert.ok(answerCss.includes(".lander-semantic__answer-kicker"), "answer should style its response kicker");
  assert.ok(faqCss.includes(".lander-semantic__faq-kicker"), "faq page should style faq question kickers");
  assert.ok(howToCss.includes(".lander-semantic__how-to-overview"), "how-to should style execution summary stats");
  assert.ok(resourceCss.includes(".lander-semantic__resource-rail"), "learning resource should style resource fact rails");
  assert.ok(mathCss.includes(".lander-semantic__solver-brief"), "math solver should style solver summary stats");
  assert.ok(solveCss.includes(".lander-semantic__solve-math-row"), "solve math action should style summary rows");
});

test("T1: commerce-family token files define distinct layout hooks beyond the shared shell baseline", () => {
  const productCss = readCssFile("semantic-product.css");
  const groupCss = readCssFile("semantic-product-group.css");
  const reviewCss = readCssFile("semantic-review.css");
  const ratingCss = readCssFile("semantic-aggregate-rating.css");
  const shippingCss = readCssFile("semantic-offer-shipping-details.css");
  const returnCss = readCssFile("semantic-merchant-return-policy.css");
  const distributionCss = readCssFile("semantic-monetary-amount-distribution.css");
  const employerCss = readCssFile("semantic-employer-aggregate-rating.css");

  assert.ok(productCss.includes(".lander-semantic__price-band"), "product should style the price band");
  assert.ok(productCss.includes(".lander-semantic__product-offer"), "product should style offer summaries");
  assert.ok(productCss.includes(".lander-semantic__product-facts"), "product should style product fact lists");
  assert.ok(groupCss.includes(".lander-semantic__variant-list"), "product group should style variant cards");
  assert.ok(reviewCss.includes(".lander-semantic__review-quote"), "review should style quoted review copy");
  assert.ok(ratingCss.includes(".lander-semantic__rating-score-value"), "aggregate rating should style the score readout");
  assert.ok(shippingCss.includes(".lander-semantic__policy-facts"), "offer shipping details should style policy facts");
  assert.ok(returnCss.includes(".lander-semantic__policy-facts"), "merchant return policy should style policy facts");
  assert.ok(distributionCss.includes(".lander-semantic__distribution-grid"), "monetary distribution should style stat cards");
  assert.ok(employerCss.includes(".lander-semantic__rating-score-value"), "employer aggregate rating should style the score readout");
});

test("T1: media-family token files define distinct layout hooks beyond the shared shell baseline", () => {
  const videoCss = readCssFile("semantic-video-object.css");
  const clipCss = readCssFile("semantic-clip.css");
  const broadcastCss = readCssFile("semantic-broadcast-event.css");
  const imageCss = readCssFile("semantic-image-object.css");
  const movieCss = readCssFile("semantic-movie.css");

  assert.ok(videoCss.includes(".lander-semantic__media-stat"), "video object should style runtime stats");
  assert.ok(clipCss.includes(".lander-semantic__timeline-band"), "clip should style timeline pills");
  assert.ok(broadcastCss.includes(".lander-semantic__live-badge"), "broadcast event should style live badges");
  assert.ok(imageCss.includes(".lander-semantic__figure-caption"), "image object should style captions");
  assert.ok(movieCss.includes(".lander-semantic__cast-list"), "movie should style cast chips");
});

test("T1: identity-family token files define distinct layout hooks beyond the shared shell baseline", () => {
  const profileCss = readCssFile("semantic-profile-page.css");
  const organizationCss = readCssFile("semantic-organization.css");
  const businessCss = readCssFile("semantic-local-business.css");
  const memberCss = readCssFile("semantic-member-program.css");
  const pageCss = readCssFile("semantic-web-page.css");
  const siteCss = readCssFile("semantic-web-site.css");
  const breadcrumbCss = readCssFile("semantic-breadcrumb-list.css");
  const speakableCss = readCssFile("semantic-speakable-specification.css");

  assert.ok(profileCss.includes(".lander-semantic__profile-summary"), "profile page should style the profile summary block");
  assert.ok(organizationCss.includes(".lander-semantic__network-chip"), "organization should style network chips");
  assert.ok(businessCss.includes(".lander-semantic__hours-card"), "local business should style the hours card");
  assert.ok(memberCss.includes(".lander-semantic__member-provider"), "member program should style the provider band");
  assert.ok(pageCss.includes(".lander-semantic__page-facts"), "web page should style fact cards");
  assert.ok(siteCss.includes(".lander-semantic__publisher-band"), "web site should style the publisher band");
  assert.ok(breadcrumbCss.includes(".lander-semantic__breadcrumb-trail"), "breadcrumb list should style the breadcrumb trail");
  assert.ok(speakableCss.includes(".lander-semantic__selector-grid"), "speakable specification should style selector blocks");
});

test("T1: catalog-family token files define distinct layout hooks beyond the shared shell baseline", () => {
  const datasetCss = readCssFile("semantic-dataset.css");
  const itemListCss = readCssFile("semantic-item-list.css");
  const bookCss = readCssFile("semantic-book.css");
  const recipeCss = readCssFile("semantic-recipe.css");
  const softwareCss = readCssFile("semantic-software-application.css");
  const webAppCss = readCssFile("semantic-web-application.css");
  const sourceCss = readCssFile("semantic-software-source-code.css");
  const rentalCss = readCssFile("semantic-vacation-rental.css");
  const vehicleCss = readCssFile("semantic-vehicle.css");
  const jobCss = readCssFile("semantic-job-posting.css");
  const readCss = readCssFile("semantic-read-action.css");
  const eventCss = readCssFile("semantic-event.css");

  assert.ok(datasetCss.includes(".lander-semantic__keyword-cloud"), "dataset should style keyword chips");
  assert.ok(itemListCss.includes(".lander-semantic__item-card"), "item list should style ranked cards");
  assert.ok(bookCss.includes(".lander-semantic__book-spine"), "book should style the book spine block");
  assert.ok(recipeCss.includes(".lander-semantic__recipe-step"), "recipe should style recipe steps");
  assert.ok(softwareCss.includes(".lander-semantic__app-spec-grid"), "software application should style spec cards");
  assert.ok(webAppCss.includes(".lander-semantic__app-spec-grid"), "web application should style spec cards");
  assert.ok(sourceCss.includes(".lander-semantic__language-chip"), "software source code should style language chips");
  assert.ok(rentalCss.includes(".lander-semantic__amenity-list"), "vacation rental should style amenity cards");
  assert.ok(vehicleCss.includes(".lander-semantic__vehicle-dashboard"), "vehicle should style the stat dashboard");
  assert.ok(jobCss.includes(".lander-semantic__salary-band"), "job posting should style the salary band");
  assert.ok(readCss.includes(".lander-semantic__target-preview"), "read action should style the target preview");
  assert.ok(eventCss.includes(".lander-semantic__event-badge"), "event should style status badges");
});
