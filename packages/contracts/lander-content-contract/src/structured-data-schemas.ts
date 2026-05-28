export interface StructuredDataSchemaDefinition {
  $schema: string;
  $id: string;
  title: string;
  type: "object";
  additionalProperties?: boolean;
  required?: string[];
  properties?: Record<string, StructuredDataSchemaProperty>;
  $defs?: Record<string, StructuredDataSchemaDefinition>;
  items?: StructuredDataSchemaProperty;
  minItems?: number;
  minLength?: number;
  enum?: string[];
  anyOf?: StructuredDataSchemaProperty[];
}

export interface StructuredDataSchemaRegistryEntry {
  type: string;
  schemaId: string;
  assetPath: string;
  schema: StructuredDataSchemaDefinition;
}

export interface StructuredDataValidationIssue {
  keyword: string;
  path: string;
  message: string;
}

type StructuredDataSchemaProperty =
  | StructuredDataSchemaDefinition
  | {
      type?: "string" | "number" | "object" | "array" | "boolean";
      additionalProperties?: boolean;
      required?: string[];
      properties?: Record<string, StructuredDataSchemaProperty>;
      items?: StructuredDataSchemaProperty;
      minItems?: number;
      minLength?: number;
      enum?: string[];
      anyOf?: StructuredDataSchemaProperty[];
      $ref?: string;
    };

const JSON_SCHEMA = "https://json-schema.org/draft/2020-12/schema";
const schemaId = (fileName: string): string => `https://schemas.mdwrk.com/structured-data/${fileName}.schema.json`;

const stringRef = { type: "string", minLength: 1 } satisfies StructuredDataSchemaProperty;

const thingBaseProperties = {
  id: { type: "string" } satisfies StructuredDataSchemaProperty,
  name: { type: "string", minLength: 1 } satisfies StructuredDataSchemaProperty,
  description: { type: "string" } satisfies StructuredDataSchemaProperty,
  url: stringRef,
};

const thingRefDefinition: StructuredDataSchemaDefinition = {
  $schema: JSON_SCHEMA,
  $id: "thingRef",
  title: "Structured Data Thing Reference",
  type: "object",
  additionalProperties: true,
  properties: {
    "@id": { type: "string" },
    "@type": { type: "string" },
    id: { type: "string" },
    name: { type: "string" },
    url: { type: "string" },
  },
};

const imageDefinition: StructuredDataSchemaDefinition = {
  $schema: JSON_SCHEMA,
  $id: "image",
  title: "Structured Data Image",
  type: "object",
  additionalProperties: false,
  properties: {
    src: { type: "string" },
    url: { type: "string" },
    width: { type: "number" },
    height: { type: "number" },
    caption: { type: "string" },
    alt: { type: "string" },
  },
};

const answerDefinition: StructuredDataSchemaDefinition = {
  $schema: JSON_SCHEMA,
  $id: "answer",
  title: "Structured Data Answer",
  type: "object",
  additionalProperties: false,
  required: ["text"],
  properties: {
    id: { type: "string" },
    text: { type: "string", minLength: 1 },
    url: { type: "string" },
    upvoteCount: { type: "number" },
    dateCreated: { type: "string" },
    author: { anyOf: [stringRef, { $ref: "#/$defs/thingRef" }] },
  },
};

const questionDefinition: StructuredDataSchemaDefinition = {
  $schema: JSON_SCHEMA,
  $id: "question",
  title: "Structured Data Question",
  type: "object",
  additionalProperties: false,
  required: ["name"],
  properties: {
    ...thingBaseProperties,
    text: { type: "string" },
    acceptedAnswer: { $ref: "#/$defs/answer" },
    suggestedAnswer: { type: "array", items: { $ref: "#/$defs/answer" } },
    answerCount: { type: "number" },
    eduQuestionType: { type: "string" },
  },
};

const clipDefinition: StructuredDataSchemaDefinition = {
  $schema: JSON_SCHEMA,
  $id: "clip",
  title: "Structured Data Clip",
  type: "object",
  additionalProperties: false,
  required: ["name"],
  properties: {
    ...thingBaseProperties,
    startOffset: { type: "number" },
    endOffset: { type: "number" },
  },
};

const broadcastEventDefinition: StructuredDataSchemaDefinition = {
  $schema: JSON_SCHEMA,
  $id: "broadcastEvent",
  title: "Structured Data Broadcast Event",
  type: "object",
  additionalProperties: false,
  properties: {
    ...thingBaseProperties,
    startDate: { type: "string" },
    endDate: { type: "string" },
    isLiveBroadcast: { type: "boolean" },
  },
};

const howToStepDefinition: StructuredDataSchemaDefinition = {
  $schema: JSON_SCHEMA,
  $id: "howToStep",
  title: "HowTo Step",
  type: "object",
  additionalProperties: false,
  required: ["name", "text"],
  properties: {
    name: { type: "string", minLength: 1 },
    text: { type: "string", minLength: 1 },
    url: { type: "string" },
    image: { anyOf: [stringRef, { $ref: "#/$defs/image" }] },
  },
};

const breadcrumbItemDefinition: StructuredDataSchemaDefinition = {
  $schema: JSON_SCHEMA,
  $id: "breadcrumbItem",
  title: "Breadcrumb Item",
  type: "object",
  additionalProperties: false,
  required: ["label", "href"],
  properties: {
    label: { type: "string", minLength: 1 },
    href: stringRef,
  },
};

const itemListEntryDefinition: StructuredDataSchemaDefinition = {
  $schema: JSON_SCHEMA,
  $id: "itemListEntry",
  title: "ItemList Entry",
  type: "object",
  additionalProperties: false,
  required: ["name"],
  properties: {
    name: { type: "string", minLength: 1 },
    url: { type: "string" },
    item: { anyOf: [stringRef, { $ref: "#/$defs/thingRef" }] },
  },
};

