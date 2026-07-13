import { additionalProps, imageValue, node, personOrOrganizationRef, requireText } from "./core.js";
import {
  articleNode,
  aggregateRatingNode,
  broadcastEventNode,
  clipNode,
  imageObjectSchema,
  newsArticleNode,
  productNode,
  qaPageSchema,
  softwareApplicationNode,
  softwareSourceCodeNode,
  webApplicationNode,
  webPageSchema,
  webSiteSchema,
  organizationNode,
  techArticleNode,
  itemListNode,
  faqPageSchema,
  breadcrumbListSchema,
  creativeWorkNode,
  howToNode,
} from "./builders-primary.js";
import type {
  AggregateRatingInput,
  BookInput,
  ClaimReviewInput,
  CourseInput,
  CourseInstanceInput,
  DiscussionForumPostingInput,
  JobPostingInput,
  JsonLd,
  LearningResourceInput,
  LocalBusinessInput,
  LoyaltyProgramInput,
  MathSolverInput,
  MemberProgramTierInput,
  MerchantReturnPolicySeasonalOverrideInput,
  MovieInput,
  MusicAlbumInput,
  MusicCompositionInput,
  MusicGroupInput,
  MusicPlaylistInput,
  MusicRecordingInput,
  MusicReleaseInput,
  PaywalledContentInput,
  PolicyInput,
  ProductGroupInput,
  ProductModelInput,
  RecipeInput,
  SolveMathActionInput,
  SpeakableInput,
  StructuredDataBreadcrumbItem,
  StructuredDataFaqItem,
  StructuredDataPage,
  StructuredDataSite,
  VacationRentalInput,
  VehicleInput,
} from "./types.js";
import { canonicalHref, stableId } from "./core.js";

export function courseNode(input: CourseInput): JsonLd {
  const extra = additionalProps(input, ["id", "name", "description", "url", "image", "provider", "courseCode", "coursePrerequisites", "hasCourseInstance"]);
  return node("Course", {
    ...extra,
    "@id": input.id,
    name: requireText(input.name, "name"),
    description: input.description,
    url: input.url,
    image: imageValue(input.image, imageObjectSchema),
    provider: personOrOrganizationRef(input.provider),
    courseCode: input.courseCode,
    coursePrerequisites: input.coursePrerequisites,
    hasCourseInstance: input.hasCourseInstance,
  });
}

export function courseInstanceNode(input: CourseInstanceInput): JsonLd {
  const extra = additionalProps(input, ["id", "name", "description", "url", "image", "courseMode", "startDate", "endDate", "location", "instructor"]);
  return node("CourseInstance", {
    ...extra,
    "@id": input.id,
    name: requireText(input.name, "name"),
    description: input.description,
    url: input.url,
    courseMode: input.courseMode,
    startDate: input.startDate,
    endDate: input.endDate,
    location: input.location,
    instructor: typeof input.instructor === "string" ? { "@type": "Person", name: input.instructor } : input.instructor,
  });
}

export function discussionForumPostingNode(input: DiscussionForumPostingInput): JsonLd {
  const extra = additionalProps(input, ["id", "name", "description", "url", "image", "headline", "author", "datePublished", "dateModified", "articleBody"]);
  return node("DiscussionForumPosting", {
    ...extra,
    "@id": input.id,
    headline: input.headline ?? input.name,
    name: requireText(input.name, "name"),
    description: input.description,
    url: input.url,
    image: imageValue(input.image, imageObjectSchema),
    author: personOrOrganizationRef(input.author),
    datePublished: input.datePublished,
    dateModified: input.dateModified,
    articleBody: input.articleBody,
  });
}

export function bookNode(input: BookInput): JsonLd {
  const extra = additionalProps(input, ["id", "name", "description", "url", "image", "author", "isbn", "readAction"]);
  return node("Book", {
    ...extra,
    "@id": input.id,
    name: requireText(input.name, "name"),
    description: input.description,
    url: input.url,
    image: imageValue(input.image, imageObjectSchema),
    author: personOrOrganizationRef(input.author),
    isbn: input.isbn,
    potentialAction: typeof input.readAction === "string" ? readActionNode(input.readAction) : input.readAction,
  });
}

