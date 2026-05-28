export * from "./version.js";

export const MDWRK_PAGES_UI_ROOT_TOKEN_NAMES = [
  "mdwrk-font-ui",
  "mdwrk-font-head",
  "mdwrk-font-mono",
  "mdwrk-radius-sm",
  "mdwrk-radius-md",
  "mdwrk-radius-lg",
  "mdwrk-space-2",
  "mdwrk-space-3",
  "mdwrk-space-4",
  "mdwrk-space-6",
  "mdwrk-shadow-soft",
  "mdwrk-shadow-strong",
] as const;

export type MdwrkPagesUiRootTokenName = typeof MDWRK_PAGES_UI_ROOT_TOKEN_NAMES[number];

export const MDWRK_PAGES_UI_SEMANTIC_ARTICLE_TOKEN_NAMES = [
  "mdp-semantic-article-padding",
  "mdp-semantic-article-gap",
  "mdp-semantic-article-radius",
  "mdp-semantic-article-surface",
  "mdp-semantic-article-border",
  "mdp-semantic-article-shadow",
  "mdp-semantic-article-title-size",
  "mdp-semantic-article-image-radius",
  "mdp-semantic-article-meta-gap",
] as const;

export type MdwrkPagesUiSemanticArticleTokenName =
  typeof MDWRK_PAGES_UI_SEMANTIC_ARTICLE_TOKEN_NAMES[number];

export const MDWRK_PAGES_UI_SEMANTIC_PRODUCT_TOKEN_NAMES = [
  "mdp-semantic-product-padding",
  "mdp-semantic-product-gap",
  "mdp-semantic-product-radius",
  "mdp-semantic-product-surface",
  "mdp-semantic-product-border",
  "mdp-semantic-product-shadow",
  "mdp-semantic-product-price-size",
  "mdp-semantic-product-image-radius",
  "mdp-semantic-product-cta-min-height",
] as const;

export type MdwrkPagesUiSemanticProductTokenName =
  typeof MDWRK_PAGES_UI_SEMANTIC_PRODUCT_TOKEN_NAMES[number];

export const MDWRK_PAGES_UI_SEMANTIC_COURSE_TOKEN_NAMES = [
  "mdp-semantic-course-padding",
  "mdp-semantic-course-gap",
  "mdp-semantic-course-radius",
  "mdp-semantic-course-surface",
  "mdp-semantic-course-border",
  "mdp-semantic-course-shadow",
  "mdp-semantic-course-meta-gap",
  "mdp-semantic-course-module-gap",
  "mdp-semantic-course-outcome-gap",
] as const;

export type MdwrkPagesUiSemanticCourseTokenName =
  typeof MDWRK_PAGES_UI_SEMANTIC_COURSE_TOKEN_NAMES[number];

export const MDWRK_PAGES_UI_SEMANTIC_QUIZ_TOKEN_NAMES = [
  "mdp-semantic-quiz-padding",
  "mdp-semantic-quiz-gap",
  "mdp-semantic-quiz-radius",
  "mdp-semantic-quiz-surface",
  "mdp-semantic-quiz-border",
  "mdp-semantic-quiz-shadow",
  "mdp-semantic-quiz-card-gap",
  "mdp-semantic-quiz-answer-radius",
  "mdp-semantic-quiz-answer-surface",
] as const;

export type MdwrkPagesUiSemanticQuizTokenName =
  typeof MDWRK_PAGES_UI_SEMANTIC_QUIZ_TOKEN_NAMES[number];