const offerLikeDefinition: StructuredDataSchemaDefinition = {
  $schema: JSON_SCHEMA,
  $id: "offerLike",
  title: "Offer-like node",
  type: "object",
  additionalProperties: true,
  properties: {
    "@id": { type: "string" },
    "@type": { type: "string" },
    price: { anyOf: [{ type: "number" }, stringRef] },
    priceCurrency: { type: "string" },
    availability: { type: "string" },
    url: { type: "string" },
    seller: { anyOf: [stringRef, { $ref: "#/$defs/thingRef" }] },
  },
};

const aggregateRatingLikeDefinition: StructuredDataSchemaDefinition = {
  $schema: JSON_SCHEMA,
  $id: "aggregateRatingLike",
  title: "AggregateRating-like node",
  type: "object",
  additionalProperties: true,
  properties: {
    "@id": { type: "string" },
    "@type": { type: "string" },
    ratingValue: { anyOf: [{ type: "number" }, stringRef] },
    reviewCount: { type: "number" },
    ratingCount: { type: "number" },
    bestRating: { anyOf: [{ type: "number" }, stringRef] },
    worstRating: { anyOf: [{ type: "number" }, stringRef] },
  },
};

const reviewLikeDefinition: StructuredDataSchemaDefinition = {
  $schema: JSON_SCHEMA,
  $id: "reviewLike",
  title: "Review-like node",
  type: "object",
  additionalProperties: true,
  properties: {
    "@id": { type: "string" },
    "@type": { type: "string" },
    name: { type: "string" },
    itemReviewed: { anyOf: [stringRef, { $ref: "#/$defs/thingRef" }] },
    author: { anyOf: [stringRef, { $ref: "#/$defs/thingRef" }] },
    reviewBody: { type: "string" },
    reviewRating: { $ref: "#/$defs/aggregateRatingLike" },
  },
};

const courseInstanceLikeDefinition: StructuredDataSchemaDefinition = {
  $schema: JSON_SCHEMA,
  $id: "courseInstanceLike",
  title: "CourseInstance-like node",
  type: "object",
  additionalProperties: true,
  properties: {
    "@id": { type: "string" },
    "@type": { type: "string" },
    id: { type: "string" },
    name: { type: "string" },
    description: { type: "string" },
    url: { type: "string" },
    courseMode: { type: "string" },
    startDate: { type: "string" },
    endDate: { type: "string" },
    location: { anyOf: [stringRef, { $ref: "#/$defs/thingRef" }] },
    instructor: { anyOf: [stringRef, { $ref: "#/$defs/thingRef" }] },
  },
};

const learningResourceDefinition: StructuredDataSchemaDefinition = {
  $schema: JSON_SCHEMA,
  $id: "learningResource",
  title: "Structured Data LearningResource",
  type: "object",
  additionalProperties: false,
  required: ["name"],
  properties: {
    "@context": { type: "string" },
    "@type": { type: "string" },
    ...thingBaseProperties,
    learningResourceType: { type: "string" },
    educationalLevel: { type: "string" },
    teaches: {
      anyOf: [
        { type: "string", minLength: 1 },
        { type: "array", minItems: 1, items: { type: "string", minLength: 1 } },
      ],
    },
  },
};

const solveMathActionDefinition: StructuredDataSchemaDefinition = {
  $schema: JSON_SCHEMA,
  $id: "solveMathAction",
  title: "Structured Data SolveMathAction",
  type: "object",
  additionalProperties: false,
  required: ["target"],
  properties: {
    "@context": { type: "string" },
    "@type": { type: "string" },
    id: { type: "string" },
    target: { anyOf: [stringRef, { $ref: "#/$defs/thingRef" }] },
    "mathExpression-input": { type: "string" },
    mathExpressionInput: { type: "string" },
    eduQuestionType: {
      anyOf: [
        { type: "string", minLength: 1 },
        { type: "array", minItems: 1, items: { type: "string", minLength: 1 } },
      ],
    },
  },
};

const sharedDefs = {
  answer: answerDefinition,
  question: questionDefinition,
  image: imageDefinition,
  thingRef: thingRefDefinition,
  clip: clipDefinition,
  broadcastEvent: broadcastEventDefinition,
  howToStep: howToStepDefinition,
  breadcrumbItem: breadcrumbItemDefinition,
  itemListEntry: itemListEntryDefinition,
  offerLike: offerLikeDefinition,
  aggregateRatingLike: aggregateRatingLikeDefinition,
  reviewLike: reviewLikeDefinition,
  courseInstanceLike: courseInstanceLikeDefinition,
  learningResource: learningResourceDefinition,
  solveMathAction: solveMathActionDefinition,
};

function defs(...keys: Array<keyof typeof sharedDefs>): Record<string, StructuredDataSchemaDefinition> {
  return keys.reduce<Record<string, StructuredDataSchemaDefinition>>((acc, key) => {
    acc[key] = sharedDefs[key];
    return acc;
  }, {});
}

function withSharedDefs(
  schema: Omit<StructuredDataSchemaDefinition, "$schema" | "$id" | "title">,
  definitionKeys: Array<keyof typeof sharedDefs> = [],
): Omit<StructuredDataSchemaDefinition, "$schema" | "$id" | "title"> {
  return {
    ...schema,
    $defs: {
      ...(schema.$defs ?? {}),
      ...defs(...definitionKeys),
    },
  };
}