export function readActionNode(target: string | JsonLd): JsonLd {
  return node("ReadAction", { target });
}

export function claimReviewNode(input: ClaimReviewInput): JsonLd {
  const extra = additionalProps(input, ["id", "name", "description", "url", "image", "claimReviewed", "itemReviewed", "author", "reviewRating", "datePublished"]);
  return node("ClaimReview", {
    ...extra,
    "@id": input.id,
    name: requireText(input.name, "name"),
    description: input.description,
    url: input.url,
    claimReviewed: requireText(input.claimReviewed, "claimReviewed"),
    itemReviewed: input.itemReviewed,
    author: personOrOrganizationRef(input.author),
    reviewRating: input.reviewRating,
    datePublished: input.datePublished,
  });
}

export function employerAggregateRatingNode(input: AggregateRatingInput): JsonLd {
  return { ...aggregateRatingNode(input), "@type": "EmployerAggregateRating" };
}

export function estimatedSalaryNode(input: { name?: string; currency?: string; minValue?: number; maxValue?: number; unitText?: string }): JsonLd {
  const extra = additionalProps(input as Record<string, unknown>, ["name", "currency", "minValue", "maxValue", "unitText"]);
  return node("MonetaryAmountDistribution", {
    ...extra,
    name: input.name,
    currency: input.currency,
    duration: input.unitText && /^P/i.test(input.unitText) ? input.unitText : undefined,
    percentile10: input.minValue,
    percentile90: input.maxValue,
  });
}

export function jobPostingNode(input: JobPostingInput): JsonLd {
  const extra = additionalProps(input, ["id", "title", "name", "description", "url", "image", "datePosted", "validThrough", "employmentType", "hiringOrganization", "jobLocation", "baseSalary"]);
  return node("JobPosting", {
    ...extra,
    "@id": input.id,
    title: requireText(input.title, "title"),
    name: input.name || input.title,
    description: input.description,
    url: input.url,
    datePosted: requireText(input.datePosted, "datePosted"),
    validThrough: input.validThrough,
    employmentType: input.employmentType,
    hiringOrganization: personOrOrganizationRef(input.hiringOrganization),
    jobLocation: input.jobLocation,
    baseSalary: input.baseSalary,
  });
}

export function localBusinessNode(input: LocalBusinessInput): JsonLd {
  const extra = additionalProps(input, ["id", "name", "description", "url", "image", "logo", "sameAs", "address", "telephone", "priceRange", "openingHours"]);
  return node("LocalBusiness", {
    ...extra,
    "@id": input.id,
    name: requireText(input.name, "name"),
    description: input.description,
    url: input.url,
    image: imageValue(input.image, imageObjectSchema),
    logo: imageValue(input.logo, imageObjectSchema),
    sameAs: input.sameAs,
    address: input.address,
    telephone: input.telephone,
    priceRange: input.priceRange,
    openingHours: input.openingHours,
  });
}

export function loyaltyProgramNode(input: LoyaltyProgramInput): JsonLd {
  const extra = additionalProps(input, ["id", "name", "description", "url", "image", "provider"]);
  return node("MemberProgram", {
    ...extra,
    "@id": input.id,
    name: requireText(input.name, "name"),
    description: input.description,
    url: input.url,
  });
}

export function memberProgramTierNode(input: MemberProgramTierInput): JsonLd {
  const extra = additionalProps(input, [
    "id",
    "name",
    "description",
    "url",
    "image",
    "hasTierBenefit",
    "membershipPointsEarned",
    "membershipPointsRequired",
    "validFrom",
    "validThrough",
  ]);
  return node("MemberProgramTier", {
    ...extra,
    "@id": input.id,
    name: requireText(input.name, "name"),
    description: input.description,
    url: input.url,
    image: imageValue(input.image, imageObjectSchema),
    validFrom: input.validFrom,
    validThrough: input.validThrough,
  });
}

