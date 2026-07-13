import assert from "node:assert/strict";
import path from "node:path";
import test from "node:test";
import { pathToFileURL } from "node:url";
import { fileURLToPath } from "node:url";

import {
  actionNode,
  administrativeAreaNode,
  aggregateOfferNode,
  aggregateRatingNode,
  alignmentObjectNode,
  articleNode,
  audienceNode,
  audioObjectNode,
  bookNode,
  breadcrumbListSchema,
  courseNode,
  courseInstanceNode,
  datasetNode,
  estimatedSalaryNode,
  faqPageSchema,
  howToNode,
  loyaltyProgramNode,
  organizationNode,
  mathSolverNode,
  productNode,
  qaPageSchema,
  quizNode,
  readActionNode,
  reviewNode,
  searchResultsPageNode,
  solveMathActionNode,
  softwareSourceCodeNode,
  speakableSpecificationNode,
  techArticleNode,
  learningResourceNode,
  videoObjectNode,
  webApplicationNode,
  webPageSchema,
  webSiteSchema,
} from "../dist/index.js";

const here = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(here, "..", "..", "..", "..");
const contractDistEntry = pathToFileURL(
  path.join(repoRoot, "packages", "00-contracts", "lander-content-contract", "dist", "index.js"),
).href;

test("T1: representative structured-data builder payloads satisfy published JSON Schema contracts", async () => {
  const { validateStructuredDataByType } = await import(contractDistEntry);

  const article = articleNode({
    name: "Article",
    url: "https://mdwrk.test/article",
    headline: "Article headline",
  });
  assert.deepEqual(validateStructuredDataByType("Article", article), []);

  const action = actionNode({
    name: "Read docs",
    target: "https://mdwrk.test/docs",
  });
  assert.deepEqual(validateStructuredDataByType("Action", action), []);

  const administrativeArea = administrativeAreaNode({
    name: "Illinois",
    containedInPlace: { "@type": "Place", name: "United States" },
  });
  assert.deepEqual(validateStructuredDataByType("AdministrativeArea", administrativeArea), []);

  const breadcrumb = breadcrumbListSchema({
    items: [{ label: "Home", href: "https://mdwrk.test/" }],
  });
  assert.deepEqual(validateStructuredDataByType("BreadcrumbList", breadcrumb), []);

  const aggregateOffer = aggregateOfferNode({
    name: "Offer range",
    lowPrice: "10.00",
    highPrice: "30.00",
    offerCount: 3,
    offers: [{ "@type": "Offer", price: "10.00", priceCurrency: "USD" }],
  });
  assert.deepEqual(validateStructuredDataByType("AggregateOffer", aggregateOffer), []);

  const alignmentObject = alignmentObjectNode({
    name: "Curriculum alignment",
    alignmentType: "educationalSubject",
    targetName: "Prompt operations",
  });
  assert.deepEqual(validateStructuredDataByType("AlignmentObject", alignmentObject), []);

  const audience = audienceNode({
    name: "Operators",
    audienceType: "Prompt operators",
    geographicArea: { "@type": "AdministrativeArea", name: "Illinois" },
  });
  assert.deepEqual(validateStructuredDataByType("Audience", audience), []);

  const audioObject = audioObjectNode({
    name: "Release call",
    contentUrl: "https://mdwrk.test/audio.mp3",
    transcript: "Release transcript.",
  });
  assert.deepEqual(validateStructuredDataByType("AudioObject", audioObject), []);

  const course = courseNode({
    name: "Course",
    url: "https://mdwrk.test/course",
    provider: "MdWrk",
    coursePrerequisites: ["TypeScript"],
    hasCourseInstance: [{ "@type": "CourseInstance", name: "May cohort" }],
  });
  assert.deepEqual(validateStructuredDataByType("Course", course), []);

  const qaPage = qaPageSchema({
    question: "Q?",
    acceptedAnswer: { text: "A." },
    suggestedAnswer: [{ text: "B." }],
    answerCount: 2,
    url: "https://mdwrk.test/qa",
  });
  assert.deepEqual(validateStructuredDataByType("QAPage", qaPage), []);

  const quiz = quizNode({
    name: "Quiz",
    hasPart: [
      {
        name: "Q?",
        acceptedAnswer: { text: "A." },
        suggestedAnswer: [{ text: "B." }],
        answerCount: 2,
        eduQuestionType: "Flashcard",
      },
    ],
  });
  assert.deepEqual(validateStructuredDataByType("Quiz", quiz), []);

  const howTo = howToNode({
    name: "How To",
    url: "https://mdwrk.test/how-to",
    steps: [{ name: "Step 1", text: "Do it." }],
  });
  assert.deepEqual(validateStructuredDataByType("HowTo", howTo), []);

  const video = videoObjectNode({
    name: "Video",
    url: "https://mdwrk.test/video",
    thumbnailUrl: "https://mdwrk.test/video.png",
    uploadDate: "2026-05-27",
    clip: [{ name: "Key moment", startOffset: 10, endOffset: 20 }],
    publication: [{ name: "Live stream", startDate: "2026-05-27T10:00:00Z", isLiveBroadcast: true }],
  });
  assert.deepEqual(validateStructuredDataByType("VideoObject", video), []);

  const review = reviewNode({
    name: "Review",
    itemReviewed: { "@type": "Product", name: "Product" },
    reviewBody: "Solid.",
  });
  assert.deepEqual(validateStructuredDataByType("Review", review), []);

  const mathSolver = mathSolverNode({
    name: "Math Solver",
    url: "https://mdwrk.test/math",
    potentialAction: solveMathActionNode({
      target: "https://mdwrk.test/math?q={mathExpression}",
      mathExpressionInput: "required name=mathExpression",
      eduQuestionType: ["Algebra"],
    }),
    learningResource: learningResourceNode({
      name: "Math Solver learning resource",
      url: "https://mdwrk.test/math/resource",
      learningResourceType: "Math Solver",
      teaches: ["Algebra"],
    }),
  });
  assert.deepEqual(validateStructuredDataByType("MathSolver", mathSolver), []);

  const product = productNode({
    name: "Product",
    url: "https://mdwrk.test/product",
    brand: "MdWrk",
    offers: { "@type": "Offer", price: "10.00", priceCurrency: "USD" },
  });
  assert.deepEqual(validateStructuredDataByType("Product", product), []);

  const aggregateRating = aggregateRatingNode({
    ratingValue: "4.8",
    reviewCount: 10,
  });
  assert.deepEqual(validateStructuredDataByType("AggregateRating", aggregateRating), []);

  const book = bookNode({
    name: "Book",
    author: "MdWrk",
    isbn: "9780000000000",
    readAction: "https://mdwrk.test/read",
  });
  assert.deepEqual(validateStructuredDataByType("Book", book), []);

  const courseInstance = courseInstanceNode({
    name: "May cohort",
    courseMode: "online",
    instructor: "MdWrk",
  });
  assert.deepEqual(validateStructuredDataByType("CourseInstance", courseInstance), []);

  const dataset = datasetNode({
    name: "Dataset",
    creator: "MdWrk",
    keywords: ["schema", "json-ld"],
  });
  assert.deepEqual(validateStructuredDataByType("Dataset", dataset), []);

  const faq = faqPageSchema({
    items: [{ question: "What is this?", answer: "A FAQ page." }],
  });
  assert.deepEqual(validateStructuredDataByType("FAQPage", faq), []);

  const memberProgram = loyaltyProgramNode({
    name: "Member program",
    provider: "MdWrk",
  });
  assert.deepEqual(validateStructuredDataByType("MemberProgram", memberProgram), []);
  assert.equal("provider" in memberProgram, false);

  const organization = organizationNode({
    name: "MdWrk",
    url: "https://mdwrk.test",
    sameAs: ["https://github.com/groupsum/mdwrk-pages"],
  });
  assert.deepEqual(validateStructuredDataByType("Organization", organization), []);

  const readAction = readActionNode("https://mdwrk.test/read");
  assert.deepEqual(validateStructuredDataByType("ReadAction", readAction), []);

  const sourceCode = softwareSourceCodeNode({
    name: "Repo",
    codeRepository: "https://github.com/groupsum/mdwrk-pages",
    programmingLanguage: ["TypeScript"],
  });
  assert.deepEqual(validateStructuredDataByType("SoftwareSourceCode", sourceCode), []);

  const speakable = speakableSpecificationNode({
    cssSelector: [".answer-summary"],
  });
  assert.deepEqual(validateStructuredDataByType("SpeakableSpecification", speakable), []);

  const techArticle = techArticleNode({
    name: "Tech article",
    headline: "Tech headline",
    author: "MdWrk",
    url: "https://mdwrk.test/tech",
  });
  assert.deepEqual(validateStructuredDataByType("TechArticle", techArticle), []);

  const webApplication = webApplicationNode({
    name: "Web app",
    applicationCategory: "DeveloperApplication",
    offers: { "@type": "Offer", price: "10.00", priceCurrency: "USD" },
  });
  assert.deepEqual(validateStructuredDataByType("WebApplication", webApplication), []);

  const webPage = webPageSchema({
    name: "Page",
    url: "https://mdwrk.test/page",
    breadcrumb: "https://mdwrk.test/",
    isPartOf: "https://mdwrk.test",
  });
  assert.deepEqual(validateStructuredDataByType("WebPage", webPage), []);

  const webSite = webSiteSchema({
    name: "Site",
    url: "https://mdwrk.test",
    publisher: "MdWrk",
  });
  assert.deepEqual(validateStructuredDataByType("WebSite", webSite), []);
});