function entry(
  type: string,
  fileName: string,
  title: string,
  schema: Omit<StructuredDataSchemaDefinition, "$schema" | "$id" | "title">,
): StructuredDataSchemaRegistryEntry {
  return {
    type,
    schemaId: schemaId(fileName),
    assetPath: `./schemas/structured-data/${fileName}.schema.json`,
    schema: {
      $schema: JSON_SCHEMA,
      $id: schemaId(fileName),
      title,
      ...schema,
    },
  };
}

function deepFreeze<T>(value: T): T {
  if (value && typeof value === "object" && !Object.isFrozen(value)) {
    Object.freeze(value);
    for (const nested of Object.values(value as Record<string, unknown>)) {
      deepFreeze(nested);
    }
  }
  return value;
}

export const STRUCTURED_DATA_SCHEMA_REGISTRY = deepFreeze([
  entry("AggregateRating", "aggregate-rating", "Structured Data AggregateRating Input", {
    type: "object",
    additionalProperties: false,
    required: ["ratingValue"],
    properties: {
      ratingValue: { anyOf: [{ type: "number" }, stringRef] },
      reviewCount: { type: "number" },
      ratingCount: { type: "number" },
      bestRating: { anyOf: [{ type: "number" }, stringRef] },
      worstRating: { anyOf: [{ type: "number" }, stringRef] },
    },
  }),
  entry("Answer", "answer", "Structured Data Answer Input", withSharedDefs(answerDefinition, ["thingRef"])),
  entry("Article", "article", "Structured Data Article Input", withSharedDefs({
    type: "object",
    additionalProperties: false,
    required: ["name"],
    properties: {
      ...thingBaseProperties,
      headline: { type: "string" },
      author: { anyOf: [stringRef, { $ref: "#/$defs/thingRef" }] },
      publisher: { anyOf: [stringRef, { $ref: "#/$defs/thingRef" }] },
      datePublished: { type: "string" },
      dateModified: { type: "string" },
      mainEntityOfPage: { anyOf: [stringRef, { $ref: "#/$defs/thingRef" }] },
      image: { anyOf: [stringRef, { $ref: "#/$defs/image" }] },
    },
  }, ["thingRef", "image"])),
  entry("BlogPosting", "blog-posting", "Structured Data BlogPosting Input", withSharedDefs({
    type: "object",
    additionalProperties: false,
    required: ["name"],
    properties: {
      ...thingBaseProperties,
      headline: { type: "string" },
      author: { anyOf: [stringRef, { $ref: "#/$defs/thingRef" }] },
      publisher: { anyOf: [stringRef, { $ref: "#/$defs/thingRef" }] },
      datePublished: { type: "string" },
      dateModified: { type: "string" },
      mainEntityOfPage: { anyOf: [stringRef, { $ref: "#/$defs/thingRef" }] },
      image: { anyOf: [stringRef, { $ref: "#/$defs/image" }] },
    },
  }, ["thingRef", "image"])),
  entry("Book", "book", "Structured Data Book Input", withSharedDefs({
    type: "object",
    additionalProperties: false,
    required: ["name"],
    properties: {
      ...thingBaseProperties,
      author: { anyOf: [stringRef, { $ref: "#/$defs/thingRef" }] },
      isbn: { type: "string" },
      readAction: { anyOf: [stringRef, { $ref: "#/$defs/thingRef" }] },
      image: { anyOf: [stringRef, { $ref: "#/$defs/image" }] },
    },
  }, ["thingRef", "image"])),
  entry("BroadcastEvent", "broadcast-event", "Structured Data BroadcastEvent Input", broadcastEventDefinition),
  entry("BreadcrumbList", "breadcrumb-list", "Structured Data BreadcrumbList Input", withSharedDefs({
    type: "object",
    additionalProperties: false,
    required: ["items"],
    properties: {
      id: { type: "string" },
      items: { type: "array", minItems: 1, items: { $ref: "#/$defs/breadcrumbItem" } },
    },
  }, ["breadcrumbItem"])),
  entry("ClaimReview", "claim-review", "Structured Data ClaimReview Input", withSharedDefs({
    type: "object",
    additionalProperties: false,
    required: ["name", "claimReviewed"],
    properties: {
      ...thingBaseProperties,
      claimReviewed: { type: "string", minLength: 1 },
      itemReviewed: { anyOf: [stringRef, { $ref: "#/$defs/thingRef" }] },
      author: { anyOf: [stringRef, { $ref: "#/$defs/thingRef" }] },
      reviewRating: { $ref: "#/$defs/aggregateRatingLike" },
      datePublished: { type: "string" },
    },
  }, ["thingRef", "aggregateRatingLike"])),
  entry("Clip", "clip", "Structured Data Clip Input", clipDefinition),
  entry("Course", "course", "Structured Data Course Input", withSharedDefs({
    type: "object",
    additionalProperties: false,
    required: ["name"],
    properties: {
      ...thingBaseProperties,
      provider: { anyOf: [stringRef, { $ref: "#/$defs/thingRef" }] },
      courseCode: { type: "string" },
      coursePrerequisites: {
        anyOf: [
          { type: "string", minLength: 1 },
          { type: "array", minItems: 1, items: { type: "string", minLength: 1 } },
        ],
      },
      hasCourseInstance: {
        anyOf: [
          { $ref: "#/$defs/courseInstanceLike" },
          { type: "array", minItems: 1, items: { $ref: "#/$defs/courseInstanceLike" } },
        ],
      },
      image: { anyOf: [stringRef, { $ref: "#/$defs/image" }] },
    },
  }, ["thingRef", "courseInstanceLike", "image"])),
  entry("CourseInstance", "course-instance", "Structured Data CourseInstance Input", withSharedDefs({
    type: "object",
    additionalProperties: false,
    required: ["name"],
    properties: {
      ...thingBaseProperties,
      courseMode: { type: "string" },
      startDate: { type: "string" },
      endDate: { type: "string" },
      location: { anyOf: [stringRef, { $ref: "#/$defs/thingRef" }] },
      instructor: { anyOf: [stringRef, { $ref: "#/$defs/thingRef" }] },
    },
  }, ["thingRef"])),
  entry("Dataset", "dataset", "Structured Data Dataset Input", withSharedDefs({
    type: "object",
    additionalProperties: false,
    required: ["name"],
    properties: {
      ...thingBaseProperties,
      creator: { anyOf: [stringRef, { $ref: "#/$defs/thingRef" }] },
      distribution: {
        anyOf: [
          { $ref: "#/$defs/thingRef" },
          { type: "array", minItems: 1, items: { $ref: "#/$defs/thingRef" } },
        ],
      },
      keywords: { type: "array", items: { type: "string", minLength: 1 } },
      datePublished: { type: "string" },
      dateModified: { type: "string" },
      image: { anyOf: [stringRef, { $ref: "#/$defs/image" }] },
    },
  }, ["thingRef", "image"])),
  entry("DiscussionForumPosting", "discussion-forum-posting", "Structured Data DiscussionForumPosting Input", withSharedDefs({
    type: "object",
    additionalProperties: false,
    required: ["name"],
    properties: {
      ...thingBaseProperties,
      headline: { type: "string" },
      author: { anyOf: [stringRef, { $ref: "#/$defs/thingRef" }] },
      datePublished: { type: "string" },
      dateModified: { type: "string" },
      articleBody: { type: "string" },
      image: { anyOf: [stringRef, { $ref: "#/$defs/image" }] },
    },
  }, ["thingRef", "image"])),
  entry("EmployerAggregateRating", "employer-aggregate-rating", "Structured Data EmployerAggregateRating Input", {
    type: "object",
    additionalProperties: false,
    required: ["ratingValue"],
    properties: {
      ratingValue: { anyOf: [{ type: "number" }, stringRef] },
      reviewCount: { type: "number" },
      ratingCount: { type: "number" },
      bestRating: { anyOf: [{ type: "number" }, stringRef] },
      worstRating: { anyOf: [{ type: "number" }, stringRef] },
    },
  }),
  entry("Event", "event", "Structured Data Event Input", withSharedDefs({
    type: "object",
    additionalProperties: false,
    required: ["name", "startDate"],
    properties: {
      ...thingBaseProperties,
      startDate: { type: "string", minLength: 1 },
      endDate: { type: "string" },
      eventStatus: { type: "string" },
      eventAttendanceMode: { type: "string" },
      location: { anyOf: [stringRef, { $ref: "#/$defs/thingRef" }] },
      organizer: { anyOf: [stringRef, { $ref: "#/$defs/thingRef" }] },
      image: { anyOf: [stringRef, { $ref: "#/$defs/image" }] },
    },
  }, ["thingRef", "image"])),
  entry("FAQPage", "faq-page", "Structured Data FAQPage Input", {
    type: "object",
    additionalProperties: false,
    required: ["items"],
    properties: {
      id: { type: "string" },
      items: {
        type: "array",
        minItems: 1,
        items: {
          type: "object",
          additionalProperties: false,
          required: ["question", "answer"],
          properties: {
            question: { type: "string", minLength: 1 },
            answer: { type: "string", minLength: 1 },
          },
        },
      },
    },
  }),
  entry("HowTo", "how-to", "Structured Data HowTo Input", withSharedDefs({
    type: "object",
    additionalProperties: false,
    required: ["name", "steps"],
    properties: {
      ...thingBaseProperties,
      steps: { type: "array", minItems: 1, items: { $ref: "#/$defs/howToStep" } },
      totalTime: { type: "string" },
      image: { anyOf: [stringRef, { $ref: "#/$defs/image" }] },
    },
  }, ["howToStep", "image"])),
  entry("ImageObject", "image-object", "Structured Data ImageObject Input", {
    type: "object",
    additionalProperties: false,
    required: ["name"],
    properties: {
      ...thingBaseProperties,
      contentUrl: { type: "string" },
      width: { type: "number" },
      height: { type: "number" },
      caption: { type: "string" },
    },
  }),
  entry("ItemList", "item-list", "Structured Data ItemList Input", withSharedDefs({
    type: "object",
    additionalProperties: false,
    required: ["name", "items"],
    properties: {
      id: { type: "string" },
      name: { type: "string", minLength: 1 },
      items: { type: "array", minItems: 1, items: { $ref: "#/$defs/itemListEntry" } },
    },
  }, ["itemListEntry", "thingRef"])),
  entry("JobPosting", "job-posting", "Structured Data JobPosting Input", withSharedDefs({
    type: "object",
    additionalProperties: false,
    required: ["title", "datePosted", "hiringOrganization"],
    properties: {
      ...thingBaseProperties,
      title: { type: "string", minLength: 1 },
      datePosted: { type: "string", minLength: 1 },
      validThrough: { type: "string" },
      employmentType: {
        anyOf: [
          { type: "string", minLength: 1 },
          { type: "array", minItems: 1, items: { type: "string", minLength: 1 } },
        ],
      },
      hiringOrganization: { anyOf: [stringRef, { $ref: "#/$defs/thingRef" }] },
      jobLocation: { anyOf: [stringRef, { $ref: "#/$defs/thingRef" }] },
      baseSalary: { $ref: "#/$defs/offerLike" },
    },
  }, ["thingRef", "offerLike"])),
  entry("LearningResource", "learning-resource", "Structured Data LearningResource Input", learningResourceDefinition),
  entry("LocalBusiness", "local-business", "Structured Data LocalBusiness Input", withSharedDefs({
    type: "object",
    additionalProperties: false,
    required: ["name"],
    properties: {
      ...thingBaseProperties,
      logo: { anyOf: [stringRef, { $ref: "#/$defs/image" }] },
      sameAs: { type: "array", items: { type: "string" } },
      address: { anyOf: [stringRef, { $ref: "#/$defs/thingRef" }] },
      telephone: { type: "string" },
      priceRange: { type: "string" },
      openingHours: {
        anyOf: [
          { type: "string", minLength: 1 },
          { type: "array", minItems: 1, items: { type: "string", minLength: 1 } },
        ],
      },
      image: { anyOf: [stringRef, { $ref: "#/$defs/image" }] },
    },
  }, ["image", "thingRef"])),
  entry("MathSolver", "math-solver", "Structured Data MathSolver Input", withSharedDefs({
    type: "object",
    additionalProperties: false,
    required: ["name"],
    properties: {
      ...thingBaseProperties,
      mathExpression: { type: "string" },
      learningResourceType: { type: "string" },
      potentialAction: {
        anyOf: [
          { $ref: "#/$defs/solveMathAction" },
          { type: "array", minItems: 1, items: { $ref: "#/$defs/solveMathAction" } },
        ],
      },
      learningResource: {
        anyOf: [
          { $ref: "#/$defs/learningResource" },
          { type: "array", minItems: 1, items: { $ref: "#/$defs/learningResource" } },
        ],
      },
      subjectOf: {
        anyOf: [
          { $ref: "#/$defs/learningResource" },
          { type: "array", minItems: 1, items: { $ref: "#/$defs/learningResource" } },
        ],
      },
    },
  }, ["solveMathAction", "learningResource", "thingRef"])),
  entry("MemberProgram", "member-program", "Structured Data MemberProgram Input", withSharedDefs({
    type: "object",
    additionalProperties: false,
    required: ["name"],
    properties: {
      ...thingBaseProperties,
      provider: { anyOf: [stringRef, { $ref: "#/$defs/thingRef" }] },
    },
  }, ["thingRef"])),
  entry("MerchantReturnPolicy", "merchant-return-policy", "Structured Data MerchantReturnPolicy Input", {
    type: "object",
    additionalProperties: false,
    required: ["name"],
    properties: {
      ...thingBaseProperties,
      merchantReturnDays: { type: "number" },
      returnPolicyCategory: { type: "string" },
    },
  }),
  entry("MonetaryAmountDistribution", "monetary-amount-distribution", "Structured Data MonetaryAmountDistribution Input", {
    type: "object",
    additionalProperties: false,
    properties: {
      id: { type: "string" },
      name: { type: "string" },
      currency: { type: "string" },
      minValue: { type: "number" },
      maxValue: { type: "number" },
      unitText: { type: "string" },
    },
  }),
  entry("Movie", "movie", "Structured Data Movie Input", withSharedDefs({
    type: "object",
    additionalProperties: false,
    required: ["name"],
    properties: {
      ...thingBaseProperties,
      director: { anyOf: [stringRef, { $ref: "#/$defs/thingRef" }] },
      actor: {
        anyOf: [
          stringRef,
          { $ref: "#/$defs/thingRef" },
          { type: "array", minItems: 1, items: { anyOf: [stringRef, { $ref: "#/$defs/thingRef" }] } },
        ],
      },
      datePublished: { type: "string" },
      image: { anyOf: [stringRef, { $ref: "#/$defs/image" }] },
    },
  }, ["thingRef", "image"])),
  entry("NewsArticle", "news-article", "Structured Data NewsArticle Input", withSharedDefs({
    type: "object",
    additionalProperties: false,
    required: ["name"],
    properties: {
      ...thingBaseProperties,
      headline: { type: "string" },
      author: { anyOf: [stringRef, { $ref: "#/$defs/thingRef" }] },
      publisher: { anyOf: [stringRef, { $ref: "#/$defs/thingRef" }] },
      datePublished: { type: "string" },
      dateModified: { type: "string" },
      mainEntityOfPage: { anyOf: [stringRef, { $ref: "#/$defs/thingRef" }] },
      image: { anyOf: [stringRef, { $ref: "#/$defs/image" }] },
    },
  }, ["thingRef", "image"])),
  entry("OfferShippingDetails", "offer-shipping-details", "Structured Data OfferShippingDetails Input", withSharedDefs({
    type: "object",
    additionalProperties: false,
    required: ["name"],
    properties: {
      ...thingBaseProperties,
      shippingDestination: { anyOf: [stringRef, { $ref: "#/$defs/thingRef" }] },
      shippingRate: { $ref: "#/$defs/offerLike" },
    },
  }, ["thingRef", "offerLike"])),
  entry("Organization", "organization", "Structured Data Organization Input", withSharedDefs({
    type: "object",
    additionalProperties: false,
    required: ["name"],
    properties: {
      ...thingBaseProperties,
      logo: { anyOf: [stringRef, { $ref: "#/$defs/image" }] },
      image: { anyOf: [stringRef, { $ref: "#/$defs/image" }] },
      sameAs: { type: "array", items: { type: "string", minLength: 1 } },
    },
  }, ["image"])),
  entry("Product", "product", "Structured Data Product Input", withSharedDefs({
    type: "object",
    additionalProperties: false,
    required: ["name"],
    properties: {
      ...thingBaseProperties,
      brand: { anyOf: [stringRef, { $ref: "#/$defs/thingRef" }] },
      sku: { type: "string" },
      category: { type: "string" },
      offers: { $ref: "#/$defs/offerLike" },
      aggregateRating: { $ref: "#/$defs/aggregateRatingLike" },
      review: {
        anyOf: [
          { $ref: "#/$defs/reviewLike" },
          { type: "array", minItems: 1, items: { $ref: "#/$defs/reviewLike" } },
        ],
      },
      image: { anyOf: [stringRef, { $ref: "#/$defs/image" }] },
    },
  }, ["thingRef", "offerLike", "aggregateRatingLike", "reviewLike", "image"])),
  entry("ProductGroup", "product-group", "Structured Data ProductGroup Input", withSharedDefs({
    type: "object",
    additionalProperties: false,
    required: ["name"],
    properties: {
      ...thingBaseProperties,
      brand: { anyOf: [stringRef, { $ref: "#/$defs/thingRef" }] },
      sku: { type: "string" },
      category: { type: "string" },
      offers: { $ref: "#/$defs/offerLike" },
      aggregateRating: { $ref: "#/$defs/aggregateRatingLike" },
      review: {
        anyOf: [
          { $ref: "#/$defs/reviewLike" },
          { type: "array", minItems: 1, items: { $ref: "#/$defs/reviewLike" } },
        ],
      },
      hasVariant: {
        anyOf: [
          { $ref: "#/$defs/thingRef" },
          { type: "array", minItems: 1, items: { $ref: "#/$defs/thingRef" } },
        ],
      },
      variesBy: {
        anyOf: [
          { type: "string", minLength: 1 },
          { type: "array", minItems: 1, items: { type: "string", minLength: 1 } },
        ],
      },
      image: { anyOf: [stringRef, { $ref: "#/$defs/image" }] },
    },
  }, ["thingRef", "offerLike", "aggregateRatingLike", "reviewLike", "image"])),
  entry("ProfilePage", "profile-page", "Structured Data ProfilePage Input", withSharedDefs({
    type: "object",
    additionalProperties: false,
    required: ["name", "mainEntity"],
    properties: {
      ...thingBaseProperties,
      mainEntity: { anyOf: [stringRef, { $ref: "#/$defs/thingRef" }] },
      image: { anyOf: [stringRef, { $ref: "#/$defs/image" }] },
    },
  }, ["thingRef", "image"])),
  entry("ReadAction", "read-action", "Structured Data ReadAction Input", withSharedDefs({
    type: "object",
    additionalProperties: false,
    required: ["target"],
    properties: {
      target: { anyOf: [stringRef, { $ref: "#/$defs/thingRef" }] },
    },
  }, ["thingRef"])),
  entry("QAPage", "qa-page", "Structured Data QAPage Input", withSharedDefs({
    type: "object",
    additionalProperties: false,
    required: ["question"],
    properties: {
      id: { type: "string" },
      question: { type: "string", minLength: 1 },
      answer: { type: "string", minLength: 1 },
      acceptedAnswer: { $ref: "#/$defs/answer" },
      suggestedAnswer: { type: "array", items: { $ref: "#/$defs/answer" } },
      answerCount: { type: "number" },
      eduQuestionType: { type: "string" },
      url: { type: "string" },
    },
  }, ["answer", "thingRef"])),
  entry("Question", "question", "Structured Data Question Input", withSharedDefs({
    type: "object",
    additionalProperties: false,
    required: ["name"],
    properties: questionDefinition.properties,
  }, ["answer", "thingRef"])),
  entry("Quiz", "quiz", "Structured Data Quiz Input", withSharedDefs({
    type: "object",
    additionalProperties: false,
    required: ["name", "hasPart"],
    properties: {
      ...thingBaseProperties,
      educationalLevel: { type: "string" },
      assesses: {
        anyOf: [
          { type: "string", minLength: 1 },
          { type: "array", minItems: 1, items: { type: "string", minLength: 1 } },
        ],
      },
      learningResourceType: { type: "string" },
      hasPart: { type: "array", minItems: 1, items: { $ref: "#/$defs/question" } },
    },
  }, ["answer", "question", "thingRef"])),
  entry("Recipe", "recipe", "Structured Data Recipe Input", withSharedDefs({
    type: "object",
    additionalProperties: false,
    required: ["name", "recipeIngredient", "recipeInstructions"],
    properties: {
      ...thingBaseProperties,
      recipeIngredient: { type: "array", minItems: 1, items: { type: "string", minLength: 1 } },
      recipeInstructions: {
        anyOf: [
          { type: "string", minLength: 1 },
          { type: "array", minItems: 1, items: { $ref: "#/$defs/howToStep" } },
        ],
      },
      author: { anyOf: [stringRef, { $ref: "#/$defs/thingRef" }] },
      datePublished: { type: "string" },
      prepTime: { type: "string" },
      cookTime: { type: "string" },
      totalTime: { type: "string" },
      image: { anyOf: [stringRef, { $ref: "#/$defs/image" }] },
    },
  }, ["howToStep", "thingRef", "image"])),
  entry("Review", "review", "Structured Data Review Input", withSharedDefs({
    type: "object",
    additionalProperties: false,
    required: ["name", "itemReviewed"],
    properties: {
      ...thingBaseProperties,
      itemReviewed: { anyOf: [stringRef, { $ref: "#/$defs/thingRef" }] },
      reviewRating: { $ref: "#/$defs/aggregateRatingLike" },
      author: { anyOf: [stringRef, { $ref: "#/$defs/thingRef" }] },
      reviewBody: { type: "string" },
    },
  }, ["thingRef", "aggregateRatingLike"])),
  entry("SoftwareApplication", "software-application", "Structured Data SoftwareApplication Input", withSharedDefs({
    type: "object",
    additionalProperties: false,
    required: ["name"],
    properties: {
      ...thingBaseProperties,
      applicationCategory: { type: "string" },
      operatingSystem: { type: "string" },
      offers: { $ref: "#/$defs/offerLike" },
      softwareVersion: { type: "string" },
      image: { anyOf: [stringRef, { $ref: "#/$defs/image" }] },
    },
  }, ["offerLike", "image"])),
  entry("SoftwareSourceCode", "software-source-code", "Structured Data SoftwareSourceCode Input", withSharedDefs({
    type: "object",
    additionalProperties: false,
    required: ["name"],
    properties: {
      ...thingBaseProperties,
      codeRepository: { type: "string" },
      programmingLanguage: {
        anyOf: [
          { type: "string", minLength: 1 },
          { type: "array", minItems: 1, items: { type: "string", minLength: 1 } },
        ],
      },
      runtimePlatform: { type: "string" },
      image: { anyOf: [stringRef, { $ref: "#/$defs/image" }] },
    },
  }, ["image"])),
  entry("SpeakableSpecification", "speakable-specification", "Structured Data SpeakableSpecification Input", {
    type: "object",
    additionalProperties: false,
    properties: {
      cssSelector: { type: "array", items: { type: "string", minLength: 1 } },
      xpath: { type: "array", items: { type: "string", minLength: 1 } },
    },
  }),
  entry("TechArticle", "tech-article", "Structured Data TechArticle Input", withSharedDefs({
    type: "object",
    additionalProperties: false,
    required: ["name"],
    properties: {
      ...thingBaseProperties,
      headline: { type: "string" },
      author: { anyOf: [stringRef, { $ref: "#/$defs/thingRef" }] },
      publisher: { anyOf: [stringRef, { $ref: "#/$defs/thingRef" }] },
      datePublished: { type: "string" },
      dateModified: { type: "string" },
      mainEntityOfPage: { anyOf: [stringRef, { $ref: "#/$defs/thingRef" }] },
      image: { anyOf: [stringRef, { $ref: "#/$defs/image" }] },
    },
  }, ["thingRef", "image"])),
  entry("SolveMathAction", "solve-math-action", "Structured Data SolveMathAction Input", withSharedDefs(
    solveMathActionDefinition,
    ["thingRef"],
  )),
  entry("VacationRental", "vacation-rental", "Structured Data VacationRental Input", withSharedDefs({
    type: "object",
    additionalProperties: false,
    required: ["name"],
    properties: {
      ...thingBaseProperties,
      address: { anyOf: [stringRef, { $ref: "#/$defs/thingRef" }] },
      containsPlace: {
        anyOf: [
          { $ref: "#/$defs/thingRef" },
          { type: "array", minItems: 1, items: { $ref: "#/$defs/thingRef" } },
        ],
      },
      image: { anyOf: [stringRef, { $ref: "#/$defs/image" }] },
    },
  }, ["thingRef", "image"])),
  entry("Vehicle", "vehicle", "Structured Data Vehicle Input", withSharedDefs({
    type: "object",
    additionalProperties: false,
    required: ["name"],
    properties: {
      ...thingBaseProperties,
      brand: { anyOf: [stringRef, { $ref: "#/$defs/thingRef" }] },
      offers: { $ref: "#/$defs/offerLike" },
      vehicleIdentificationNumber: { type: "string" },
      vehicleModelDate: { type: "string" },
      mileageFromOdometer: { $ref: "#/$defs/thingRef" },
      image: { anyOf: [stringRef, { $ref: "#/$defs/image" }] },
    },
  }, ["thingRef", "offerLike", "image"])),
  entry("VideoObject", "video-object", "Structured Data VideoObject Input", withSharedDefs({
    type: "object",
    additionalProperties: false,
    required: ["name", "thumbnailUrl", "uploadDate"],
    properties: {
      ...thingBaseProperties,
      thumbnailUrl: {
        anyOf: [
          stringRef,
          { type: "array", minItems: 1, items: stringRef },
        ],
      },
      uploadDate: { type: "string", minLength: 1 },
      duration: { type: "string" },
      embedUrl: { type: "string" },
      contentUrl: { type: "string" },
      clip: { type: "array", items: { $ref: "#/$defs/clip" } },
      publication: {
        anyOf: [
          { $ref: "#/$defs/broadcastEvent" },
          { type: "array", minItems: 1, items: { $ref: "#/$defs/broadcastEvent" } },
        ],
      },
    },
  }, ["clip", "broadcastEvent"])),
  entry("WebApplication", "web-application", "Structured Data WebApplication Input", withSharedDefs({
    type: "object",
    additionalProperties: false,
    required: ["name"],
    properties: {
      ...thingBaseProperties,
      applicationCategory: { type: "string" },
      operatingSystem: { type: "string" },
      offers: { $ref: "#/$defs/offerLike" },
      softwareVersion: { type: "string" },
      image: { anyOf: [stringRef, { $ref: "#/$defs/image" }] },
    },
  }, ["offerLike", "image"])),
  entry("WebPage", "web-page", "Structured Data WebPage Input", withSharedDefs({
    type: "object",
    additionalProperties: false,
    required: ["name"],
    properties: {
      ...thingBaseProperties,
      primaryType: { type: "string" },
      mainEntity: { anyOf: [stringRef, { $ref: "#/$defs/thingRef" }] },
      breadcrumb: { anyOf: [stringRef, { $ref: "#/$defs/thingRef" }] },
      isPartOf: { anyOf: [stringRef, { $ref: "#/$defs/thingRef" }] },
      datePublished: { type: "string" },
      dateModified: { type: "string" },
      image: { anyOf: [stringRef, { $ref: "#/$defs/image" }] },
    },
  }, ["thingRef", "image"])),
  entry("WebSite", "web-site", "Structured Data WebSite Input", withSharedDefs({
    type: "object",
    additionalProperties: false,
    required: ["name"],
    properties: {
      ...thingBaseProperties,
      publisher: { anyOf: [stringRef, { $ref: "#/$defs/thingRef" }] },
      potentialAction: { anyOf: [stringRef, { $ref: "#/$defs/thingRef" }] },
      image: { anyOf: [stringRef, { $ref: "#/$defs/image" }] },
    },
  }, ["thingRef", "image"])),
] as const satisfies readonly StructuredDataSchemaRegistryEntry[]);

