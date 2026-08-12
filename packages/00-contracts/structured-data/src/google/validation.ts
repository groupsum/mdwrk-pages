import type { JsonLd } from "../types.js";
import { GOOGLE_SEARCH_PROFILE_VERSION } from "./profile.js";
import type {
  GoogleEligibilityIssue,
  GoogleEligibilityResult,
  GoogleRichResultFeature,
} from "./types.js";

const isRecord = (value: unknown): value is JsonLd =>
  typeof value === "object" && value !== null && !Array.isArray(value);

const hasText = (value: unknown): value is string => typeof value === "string" && value.trim().length > 0;

const positiveNumber = (value: unknown): boolean => {
  const parsed = typeof value === "string" && value.trim() ? Number(value) : value;
  return typeof parsed === "number" && Number.isFinite(parsed) && parsed > 0;
};

const nonNegativeNumber = (value: unknown): boolean => {
  const parsed = typeof value === "string" && value.trim() ? Number(value) : value;
  return typeof parsed === "number" && Number.isFinite(parsed) && parsed >= 0;
};

const isIsoDateTime = (value: unknown): value is string =>
  hasText(value) && /^\d{4}-\d{2}-\d{2}T/.test(value) && !Number.isNaN(Date.parse(value));

const records = (value: unknown): JsonLd[] => {
  if (isRecord(value)) return [value];
  if (Array.isArray(value)) return value.filter(isRecord);
  return [];
};

const issue = (code: string, path: string, message: string): GoogleEligibilityIssue => ({
  code,
  message,
  path,
  severity: "error",
});

const firstRecord = (value: unknown): JsonLd | undefined => {
  if (isRecord(value)) return value;
  if (Array.isArray(value)) return value.find(isRecord);
  return undefined;
};

function validateOffer(value: unknown, path: string, issues: GoogleEligibilityIssue[]): void {
  const offer = firstRecord(value);
  if (!offer) {
    issues.push(issue("google.offer.required", path, "An Offer object is required."));
    return;
  }
  if (offer.price === undefined || offer.price === null || offer.price === "") {
    issues.push(issue("google.offer.price.required", `${path}.price`, "Offer price is required."));
  }
  if (offer.priceCurrency !== undefined && !hasText(offer.priceCurrency)) {
    issues.push(issue("google.offer.price_currency.invalid", `${path}.priceCurrency`, "Price currency must be non-empty when provided."));
  }
}

function validateAggregateRating(value: unknown, path: string, issues: GoogleEligibilityIssue[]): void {
  if (value === undefined) return;
  const rating = firstRecord(value);
  if (!rating) {
    issues.push(issue("google.aggregate_rating.invalid", path, "Aggregate rating must be an object."));
    return;
  }
  if (!positiveNumber(rating.ratingValue)) {
    issues.push(issue("google.aggregate_rating.value.invalid", `${path}.ratingValue`, "Rating value must be positive."));
  }
  if (!positiveNumber(rating.ratingCount) && !positiveNumber(rating.reviewCount)) {
    issues.push(
      issue(
        "google.aggregate_rating.count.required",
        `${path}.ratingCount`,
        "A positive ratingCount or reviewCount is required.",
      ),
    );
  }
}

function validateReview(value: unknown, path: string, issues: GoogleEligibilityIssue[]): void {
  if (value === undefined) return;
  const review = firstRecord(value);
  if (!review) {
    issues.push(issue("google.review.invalid", path, "Review must be an object."));
    return;
  }
  if (review.author === undefined) {
    issues.push(issue("google.review.author.required", `${path}.author`, "Review author is required."));
  }
  const reviewRating = firstRecord(review.reviewRating);
  if (!reviewRating || !positiveNumber(reviewRating.ratingValue)) {
    issues.push(
      issue("google.review.rating.required", `${path}.reviewRating.ratingValue`, "A positive review rating is required."),
    );
  }
}

function validateSoftwareApplication(node: JsonLd, issues: GoogleEligibilityIssue[]): void {
  if (!hasText(node.name)) issues.push(issue("google.name.required", "name", "Software application name is required."));
  validateOffer(node.offers, "offers", issues);
  if (node.aggregateRating === undefined && node.review === undefined) {
    issues.push(
      issue(
        "google.reputation.required",
        "aggregateRating|review",
        "One of aggregateRating or review is required.",
      ),
    );
  }
  validateAggregateRating(node.aggregateRating, "aggregateRating", issues);
  validateReview(node.review, "review", issues);
}