export function mathSolverNode(input: MathSolverInput): JsonLd {
  const extra = additionalProps(input, ["id", "name", "description", "url", "image", "mathExpression", "potentialAction", "learningResource"]);
  return node("MathSolver", {
    ...extra,
    "@id": input.id,
    name: requireText(input.name, "name"),
    description: input.description,
    url: input.url,
    mathExpression: input.mathExpression,
    potentialAction: input.potentialAction,
    learningResourceType: "Math Solver",
    subjectOf: input.learningResource,
  });
}

export function learningResourceNode(input: LearningResourceInput): JsonLd {
  const extra = additionalProps(input, ["id", "name", "description", "url", "image", "learningResourceType", "educationalLevel", "teaches"]);
  return node("LearningResource", {
    ...extra,
    "@id": input.id,
    name: requireText(input.name, "name"),
    description: input.description,
    url: input.url,
    learningResourceType: input.learningResourceType ?? "Math Solver",
    educationalLevel: input.educationalLevel,
    teaches: input.teaches,
  });
}

export function solveMathActionNode(input: SolveMathActionInput): JsonLd {
  const extra = additionalProps(input, ["id", "target", "mathExpressionInput", "eduQuestionType"]);
  return node("SolveMathAction", {
    ...extra,
    "@id": input.id,
    target: input.target,
    eduQuestionType: input.eduQuestionType,
  });
}

export function merchantReturnPolicyNode(input: PolicyInput): JsonLd {
  const extra = additionalProps(input, ["id", "name", "description", "url", "image", "merchantReturnDays", "returnPolicyCategory", "shippingDestination", "shippingRate"]);
  return node("MerchantReturnPolicy", {
    ...extra,
    "@id": input.id,
    name: requireText(input.name, "name"),
    description: input.description,
    url: input.url,
    merchantReturnDays: input.merchantReturnDays,
    returnPolicyCategory: input.returnPolicyCategory,
  });
}

export function merchantReturnPolicySeasonalOverrideNode(input: MerchantReturnPolicySeasonalOverrideInput): JsonLd {
  const extra = additionalProps(input, [
    "id",
    "name",
    "description",
    "url",
    "image",
    "endDate",
    "merchantReturnDays",
    "returnPolicyCategory",
    "startDate",
  ]);
  return node("MerchantReturnPolicySeasonalOverride", {
    ...extra,
    "@id": input.id,
    name: requireText(input.name, "name"),
    description: input.description,
    url: input.url,
    image: imageValue(input.image, imageObjectSchema),
    endDate: input.endDate,
    merchantReturnDays: input.merchantReturnDays,
    returnPolicyCategory: input.returnPolicyCategory,
    startDate: input.startDate,
  });
}

export function offerShippingDetailsNode(input: PolicyInput): JsonLd {
  const extra = additionalProps(input, ["id", "name", "description", "url", "image", "merchantReturnDays", "returnPolicyCategory", "shippingDestination", "shippingRate"]);
  return node("OfferShippingDetails", {
    ...extra,
    "@id": input.id,
    name: requireText(input.name, "name"),
    description: input.description,
    shippingDestination: input.shippingDestination,
    shippingRate: input.shippingRate,
  });
}

export function movieNode(input: MovieInput): JsonLd {
  const extra = additionalProps(input, ["id", "name", "description", "url", "image", "director", "actor", "datePublished"]);
  return node("Movie", {
    ...extra,
    "@id": input.id,
    name: requireText(input.name, "name"),
    description: input.description,
    url: input.url,
    image: imageValue(input.image, imageObjectSchema),
    director: personOrOrganizationRef(input.director),
    actor: Array.isArray(input.actor) ? input.actor.map(personOrOrganizationRef) : personOrOrganizationRef(input.actor),
    datePublished: input.datePublished,
  });
}

