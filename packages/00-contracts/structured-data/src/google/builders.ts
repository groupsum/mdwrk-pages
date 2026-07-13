import {
  aggregateRatingNode,
  offerNode,
  productNode,
  reviewNode,
  softwareApplicationNode,
} from "../builders-primary.js";
import { jobPostingNode } from "../builders-secondary.js";
import type { JsonLd } from "../types.js";
import type {
  GoogleAggregateRatingInput,
  GoogleJobPostingInput,
  GoogleProductSnippetInput,
  GoogleReviewInput,
  GoogleSoftwareApplicationInput,
} from "./types.js";
import { assertGoogleRichResult } from "./validation.js";

const ratingValue = (value: GoogleAggregateRatingInput | undefined): JsonLd | undefined =>
  value ? aggregateRatingNode(value) : undefined;

const reviewValue = (value: GoogleReviewInput | undefined): JsonLd | undefined => (value ? reviewNode(value) : undefined);

export function googleSoftwareApplicationNode(input: GoogleSoftwareApplicationInput): JsonLd {
  const node = softwareApplicationNode({
    ...input,
    offers: offerNode(input.offers),
    aggregateRating: ratingValue(input.aggregateRating),
    review: reviewValue(input.review),
  });
  return assertGoogleRichResult("software-application", node);
}

export function googleProductSnippetNode(input: GoogleProductSnippetInput): JsonLd {
  const node = productNode({
    ...input,
    offers: input.offers ? offerNode(input.offers) : undefined,
    aggregateRating: ratingValue(input.aggregateRating),
    review: reviewValue(input.review),
  });
  return assertGoogleRichResult("product-snippet", node);
}

export function googleJobPostingNode(input: GoogleJobPostingInput): JsonLd {
  const node = jobPostingNode(input);
  return assertGoogleRichResult("job-posting", node);
}