function validateProductSnippet(node: JsonLd, issues: GoogleEligibilityIssue[]): void {
  if (!hasText(node.name)) issues.push(issue("google.name.required", "name", "Product name is required."));
  if (node.offers === undefined && node.aggregateRating === undefined && node.review === undefined) {
    issues.push(
      issue(
        "google.product.qualifier.required",
        "offers|aggregateRating|review",
        "One of offers, aggregateRating, or review is required.",
      ),
    );
  }
  if (node.offers !== undefined) validateOffer(node.offers, "offers", issues);
  validateAggregateRating(node.aggregateRating, "aggregateRating", issues);
  validateReview(node.review, "review", issues);
}

function validateJobPosting(node: JsonLd, issues: GoogleEligibilityIssue[]): void {
  for (const [path, label] of [
    ["title", "Job title"],
    ["description", "Job description"],
    ["datePosted", "Date posted"],
  ] as const) {
    if (!hasText(node[path])) issues.push(issue(`google.job.${path}.required`, path, `${label} is required.`));
  }
  const organization = firstRecord(node.hiringOrganization);
  if (!organization || !hasText(organization.name)) {
    issues.push(
      issue("google.job.hiring_organization.required", "hiringOrganization.name", "Hiring organization name is required."),
    );
  }
  const remote = node.jobLocationType === "TELECOMMUTE";
  if (remote) {
    if (node.applicantLocationRequirements === undefined) {
      issues.push(
        issue(
          "google.job.applicant_location.required",
          "applicantLocationRequirements",
          "Remote jobs require applicant location requirements.",
        ),
      );
    }
    return;
  }
  const location = firstRecord(node.jobLocation);
  const address = firstRecord(location?.address);
  if (!address) {
    issues.push(issue("google.job.address.required", "jobLocation.address", "Physical jobs require a postal address."));
    return;
  }
  if (address.addressCountry === undefined) {
    issues.push(
      issue("google.job.address_country.required", "jobLocation.address.addressCountry", "Address country is required."),
    );
  }
}

const GOOGLE_FORUM_INTERACTION_TYPES = new Set([
  "https://schema.org/LikeAction",
  "https://schema.org/DislikeAction",
  "https://schema.org/ViewAction",
  "https://schema.org/CommentAction",
  "https://schema.org/ReplyAction",
  "https://schema.org/ShareAction",
  "https://schema.org/WriteAction",
]);

function validateForumAuthor(value: unknown, path: string, issues: GoogleEligibilityIssue[]): void {
  const author = firstRecord(value);
  if (!author) {
    issues.push(issue("google.forum.author.required", path, "A Person or Organization author is required."));
    return;
  }
  if (author["@type"] !== "Person" && author["@type"] !== "Organization") {
    issues.push(issue("google.forum.author.type.invalid", `${path}.@type`, "Author type must be Person or Organization."));
  }
  if (!hasText(author.name)) {
    issues.push(issue("google.forum.author.name.required", `${path}.name`, "Author name is required."));
  }
  validateForumInteractions(author.agentInteractionStatistic, `${path}.agentInteractionStatistic`, issues);
}

function validateForumInteractions(value: unknown, path: string, issues: GoogleEligibilityIssue[]): void {
  if (value === undefined) return;
  const counters = records(value);
  if (counters.length === 0 || (Array.isArray(value) && counters.length !== value.length)) {
    issues.push(issue("google.forum.interaction.invalid", path, "Interaction statistics must be objects."));
    return;
  }
  counters.forEach((counter, index) => {
    const counterPath = Array.isArray(value) ? `${path}[${index}]` : path;
    if (!hasText(counter.interactionType) || !GOOGLE_FORUM_INTERACTION_TYPES.has(counter.interactionType)) {
      issues.push(issue("google.forum.interaction.type.invalid", `${counterPath}.interactionType`, "Interaction type is unsupported."));
    }
    if (!nonNegativeNumber(counter.userInteractionCount)) {
      issues.push(issue("google.forum.interaction.count.invalid", `${counterPath}.userInteractionCount`, "Interaction count must be nonnegative."));
    }
  });
}

