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

