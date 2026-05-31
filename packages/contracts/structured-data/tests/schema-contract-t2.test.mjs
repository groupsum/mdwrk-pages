import assert from "node:assert/strict";
import path from "node:path";
import test from "node:test";
import { pathToFileURL } from "node:url";
import { fileURLToPath } from "node:url";

import {
  aggregateRatingNode,
  articleNode,
  datasetNode,
  faqPageSchema,
  mathSolverNode,
  organizationNode,
  productNode,
  quizNode,
  readActionNode,
  solveMathActionNode,
  learningResourceNode,
  softwareSourceCodeNode,
  speakableSpecificationNode,
  webSiteSchema,
  videoObjectNode,
} from "../dist/index.js";

const here = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(here, "..", "..", "..", "..");
const contractDistEntry = pathToFileURL(
  path.join(repoRoot, "packages", "contracts", "lander-content-contract", "dist", "index.js"),
).href;

test("T2: representative structured-data builders do not mutate frozen inputs and stay contract-stable", async () => {
  const { validateStructuredDataByType } = await import(contractDistEntry);

  const articleInput = Object.freeze({
    name: "Article",
    url: "https://mdwrk.test/article",
    headline: "Article headline",
  });
  const quizInput = Object.freeze({
    name: "Quiz",
    hasPart: Object.freeze([
      Object.freeze({
        name: "Q?",
        acceptedAnswer: Object.freeze({ text: "A." }),
      }),
    ]),
  });
  const productInput = Object.freeze({
    name: "Product",
    offers: Object.freeze({ "@type": "Offer", price: "10.00", priceCurrency: "USD" }),
  });
  const videoInput = Object.freeze({
    name: "Video",
    thumbnailUrl: "https://mdwrk.test/video.png",
    uploadDate: "2026-05-27",
  });
  const mathInput = Object.freeze({
    name: "Math Solver",
    potentialAction: solveMathActionNode({
      target: "https://mdwrk.test/math?q={mathExpression}",
      mathExpressionInput: "required name=mathExpression",
    }),
    learningResource: learningResourceNode({
      name: "Math Solver learning resource",
      learningResourceType: "Math Solver",
      teaches: ["Algebra"],
    }),
  });
  const datasetInput = Object.freeze({
    name: "Dataset",
    creator: "MdWrk",
    keywords: Object.freeze(["schema", "json-ld"]),
  });
  const faqInput = Object.freeze({
    items: Object.freeze([
      Object.freeze({ question: "What is this?", answer: "A FAQ page." }),
    ]),
  });
  const organizationInput = Object.freeze({
    name: "MdWrk",
    url: "https://mdwrk.test",
    sameAs: Object.freeze(["https://github.com/groupsum/mdwrk-pages"]),
  });

  const before = JSON.stringify({
    articleInput,
    quizInput,
    productInput,
    videoInput,
    mathInput,
    datasetInput,
    faqInput,
    organizationInput,
  });

  const article = articleNode(articleInput);
  const quiz = quizNode(quizInput);
  const product = productNode(productInput);
  const video = videoObjectNode(videoInput);
  const math = mathSolverNode(mathInput);
  const dataset = datasetNode(datasetInput);
  const faq = faqPageSchema(faqInput);
  const organization = organizationNode(organizationInput);
  const aggregateRating = aggregateRatingNode(Object.freeze({ ratingValue: "4.8", reviewCount: 10 }));
  const readAction = readActionNode("https://mdwrk.test/read");
  const sourceCode = softwareSourceCodeNode(
    Object.freeze({
      name: "Repo",
      codeRepository: "https://github.com/groupsum/mdwrk-pages",
      programmingLanguage: Object.freeze(["TypeScript"]),
    }),
  );
  const speakable = speakableSpecificationNode(Object.freeze({ cssSelector: Object.freeze([".answer-summary"]) }));
  const webSite = webSiteSchema(Object.freeze({ name: "Site", url: "https://mdwrk.test", publisher: "MdWrk" }));

  assert.equal(
    JSON.stringify({
      articleInput,
      quizInput,
      productInput,
      videoInput,
      mathInput,
      datasetInput,
      faqInput,
      organizationInput,
    }),
    before,
  );

  const first = [
    validateStructuredDataByType("Article", article),
    validateStructuredDataByType("Quiz", quiz),
    validateStructuredDataByType("Product", product),
    validateStructuredDataByType("VideoObject", video),
    validateStructuredDataByType("MathSolver", math),
    validateStructuredDataByType("Dataset", dataset),
    validateStructuredDataByType("FAQPage", faq),
    validateStructuredDataByType("Organization", organization),
    validateStructuredDataByType("AggregateRating", aggregateRating),
    validateStructuredDataByType("ReadAction", readAction),
    validateStructuredDataByType("SoftwareSourceCode", sourceCode),
    validateStructuredDataByType("SpeakableSpecification", speakable),
    validateStructuredDataByType("WebSite", webSite),
  ];
  const second = [
    validateStructuredDataByType("Article", article),
    validateStructuredDataByType("Quiz", quiz),
    validateStructuredDataByType("Product", product),
    validateStructuredDataByType("VideoObject", video),
    validateStructuredDataByType("MathSolver", math),
    validateStructuredDataByType("Dataset", dataset),
    validateStructuredDataByType("FAQPage", faq),
    validateStructuredDataByType("Organization", organization),
    validateStructuredDataByType("AggregateRating", aggregateRating),
    validateStructuredDataByType("ReadAction", readAction),
    validateStructuredDataByType("SoftwareSourceCode", sourceCode),
    validateStructuredDataByType("SpeakableSpecification", speakable),
    validateStructuredDataByType("WebSite", webSite),
  ];

  assert.deepEqual(first, second);
  assert.ok(first.every((issues) => issues.length === 0));
});