function validateForumComment(
  comment: JsonLd,
  path: string,
  issues: GoogleEligibilityIssue[],
  seen: Set<JsonLd>,
): number {
  if (seen.has(comment)) {
    issues.push(issue("google.forum.comment.cycle", path, "Comment trees must not contain cycles."));
    return 0;
  }
  seen.add(comment);
  if (comment["@type"] !== "Comment") {
    issues.push(issue("google.forum.comment.type.invalid", `${path}.@type`, "Nested responses must use Comment."));
  }
  if (!hasText(comment.text)) {
    issues.push(issue("google.forum.comment.text.required", `${path}.text`, "Comment text is required."));
  }
  validateForumAuthor(comment.author, `${path}.author`, issues);
  if (!isIsoDateTime(comment.datePublished)) {
    issues.push(issue("google.forum.comment.date_published.required", `${path}.datePublished`, "Comment datePublished must be an ISO 8601 DateTime."));
  }
  validateForumInteractions(comment.interactionStatistic, `${path}.interactionStatistic`, issues);

  const children = records(comment.comment);
  if (comment.comment !== undefined && (children.length === 0 || (Array.isArray(comment.comment) && children.length !== comment.comment.length))) {
    issues.push(issue("google.forum.comment.children.invalid", `${path}.comment`, "Nested comments must be Comment objects."));
  }
  let count = 1;
  children.forEach((child, index) => {
    count += validateForumComment(child, `${path}.comment[${index}]`, issues, seen);
  });
  seen.delete(comment);
  return count;
}

function hasForumMedia(value: unknown): boolean {
  if (hasText(value)) return true;
  const media = firstRecord(value);
  return Boolean(media && (hasText(media.url) || hasText(media.contentUrl)));
}

function validateDiscussionForum(node: JsonLd, issues: GoogleEligibilityIssue[]): void {
  if (node["@type"] !== "DiscussionForumPosting" && node["@type"] !== "SocialMediaPosting") {
    issues.push(issue("google.forum.type.invalid", "@type", "Forum markup must use DiscussionForumPosting or SocialMediaPosting."));
  }
  validateForumAuthor(node.author, "author", issues);
  if (!isIsoDateTime(node.datePublished)) {
    issues.push(issue("google.forum.date_published.required", "datePublished", "datePublished must be an ISO 8601 DateTime."));
  }
  if (!hasText(node.text) && !hasForumMedia(node.image) && !hasForumMedia(node.video)) {
    issues.push(issue("google.forum.content.required", "text|image|video", "One of text, a content image, or video is required."));
  }
  validateForumInteractions(node.interactionStatistic, "interactionStatistic", issues);

  const comments = records(node.comment);
  if (node.comment !== undefined && (comments.length === 0 || (Array.isArray(node.comment) && comments.length !== node.comment.length))) {
    issues.push(issue("google.forum.comments.invalid", "comment", "Comments must be Comment objects."));
  }
  let representedCommentCount = 0;
  comments.forEach((comment, index) => {
    representedCommentCount += validateForumComment(comment, `comment[${index}]`, issues, new Set<JsonLd>());
  });
  if (node.commentCount !== undefined) {
    if (typeof node.commentCount !== "number" || !Number.isInteger(node.commentCount) || node.commentCount < 0) {
      issues.push(issue("google.forum.comment_count.invalid", "commentCount", "commentCount must be a nonnegative integer."));
    } else if (node.commentCount < representedCommentCount) {
      issues.push(issue("google.forum.comment_count.inconsistent", "commentCount", "commentCount cannot be lower than represented comments."));
    }
  }
}

export function validateGoogleRichResult<T extends JsonLd>(
  feature: GoogleRichResultFeature,
  node: T,
): GoogleEligibilityResult<T> {
  const issues: GoogleEligibilityIssue[] = [];
  if (!isRecord(node)) {
    issues.push(issue("google.node.invalid", "$", "Structured data node must be an object."));
  } else if (feature === "software-application") {
    validateSoftwareApplication(node, issues);
  } else if (feature === "product-snippet") {
    validateProductSnippet(node, issues);
  } else if (feature === "job-posting") {
    validateJobPosting(node, issues);
  } else if (feature === "discussion-forum") {
    validateDiscussionForum(node, issues);
  } else {
    issues.push(issue("google.feature.unsupported", "feature", `Unsupported Google feature: ${String(feature)}`));
  }
  return {
    eligible: issues.every((entry) => entry.severity !== "error"),
    feature,
    issues,
    node,
    profileVersion: GOOGLE_SEARCH_PROFILE_VERSION,
  };
}

export class GoogleEligibilityError extends Error {
  readonly result: GoogleEligibilityResult;

  constructor(result: GoogleEligibilityResult) {
    super(`Google ${result.feature} eligibility failed: ${result.issues.map((entry) => `${entry.path}: ${entry.message}`).join("; ")}`);
    this.name = "GoogleEligibilityError";
    this.result = result;
  }
}

export function assertGoogleRichResult<T extends JsonLd>(feature: GoogleRichResultFeature, node: T): T {
  const result = validateGoogleRichResult(feature, node);
  if (!result.eligible) throw new GoogleEligibilityError(result);
  return node;
}
