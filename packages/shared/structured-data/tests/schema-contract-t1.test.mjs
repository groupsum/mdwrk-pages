import assert from "node:assert/strict";
import path from "node:path";
import test from "node:test";
import { pathToFileURL } from "node:url";
import { fileURLToPath } from "node:url";

import {
  articleNode,
  breadcrumbListSchema,
  courseNode,
  howToNode,
  mathSolverNode,
  productNode,
  qaPageSchema,
  quizNode,
  reviewNode,
  solveMathActionNode,
  learningResourceNode,
  videoObjectNode,
} from "../dist/index.js";

const here = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(here, "..", "..", "..", "..");
const contractDistEntry = pathToFileURL(
  path.join(repoRoot, "packages", "lander", "lander-content-contract", "dist", "index.js"),
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
});