export function musicAlbumNode(input: MusicAlbumInput): JsonLd {
  const extra = additionalProps(input, [
    "id", "name", "description", "url", "image", "about", "abstract", "audience", "author", "dateCreated", "dateModified", "datePublished", "text",
    "byArtist", "numTracks", "track",
  ]);
  return {
    ...creativeWorkNode(input),
    ...extra,
    "@type": "MusicAlbum",
    byArtist: input.byArtist,
    numTracks: input.numTracks,
    track: input.track,
  };
}

export function musicCompositionNode(input: MusicCompositionInput): JsonLd {
  const extra = additionalProps(input, [
    "id", "name", "description", "url", "image", "about", "abstract", "audience", "author", "dateCreated", "dateModified", "datePublished", "text",
    "composer", "lyricist",
  ]);
  return {
    ...creativeWorkNode(input),
    ...extra,
    "@type": "MusicComposition",
    composer: input.composer,
    lyricist: input.lyricist,
  };
}

export function musicGroupNode(input: MusicGroupInput): JsonLd {
  const extra = additionalProps(input, ["id", "name", "description", "url", "image", "album", "track"]);
  return node("MusicGroup", {
    ...extra,
    "@id": input.id,
    name: requireText(input.name, "name"),
    description: input.description,
    url: input.url,
    image: imageValue(input.image, imageObjectSchema),
    album: input.album,
    track: input.track,
  });
}

export function musicPlaylistNode(input: MusicPlaylistInput): JsonLd {
  const extra = additionalProps(input, [
    "id", "name", "description", "url", "image", "about", "abstract", "audience", "author", "dateCreated", "dateModified", "datePublished", "text",
    "numTracks", "track",
  ]);
  return {
    ...creativeWorkNode(input),
    ...extra,
    "@type": "MusicPlaylist",
    numTracks: input.numTracks,
    track: input.track,
  };
}

export function musicRecordingNode(input: MusicRecordingInput): JsonLd {
  const extra = additionalProps(input, [
    "id", "name", "description", "url", "image", "about", "abstract", "audience", "author", "dateCreated", "dateModified", "datePublished", "text",
    "byArtist", "duration", "inAlbum",
  ]);
  return {
    ...creativeWorkNode(input),
    ...extra,
    "@type": "MusicRecording",
    byArtist: input.byArtist,
    duration: input.duration,
    inAlbum: input.inAlbum,
  };
}

export function musicReleaseNode(input: MusicReleaseInput): JsonLd {
  const extra = additionalProps(input, [
    "id", "name", "description", "url", "image", "about", "abstract", "audience", "author", "dateCreated", "dateModified", "datePublished", "text",
    "catalogNumber", "musicReleaseFormat", "recordLabel",
  ]);
  return {
    ...creativeWorkNode(input),
    ...extra,
    "@type": "MusicRelease",
    catalogNumber: input.catalogNumber,
    musicReleaseFormat: input.musicReleaseFormat,
    recordLabel: personOrOrganizationRef(input.recordLabel),
  };
}

export function productGroupNode(input: ProductGroupInput): JsonLd {
  return {
    ...productNode(input),
    "@type": "ProductGroup",
    hasVariant: input.hasVariant,
    variesBy: input.variesBy,
  };
}

export function productModelNode(input: ProductModelInput): JsonLd {
  return {
    ...productNode(input),
    "@type": "ProductModel",
    isVariantOf: input.isVariantOf,
    model: input.model,
  };
}

export function recipeNode(input: RecipeInput): JsonLd {
  const extra = additionalProps(input, ["id", "name", "description", "url", "image", "recipeIngredient", "recipeInstructions", "author", "datePublished", "prepTime", "cookTime", "totalTime"]);
  return node("Recipe", {
    ...extra,
    "@id": input.id,
    name: requireText(input.name, "name"),
    description: input.description,
    url: input.url,
    image: imageValue(input.image, imageObjectSchema),
    author: personOrOrganizationRef(input.author),
    datePublished: input.datePublished,
    recipeIngredient: input.recipeIngredient,
    recipeInstructions: Array.isArray(input.recipeInstructions)
      ? input.recipeInstructions.map((step, index) => ({
          "@type": "HowToStep",
          position: index + 1,
          name: requireText(step.name, "Recipe step name"),
          text: requireText(step.text, "Recipe step text"),
        }))
      : input.recipeInstructions,
    prepTime: input.prepTime,
    cookTime: input.cookTime,
    totalTime: input.totalTime,
  });
}