const STRUCTURED_DATA_SCHEMA_BY_TYPE = new Map<string, StructuredDataSchemaRegistryEntry>(
  STRUCTURED_DATA_SCHEMA_REGISTRY.map((entry) => [entry.type, entry]),
);

const STRUCTURED_DATA_SCHEMA_BY_SCHEMA_ID = new Map<string, StructuredDataSchemaRegistryEntry>(
  STRUCTURED_DATA_SCHEMA_REGISTRY.map((entry) => [entry.schemaId, entry]),
);

function joinPath(basePath: string, next: string): string {
  return basePath ? `${basePath}.${next}` : next;
}

function issue(keyword: string, path: string, message: string): StructuredDataValidationIssue {
  return { keyword, path, message };
}

function asRecord(value: unknown): Record<string, unknown> | undefined {
  return value && typeof value === "object" && !Array.isArray(value) ? (value as Record<string, unknown>) : undefined;
}

function resolveRef(root: StructuredDataSchemaDefinition, ref: string): StructuredDataSchemaProperty | undefined {
  if (!ref.startsWith("#/$defs/")) return undefined;
  return root.$defs?.[ref.slice("#/$defs/".length)];
}

function validateAgainstSchema(
  root: StructuredDataSchemaDefinition,
  schema: StructuredDataSchemaProperty,
  value: unknown,
  path: string,
): StructuredDataValidationIssue[] {
  const issues: StructuredDataValidationIssue[] = [];
  if ("$ref" in schema && schema.$ref) {
    const resolved = resolveRef(root, schema.$ref);
    if (!resolved) return [issue("ref", path, `Schema reference ${schema.$ref} could not be resolved.`)];
    return validateAgainstSchema(root, resolved, value, path);
  }

  if ("anyOf" in schema && schema.anyOf?.length) {
    const branchResults = schema.anyOf.map((branch) => validateAgainstSchema(root, branch, value, path));
    if (branchResults.some((result) => result.length === 0)) return [];
    return [issue("anyOf", path, "Value did not satisfy any allowed schema shape.")];
  }

  if (schema.type === "string") {
    if (typeof value !== "string") return [issue("type", path, "Expected string.")];
    if (schema.minLength !== undefined && value.length < schema.minLength) {
      issues.push(issue("minLength", path, `Expected at least ${schema.minLength} characters.`));
    }
    if (schema.enum && !schema.enum.includes(value)) {
      issues.push(issue("enum", path, `Expected one of: ${schema.enum.join(", ")}.`));
    }
    return issues;
  }

  if (schema.type === "number") {
    if (typeof value !== "number" || Number.isNaN(value)) return [issue("type", path, "Expected number.")];
    return issues;
  }

  if (schema.type === "boolean") {
    if (typeof value !== "boolean") return [issue("type", path, "Expected boolean.")];
    return issues;
  }

  if (schema.type === "array") {
    if (!Array.isArray(value)) return [issue("type", path, "Expected array.")];
    if (schema.minItems !== undefined && value.length < schema.minItems) {
      issues.push(issue("minItems", path, `Expected at least ${schema.minItems} items.`));
    }
    if (schema.items) {
      value.forEach((item, index) => {
        issues.push(...validateAgainstSchema(root, schema.items!, item, `${path}[${index}]`));
      });
    }
    return issues;
  }

  if (schema.type === "object") {
    const record = asRecord(value);
    if (!record) return [issue("type", path, "Expected object.")];
    for (const requiredKey of schema.required ?? []) {
      if (!(requiredKey in record)) {
        issues.push(issue("required", joinPath(path, requiredKey), "Required property is missing."));
      }
    }
    const propertyKeys = new Set(Object.keys(schema.properties ?? {}));
    if (schema.additionalProperties === false) {
      for (const key of Object.keys(record)) {
        if (!propertyKeys.has(key)) {
          issues.push(issue("additionalProperties", joinPath(path, key), "Unexpected property."));
        }
      }
    }
    for (const [key, propertySchema] of Object.entries(schema.properties ?? {})) {
      if (!(key in record)) continue;
      issues.push(...validateAgainstSchema(root, propertySchema, record[key], joinPath(path, key)));
    }
    return issues;
  }

  return issues;
}

export function listStructuredDataSchemas(): readonly StructuredDataSchemaRegistryEntry[] {
  return STRUCTURED_DATA_SCHEMA_REGISTRY;
}

export function getStructuredDataSchemaByType(type: string): StructuredDataSchemaRegistryEntry | undefined {
  return STRUCTURED_DATA_SCHEMA_BY_TYPE.get(type);
}

export function getStructuredDataSchemaBySchemaId(schemaIdValue: string): StructuredDataSchemaRegistryEntry | undefined {
  return STRUCTURED_DATA_SCHEMA_BY_SCHEMA_ID.get(schemaIdValue);
}

export function validateStructuredDataByType(type: string, value: unknown): StructuredDataValidationIssue[] {
  const entry = getStructuredDataSchemaByType(type);
  return entry ? validateAgainstSchema(entry.schema, entry.schema, value, "data") : [];
}

export function validateStructuredDataBySchemaId(schemaIdValue: string, value: unknown): StructuredDataValidationIssue[] {
  const entry = getStructuredDataSchemaBySchemaId(schemaIdValue);
  return entry ? validateAgainstSchema(entry.schema, entry.schema, value, "data") : [];
}
