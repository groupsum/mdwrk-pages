import type {
  AggregateRatingInput,
  DiscussionForumPostingInput,
  JobPostingInput,
  JsonLd,
  OfferInput,
  ProductInput,
  ReviewInput,
  SoftwareApplicationInput,
  StructuredDataImage,
} from "../types.js";

export type GoogleRichResultFeature =
  | "software-application"
  | "product-snippet"
  | "job-posting"
  | "discussion-forum";

export type GoogleEligibilitySeverity = "error" | "warning";

export interface GoogleEligibilityIssue {
  code: string;
  message: string;
  path: string;
  severity: GoogleEligibilitySeverity;
}

export interface GoogleEligibilityResult<T extends JsonLd = JsonLd> {
  eligible: boolean;
  feature: GoogleRichResultFeature;
  issues: GoogleEligibilityIssue[];
  node: T;
  profileVersion: string;
}

export interface GoogleOfferInput extends OfferInput {
  price: string | number;
  priceCurrency?: string;
}

export interface GoogleAggregateRatingInput extends AggregateRatingInput {
  ratingValue: number | string;
}

export interface GoogleReviewInput extends ReviewInput {
  author: JsonLd | string;
  reviewRating: JsonLd;
}

type GoogleReputationInput =
  | { aggregateRating: GoogleAggregateRatingInput; review?: GoogleReviewInput }
  | { aggregateRating?: GoogleAggregateRatingInput; review: GoogleReviewInput };

interface GoogleSoftwareApplicationBase extends SoftwareApplicationInput {
  offers: GoogleOfferInput;
  aggregateRating?: GoogleAggregateRatingInput;
  review?: GoogleReviewInput;
}

export type GoogleSoftwareApplicationInput = GoogleSoftwareApplicationBase & GoogleReputationInput;

interface GoogleProductSnippetBase extends ProductInput {
  offers?: GoogleOfferInput;
  aggregateRating?: GoogleAggregateRatingInput;
  review?: GoogleReviewInput;
}

export type GoogleProductSnippetInput = GoogleProductSnippetBase &
  (
    | { offers: GoogleOfferInput; aggregateRating?: GoogleAggregateRatingInput; review?: GoogleReviewInput }
    | { offers?: GoogleOfferInput; aggregateRating: GoogleAggregateRatingInput; review?: GoogleReviewInput }
    | { offers?: GoogleOfferInput; aggregateRating?: GoogleAggregateRatingInput; review: GoogleReviewInput }
  );

export interface GooglePostalAddress extends JsonLd {
  "@type"?: "PostalAddress";
  addressCountry: JsonLd | string;
  addressLocality?: string;
  addressRegion?: string;
  postalCode?: string;
  streetAddress?: string;
}

export interface GoogleJobLocation extends JsonLd {
  "@type"?: "Place";
  address: GooglePostalAddress;
}

export interface GoogleHiringOrganization extends JsonLd {
  "@type"?: "Organization";
  name: string;
}

type GooglePhysicalJob = {
  applicantLocationRequirements?: never;
  jobLocation: GoogleJobLocation;
  jobLocationType?: never;
};

type GoogleRemoteJob = {
  applicantLocationRequirements: JsonLd | JsonLd[] | string | string[];
  jobLocation?: never;
  jobLocationType: "TELECOMMUTE";
};

interface GoogleJobPostingBase extends JobPostingInput {
  description: string;
  hiringOrganization: GoogleHiringOrganization;
}

export type GoogleJobPostingInput = GoogleJobPostingBase & (GooglePhysicalJob | GoogleRemoteJob);

export interface GoogleDiscussionForumAuthor extends JsonLd {
  "@type": "Person" | "Organization";
  name: string;
  url?: string;
  agentInteractionStatistic?: JsonLd | JsonLd[];
}

export interface GoogleDiscussionForumComment extends JsonLd {
  "@type"?: "Comment";
  text: string;
  author: GoogleDiscussionForumAuthor;
  datePublished: string;
  dateModified?: string;
  comment?: GoogleDiscussionForumComment[];
  interactionStatistic?: JsonLd | JsonLd[];
}

type GoogleDiscussionForumTextContent = {
  text: string;
  image?: string | StructuredDataImage;
  video?: JsonLd | string;
};

type GoogleDiscussionForumImageContent = {
  text?: string;
  image: string | StructuredDataImage;
  video?: JsonLd | string;
};

type GoogleDiscussionForumVideoContent = {
  text?: string;
  image?: string | StructuredDataImage;
  video: JsonLd | string;
};

export type GoogleDiscussionForumPostingInput = DiscussionForumPostingInput & {
  author: GoogleDiscussionForumAuthor;
  datePublished: string;
  comment?: GoogleDiscussionForumComment[];
} & (GoogleDiscussionForumTextContent | GoogleDiscussionForumImageContent | GoogleDiscussionForumVideoContent);