test("T1: builders preserve extra schema-valid properties beyond the curated input subset", async () => {
  const { validateStructuredDataByType } = await import(contractDistEntry);

  const article = articleNode({
    name: "Article",
    url: "https://mdwrk.test/article",
    headline: "Article headline",
    keywords: ["schema", "json-ld"],
    inLanguage: "en",
  });

  assert.deepEqual(article.keywords, ["schema", "json-ld"]);
  assert.equal(article.inLanguage, "en");
  assert.deepEqual(validateStructuredDataByType("Article", article), []);
});

test("T1: repo-local authored helper fields do not leak into emitted JSON-LD and schema-valid mappings do survive", async () => {
  const { validateStructuredDataByType } = await import(contractDistEntry);

  const searchResultsPage = searchResultsPageNode({
    name: "Search results",
    url: "https://mdwrk.test/search",
    query: "prompt delivery",
    significantLinks: ["https://mdwrk.test/search/result-1"],
  });
  assert.equal("query" in searchResultsPage, false);
  assert.deepEqual(validateStructuredDataByType("SearchResultsPage", searchResultsPage), []);

  const solveMathAction = solveMathActionNode({
    target: "https://mdwrk.test/math?q={mathExpression}",
    mathExpressionInput: "required name=mathExpression",
    eduQuestionType: ["Algebra"],
  });
  assert.equal("mathExpressionInput" in solveMathAction, false);
  assert.equal("mathExpression-input" in solveMathAction, false);
  assert.deepEqual(validateStructuredDataByType("SolveMathAction", solveMathAction), []);

  const monetaryAmountDistribution = estimatedSalaryNode({
    name: "Salary band",
    currency: "USD",
    minValue: 100000,
    maxValue: 140000,
    unitText: "YEAR",
  });
  const memberProgram = loyaltyProgramNode({
    name: "Member program",
    provider: "MdWrk",
  });
  assert.equal("provider" in memberProgram, false);
  assert.deepEqual(validateStructuredDataByType("MemberProgram", memberProgram), []);
  assert.equal("unitText" in monetaryAmountDistribution, false);
  assert.equal("duration" in monetaryAmountDistribution, false);
  assert.deepEqual(validateStructuredDataByType("MonetaryAmountDistribution", monetaryAmountDistribution), []);
});
