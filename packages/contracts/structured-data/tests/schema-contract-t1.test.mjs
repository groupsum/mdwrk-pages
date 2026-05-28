import assert from "node:assert/strict";
import path from "node:path";
import test from "node:test";
import { pathToFileURL } from "node:url";
import { fileURLToPath } from "node:url";

import {
  aggregateRatingNode,
  articleNode,
  bookNode,
  breadcrumbListSchema,
  courseNode,
  courseInstanceNode,
  datasetNode,
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
  path.join(repoRoot, "packages", "contracts", "lander-content-contract", "dist", "index.js"),
).href;

test("T1: representative structured-data builder payloads satisfy published JSON Schema contracts", async () => {
  const { validateStructuredDataByType } = await import(contractDistEntry);

  const article = articleNode({
    name: "Article",
    url: "https://mdwrk.test/article",
    headline: "Article headline",
  });
  assert.deepEqual(validateStructuredDataByType("Article", {
    name: article.name,
    url: article.url,
    headline: article.headline,
  }), []);

  const breadcrumb = breadcrumbListSchema({
    items: [{ label: "Home", href: "https://mdwrk.test/" }],
  });
  assert.deepEqual(validateStructuredDataByType("BreadcrumbList", {
    items: breadcrumb.itemListElement.map((entry) => ({ label: entry.name, href: entry.item })),
  }), []);

  const course = courseNode({
    name: "Course",
    url: "https://mdwrk.test/course",
    provider: "MdWrk",
    coursePrerequisites: ["TypeScript"],
    hasCourseInstance: [{ "@type": "CourseInstance", name: "May cohort" }],
  });
  assert.deepEqual(validateStructuredDataByType("Course", {
    name: course.name,
    url: course.url,
    provider: "MdWrk",
    coursePrerequisites: ["TypeScript"],
    hasCourseInstance: [{ "@type": "CourseInstance", name: "May cohort" }],
  }), []);

  const qaPage = qaPageSchema({
    question: "Q?",
    acceptedAnswer: { text: "A." },
    suggestedAnswer: [{ text: "B." }],
    answerCount: 2,
    url: "https://mdwrk.test/qa",
  });
  const qaQuestion = qaPage.mainEntity;
  assert.deepEqual(validateStructuredDataByType("QAPage", {
    question: qaQuestion.name,
    acceptedAnswer: { text: qaQuestion.acceptedAnswer.text },
    suggestedAnswer: qaQuestion.suggestedAnswer.map((entry) => ({ text: entry.text })),
    answerCount: qaQuestion.answerCount,
    url: qaPage.url,
  }), []);

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
  assert.deepEqual(validateStructuredDataByType("Quiz", {
    name: quiz.name,
    hasPart: quiz.hasPart.map((question) => ({
      name: question.name,
      acceptedAnswer: { text: question.acceptedAnswer.text },
      suggestedAnswer: question.suggestedAnswer.map((entry) => ({ text: entry.text })),
      answerCount: question.answerCount,
      eduQuestionType: question.eduQuestionType,
    })),
  }), []);

  const howTo = howToNode({
    name: "How To",
    url: "https://mdwrk.test/how-to",
    steps: [{ name: "Step 1", text: "Do it." }],
  });
  assert.deepEqual(validateStructuredDataByType("HowTo", {
    name: howTo.name,
    url: howTo.url,
    steps: howTo.step.map((step) => ({
      name: step.name,
      text: step.text,
      ...(step.url ? { url: step.url } : {}),
    })),
  }), []);

  const video = videoObjectNode({
    name: "Video",
    url: "https://mdwrk.test/video",
    thumbnailUrl: "https://mdwrk.test/video.png",
    uploadDate: "2026-05-27",
    clip: [{ name: "Key moment", startOffset: 10, endOffset: 20 }],
    publication: [{ name: "Live stream", startDate: "2026-05-27T10:00:00Z", isLiveBroadcast: true }],
  });
  assert.deepEqual(validateStructuredDataByType("VideoObject", {
    name: video.name,
    url: video.url,
    thumbnailUrl: video.thumbnailUrl,
    uploadDate: video.uploadDate,
    clip: video.hasPart.map((entry) => ({
      name: entry.name,
      startOffset: entry.startOffset,
      endOffset: entry.endOffset,
    })),
    publication: [{
      name: video.publication[0].name,
      startDate: video.publication[0].startDate,
      isLiveBroadcast: video.publication[0].isLiveBroadcast,
    }],
  }), []);

  const review = reviewNode({
    name: "Review",
    itemReviewed: "https://mdwrk.test/product",
    reviewBody: "Solid.",
  });
  assert.deepEqual(validateStructuredDataByType("Review", {
    name: review.name,
    itemReviewed: review.itemReviewed,
    reviewBody: review.reviewBody,
  }), []);

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
  assert.deepEqual(validateStructuredDataByType("MathSolver", {
    name: mathSolver.name,
    url: mathSolver.url,
    potentialAction: mathSolver.potentialAction,
    learningResourceType: mathSolver.learningResourceType,
    subjectOf: mathSolver.subjectOf,
  }), []);

  const product = productNode({
    name: "Product",
    url: "https://mdwrk.test/product",
    brand: "MdWrk",
    offers: { "@type": "Offer", price: "10.00", priceCurrency: "USD" },
  });
  assert.deepEqual(validateStructuredDataByType("Product", {
    name: product.name,
    url: product.url,
    brand: "MdWrk",
    offers: product.offers,
  }), []);

  const aggregateRating = aggregateRatingNode({
    ratingValue: "4.8",
    reviewCount: 10,
  });
  assert.deepEqual(validateStructuredDataByType("AggregateRating", {
    ratingValue: aggregateRating.ratingValue,
    reviewCount: aggregateRating.reviewCount,
  }), []);

  const book = bookNode({
    name: "Book",
    author: "MdWrk",
    isbn: "9780000000000",
    readAction: "https://mdwrk.test/read",
  });
  assert.deepEqual(validateStructuredDataByType("Book", {
    name: book.name,
    author: book.author,
    isbn: book.isbn,
    readAction: book.potentialAction,
  }), []);

  const courseInstance = courseInstanceNode({
    name: "May cohort",
    courseMode: "online",
    instructor: "MdWrk",
  });
  assert.deepEqual(validateStructuredDataByType("CourseInstance", {
    name: courseInstance.name,
    courseMode: courseInstance.courseMode,
    instructor: courseInstance.instructor,
  }), []);

  const dataset = datasetNode({
    name: "Dataset",
    creator: "MdWrk",
    keywords: ["schema", "json-ld"],
  });
  assert.deepEqual(validateStructuredDataByType("Dataset", {
    name: dataset.name,
    creator: dataset.creator,
    keywords: dataset.keywords,
  }), []);

  const faq = faqPageSchema({
    items: [{ question: "What is this?", answer: "A FAQ page." }],
  });
  assert.deepEqual(validateStructuredDataByType("FAQPage", {
    items: faq.mainEntity.map((entry) => ({
      question: entry.name,
      answer: entry.acceptedAnswer.text,
    })),
  }), []);

  const memberProgram = loyaltyProgramNode({
    name: "Member program",
    provider: "MdWrk",
  });
  assert.deepEqual(validateStructuredDataByType("MemberProgram", {
    name: memberProgram.name,
    provider: memberProgram.provider,
  }), []);

  const organization = organizationNode({
    name: "MdWrk",
    url: "https://mdwrk.test",
    sameAs: ["https://github.com/groupsum/mdwrk-pages"],
  });
  assert.deepEqual(validateStructuredDataByType("Organization", {
    name: organization.name,
    url: organization.url,
    sameAs: organization.sameAs,
  }), []);

  const readAction = readActionNode({
    target: "https://mdwrk.test/read",
  });
  assert.deepEqual(validateStructuredDataByType("ReadAction", {
    target: readAction.target,
  }), []);

  const sourceCode = softwareSourceCodeNode({
    name: "Repo",
    codeRepository: "https://github.com/groupsum/mdwrk-pages",
    programmingLanguage: ["TypeScript"],
  });
  assert.deepEqual(validateStructuredDataByType("SoftwareSourceCode", {
    name: sourceCode.name,
    codeRepository: sourceCode.codeRepository,
    programmingLanguage: sourceCode.programmingLanguage,
  }), []);

  const speakable = speakableSpecificationNode({
    cssSelector: [".answer-summary"],
  });
  assert.deepEqual(validateStructuredDataByType("SpeakableSpecification", {
    cssSelector: speakable.cssSelector,
  }), []);

  const techArticle = techArticleNode({
    name: "Tech article",
    headline: "Tech headline",
    author: "MdWrk",
    url: "https://mdwrk.test/tech",
  });
  assert.deepEqual(validateStructuredDataByType("TechArticle", {
    name: techArticle.name,
    headline: techArticle.headline,
    author: techArticle.author,
    url: techArticle.url,
  }), []);

  const webApplication = webApplicationNode({
    name: "Web app",
    applicationCategory: "DeveloperApplication",
    offers: { "@type": "Offer", price: "10.00", priceCurrency: "USD" },
  });
  assert.deepEqual(validateStructuredDataByType("WebApplication", {
    name: webApplication.name,
    applicationCategory: webApplication.applicationCategory,
    offers: webApplication.offers,
  }), []);

  const webPage = webPageSchema({
    name: "Page",
    url: "https://mdwrk.test/page",
    breadcrumb: "https://mdwrk.test/",
    isPartOf: "https://mdwrk.test",
  });
  assert.deepEqual(validateStructuredDataByType("WebPage", {
    name: webPage.name,
    url: webPage.url,
    breadcrumb: webPage.breadcrumb,
    isPartOf: webPage.isPartOf,
  }), []);

  const webSite = webSiteSchema({
    name: "Site",
    url: "https://mdwrk.test",
    publisher: "MdWrk",
  });
  assert.deepEqual(validateStructuredDataByType("WebSite", {
    name: webSite.name,
    url: webSite.url,
    publisher: webSite.publisher,
  }), []);
});