export function speakableSpecificationNode(input: SpeakableInput): JsonLd {
  const extra = additionalProps(input, ["cssSelector", "xpath"]);
  return node("SpeakableSpecification", {
    ...extra,
    cssSelector: input.cssSelector,
    xpath: input.xpath,
  });
}

export function paywalledContentSchema(input: PaywalledContentInput): JsonLd {
  return {
    ...webPageSchema(input),
    isAccessibleForFree: false,
    hasPart: input.cssSelector?.map((selector) => ({
      "@type": "WebPageElement",
      isAccessibleForFree: false,
      cssSelector: selector,
    })),
  };
}

export function vacationRentalNode(input: VacationRentalInput): JsonLd {
  const extra = additionalProps(input, ["id", "name", "description", "url", "image", "address", "containsPlace"]);
  return node("VacationRental", {
    ...extra,
    "@id": input.id,
    name: requireText(input.name, "name"),
    description: input.description,
    url: input.url,
    image: imageValue(input.image, imageObjectSchema),
    address: input.address,
    containsPlace: input.containsPlace,
  });
}

export function vehicleListingNode(input: VehicleInput): JsonLd {
  const extra = additionalProps(input, ["id", "name", "description", "url", "image", "brand", "offers", "vehicleIdentificationNumber", "vehicleModelDate", "mileageFromOdometer"]);
  return node("Vehicle", {
    ...extra,
    "@id": input.id,
    name: requireText(input.name, "name"),
    description: input.description,
    url: input.url,
    image: imageValue(input.image, imageObjectSchema),
    brand: input.brand,
    offers: input.offers,
    vehicleIdentificationNumber: input.vehicleIdentificationNumber,
    vehicleModelDate: input.vehicleModelDate,
    mileageFromOdometer: input.mileageFromOdometer,
  });
}

export function organizationSchema(site: StructuredDataSite): JsonLd {
  return organizationNode({
    id: stableId(site.product.canonicalUrl, "organization"),
    name: site.product.name,
    description: site.product.description,
    url: site.product.canonicalUrl,
    logo: site.product.logo,
    sameAs: site.product.sameAs,
  });
}

export function websiteSchema(site: StructuredDataSite): JsonLd {
  return webSiteSchema({
    id: stableId(site.product.canonicalUrl, "website"),
    name: site.product.name,
    description: site.product.description,
    url: site.product.canonicalUrl,
  });
}

export function softwareApplicationSchema(site: StructuredDataSite): JsonLd {
  return softwareApplicationNode({
    id: stableId(site.product.canonicalUrl, "software-application"),
    name: site.product.name,
    description: site.product.description,
    url: site.product.canonicalUrl,
    image: site.product.logo,
    applicationCategory: site.product.category,
  });
}

export function webApplicationSchema(site: StructuredDataSite): JsonLd {
  return webApplicationNode({
    id: stableId(site.product.canonicalUrl, "web-application"),
    name: site.product.name,
    description: site.product.description,
    url: site.product.canonicalUrl,
    image: site.product.logo,
    applicationCategory: site.product.category,
  });
}

export function softwareSourceCodeSchema(page: StructuredDataPage): JsonLd {
  return softwareSourceCodeNode({
    id: stableId(page.canonicalUrl, "software-source-code"),
    name: page.h1,
    description: page.description,
    url: page.canonicalUrl,
  });
}

