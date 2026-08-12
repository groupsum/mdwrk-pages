import type { GoogleRichResultFeature } from "./types.js";

export interface GoogleFeatureProfile {
  documentation: string;
  required: readonly string[];
}

export const GOOGLE_SEARCH_PROFILE = Object.freeze({
  version: "2026-08-11",
  effectiveDate: "2026-08-11",
  features: Object.freeze({
    "software-application": Object.freeze({
      documentation: "https://developers.google.com/search/docs/appearance/structured-data/software-app",
      required: Object.freeze(["name", "offers.price", "aggregateRating|review"]),
    }),
    "product-snippet": Object.freeze({
      documentation: "https://developers.google.com/search/docs/appearance/structured-data/product-snippet",
      required: Object.freeze(["name", "offers|aggregateRating|review"]),
    }),
    "job-posting": Object.freeze({
      documentation: "https://developers.google.com/search/docs/appearance/structured-data/job-posting",
      required: Object.freeze([
        "title",
        "description",
        "datePosted",
        "hiringOrganization.name",
        "jobLocation.address|jobLocationType+applicantLocationRequirements",
      ]),
    }),
    "discussion-forum": Object.freeze({
      documentation: "https://developers.google.com/search/docs/appearance/structured-data/discussion-forum",
      required: Object.freeze(["author", "author.name", "datePublished", "text|image|video"]),
    }),
  } satisfies Record<GoogleRichResultFeature, GoogleFeatureProfile>),
});

export const GOOGLE_SEARCH_PROFILE_VERSION = GOOGLE_SEARCH_PROFILE.version;