export function techArticleSchema(page: StructuredDataPage): JsonLd {
  return techArticleNode({
    id: stableId(page.canonicalUrl, "tech-article"),
    name: page.h1,
    headline: page.title,
    description: page.description,
    url: page.canonicalUrl,
    image: page.image,
    datePublished: page.datePublished,
    dateModified: page.dateModified,
    author: page.authorName,
  });
}

export function articleSchema(page: StructuredDataPage): JsonLd {
  return articleNode({
    id: stableId(page.canonicalUrl, "article"),
    name: page.h1,
    headline: page.title,
    description: page.description,
    url: page.canonicalUrl,
    image: page.image,
    datePublished: page.datePublished,
    dateModified: page.dateModified,
    author: page.authorName,
  });
}

export function newsArticleSchema(page: StructuredDataPage): JsonLd {
  return newsArticleNode({
    id: stableId(page.canonicalUrl, "news-article"),
    name: page.h1,
    headline: page.title,
    description: page.description,
    url: page.canonicalUrl,
    image: page.image,
    datePublished: page.datePublished,
    dateModified: page.dateModified,
    author: page.authorName,
  });
}

export function breadcrumbSchema(items: StructuredDataBreadcrumbItem[]): JsonLd {
  return breadcrumbListSchema({ items });
}

export function faqSchema(items: StructuredDataFaqItem[]): JsonLd {
  return faqPageSchema({ items });
}

export function itemListSchema(name: string, items: Array<{ name: string; url?: string }>): JsonLd {
  return itemListNode({ name, items });
}

export function howToSchema(page: StructuredDataPage): JsonLd {
  return howToNode({
    id: stableId(page.canonicalUrl, "how-to"),
    name: page.h1,
    description: page.description,
    url: page.canonicalUrl,
    steps: [{ name: page.h1, text: page.description ?? page.title, url: page.canonicalUrl }],
  });
}

export interface BuildJsonLdGraphOptions {
  entities?: readonly JsonLd[];
}

export function buildJsonLdGraph(
  site: StructuredDataSite,
  page: StructuredDataPage,
  options: BuildJsonLdGraphOptions = {},
): JsonLd[] {
  const canonicalRoot = site.product.canonicalUrl;
  const organization = organizationSchema(site);
  const website = websiteSchema(site);
  const breadcrumb = breadcrumbListSchema({
    id: stableId(page.canonicalUrl, "breadcrumb"),
    items: page.breadcrumbs.map((item) => ({ ...item, href: canonicalHref(canonicalRoot, item.href) })),
  });
  const graph: JsonLd[] = [
    organization,
    website,
    webPageSchema({
      id: stableId(page.canonicalUrl, "web-page"),
      name: page.h1,
      description: page.description,
      url: page.canonicalUrl,
      image: page.image,
      breadcrumb,
      isPartOf: website,
      datePublished: page.datePublished,
      dateModified: page.dateModified,
    }),
    breadcrumb,
  ];

  if (page.kind === "answer" || page.kind === "feature" || page.kind === "docs_bridge") graph.push(techArticleSchema(page));
  if (page.faq?.length) graph.push(faqSchema(page.faq));
  if (page.kind === "package") graph.push(softwareSourceCodeSchema(page));
  if (page.kind === "blog" || page.kind === "update") {
    graph.push(
      articleNode({
        id: stableId(page.canonicalUrl, "blog-posting"),
        name: page.h1,
        headline: page.title,
        description: page.description,
        url: page.canonicalUrl,
        image: page.image,
        datePublished: page.datePublished,
        dateModified: page.dateModified,
        author: page.authorName ?? organization,
        publisher: organization,
      }),
    );
    graph[graph.length - 1]["@type"] = "BlogPosting";
  }

  const entityIds = new Set(
    graph
      .map((entry) => entry["@id"])
      .filter((id): id is string => typeof id === "string" && id.length > 0),
  );
  for (const entity of options.entities ?? []) {
    const id = entity["@id"];
    if (typeof id === "string" && id.length > 0) {
      if (entityIds.has(id)) continue;
      entityIds.add(id);
    }
    graph.push(entity);
  }

  return graph;
}
