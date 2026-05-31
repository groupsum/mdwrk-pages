import { additionalProps, imageValue, node, personOrOrganizationRef, requireText } from "./core.js";
import type {
  ActionInput,
  AdministrativeAreaInput,
  AboutPageInput,
  AggregateOfferInput,
  AggregateRatingInput,
  AlignmentObjectInput,
  AnswerInput,
  ArticleInput,
  AudienceInput,
  AudioObjectInput,
  BrandInput,
  BroadcastChannelInput,
  BroadcastFrequencySpecificationInput,
  BroadcastServiceInput,
  CableOrSatelliteServiceInput,
  CategoryCodeInput,
  CategoryCodeSetInput,
  ClassInput,
  BroadcastEventInput,
  BreadcrumbListInput,
  CertificationInput,
  ClaimInput,
  CivicStructureInput,
  CommentInput,
  ConstraintNodeInput,
  ContactPointInput,
  CheckoutPageInput,
  ClipInput,
  CollectionPageInput,
  CorrectionCommentInput,
  ContactPageInput,
  CredentialInput,
  CreditCardInput,
  CssSelectorTypeInput,
  DataCatalogInput,
  DataDownloadInput,
  DataFeedInput,
  DataFeedItemInput,
  DatasetInput,
  DefinedRegionInput,
  DefinedTermInput,
  DefinedTermSetInput,
  DeliveryChargeSpecificationInput,
  DemandInput,
  DistanceInput,
  DurationInput,
  EducationalOccupationalCredentialInput,
  EducationalOrganizationInput,
  EnergyConsumptionDetailsInput,
  EnergyInput,
  EntryPointInput,
  EnumerationInput,
  EpisodeInput,
  EventInput,
  FaqPageInput,
  FinancialProductInput,
  GeneInput,
  GeoCoordinatesInput,
  GeospatialGeometryInput,
  GeoShapeInput,
  GrantInput,
  HyperTocEntryInput,
  HealthInsurancePlanInput,
  HealthPlanCostSharingSpecificationInput,
  HealthPlanFormularyInput,
  HealthPlanNetworkInput,
  HowToItemInput,
  HowToInput,
  HowToSectionInput,
  HowToStepInput,
  HowToSupplyInput,
  HowToToolInput,
  ImageGalleryInput,
  ImageObjectInput,
  InteractionCounterInput,
  IntegerInput,
  ItemPageInput,
  ItemListInput,
  JsonLd,
  IntangibleInput,
  LanguageInput,
  LifestyleModificationInput,
  ListItemInput,
  LoanOrCreditInput,
  LocationFeatureSpecificationInput,
  MassInput,
  MapInput,
  MaximumDoseScheduleInput,
  MediaGalleryInput,
  MediaObjectInput,
  MediaSubscriptionInput,
  MenuItemInput,
  MenuSectionInput,
  MedicalAudienceInput,
  MedicalCauseInput,
  MedicalCodeInput,
  MedicalConditionInput,
  MedicalConditionStageInput,
  MedicalContraindicationInput,
  MedicalDeviceInput,
  MedicalEntityInput,
  MedicalGuidelineInput,
  MedicalIntangibleInput,
  MedicalProcedureInput,
  MedicalRiskFactorInput,
  MedicalSignInput,
  MedicalSignOrSymptomInput,
  MedicalStudyInput,
  MedicalTestInput,
  MedicalTherapyInput,
  MedicalWebPageInput,
  MemberProgramTierInput,
  MerchantReturnPolicySeasonalOverrideInput,
  MonetaryAmountInput,
  NutritionInformationInput,
  OccupationInput,
  OccupationalExperienceRequirementsInput,
  OfferCatalogInput,
  OfferInput,
  OpeningHoursSpecificationInput,
  OrganizationInput,
  OperatingSystemInput,
  ProgramMembershipInput,
  PublicationEventInput,
  RepaymentSpecificationInput,
  CountryInput,
  CreativeWorkInput,
  CreativeWorkSeasonInput,
  CreativeWorkSeriesInput,
  PropertyInput,
  PropertyValueInput,
  ProductInput,
  ProfilePageInput,
  QaPageInput,
  QuantitativeValueDistributionInput,
  QuantitativeValueInput,
  QuestionInput,
  QuizInput,
  RatingInput,
  RealEstateListingInput,
  ReviewInput,
  RuntimePlatformInput,
  ScheduleInput,
  SearchResultsPageInput,
  SeriesInput,
  ServiceInput,
  ServiceChannelInput,
  ServicePeriodInput,
  ShippingConditionsInput,
  ShippingDeliveryTimeInput,
  ShippingRateSettingsInput,
  ShippingServiceInput,
  StatisticalVariableInput,
  SubstanceInput,
  TaxonInput,
  SoftwareApplicationInput,
  SoftwareSourceCodeInput,
  SuperficialAnatomyInput,
  StructuredValueInput,
  TypeAndQuantityNodeInput,
  TextObjectInput,
  TherapeuticProcedureInput,
  ThingInput,
  TripInput,
  UnitPriceSpecificationInput,
  UrlInput,
  VideoObjectInput,
  VideoGalleryInput,
  VirtualLocationInput,
  WarrantyPromiseInput,
  WebPageInput,
  WebContentInput,
  WebPageElementInput,
  WebSiteInput,
  XPathTypeInput,
} from "./types.js";

export function thingNode(input: ThingInput): JsonLd {
  const extra = additionalProps(input, [
    "id",
    "name",
    "description",
    "url",
    "image",
    "alternateName",
    "disambiguatingDescription",
    "identifier",
    "mainEntityOfPage",
    "owner",
    "potentialAction",
    "sameAs",
    "subjectOf",
  ]);
  return node("Thing", {
    ...extra,
    "@id": input.id,
    name: requireText(input.name, "name"),
    description: input.description,
    url: input.url,
    image: imageValue(input.image, imageObjectSchema),
    alternateName: input.alternateName,
    disambiguatingDescription: input.disambiguatingDescription,
    identifier: input.identifier,
    mainEntityOfPage: input.mainEntityOfPage,
    owner: personOrOrganizationRef(input.owner),
    potentialAction: input.potentialAction,
    sameAs: input.sameAs,
    subjectOf: input.subjectOf,
  });
}

export function intangibleNode(input: IntangibleInput): JsonLd {
  return {
    ...thingNode(input),
    "@type": "Intangible",
  };
}

export function structuredValueNode(input: StructuredValueInput): JsonLd {
  return {
    ...intangibleNode(input),
    "@type": "StructuredValue",
  };
}

function quantitativeValueLike(value: JsonLd | number | string | undefined) {
  if (value === undefined) return undefined;
  if (typeof value === "number" || typeof value === "string") {
    return { "@type": "QuantitativeValue", value };
  }
  return value;
}

function thingList(value: JsonLd | JsonLd[] | string | string[] | undefined, type = "Thing") {
  if (Array.isArray(value)) {
    return value.map((entry) => (typeof entry === "string" ? { "@type": type, name: entry } : entry));
  }
  if (typeof value === "string") return { "@type": type, name: value };
  return value;
}

export function actionNode(input: ActionInput): JsonLd {
  const extra = additionalProps(input, [
    "id",
    "name",
    "description",
    "url",
    "image",
    "actionProcess",
    "actionStatus",
    "agent",
    "endTime",
    "error",
    "instrument",
    "location",
    "object",
    "participant",
    "provider",
    "result",
    "startTime",
    "target",
  ]);
  return node("Action", {
    ...extra,
    "@id": input.id,
    name: requireText(input.name, "name"),
    description: input.description,
    url: input.url,
    image: imageValue(input.image, imageObjectSchema),
    actionProcess: input.actionProcess,
    actionStatus: input.actionStatus,
    agent: personOrOrganizationRef(input.agent),
    endTime: input.endTime,
    error: input.error,
    instrument: input.instrument,
    location: input.location,
    object: input.object,
    participant: input.participant,
    provider: personOrOrganizationRef(input.provider),
    result: input.result,
    startTime: input.startTime,
    target: input.target,
  });
}

export function administrativeAreaNode(input: AdministrativeAreaInput): JsonLd {
  const extra = additionalProps(input, ["id", "name", "description", "url", "image", "containedInPlace"]);
  return node("AdministrativeArea", {
    ...extra,
    "@id": input.id,
    name: requireText(input.name, "name"),
    description: input.description,
    url: input.url,
    image: imageValue(input.image, imageObjectSchema),
    containedInPlace: input.containedInPlace,
  });
}

export function brandNode(input: BrandInput): JsonLd {
  const extra = additionalProps(input, ["id", "name", "description", "url", "image", "aggregateRating", "logo", "review", "slogan"]);
  return node("Brand", {
    ...extra,
    "@id": input.id,
    name: requireText(input.name, "name"),
    description: input.description,
    url: input.url,
    image: imageValue(input.image, imageObjectSchema),
    aggregateRating: input.aggregateRating,
    logo: imageValue(input.logo ?? input.image, imageObjectSchema),
    review: input.review,
    slogan: input.slogan,
  });
}

export function broadcastChannelNode(input: BroadcastChannelInput): JsonLd {
  const extra = additionalProps(input, ["id", "name", "description", "url", "image", "broadcastChannelId", "inBroadcastLineup", "providesBroadcastService"]);
  return node("BroadcastChannel", {
    ...extra,
    "@id": input.id,
    name: requireText(input.name, "name"),
    description: input.description,
    url: input.url,
    image: imageValue(input.image, imageObjectSchema),
    broadcastChannelId: input.broadcastChannelId,
    inBroadcastLineup: input.inBroadcastLineup,
    providesBroadcastService: input.providesBroadcastService,
  });
}

export function broadcastFrequencySpecificationNode(input: BroadcastFrequencySpecificationInput): JsonLd {
  const extra = additionalProps(input, ["id", "name", "description", "url", "image", "broadcastFrequencyValue", "broadcastSignalModulation", "subtitleLanguage", "videoFormat"]);
  return node("BroadcastFrequencySpecification", {
    ...extra,
    "@id": input.id,
    name: requireText(input.name, "name"),
    description: input.description,
    url: input.url,
    image: imageValue(input.image, imageObjectSchema),
    broadcastFrequencyValue: input.broadcastFrequencyValue,
    broadcastSignalModulation: input.broadcastSignalModulation,
    subtitleLanguage: input.subtitleLanguage,
    videoFormat: input.videoFormat,
  });
}

export function broadcastServiceNode(input: BroadcastServiceInput): JsonLd {
  const extra = additionalProps(input, ["id", "name", "description", "url", "image", "areaServed", "broadcastAffiliateOf", "broadcastDisplayName", "broadcaster", "hasBroadcastChannel", "parentService", "provider"]);
  return node("BroadcastService", {
    ...extra,
    "@id": input.id,
    name: requireText(input.name, "name"),
    description: input.description,
    url: input.url,
    image: imageValue(input.image, imageObjectSchema),
    areaServed: input.areaServed,
    broadcastAffiliateOf: input.broadcastAffiliateOf,
    broadcastDisplayName: input.broadcastDisplayName,
    broadcaster: personOrOrganizationRef(input.broadcaster),
    hasBroadcastChannel: input.hasBroadcastChannel,
    parentService: input.parentService,
    provider: personOrOrganizationRef(input.provider),
  });
}

export function cableOrSatelliteServiceNode(input: CableOrSatelliteServiceInput): JsonLd {
  const extra = additionalProps(input, ["id", "name", "description", "url", "image", "areaServed", "hasOfferCatalog", "provider", "serviceLocation"]);
  return node("CableOrSatelliteService", {
    ...extra,
    "@id": input.id,
    name: requireText(input.name, "name"),
    description: input.description,
    url: input.url,
    image: imageValue(input.image, imageObjectSchema),
    areaServed: input.areaServed,
    hasOfferCatalog: input.hasOfferCatalog,
    provider: personOrOrganizationRef(input.provider),
    serviceLocation: input.serviceLocation,
  });
}

export function classNode(input: ClassInput): JsonLd {
  const extra = additionalProps(input, ["id", "name", "description", "url", "image", "supersededBy"]);
  return node("Class", {
    ...extra,
    "@id": input.id,
    name: requireText(input.name, "name"),
    description: input.description,
    url: input.url,
    image: imageValue(input.image, imageObjectSchema),
    supersededBy: input.supersededBy,
  });
}

export function imageObjectSchema(input: ImageObjectInput): JsonLd {
  const extra = additionalProps(input, ["id", "name", "description", "url", "image", "contentUrl", "width", "height", "caption"]);
  const contentUrl = input.contentUrl ?? input.url;
  return node("ImageObject", {
    ...extra,
    "@id": input.id,
    name: requireText(input.name, "name"),
    description: input.description,
    url: input.url ?? contentUrl,
    contentUrl,
    width: input.width,
    height: input.height,
    caption: input.caption,
  });
}

export function webPageSchema(input: WebPageInput): JsonLd {
  const extra = additionalProps(input, ["id", "name", "description", "url", "image", "primaryType", "mainEntity", "breadcrumb", "isPartOf", "datePublished", "dateModified"]);
  return node("WebPage", {
    ...extra,
    "@id": input.id,
    name: requireText(input.name, "name"),
    headline: input.name,
    description: input.description,
    url: input.url,
    image: imageValue(input.image, imageObjectSchema),
    mainEntity: input.mainEntity,
    breadcrumb: input.breadcrumb,
    isPartOf: input.isPartOf,
    datePublished: input.datePublished,
    dateModified: input.dateModified,
  });
}

function pageVariantNode(
  type: string,
  input: WebPageInput,
  extra: Record<string, unknown> = {},
  passthroughOmittedKeys: readonly string[] = [],
): JsonLd {
  const passthrough = additionalProps(input, [
    "id",
    "name",
    "description",
    "url",
    "image",
    "primaryType",
    "mainEntity",
    "breadcrumb",
    "isPartOf",
    "datePublished",
    "dateModified",
    ...passthroughOmittedKeys,
  ]);
  return {
    ...webPageSchema(input),
    ...passthrough,
    "@type": type,
    ...extra,
  };
}

export function aboutPageNode(input: AboutPageInput): JsonLd {
  return pageVariantNode("AboutPage", input, {
    about: input.about,
  });
}

export function aggregateOfferNode(input: AggregateOfferInput): JsonLd {
  const extra = additionalProps(input, [
    "id",
    "name",
    "description",
    "url",
    "image",
    "availability",
    "businessFunction",
    "category",
    "eligibleQuantity",
    "highPrice",
    "itemCondition",
    "lowPrice",
    "offerCount",
    "offers",
    "price",
    "priceCurrency",
    "priceValidUntil",
    "seller",
    "validFrom",
  ]);
  return node("AggregateOffer", {
    ...extra,
    "@id": input.id,
    name: requireText(input.name, "name"),
    description: input.description,
    url: input.url,
    image: imageValue(input.image, imageObjectSchema),
    availability: input.availability,
    businessFunction: input.businessFunction,
    category: input.category,
    eligibleQuantity: input.eligibleQuantity,
    highPrice: input.highPrice,
    itemCondition: input.itemCondition,
    lowPrice: input.lowPrice,
    offerCount: input.offerCount,
    offers: input.offers,
    price: input.price,
    priceCurrency: input.priceCurrency,
    priceValidUntil: input.priceValidUntil,
    seller: personOrOrganizationRef(input.seller),
    validFrom: input.validFrom,
  });
}

export function alignmentObjectNode(input: AlignmentObjectInput): JsonLd {
  const extra = additionalProps(input, [
    "id",
    "name",
    "description",
    "url",
    "image",
    "alignmentType",
    "educationalFramework",
    "targetDescription",
    "targetName",
    "targetUrl",
  ]);
  const targetName = input.targetName ?? input.name;
  return node("AlignmentObject", {
    ...extra,
    "@id": input.id,
    name: requireText(input.name ?? targetName, "name"),
    description: input.description,
    url: input.url,
    image: imageValue(input.image, imageObjectSchema),
    alignmentType: input.alignmentType,
    educationalFramework: input.educationalFramework,
    targetDescription: input.targetDescription,
    targetName: requireText(targetName, "targetName"),
    targetUrl: input.targetUrl,
  });
}

export function contactPointNode(input: ContactPointInput): JsonLd {
  const extra = additionalProps(input, [
    "id",
    "name",
    "description",
    "url",
    "image",
    "areaServed",
    "availableLanguage",
    "contactOption",
    "contactType",
    "email",
    "faxNumber",
    "hoursAvailable",
    "productSupported",
    "serviceArea",
    "telephone",
  ]);
  return node("ContactPoint", {
    ...extra,
    "@id": input.id,
    name: input.name,
    description: input.description,
    url: input.url,
    image: imageValue(input.image, imageObjectSchema),
    areaServed: input.areaServed,
    availableLanguage: input.availableLanguage,
    contactOption: input.contactOption,
    contactType: input.contactType,
    email: input.email,
    faxNumber: input.faxNumber,
    hoursAvailable: input.hoursAvailable,
    productSupported: input.productSupported,
    serviceArea: input.serviceArea,
    telephone: input.telephone,
  });
}

export function checkoutPageNode(input: CheckoutPageInput): JsonLd {
  return pageVariantNode("CheckoutPage", input, {
    about: input.about,
    offers: input.offers,
  });
}

export function collectionPageNode(input: CollectionPageInput): JsonLd {
  return pageVariantNode("CollectionPage", input, {
    hasPart: input.hasPart,
    significantLinks: input.significantLinks,
  });
}

export function contactPageNode(input: ContactPageInput): JsonLd {
  return pageVariantNode("ContactPage", input, {
    about: input.about,
    significantLinks: input.significantLinks,
  });
}

export function itemPageNode(input: ItemPageInput): JsonLd {
  return pageVariantNode("ItemPage", input, {
    mainEntity: input.mainEntity,
  });
}

export function webSiteSchema(input: WebSiteInput): JsonLd {
  const extra = additionalProps(input, ["id", "name", "description", "url", "image", "publisher", "potentialAction"]);
  return node("WebSite", {
    ...extra,
    "@id": input.id,
    name: requireText(input.name, "name"),
    description: input.description,
    url: input.url,
    image: imageValue(input.image, imageObjectSchema),
    publisher: personOrOrganizationRef(input.publisher),
    potentialAction: input.potentialAction,
  });
}

export function organizationNode(input: OrganizationInput): JsonLd {
  const extra = additionalProps(input, ["id", "name", "description", "url", "image", "logo", "sameAs"]);
  return node("Organization", {
    ...extra,
    "@id": input.id,
    name: requireText(input.name, "name"),
    description: input.description,
    url: input.url,
    logo: imageValue(input.logo ?? input.image, imageObjectSchema),
    image: imageValue(input.image, imageObjectSchema),
    sameAs: input.sameAs,
  });
}

export function educationalOrganizationNode(input: EducationalOrganizationInput): JsonLd {
  const extra = additionalProps(input, ["id", "name", "description", "url", "image", "logo", "sameAs", "address"]);
  return {
    ...organizationNode(input),
    ...extra,
    "@type": "EducationalOrganization",
    address: input.address,
  };
}

export function softwareApplicationNode(input: SoftwareApplicationInput): JsonLd {
  const extra = additionalProps(input, ["id", "name", "description", "url", "image", "applicationCategory", "operatingSystem", "offers", "softwareVersion"]);
  return node("SoftwareApplication", {
    ...extra,
    "@id": input.id,
    name: requireText(input.name, "name"),
    description: input.description,
    url: input.url,
    image: imageValue(input.image, imageObjectSchema),
    applicationCategory: input.applicationCategory,
    operatingSystem: input.operatingSystem,
    offers: input.offers,
    softwareVersion: input.softwareVersion,
  });
}

export function webApplicationNode(input: SoftwareApplicationInput): JsonLd {
  return {
    ...softwareApplicationNode(input),
    "@type": "WebApplication",
  };
}

export function articleNode(input: ArticleInput): JsonLd {
  const extra = additionalProps(input, ["id", "name", "description", "url", "image", "headline", "author", "publisher", "datePublished", "dateModified", "mainEntityOfPage"]);
  return node("Article", {
    ...extra,
    "@id": input.id,
    headline: requireText(input.headline ?? input.name, "headline"),
    name: input.name,
    description: input.description,
    url: input.url,
    image: imageValue(input.image, imageObjectSchema),
    author: personOrOrganizationRef(input.author),
    publisher: personOrOrganizationRef(input.publisher),
    datePublished: input.datePublished,
    dateModified: input.dateModified,
    mainEntityOfPage: input.mainEntityOfPage ?? input.url,
  });
}

export function techArticleNode(input: ArticleInput): JsonLd {
  return { ...articleNode(input), "@type": "TechArticle" };
}

export function blogPostingNode(input: ArticleInput): JsonLd {
  return { ...articleNode(input), "@type": "BlogPosting" };
}

export function newsArticleNode(input: ArticleInput): JsonLd {
  return { ...articleNode(input), "@type": "NewsArticle" };
}

export function breadcrumbListSchema(input: BreadcrumbListInput): JsonLd {
  if (!input.items.length) throw new Error("BreadcrumbList requires at least one item");
  const extra = additionalProps(input, ["id", "items"]);
  return node("BreadcrumbList", {
    ...extra,
    "@id": input.id,
    itemListElement: input.items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: requireText(item.label, "breadcrumb label"),
      item: requireText(item.href, "breadcrumb href"),
    })),
  });
}

export function faqPageSchema(input: FaqPageInput): JsonLd {
  if (!input.items.length) throw new Error("FAQPage requires at least one question");
  const extra = additionalProps(input, ["id", "items"]);
  return node("FAQPage", {
    ...extra,
    "@id": input.id,
    mainEntity: input.items.map((item) =>
      questionNode({
        name: requireText(item.question, "FAQ question"),
        acceptedAnswer: { text: requireText(item.answer, "FAQ answer") },
      }),
    ),
  });
}

export function answerNode(input: AnswerInput): JsonLd {
  const extra = additionalProps(input, ["id", "text", "url", "upvoteCount", "dateCreated", "author"]);
  return node("Answer", {
    ...extra,
    "@id": input.id,
    text: requireText(input.text, "Answer text"),
    url: input.url,
    upvoteCount: input.upvoteCount,
    dateCreated: input.dateCreated,
    author: personOrOrganizationRef(input.author),
  });
}

export function creativeWorkNode(input: CreativeWorkInput): JsonLd {
  const extra = additionalProps(input, [
    "id",
    "name",
    "description",
    "url",
    "image",
    "about",
    "abstract",
    "audience",
    "author",
    "dateCreated",
    "dateModified",
    "datePublished",
    "text",
  ]);
  return node("CreativeWork", {
    ...extra,
    "@id": input.id,
    name: requireText(input.name, "name"),
    description: input.description,
    url: input.url,
    image: imageValue(input.image, imageObjectSchema),
    about: input.about,
    abstract: input.abstract,
    audience: input.audience,
    author: personOrOrganizationRef(input.author),
    dateCreated: input.dateCreated,
    dateModified: input.dateModified,
    datePublished: input.datePublished,
    text: input.text,
  });
}

export function webContentNode(input: WebContentInput): JsonLd {
  return {
    ...creativeWorkNode(input),
    "@type": "WebContent",
  };
}

export function webPageElementNode(input: WebPageElementInput): JsonLd {
  const extra = additionalProps(input, [
    "id",
    "name",
    "description",
    "url",
    "image",
    "about",
    "abstract",
    "audience",
    "author",
    "dateCreated",
    "dateModified",
    "datePublished",
    "text",
    "cssSelector",
    "xpath",
  ]);
  return node("WebPageElement", {
    ...extra,
    "@id": input.id,
    name: requireText(input.name, "name"),
    description: input.description,
    url: input.url,
    image: imageValue(input.image, imageObjectSchema),
    about: input.about,
    abstract: input.abstract,
    audience: input.audience,
    author: personOrOrganizationRef(input.author),
    dateCreated: input.dateCreated,
    dateModified: input.dateModified,
    datePublished: input.datePublished,
    text: input.text,
    cssSelector: input.cssSelector,
    xpath: input.xpath,
  });
}

export function textObjectNode(input: TextObjectInput): JsonLd {
  const extra = additionalProps(input, [
    "id", "name", "description", "url", "image", "about", "abstract", "audience", "author", "dateCreated", "dateModified", "datePublished", "text",
    "encodingFormat",
  ]);
  return {
    ...creativeWorkNode(input),
    ...extra,
    "@type": "TextObject",
    encodingFormat: input.encodingFormat,
  };
}

export function menuItemNode(input: MenuItemInput): JsonLd {
  const extra = additionalProps(input, ["id", "name", "description", "url", "image", "offers", "nutrition", "suitableForDiet"]);
  return node("MenuItem", {
    ...extra,
    "@id": input.id,
    name: requireText(input.name, "name"),
    description: input.description,
    url: input.url,
    image: imageValue(input.image, imageObjectSchema),
    offers: input.offers,
    nutrition: input.nutrition,
  });
}

export function menuSectionNode(input: MenuSectionInput): JsonLd {
  const extra = additionalProps(input, [
    "id", "name", "description", "url", "image", "about", "abstract", "audience", "author", "dateCreated", "dateModified", "datePublished", "text",
    "hasMenuItem",
  ]);
  return {
    ...creativeWorkNode(input),
    ...extra,
    "@type": "MenuSection",
    hasMenuItem: input.hasMenuItem,
  };
}

export function certificationNode(input: CertificationInput): JsonLd {
  const extra = additionalProps(input, [
    "id",
    "name",
    "description",
    "url",
    "image",
    "about",
    "abstract",
    "audience",
    "author",
    "dateCreated",
    "dateModified",
    "datePublished",
    "text",
    "certificationIdentification",
    "certificationRating",
    "certificationStatus",
    "issuedBy",
    "validFrom",
    "validIn",
  ]);
  return {
    ...creativeWorkNode(input),
    ...extra,
    "@type": "Certification",
    certificationIdentification: input.certificationIdentification,
    certificationRating: input.certificationRating,
    certificationStatus: input.certificationStatus,
    issuedBy: personOrOrganizationRef(input.issuedBy),
    validFrom: input.validFrom,
    validIn: input.validIn,
  };
}

export function claimNode(input: ClaimInput): JsonLd {
  const extra = additionalProps(input, [
    "id",
    "name",
    "description",
    "url",
    "image",
    "about",
    "abstract",
    "audience",
    "author",
    "dateCreated",
    "dateModified",
    "datePublished",
    "text",
    "appearance",
    "claimInterpreter",
    "firstAppearance",
  ]);
  return {
    ...creativeWorkNode(input),
    ...extra,
    "@type": "Claim",
    appearance: input.appearance,
    claimInterpreter: personOrOrganizationRef(input.claimInterpreter),
    firstAppearance: input.firstAppearance,
  };
}

export function civicStructureNode(input: CivicStructureInput): JsonLd {
  const extra = additionalProps(input, ["id", "name", "description", "url", "image", "openingHours", "publicAccess"]);
  return node("CivicStructure", {
    ...extra,
    "@id": input.id,
    name: requireText(input.name, "name"),
    description: input.description,
    url: input.url,
    image: imageValue(input.image, imageObjectSchema),
    openingHours: input.openingHours,
    publicAccess: input.publicAccess,
  });
}

export function commentNode(input: CommentInput): JsonLd {
  const extra = additionalProps(input, [
    "id",
    "name",
    "description",
    "url",
    "image",
    "about",
    "abstract",
    "audience",
    "author",
    "dateCreated",
    "dateModified",
    "datePublished",
    "text",
    "downvoteCount",
    "parentItem",
    "sharedContent",
    "upvoteCount",
  ]);
  return {
    ...creativeWorkNode(input),
    ...extra,
    "@type": "Comment",
    downvoteCount: input.downvoteCount,
    parentItem: input.parentItem,
    sharedContent: input.sharedContent,
    upvoteCount: input.upvoteCount,
  };
}

export function constraintNodeNode(input: ConstraintNodeInput): JsonLd {
  const extra = additionalProps(input, ["id", "name", "description", "url", "image", "constraintProperty", "numConstraints"]);
  return node("ConstraintNode", {
    ...extra,
    "@id": input.id,
    name: requireText(input.name, "name"),
    description: input.description,
    url: input.url,
    image: imageValue(input.image, imageObjectSchema),
    constraintProperty: input.constraintProperty,
    numConstraints: input.numConstraints,
  });
}

export function statisticalVariableNode(input: StatisticalVariableInput): JsonLd {
  const extra = additionalProps(input, ["id", "name", "description", "url", "image", "measurementMethod", "measurementTechnique", "populationType"]);
  return node("StatisticalVariable", {
    ...extra,
    "@id": input.id,
    name: requireText(input.name, "name"),
    description: input.description,
    url: input.url,
    image: imageValue(input.image, imageObjectSchema),
    measurementMethod: input.measurementMethod,
    measurementTechnique: input.measurementTechnique,
    populationType: input.populationType,
  });
}

export function correctionCommentNode(input: CorrectionCommentInput): JsonLd {
  return {
    ...commentNode(input),
    "@type": "CorrectionComment",
  };
}

export function countryNode(input: CountryInput): JsonLd {
  return {
    ...administrativeAreaNode(input),
    "@type": "Country",
  };
}

export function creativeWorkSeasonNode(input: CreativeWorkSeasonInput): JsonLd {
  const extra = additionalProps(input, [
    "id",
    "name",
    "description",
    "url",
    "image",
    "about",
    "abstract",
    "audience",
    "author",
    "dateCreated",
    "dateModified",
    "datePublished",
    "text",
    "actor",
    "director",
    "endDate",
    "episode",
    "numberOfEpisodes",
    "partOfSeries",
    "productionCompany",
    "seasonNumber",
    "startDate",
  ]);
  return {
    ...creativeWorkNode(input),
    ...extra,
    "@type": "CreativeWorkSeason",
    actor: input.actor,
    director: input.director,
    endDate: input.endDate,
    episode: input.episode,
    numberOfEpisodes: input.numberOfEpisodes,
    partOfSeries: input.partOfSeries,
    productionCompany: personOrOrganizationRef(input.productionCompany),
    seasonNumber: input.seasonNumber,
    startDate: input.startDate,
  };
}

export function creativeWorkSeriesNode(input: CreativeWorkSeriesInput): JsonLd {
  const extra = additionalProps(input, [
    "id",
    "name",
    "description",
    "url",
    "image",
    "about",
    "abstract",
    "audience",
    "author",
    "dateCreated",
    "dateModified",
    "datePublished",
    "text",
    "endDate",
    "issn",
    "startDate",
  ]);
  return {
    ...creativeWorkNode(input),
    ...extra,
    "@type": "CreativeWorkSeries",
    endDate: input.endDate,
    issn: input.issn,
    startDate: input.startDate,
  };
}

export function credentialNode(input: CredentialInput): JsonLd {
  const extra = additionalProps(input, [
    "id", "name", "description", "url", "image", "about", "abstract", "audience", "author", "dateCreated", "dateModified", "datePublished", "text",
    "credentialCategory", "recognizedBy", "validFor", "validIn",
  ]);
  return {
    ...creativeWorkNode(input),
    ...extra,
    "@type": "Credential",
    credentialCategory: input.credentialCategory,
    recognizedBy: personOrOrganizationRef(input.recognizedBy),
    validFor: input.validFor,
    validIn: input.validIn,
  };
}

export function educationalOccupationalCredentialNode(input: EducationalOccupationalCredentialInput): JsonLd {
  const extra = additionalProps(input, [
    "id", "name", "description", "url", "image", "about", "abstract", "audience", "author", "dateCreated", "dateModified", "datePublished", "text",
    "credentialCategory", "recognizedBy", "validFor", "validIn",
    "competencyRequired", "educationalLevel", "occupationalCategory",
  ]);
  return {
    ...credentialNode(input),
    ...extra,
    "@type": "EducationalOccupationalCredential",
    competencyRequired: input.competencyRequired,
    educationalLevel: input.educationalLevel,
    occupationalCategory: input.occupationalCategory,
  };
}

export function creditCardNode(input: CreditCardInput): JsonLd {
  const extra = additionalProps(input, ["id", "name", "description", "url", "image", "cashBack", "feesAndCommissionsSpecification", "interestRate", "monthlyMinimumRepaymentAmount"]);
  return node("CreditCard", {
    ...extra,
    "@id": input.id,
    name: requireText(input.name, "name"),
    description: input.description,
    url: input.url,
    image: imageValue(input.image, imageObjectSchema),
    cashBack: input.cashBack,
    feesAndCommissionsSpecification: input.feesAndCommissionsSpecification,
    interestRate: input.interestRate,
    monthlyMinimumRepaymentAmount: input.monthlyMinimumRepaymentAmount,
  });
}

export function cssSelectorTypeNode(input: CssSelectorTypeInput): JsonLd {
  const extra = additionalProps(input, []);
  return node("CssSelectorType", {
    ...extra,
  });
}

export function dataCatalogNode(input: DataCatalogInput): JsonLd {
  const extra = additionalProps(input, [
    "id", "name", "description", "url", "image", "about", "abstract", "audience", "author", "dateCreated", "dateModified", "datePublished", "text", "dataset",
  ]);
  return {
    ...creativeWorkNode(input),
    ...extra,
    "@type": "DataCatalog",
    dataset: input.dataset,
  };
}

export function dataDownloadNode(input: DataDownloadInput): JsonLd {
  const extra = additionalProps(input, [
    "id", "name", "description", "url", "image", "about", "abstract", "audience", "author", "dateCreated", "dateModified", "datePublished", "text",
    "contentUrl", "encodingFormat", "measurementMethod", "measurementTechnique",
  ]);
  return {
    ...creativeWorkNode(input),
    ...extra,
    "@type": "DataDownload",
    contentUrl: input.contentUrl,
    encodingFormat: input.encodingFormat,
    measurementMethod: input.measurementMethod,
    measurementTechnique: input.measurementTechnique,
  };
}

export function dataFeedNode(input: DataFeedInput): JsonLd {
  const extra = additionalProps(input, ["id", "name", "description", "url", "image", "dataFeedElement", "dateModified"]);
  return node("DataFeed", {
    ...extra,
    "@id": input.id,
    name: requireText(input.name, "name"),
    description: input.description,
    url: input.url,
    image: imageValue(input.image, imageObjectSchema),
    dataFeedElement: input.dataFeedElement,
    dateModified: input.dateModified,
  });
}

export function dataFeedItemNode(input: DataFeedItemInput): JsonLd {
  const extra = additionalProps(input, ["id", "name", "description", "url", "image", "dateCreated", "dateDeleted", "dateModified", "item"]);
  return node("DataFeedItem", {
    ...extra,
    "@id": input.id,
    name: input.name,
    description: input.description,
    url: input.url,
    image: imageValue(input.image, imageObjectSchema),
    dateCreated: input.dateCreated,
    dateDeleted: input.dateDeleted,
    dateModified: input.dateModified,
    item: input.item,
  });
}

export function definedRegionNode(input: DefinedRegionInput): JsonLd {
  const extra = additionalProps(input, [
    "id", "name", "description", "url", "image", "addressCountry", "addressRegion", "postalCode", "postalCodePrefix", "postalCodeRange",
  ]);
  return node("DefinedRegion", {
    ...extra,
    "@id": input.id,
    name: input.name,
    description: input.description,
    url: input.url,
    addressCountry: input.addressCountry,
    addressRegion: input.addressRegion,
    postalCode: input.postalCode,
    postalCodePrefix: input.postalCodePrefix,
    postalCodeRange: input.postalCodeRange,
  });
}

export function definedTermNode(input: DefinedTermInput): JsonLd {
  const extra = additionalProps(input, ["id", "name", "description", "url", "image", "about", "inDefinedTermSet", "termCode"]);
  return node("DefinedTerm", {
    ...extra,
    "@id": input.id,
    name: requireText(input.name, "name"),
    description: input.description,
    url: input.url,
    image: imageValue(input.image, imageObjectSchema),
    about: input.about,
    inDefinedTermSet: input.inDefinedTermSet,
    termCode: input.termCode,
  });
}

export function categoryCodeNode(input: CategoryCodeInput): JsonLd {
  const extra = additionalProps(input, ["id", "name", "description", "url", "image", "about", "inDefinedTermSet", "termCode", "codeValue", "inCodeSet"]);
  return {
    ...definedTermNode(input),
    ...extra,
    "@type": "CategoryCode",
    codeValue: input.codeValue,
    inCodeSet: input.inCodeSet,
  };
}

export function definedTermSetNode(input: DefinedTermSetInput): JsonLd {
  const extra = additionalProps(input, [
    "id", "name", "description", "url", "image", "about", "abstract", "audience", "author", "dateCreated", "dateModified", "datePublished", "text",
    "hasDefinedTerm",
  ]);
  return {
    ...creativeWorkNode(input),
    ...extra,
    "@type": "DefinedTermSet",
    hasDefinedTerm: input.hasDefinedTerm,
  };
}

export function categoryCodeSetNode(input: CategoryCodeSetInput): JsonLd {
  const extra = additionalProps(input, [
    "id", "name", "description", "url", "image", "about", "abstract", "audience", "author", "dateCreated", "dateModified", "datePublished", "text",
    "hasDefinedTerm", "hasCategoryCode",
  ]);
  return {
    ...definedTermSetNode(input),
    ...extra,
    "@type": "CategoryCodeSet",
    hasCategoryCode: input.hasCategoryCode,
  };
}

export function deliveryChargeSpecificationNode(input: DeliveryChargeSpecificationInput): JsonLd {
  const extra = additionalProps(input, [
    "id", "name", "description", "url", "image", "appliesToDeliveryMethod", "areaServed", "eligibleRegion", "ineligibleRegion", "price", "priceCurrency",
  ]);
  return node("DeliveryChargeSpecification", {
    ...extra,
    "@id": input.id,
    name: input.name,
    description: input.description,
    url: input.url,
    image: imageValue(input.image, imageObjectSchema),
    appliesToDeliveryMethod: input.appliesToDeliveryMethod,
    areaServed: input.areaServed,
    eligibleRegion: input.eligibleRegion,
    ineligibleRegion: input.ineligibleRegion,
    price: input.price,
    priceCurrency: input.priceCurrency,
  });
}

export function demandNode(input: DemandInput): JsonLd {
  const extra = additionalProps(input, [
    "id", "name", "description", "url", "image", "acceptedPaymentMethod", "areaServed", "availability", "availabilityEnds", "availabilityStarts",
    "businessFunction", "eligibleRegion", "ineligibleRegion", "itemOffered", "priceSpecification", "seller", "validFrom", "validThrough",
  ]);
  return node("Demand", {
    ...extra,
    "@id": input.id,
    name: input.name,
    description: input.description,
    url: input.url,
    image: imageValue(input.image, imageObjectSchema),
    acceptedPaymentMethod: input.acceptedPaymentMethod,
    areaServed: input.areaServed,
    availability: input.availability,
    availabilityEnds: input.availabilityEnds,
    availabilityStarts: input.availabilityStarts,
    businessFunction: input.businessFunction,
    eligibleRegion: input.eligibleRegion,
    ineligibleRegion: input.ineligibleRegion,
    itemOffered: input.itemOffered,
    priceSpecification: input.priceSpecification,
    seller: personOrOrganizationRef(input.seller),
    validFrom: input.validFrom,
    validThrough: input.validThrough,
  });
}

export function distanceNode(input: DistanceInput): JsonLd {
  const extra = additionalProps(input, []);
  return node("Distance", {
    ...extra,
  });
}

export function durationNode(input: DurationInput): JsonLd {
  const extra = additionalProps(input, ["id"]);
  return node("Duration", {
    ...extra,
  });
}

export function energyNode(input: EnergyInput): JsonLd {
  const extra = additionalProps(input, ["id"]);
  return node("Energy", {
    ...extra,
  });
}

export function massNode(input: MassInput): JsonLd {
  const extra = additionalProps(input, ["id"]);
  return node("Mass", {
    ...extra,
  });
}

export function energyConsumptionDetailsNode(input: EnergyConsumptionDetailsInput): JsonLd {
  const extra = additionalProps(input, ["id", "name", "description", "url", "image"]);
  return node("EnergyConsumptionDetails", {
    ...extra,
    "@id": input.id,
    name: input.name,
    description: input.description,
    url: input.url,
    image: imageValue(input.image, imageObjectSchema),
  });
}

export function enumerationNode(input: EnumerationInput): JsonLd {
  const extra = additionalProps(input, ["id", "name", "description", "url", "image", "supersededBy"]);
  return node("Enumeration", {
    ...extra,
    "@id": input.id,
    name: requireText(input.name, "name"),
    description: input.description,
    url: input.url,
    image: imageValue(input.image, imageObjectSchema),
    supersededBy: input.supersededBy,
  });
}

export function entryPointNode(input: EntryPointInput): JsonLd {
  const extra = additionalProps(input, ["id", "name", "description", "url", "image", "actionApplication", "actionPlatform", "contentType", "encodingType", "httpMethod", "urlTemplate"]);
  return node("EntryPoint", {
    ...extra,
    "@id": input.id,
    name: input.name,
    description: input.description,
    url: input.url,
    image: imageValue(input.image, imageObjectSchema),
    actionApplication: input.actionApplication,
    actionPlatform: input.actionPlatform,
    contentType: input.contentType,
    encodingType: input.encodingType,
    httpMethod: input.httpMethod,
    urlTemplate: input.urlTemplate,
  });
}

export function episodeNode(input: EpisodeInput): JsonLd {
  const extra = additionalProps(input, [
    "id", "name", "description", "url", "image", "about", "abstract", "audience", "author", "dateCreated", "dateModified", "datePublished", "text",
    "actor", "director", "episodeNumber", "partOfSeason", "partOfSeries", "productionCompany",
  ]);
  return {
    ...creativeWorkNode(input),
    ...extra,
    "@type": "Episode",
    actor: input.actor,
    director: input.director,
    episodeNumber: input.episodeNumber,
    partOfSeason: input.partOfSeason,
    partOfSeries: input.partOfSeries,
    productionCompany: personOrOrganizationRef(input.productionCompany),
  };
}

export function financialProductNode(input: FinancialProductInput): JsonLd {
  const extra = additionalProps(input, ["id", "name", "description", "url", "image", "annualPercentageRate", "feesAndCommissionsSpecification", "interestRate", "provider"]);
  return node("FinancialProduct", {
    ...extra,
    "@id": input.id,
    name: requireText(input.name, "name"),
    description: input.description,
    url: input.url,
    image: imageValue(input.image, imageObjectSchema),
    annualPercentageRate: input.annualPercentageRate,
    feesAndCommissionsSpecification: input.feesAndCommissionsSpecification,
    interestRate: input.interestRate,
    provider: personOrOrganizationRef(input.provider),
  });
}

export function loanOrCreditNode(input: LoanOrCreditInput): JsonLd {
  const extra = additionalProps(input, [
    "id", "name", "description", "url", "image", "annualPercentageRate", "feesAndCommissionsSpecification", "interestRate", "provider",
    "amount", "loanTerm", "requiredCollateral",
  ]);
  const amount = typeof input.amount === "object" && input.amount !== null ? input.amount : undefined;
  const loanTerm = typeof input.loanTerm === "object" && input.loanTerm !== null ? input.loanTerm : undefined;
  return {
    ...financialProductNode(input),
    ...extra,
    "@type": "LoanOrCredit",
    amount,
    loanTerm,
    requiredCollateral: input.requiredCollateral,
  };
}

export function geneNode(input: GeneInput): JsonLd {
  const extra = additionalProps(input, ["id", "name", "description", "url", "image", "associatedDisease", "hasBioPolymerSequence"]);
  return node("Gene", {
    ...extra,
    "@id": input.id,
    name: requireText(input.name, "name"),
    description: input.description,
    url: input.url,
    image: imageValue(input.image, imageObjectSchema),
    associatedDisease: input.associatedDisease,
    hasBioPolymerSequence: input.hasBioPolymerSequence,
  });
}

export function geoCoordinatesNode(input: GeoCoordinatesInput): JsonLd {
  const extra = additionalProps(input, ["id", "name", "description", "url", "image", "addressCountry", "elevation", "latitude", "longitude", "postalCode"]);
  return node("GeoCoordinates", {
    ...extra,
    "@id": input.id,
    name: input.name,
    description: input.description,
    url: input.url,
    image: imageValue(input.image, imageObjectSchema),
    addressCountry: input.addressCountry,
    elevation: input.elevation,
    latitude: input.latitude,
    longitude: input.longitude,
    postalCode: input.postalCode,
  });
}

export function geoShapeNode(input: GeoShapeInput): JsonLd {
  const extra = additionalProps(input, ["id", "name", "description", "url", "image", "addressCountry", "box", "circle", "elevation", "line", "polygon", "postalCode"]);
  return node("GeoShape", {
    ...extra,
    "@id": input.id,
    name: input.name,
    description: input.description,
    url: input.url,
    image: imageValue(input.image, imageObjectSchema),
    addressCountry: input.addressCountry,
    box: input.box,
    circle: input.circle,
    elevation: input.elevation,
    line: input.line,
    polygon: input.polygon,
    postalCode: input.postalCode,
  });
}

export function geospatialGeometryNode(input: GeospatialGeometryInput): JsonLd {
  const extra = additionalProps(input, [
    "id",
    "name",
    "description",
    "url",
    "image",
    "geoContains",
    "geoCoveredBy",
    "geoCovers",
    "geoCrosses",
    "geoDisjoint",
    "geoEquals",
    "geoIntersects",
    "geoOverlaps",
    "geoTouches",
    "geoWithin",
  ]);
  return node("GeospatialGeometry", {
    ...extra,
    "@id": input.id,
    name: input.name,
    description: input.description,
    url: input.url,
    image: imageValue(input.image, imageObjectSchema),
    geoContains: input.geoContains,
    geoCoveredBy: input.geoCoveredBy,
    geoCovers: input.geoCovers,
    geoCrosses: input.geoCrosses,
    geoDisjoint: input.geoDisjoint,
    geoEquals: input.geoEquals,
    geoIntersects: input.geoIntersects,
    geoOverlaps: input.geoOverlaps,
    geoTouches: input.geoTouches,
    geoWithin: input.geoWithin,
  });
}

export function grantNode(input: GrantInput): JsonLd {
  const extra = additionalProps(input, ["id", "name", "description", "url", "image", "fundedItem"]);
  return node("Grant", {
    ...extra,
    "@id": input.id,
    name: requireText(input.name, "name"),
    description: input.description,
    url: input.url,
    image: imageValue(input.image, imageObjectSchema),
    fundedItem: input.fundedItem,
  });
}

export function hyperTocEntryNode(input: HyperTocEntryInput): JsonLd {
  const targetUrl =
    typeof input.target === "string"
      ? input.target
      : input.target && typeof input.target === "object"
        ? typeof input.target.url === "string"
          ? input.target.url
          : typeof input.target["@id"] === "string"
            ? input.target["@id"]
            : undefined
        : undefined;
  const extra = additionalProps(input, [
    "id",
    "name",
    "description",
    "url",
    "image",
    "about",
    "abstract",
    "audience",
    "author",
    "dateCreated",
    "dateModified",
    "datePublished",
    "text",
    "position",
    "target",
  ]);
  return node("HyperTocEntry", {
    ...extra,
    "@id": input.id,
    name: requireText(input.name, "name"),
    description: input.description,
    url: input.url ?? targetUrl,
    image: imageValue(input.image, imageObjectSchema),
    about: input.about,
    abstract: input.abstract,
    audience: input.audience,
    author: personOrOrganizationRef(input.author),
    dateCreated: input.dateCreated,
    dateModified: input.dateModified,
    datePublished: input.datePublished,
    text: input.text,
    position: input.position,
  });
}

export function healthPlanCostSharingSpecificationNode(input: HealthPlanCostSharingSpecificationInput): JsonLd {
  const extra = additionalProps(input, [
    "id",
    "name",
    "description",
    "url",
    "image",
    "healthPlanCoinsuranceOption",
    "healthPlanCoinsuranceRate",
    "healthPlanCopay",
    "healthPlanCopayOption",
    "healthPlanPharmacyCategory",
  ]);
  return node("HealthPlanCostSharingSpecification", {
    ...extra,
    "@id": input.id,
    name: input.name,
    description: input.description,
    url: input.url,
    image: imageValue(input.image, imageObjectSchema),
    healthPlanCoinsuranceOption: input.healthPlanCoinsuranceOption,
    healthPlanCoinsuranceRate: input.healthPlanCoinsuranceRate,
    healthPlanCopay: input.healthPlanCopay,
    healthPlanCopayOption: input.healthPlanCopayOption,
    healthPlanPharmacyCategory: input.healthPlanPharmacyCategory,
  });
}

export function healthPlanFormularyNode(input: HealthPlanFormularyInput): JsonLd {
  const extra = additionalProps(input, [
    "id",
    "name",
    "description",
    "url",
    "image",
    "healthPlanCostSharing",
    "healthPlanDrugTier",
    "offersPrescriptionByMail",
  ]);
  return node("HealthPlanFormulary", {
    ...extra,
    "@id": input.id,
    name: input.name,
    description: input.description,
    url: input.url,
    image: imageValue(input.image, imageObjectSchema),
    healthPlanCostSharing: input.healthPlanCostSharing,
    healthPlanDrugTier: input.healthPlanDrugTier,
    offersPrescriptionByMail: input.offersPrescriptionByMail,
  });
}

export function healthPlanNetworkNode(input: HealthPlanNetworkInput): JsonLd {
  const extra = additionalProps(input, [
    "id",
    "name",
    "description",
    "url",
    "image",
    "healthPlanCostSharing",
    "healthPlanNetworkId",
    "healthPlanNetworkTier",
  ]);
  return node("HealthPlanNetwork", {
    ...extra,
    "@id": input.id,
    name: input.name,
    description: input.description,
    url: input.url,
    image: imageValue(input.image, imageObjectSchema),
    healthPlanCostSharing: input.healthPlanCostSharing,
    healthPlanNetworkId: input.healthPlanNetworkId,
    healthPlanNetworkTier: input.healthPlanNetworkTier,
  });
}

export function healthInsurancePlanNode(input: HealthInsurancePlanInput): JsonLd {
  const extra = additionalProps(input, [
    "id",
    "name",
    "description",
    "url",
    "image",
    "benefitsSummaryUrl",
    "contactPoint",
    "healthPlanDrugOption",
    "healthPlanDrugTier",
    "healthPlanId",
    "healthPlanMarketingUrl",
    "includesHealthPlanFormulary",
    "includesHealthPlanNetwork",
    "usesHealthPlanIdStandard",
  ]);
  return node("HealthInsurancePlan", {
    ...extra,
    "@id": input.id,
    name: input.name,
    description: input.description,
    url: input.url,
    image: imageValue(input.image, imageObjectSchema),
    benefitsSummaryUrl: input.benefitsSummaryUrl,
    contactPoint: input.contactPoint,
    healthPlanDrugOption: input.healthPlanDrugOption,
    healthPlanDrugTier: input.healthPlanDrugTier,
    healthPlanId: input.healthPlanId,
    healthPlanMarketingUrl: input.healthPlanMarketingUrl,
    includesHealthPlanFormulary: input.includesHealthPlanFormulary,
    includesHealthPlanNetwork: input.includesHealthPlanNetwork,
    usesHealthPlanIdStandard: input.usesHealthPlanIdStandard,
  });
}

export function quantitativeValueNode(input: QuantitativeValueInput): JsonLd {
  const extra = additionalProps(input, [
    "id",
    "name",
    "description",
    "url",
    "image",
    "alternateName",
    "disambiguatingDescription",
    "identifier",
    "mainEntityOfPage",
    "owner",
    "potentialAction",
    "sameAs",
    "subjectOf",
    "additionalProperty",
    "maxValue",
    "minValue",
    "unitCode",
    "unitText",
    "value",
    "valueReference",
  ]);
  return node("QuantitativeValue", {
    ...extra,
    "@id": input.id,
    name: input.name,
    description: input.description,
    url: input.url,
    image: imageValue(input.image, imageObjectSchema),
    alternateName: input.alternateName,
    disambiguatingDescription: input.disambiguatingDescription,
    identifier: input.identifier,
    mainEntityOfPage: input.mainEntityOfPage,
    owner: personOrOrganizationRef(input.owner),
    potentialAction: input.potentialAction,
    sameAs: input.sameAs,
    subjectOf: input.subjectOf,
    additionalProperty: input.additionalProperty,
    maxValue: input.maxValue,
    minValue: input.minValue,
    unitCode: input.unitCode,
    unitText: input.unitText,
    value: input.value,
    valueReference: input.valueReference,
  });
}

export function quantitativeValueDistributionNode(input: QuantitativeValueDistributionInput): JsonLd {
  const extra = additionalProps(input, [
    "id",
    "name",
    "description",
    "url",
    "image",
    "alternateName",
    "disambiguatingDescription",
    "identifier",
    "mainEntityOfPage",
    "owner",
    "potentialAction",
    "sameAs",
    "subjectOf",
    "currency",
    "duration",
    "median",
    "percentile10",
    "percentile25",
    "percentile75",
    "percentile90",
  ]);
  return node("QuantitativeValueDistribution", {
    ...extra,
    "@id": input.id,
    name: input.name,
    description: input.description,
    url: input.url,
    image: imageValue(input.image, imageObjectSchema),
    alternateName: input.alternateName,
    disambiguatingDescription: input.disambiguatingDescription,
    identifier: input.identifier,
    mainEntityOfPage: input.mainEntityOfPage,
    owner: personOrOrganizationRef(input.owner),
    potentialAction: input.potentialAction,
    sameAs: input.sameAs,
    subjectOf: input.subjectOf,
    currency: input.currency,
    duration: input.duration,
    median: input.median,
    percentile10: input.percentile10,
    percentile25: input.percentile25,
    percentile75: input.percentile75,
    percentile90: input.percentile90,
  });
}

export function monetaryAmountNode(input: MonetaryAmountInput): JsonLd {
  const extra = additionalProps(input, [
    "id",
    "name",
    "description",
    "url",
    "image",
    "alternateName",
    "disambiguatingDescription",
    "identifier",
    "mainEntityOfPage",
    "owner",
    "potentialAction",
    "sameAs",
    "subjectOf",
    "currency",
    "maxValue",
    "minValue",
    "validFrom",
    "validThrough",
    "value",
  ]);
  return node("MonetaryAmount", {
    ...extra,
    "@id": input.id,
    name: input.name,
    description: input.description,
    url: input.url,
    image: imageValue(input.image, imageObjectSchema),
    alternateName: input.alternateName,
    disambiguatingDescription: input.disambiguatingDescription,
    identifier: input.identifier,
    mainEntityOfPage: input.mainEntityOfPage,
    owner: personOrOrganizationRef(input.owner),
    potentialAction: input.potentialAction,
    sameAs: input.sameAs,
    subjectOf: input.subjectOf,
    currency: input.currency,
    maxValue: input.maxValue,
    minValue: input.minValue,
    validFrom: input.validFrom,
    validThrough: input.validThrough,
    value: input.value,
  });
}

export function typeAndQuantityNode(input: TypeAndQuantityNodeInput): JsonLd {
  const extra = additionalProps(input, [
    "id",
    "name",
    "description",
    "amountOfThisGood",
    "typeOfGood",
    "unitCode",
    "unitText",
  ]);
  return node("TypeAndQuantityNode", {
    ...extra,
    "@id": input.id,
    name: requireText(input.name, "name"),
    description: input.description,
    amountOfThisGood: input.amountOfThisGood,
    typeOfGood: typeof input.typeOfGood === "string" ? { "@type": "Product", name: input.typeOfGood } : input.typeOfGood,
    unitCode: input.unitCode,
    unitText: input.unitText,
  });
}

export function unitPriceSpecificationNode(input: UnitPriceSpecificationInput): JsonLd {
  const extra = additionalProps(input, [
    "id",
    "name",
    "description",
    "billingDuration",
    "billingIncrement",
    "billingStart",
    "price",
    "priceComponentType",
    "priceCurrency",
    "priceType",
    "referenceQuantity",
    "unitCode",
    "unitText",
    "validFrom",
    "validThrough",
  ]);
  return node("UnitPriceSpecification", {
    ...extra,
    "@id": input.id,
    name: requireText(input.name, "name"),
    description: input.description,
    billingDuration: quantitativeValueLike(input.billingDuration),
    billingIncrement: input.billingIncrement,
    billingStart: input.billingStart,
    price: input.price,
    priceComponentType: input.priceComponentType,
    priceCurrency: input.priceCurrency,
    priceType: input.priceType,
    referenceQuantity: quantitativeValueLike(input.referenceQuantity),
    unitCode: input.unitCode,
    unitText: input.unitText,
    validFrom: input.validFrom,
    validThrough: input.validThrough,
  });
}

export function warrantyPromiseNode(input: WarrantyPromiseInput): JsonLd {
  const extra = additionalProps(input, [
    "id",
    "name",
    "description",
    "durationOfWarranty",
    "warrantyScope",
  ]);
  return node("WarrantyPromise", {
    ...extra,
    "@id": input.id,
    name: requireText(input.name, "name"),
    description: input.description,
    durationOfWarranty: quantitativeValueLike(input.durationOfWarranty),
    warrantyScope: input.warrantyScope,
  });
}

export function ratingNode(input: RatingInput): JsonLd {
  const extra = additionalProps(input, [
    "id",
    "name",
    "description",
    "url",
    "image",
    "alternateName",
    "disambiguatingDescription",
    "identifier",
    "mainEntityOfPage",
    "owner",
    "potentialAction",
    "sameAs",
    "subjectOf",
    "author",
    "bestRating",
    "ratingExplanation",
    "ratingValue",
    "reviewAspect",
    "worstRating",
  ]);
  return node("Rating", {
    ...extra,
    "@id": input.id,
    name: input.name,
    description: input.description,
    url: input.url,
    image: imageValue(input.image, imageObjectSchema),
    alternateName: input.alternateName,
    disambiguatingDescription: input.disambiguatingDescription,
    identifier: input.identifier,
    mainEntityOfPage: input.mainEntityOfPage,
    owner: personOrOrganizationRef(input.owner),
    potentialAction: input.potentialAction,
    sameAs: input.sameAs,
    subjectOf: input.subjectOf,
    author: personOrOrganizationRef(input.author),
    bestRating: input.bestRating,
    ratingExplanation: input.ratingExplanation,
    ratingValue: input.ratingValue,
    reviewAspect: input.reviewAspect,
    worstRating: input.worstRating,
  });
}

export function interactionCounterNode(input: InteractionCounterInput): JsonLd {
  const extra = additionalProps(input, [
    "id",
    "name",
    "description",
    "url",
    "image",
    "alternateName",
    "disambiguatingDescription",
    "identifier",
    "mainEntityOfPage",
    "owner",
    "potentialAction",
    "sameAs",
    "subjectOf",
    "interactionService",
    "interactionStatistic",
    "userInteractionCount",
  ]);
  return node("InteractionCounter", {
    ...extra,
    "@id": input.id,
    name: input.name,
    description: input.description,
    url: input.url,
    image: imageValue(input.image, imageObjectSchema),
    alternateName: input.alternateName,
    disambiguatingDescription: input.disambiguatingDescription,
    identifier: input.identifier,
    mainEntityOfPage: input.mainEntityOfPage,
    owner: personOrOrganizationRef(input.owner),
    potentialAction: input.potentialAction,
    sameAs: input.sameAs,
    subjectOf: input.subjectOf,
    interactionService: input.interactionService,
    interactionStatistic: input.interactionStatistic,
    userInteractionCount: input.userInteractionCount,
  });
}

export function integerNode(input: IntegerInput): JsonLd {
  const extra = additionalProps(input, []);
  return node("Integer", {
    ...extra,
  });
}

export function occupationNode(input: OccupationInput): JsonLd {
  const extra = additionalProps(input, ["id", "name", "description", "educationRequirements", "experienceRequirements", "occupationalCategory", "skills"]);
  return node("Occupation", {
    ...extra,
    "@id": input.id,
    name: requireText(input.name, "name"),
    description: input.description,
    educationRequirements: input.educationRequirements,
    experienceRequirements: input.experienceRequirements,
    occupationalCategory: input.occupationalCategory,
    skills: input.skills,
  });
}

export function occupationalExperienceRequirementsNode(input: OccupationalExperienceRequirementsInput): JsonLd {
  const extra = additionalProps(input, ["id", "name", "description", "monthsOfExperience", "occupationalExperienceProperties"]);
  return node("OccupationalExperienceRequirements", {
    ...extra,
    "@id": input.id,
    name: requireText(input.name, "name"),
    description: input.description,
    monthsOfExperience: input.monthsOfExperience,
  });
}

export function languageNode(input: LanguageInput): JsonLd {
  const extra = additionalProps(input, ["id", "name", "description", "url", "image", "alternateName"]);
  return node("Language", {
    ...extra,
    "@id": input.id,
    name: requireText(input.name, "name"),
    description: input.description,
    url: input.url,
    image: imageValue(input.image, imageObjectSchema),
    alternateName: input.alternateName,
  });
}

export function listItemNode(input: ListItemInput): JsonLd {
  const extra = additionalProps(input, [
    "id",
    "name",
    "description",
    "url",
    "image",
    "alternateName",
    "disambiguatingDescription",
    "identifier",
    "mainEntityOfPage",
    "owner",
    "potentialAction",
    "sameAs",
    "subjectOf",
    "item",
    "nextItem",
    "position",
    "previousItem",
  ]);
  return node("ListItem", {
    ...extra,
    "@id": input.id,
    name: requireText(input.name, "name"),
    description: input.description,
    url: input.url,
    image: imageValue(input.image, imageObjectSchema),
    alternateName: input.alternateName,
    disambiguatingDescription: input.disambiguatingDescription,
    identifier: input.identifier,
    mainEntityOfPage: input.mainEntityOfPage,
    owner: personOrOrganizationRef(input.owner),
    potentialAction: input.potentialAction,
    sameAs: input.sameAs,
    subjectOf: input.subjectOf,
    item: input.item,
    nextItem: input.nextItem,
    position: input.position,
    previousItem: input.previousItem,
  });
}

export function locationFeatureSpecificationNode(input: LocationFeatureSpecificationInput): JsonLd {
  const hoursAvailable = Array.isArray(input.hoursAvailable)
    ? input.hoursAvailable.map((entry) =>
        typeof entry === "string" ? { "@type": "OpeningHoursSpecification" } : entry,
      )
    : typeof input.hoursAvailable === "string"
      ? { "@type": "OpeningHoursSpecification" }
      : input.hoursAvailable;
  const extra = additionalProps(input, [
    "id",
    "name",
    "description",
    "url",
    "image",
    "maxValue",
    "measurementMethod",
    "measurementTechnique",
    "minValue",
    "propertyID",
    "unitCode",
    "unitText",
    "value",
    "valueReference",
    "hoursAvailable",
    "validFrom",
    "validThrough",
  ]);
  return node("LocationFeatureSpecification", {
    ...extra,
    "@id": input.id,
    name: requireText(input.name, "name"),
    description: input.description,
    url: input.url,
    image: imageValue(input.image, imageObjectSchema),
    maxValue: input.maxValue,
    measurementMethod: input.measurementMethod,
    measurementTechnique: input.measurementTechnique,
    minValue: input.minValue,
    propertyID: input.propertyID,
    unitCode: input.unitCode,
    unitText: input.unitText,
    value: input.value,
    valueReference: input.valueReference,
    hoursAvailable,
    validFrom: input.validFrom,
    validThrough: input.validThrough,
  });
}

export function mapNode(input: MapInput): JsonLd {
  const extra = additionalProps(input, [
    "id",
    "name",
    "description",
    "url",
    "image",
    "about",
    "abstract",
    "audience",
    "author",
    "dateCreated",
    "dateModified",
    "datePublished",
    "text",
    "mapType",
  ]);
  return node("Map", {
    ...extra,
    "@id": input.id,
    name: requireText(input.name, "name"),
    description: input.description,
    url: input.url,
    image: imageValue(input.image, imageObjectSchema),
    about: input.about,
    abstract: input.abstract,
    audience: input.audience,
    author: personOrOrganizationRef(input.author),
    dateCreated: input.dateCreated,
    dateModified: input.dateModified,
    datePublished: input.datePublished,
    text: input.text,
  });
}

export function lifestyleModificationNode(input: LifestyleModificationInput): JsonLd {
  const extra = additionalProps(input, ["id", "name", "description", "url", "image", "code"]);
  return node("LifestyleModification", {
    ...extra,
    "@id": input.id,
    name: requireText(input.name, "name"),
    description: input.description,
    url: input.url,
    image: imageValue(input.image, imageObjectSchema),
  });
}

export function maximumDoseScheduleNode(input: MaximumDoseScheduleInput): JsonLd {
  const extra = additionalProps(input, ["id", "name", "description", "url", "image", "doseUnit", "frequency"]);
  return node("MaximumDoseSchedule", {
    ...extra,
    "@id": input.id,
    name: requireText(input.name, "name"),
    description: input.description,
    url: input.url,
    image: imageValue(input.image, imageObjectSchema),
    doseUnit: input.doseUnit,
    frequency: input.frequency,
  });
}

export function medicalEntityNode(input: MedicalEntityInput): JsonLd {
  const extra = additionalProps(input, ["id", "name", "description", "url", "image", "code", "recognizingAuthority", "relevantSpecialty"]);
  return node("MedicalEntity", {
    ...extra,
    "@id": input.id,
    name: requireText(input.name, "name"),
    description: input.description,
    url: input.url,
    image: imageValue(input.image, imageObjectSchema),
  });
}

export function medicalIntangibleNode(input: MedicalIntangibleInput): JsonLd {
  return {
    ...medicalEntityNode(input),
    "@type": "MedicalIntangible",
  };
}

export function medicalAudienceNode(input: MedicalAudienceInput): JsonLd {
  const extra = additionalProps(input, ["id", "name", "description", "url", "image", "audienceType", "geographicArea", "healthCondition"]);
  return node("MedicalAudience", {
    ...extra,
    "@id": input.id,
    name: requireText(input.name, "name"),
    description: input.description,
    audienceType: input.audienceType,
  });
}

export function medicalCauseNode(input: MedicalCauseInput): JsonLd {
  const extra = additionalProps(input, ["id", "name", "description", "url", "image", "causeOf"]);
  return node("MedicalCause", {
    ...extra,
    "@id": input.id,
    name: requireText(input.name, "name"),
    description: input.description,
    url: input.url,
    image: imageValue(input.image, imageObjectSchema),
  });
}

export function medicalCodeNode(input: MedicalCodeInput): JsonLd {
  const extra = additionalProps(input, ["id", "name", "description", "url", "image", "codeValue", "codingSystem"]);
  return node("MedicalCode", {
    ...extra,
    "@id": input.id,
    name: requireText(input.name, "name"),
    description: input.description,
    url: input.url,
    image: imageValue(input.image, imageObjectSchema),
    codeValue: input.codeValue,
    codingSystem: input.codingSystem,
  });
}

export function medicalConditionNode(input: MedicalConditionInput): JsonLd {
  const extra = additionalProps(input, ["id", "name", "description", "url", "image", "associatedAnatomy", "possibleTreatment", "signOrSymptom", "stage"]);
  return node("MedicalCondition", {
    ...extra,
    "@id": input.id,
    name: requireText(input.name, "name"),
    description: input.description,
    url: input.url,
    image: imageValue(input.image, imageObjectSchema),
  });
}

export function medicalConditionStageNode(input: MedicalConditionStageInput): JsonLd {
  const extra = additionalProps(input, ["id", "name", "description", "url", "image", "stageAsNumber", "subStageSuffix"]);
  return node("MedicalConditionStage", {
    ...extra,
    "@id": input.id,
    name: requireText(input.name, "name"),
    description: input.description,
    url: input.url,
    image: imageValue(input.image, imageObjectSchema),
  });
}

export function medicalContraindicationNode(input: MedicalContraindicationInput): JsonLd {
  const extra = additionalProps(input, ["id", "name", "description", "url", "image", "contraindication"]);
  return node("MedicalContraindication", {
    ...extra,
    "@id": input.id,
    name: requireText(input.name, "name"),
    description: input.description,
    url: input.url,
    image: imageValue(input.image, imageObjectSchema),
  });
}

export function medicalDeviceNode(input: MedicalDeviceInput): JsonLd {
  const extra = additionalProps(input, ["id", "name", "description", "url", "image", "bodyLocation", "manufacturer", "procedure"]);
  return node("MedicalDevice", {
    ...extra,
    "@id": input.id,
    name: requireText(input.name, "name"),
    description: input.description,
    url: input.url,
    image: imageValue(input.image, imageObjectSchema),
  });
}

export function medicalGuidelineNode(input: MedicalGuidelineInput): JsonLd {
  const extra = additionalProps(input, ["id", "name", "description", "url", "image", "guidelineSubject"]);
  return node("MedicalGuideline", {
    ...extra,
    "@id": input.id,
    name: requireText(input.name, "name"),
    description: input.description,
    url: input.url,
    image: imageValue(input.image, imageObjectSchema),
  });
}

export function medicalRiskFactorNode(input: MedicalRiskFactorInput): JsonLd {
  const extra = additionalProps(input, ["id", "name", "description", "url", "image", "increasesRiskOf"]);
  return node("MedicalRiskFactor", {
    ...extra,
    "@id": input.id,
    name: requireText(input.name, "name"),
    description: input.description,
    url: input.url,
    image: imageValue(input.image, imageObjectSchema),
  });
}

export function medicalSignNode(input: MedicalSignInput): JsonLd {
  const extra = additionalProps(input, ["id", "name", "description", "url", "image", "identifyingTest"]);
  return node("MedicalSign", {
    ...extra,
    "@id": input.id,
    name: requireText(input.name, "name"),
    description: input.description,
    url: input.url,
    image: imageValue(input.image, imageObjectSchema),
  });
}

export function medicalSignOrSymptomNode(input: MedicalSignOrSymptomInput): JsonLd {
  const extra = additionalProps(input, ["id", "name", "description", "url", "image", "possibleTreatment"]);
  return node("MedicalSignOrSymptom", {
    ...extra,
    "@id": input.id,
    name: requireText(input.name, "name"),
    description: input.description,
    url: input.url,
    image: imageValue(input.image, imageObjectSchema),
  });
}

export function substanceNode(input: SubstanceInput): JsonLd {
  const extra = additionalProps(input, ["id", "name", "description", "url", "image", "activeIngredient"]);
  return node("Substance", {
    ...extra,
    "@id": input.id,
    name: requireText(input.name, "name"),
    description: input.description,
    url: input.url,
    image: imageValue(input.image, imageObjectSchema),
    activeIngredient: input.activeIngredient,
  });
}

export function taxonNode(input: TaxonInput): JsonLd {
  const extra = additionalProps(input, ["id", "name", "description", "url", "image", "parentTaxon", "taxonRank"]);
  return node("Taxon", {
    ...extra,
    "@id": input.id,
    name: requireText(input.name, "name"),
    description: input.description,
    url: input.url,
    image: imageValue(input.image, imageObjectSchema),
    parentTaxon: input.parentTaxon,
    taxonRank: input.taxonRank,
  });
}

export function tripNode(input: TripInput): JsonLd {
  const extra = additionalProps(input, [
    "id",
    "name",
    "description",
    "arrivalTime",
    "departureTime",
    "itinerary",
    "offers",
    "partOfTrip",
    "provider",
    "subTrip",
    "tripOrigin",
  ]);
  return node("Trip", {
    ...extra,
    "@id": input.id,
    name: requireText(input.name, "name"),
    description: input.description,
    arrivalTime: input.arrivalTime,
    departureTime: input.departureTime,
    itinerary: thingList(input.itinerary, "Place"),
    offers: thingList(input.offers, "Offer"),
    partOfTrip: typeof input.partOfTrip === "string" ? { "@type": "Trip", name: input.partOfTrip } : input.partOfTrip,
    provider: personOrOrganizationRef(input.provider),
    subTrip: thingList(input.subTrip, "Trip"),
    tripOrigin: typeof input.tripOrigin === "string" ? { "@type": "Place", name: input.tripOrigin } : input.tripOrigin,
  });
}

export function medicalProcedureNode(input: MedicalProcedureInput): JsonLd {
  const extra = additionalProps(input, ["id", "name", "description", "url", "image", "bodyLocation", "followup", "usedToDiagnose"]);
  return node("MedicalProcedure", {
    ...extra,
    "@id": input.id,
    name: requireText(input.name, "name"),
    description: input.description,
    url: input.url,
    image: imageValue(input.image, imageObjectSchema),
  });
}

export function medicalStudyNode(input: MedicalStudyInput): JsonLd {
  const extra = additionalProps(input, ["id", "name", "description", "url", "image", "status", "studySubject"]);
  return node("MedicalStudy", {
    ...extra,
    "@id": input.id,
    name: requireText(input.name, "name"),
    description: input.description,
    url: input.url,
    image: imageValue(input.image, imageObjectSchema),
    status: input.status,
  });
}

export function medicalTestNode(input: MedicalTestInput): JsonLd {
  const extra = additionalProps(input, ["id", "name", "description", "url", "image", "bodyLocation", "usedToDiagnose"]);
  return node("MedicalTest", {
    ...extra,
    "@id": input.id,
    name: requireText(input.name, "name"),
    description: input.description,
    url: input.url,
    image: imageValue(input.image, imageObjectSchema),
  });
}

export function medicalTherapyNode(input: MedicalTherapyInput): JsonLd {
  const extra = additionalProps(input, ["id", "name", "description", "url", "image", "contraindication", "duplicateTherapy"]);
  return node("MedicalTherapy", {
    ...extra,
    "@id": input.id,
    name: requireText(input.name, "name"),
    description: input.description,
    url: input.url,
    image: imageValue(input.image, imageObjectSchema),
  });
}

export function medicalWebPageNode(input: MedicalWebPageInput): JsonLd {
  return pageVariantNode("MedicalWebPage", input, {
    lastReviewed: input.lastReviewed,
  }, ["about", "lastReviewed"]);
}

export function superficialAnatomyNode(input: SuperficialAnatomyInput): JsonLd {
  const extra = additionalProps(input, ["id", "name", "description", "url", "image", "associatedPathophysiology"]);
  return node("SuperficialAnatomy", {
    ...extra,
    "@id": input.id,
    name: requireText(input.name, "name"),
    description: input.description,
    url: input.url,
    image: imageValue(input.image, imageObjectSchema),
    associatedPathophysiology: input.associatedPathophysiology,
  });
}

export function therapeuticProcedureNode(input: TherapeuticProcedureInput): JsonLd {
  return {
    ...medicalProcedureNode(input),
    "@type": "TherapeuticProcedure",
  };
}

export function xPathTypeNode(input: XPathTypeInput): JsonLd {
  const extra = additionalProps(input, ["id"]);
  return node("XPathType", {
    ...extra,
    "@id": input.id,
  });
}

export function propertyNode(input: PropertyInput): JsonLd {
  const extra = additionalProps(input, [
    "id", "name", "description", "url", "image", "domainIncludes", "inverseOf", "rangeIncludes", "supersededBy",
  ]);
  return node("Property", {
    ...extra,
    "@id": input.id,
    name: requireText(input.name, "name"),
    description: input.description,
    url: input.url,
    image: imageValue(input.image, imageObjectSchema),
    domainIncludes: input.domainIncludes,
    inverseOf: input.inverseOf,
    rangeIncludes: input.rangeIncludes,
    supersededBy: input.supersededBy,
  });
}

export function propertyValueNode(input: PropertyValueInput): JsonLd {
  const extra = additionalProps(input, [
    "id", "name", "description", "url", "image", "maxValue", "measurementMethod", "measurementTechnique", "minValue", "propertyID",
    "unitCode", "unitText", "value", "valueReference",
  ]);
  return node("PropertyValue", {
    ...extra,
    "@id": input.id,
    name: requireText(input.name, "name"),
    description: input.description,
    url: input.url,
    image: imageValue(input.image, imageObjectSchema),
    maxValue: input.maxValue,
    measurementMethod: input.measurementMethod,
    measurementTechnique: input.measurementTechnique,
    minValue: input.minValue,
    propertyID: input.propertyID,
    unitCode: input.unitCode,
    unitText: input.unitText,
    value: input.value,
    valueReference: input.valueReference,
  });
}

export function urlNode(input: UrlInput): JsonLd {
  const extra = additionalProps(input, []);
  return node("URL", {
    ...extra,
  });
}

export function runtimePlatformNode(input: RuntimePlatformInput): JsonLd {
  return {
    ...softwareApplicationNode(input),
    "@type": "RuntimePlatform",
  };
}

export function operatingSystemNode(input: OperatingSystemInput): JsonLd {
  return {
    ...softwareApplicationNode(input),
    "@type": "OperatingSystem",
  };
}

export function audienceNode(input: AudienceInput): JsonLd {
  const extra = additionalProps(input, ["id", "name", "description", "url", "image", "audienceType", "geographicArea"]);
  return node("Audience", {
    ...extra,
    "@id": input.id,
    name: requireText(input.name, "name"),
    description: input.description,
    url: input.url,
    image: imageValue(input.image, imageObjectSchema),
    audienceType: input.audienceType,
    geographicArea: input.geographicArea,
  });
}

export function questionNode(input: QuestionInput): JsonLd {
  const extra = additionalProps(input, ["id", "name", "description", "url", "image", "text", "acceptedAnswer", "suggestedAnswer", "answerCount", "eduQuestionType"]);
  const questionName = requireText(input.name ?? input.text, "Question name");
  return node("Question", {
    ...extra,
    "@id": input.id,
    name: questionName,
    text: input.text,
    url: input.url,
    acceptedAnswer: input.acceptedAnswer ? answerNode(input.acceptedAnswer) : undefined,
    suggestedAnswer: input.suggestedAnswer?.map((answer) => answerNode(answer)),
    answerCount: input.answerCount,
    eduQuestionType: input.eduQuestionType,
  });
}

export function qaPageSchema(input: QaPageInput): JsonLd {
  const extra = additionalProps(input, ["id", "question", "answer", "acceptedAnswer", "suggestedAnswer", "answerCount", "eduQuestionType", "url"]);
  const acceptedAnswer = input.acceptedAnswer ?? (input.answer ? { text: input.answer } : undefined);
  return node("QAPage", {
    ...extra,
    "@id": input.id,
    url: input.url,
    mainEntity: questionNode({
      name: requireText(input.question, "QAPage question"),
      acceptedAnswer,
      suggestedAnswer: input.suggestedAnswer,
      answerCount: input.answerCount,
      eduQuestionType: input.eduQuestionType,
      url: input.url,
    }),
  });
}

export function educationQaPageSchema(input: QaPageInput): JsonLd {
  return qaPageSchema(input);
}

export function quizNode(input: QuizInput): JsonLd {
  if (!input.hasPart.length) throw new Error("Quiz requires at least one question");
  const extra = additionalProps(input, ["id", "name", "description", "url", "image", "hasPart", "educationalLevel", "assesses", "learningResourceType"]);
  return node("Quiz", {
    ...extra,
    "@id": input.id,
    name: requireText(input.name, "Quiz name"),
    description: input.description,
    url: input.url,
    educationalLevel: input.educationalLevel,
    assesses: input.assesses,
    learningResourceType: input.learningResourceType,
    hasPart: input.hasPart.map((question) => questionNode(question)),
  });
}

export function howToItemNode(input: HowToItemInput): JsonLd {
  const extra = additionalProps(input, ["id", "name", "url", "position", "requiredQuantity"]);
  return node("HowToItem", {
    ...extra,
    "@id": input.id,
    name: input.name,
    url: input.url,
    position: input.position,
    requiredQuantity: input.requiredQuantity,
  });
}

export function howToSupplyNode(input: HowToSupplyInput): JsonLd {
  const extra = additionalProps(input, ["id", "name", "url", "position", "requiredQuantity", "estimatedCost"]);
  return node("HowToSupply", {
    ...extra,
    "@id": input.id,
    name: input.name,
    url: input.url,
    position: input.position,
    requiredQuantity: input.requiredQuantity,
    estimatedCost: input.estimatedCost,
  });
}

export function howToToolNode(input: HowToToolInput): JsonLd {
  const extra = additionalProps(input, ["id", "name", "url", "position", "requiredQuantity"]);
  return node("HowToTool", {
    ...extra,
    "@id": input.id,
    name: input.name,
    url: input.url,
    position: input.position,
    requiredQuantity: input.requiredQuantity,
  });
}

export function howToStepNode(input: HowToStepInput): JsonLd {
  const extra = additionalProps(input, ["id", "name", "text", "url", "image", "position", "itemListElement"]);
  return node("HowToStep", {
    ...extra,
    "@id": input.id,
    name: requireText(input.name, "HowTo step name"),
    text: requireText(input.text, "HowTo step text"),
    url: input.url,
    image: imageValue(input.image, imageObjectSchema),
    position: input.position,
    itemListElement: input.itemListElement,
  });
}

export function howToSectionNode(input: HowToSectionInput): JsonLd {
  const extra = additionalProps(input, ["id", "name", "text", "url", "position", "steps", "itemListElement"]);
  return node("HowToSection", {
    ...extra,
    "@id": input.id,
    name: requireText(input.name, "HowTo section name"),
    text: input.text,
    url: input.url,
    position: input.position,
    steps: input.steps,
    itemListElement: input.itemListElement,
  });
}

export function howToNode(input: HowToInput): JsonLd {
  if (!input.steps.length) throw new Error("HowTo requires at least one step");
  const extra = additionalProps(input, ["id", "name", "description", "url", "image", "steps", "totalTime"]);
  return node("HowTo", {
    ...extra,
    "@id": input.id,
    name: requireText(input.name, "name"),
    description: input.description,
    url: input.url,
    image: imageValue(input.image, imageObjectSchema),
    totalTime: input.totalTime,
    step: input.steps.map((step, index) => howToStepNode({ ...step, position: step.position ?? index + 1 })),
  });
}

export function itemListNode(input: ItemListInput): JsonLd {
  if (!input.items.length) throw new Error("ItemList requires at least one item");
  const extra = additionalProps(input, ["id", "name", "items"]);
  return node("ItemList", {
    ...extra,
    "@id": input.id,
    name: requireText(input.name, "name"),
    itemListElement: input.items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: requireText(item.name, "ItemList item name"),
      url: item.url,
      item: item.item,
    })),
  });
}

export function imageGalleryNode(input: ImageGalleryInput): JsonLd {
  return pageVariantNode("ImageGallery", input, {
    hasPart: input.hasPart,
    significantLinks: input.significantLinks,
  });
}

export function mediaGalleryNode(input: MediaGalleryInput): JsonLd {
  return pageVariantNode("MediaGallery", input, {
    hasPart: input.hasPart,
    significantLinks: input.significantLinks,
  });
}

export function realEstateListingNode(input: RealEstateListingInput): JsonLd {
  return pageVariantNode("RealEstateListing", input, {
    datePosted: input.datePosted,
    leaseLength: input.leaseLength,
    offers: input.offers,
  });
}

export function searchResultsPageNode(input: SearchResultsPageInput): JsonLd {
  const { query, ...schemaInput } = input;
  void query;
  return pageVariantNode(
    "SearchResultsPage",
    schemaInput,
    {
      significantLinks: schemaInput.significantLinks,
    },
    ["query"],
  );
}

export function carouselSchema(input: ItemListInput): JsonLd {
  return itemListNode(input);
}

export function courseListSchema(input: ItemListInput): JsonLd {
  return itemListNode(input);
}

export function softwareSourceCodeNode(input: SoftwareSourceCodeInput): JsonLd {
  const extra = additionalProps(input, ["id", "name", "description", "url", "image", "codeRepository", "programmingLanguage", "runtimePlatform"]);
  return node("SoftwareSourceCode", {
    ...extra,
    "@id": input.id,
    name: requireText(input.name, "name"),
    description: input.description,
    url: input.url,
    image: imageValue(input.image, imageObjectSchema),
    codeRepository: input.codeRepository,
    programmingLanguage: input.programmingLanguage,
    runtimePlatform: input.runtimePlatform,
  });
}

export function productNode(input: ProductInput): JsonLd {
  const extra = additionalProps(input, ["id", "name", "description", "url", "image", "brand", "sku", "category", "offers", "aggregateRating", "review"]);
  return node("Product", {
    ...extra,
    "@id": input.id,
    name: requireText(input.name, "name"),
    description: input.description,
    url: input.url,
    image: imageValue(input.image, imageObjectSchema),
    brand: personOrOrganizationRef(input.brand),
    sku: input.sku,
    category: input.category,
    offers: input.offers,
    aggregateRating: input.aggregateRating,
    review: input.review,
  });
}

export function merchantListingNode(input: ProductInput): JsonLd {
  return productNode(input);
}

export function productSnippetNode(input: ProductInput): JsonLd {
  if (input.offers === undefined && input.aggregateRating === undefined && input.review === undefined) {
    throw new Error("Product snippet structured data requires offers, aggregateRating, or review.");
  }
  return productNode(input);
}

export function datasetNode(input: DatasetInput): JsonLd {
  const extra = additionalProps(input, ["id", "name", "description", "url", "image", "creator", "distribution", "keywords", "datePublished", "dateModified"]);
  return node("Dataset", {
    ...extra,
    "@id": input.id,
    name: requireText(input.name, "name"),
    description: input.description,
    url: input.url,
    image: imageValue(input.image, imageObjectSchema),
    creator: personOrOrganizationRef(input.creator),
    distribution: input.distribution,
    keywords: input.keywords,
    datePublished: input.datePublished,
    dateModified: input.dateModified,
  });
}

export function eventNode(input: EventInput): JsonLd {
  const extra = additionalProps(input, ["id", "name", "description", "url", "image", "startDate", "endDate", "eventStatus", "eventAttendanceMode", "location", "organizer"]);
  return node("Event", {
    ...extra,
    "@id": input.id,
    name: requireText(input.name, "name"),
    description: input.description,
    url: input.url,
    image: imageValue(input.image, imageObjectSchema),
    startDate: requireText(input.startDate, "startDate"),
    endDate: input.endDate,
    eventStatus: input.eventStatus,
    eventAttendanceMode: input.eventAttendanceMode,
    location: input.location,
    organizer: personOrOrganizationRef(input.organizer),
  });
}

export function videoObjectNode(input: VideoObjectInput): JsonLd {
  const extra = additionalProps(input, ["id", "name", "description", "url", "image", "thumbnailUrl", "uploadDate", "duration", "embedUrl", "contentUrl", "clip", "publication"]);
  return node("VideoObject", {
    ...extra,
    "@id": input.id,
    name: requireText(input.name, "name"),
    description: input.description,
    url: input.url,
    thumbnailUrl: input.thumbnailUrl,
    uploadDate: requireText(input.uploadDate, "uploadDate"),
    duration: input.duration,
    embedUrl: input.embedUrl,
    contentUrl: input.contentUrl,
    hasPart: input.clip?.map((entry) => clipNode(entry)),
    publication: Array.isArray(input.publication)
      ? input.publication.map((entry) => broadcastEventNode(entry))
      : input.publication
        ? broadcastEventNode(input.publication)
        : undefined,
  });
}

export function mediaObjectNode(input: MediaObjectInput): JsonLd {
  const extra = additionalProps(input, [
    "id",
    "name",
    "description",
    "url",
    "image",
    "about",
    "abstract",
    "audience",
    "author",
    "dateCreated",
    "dateModified",
    "datePublished",
    "text",
    "contentUrl",
    "duration",
    "embedUrl",
    "encodingFormat",
    "thumbnailUrl",
    "transcript",
    "uploadDate",
  ]);
  const contentUrl = input.contentUrl ?? input.url;
  return node("MediaObject", {
    ...extra,
    "@id": input.id,
    name: requireText(input.name, "name"),
    description: input.description,
    url: input.url ?? contentUrl,
    image: imageValue(input.image, imageObjectSchema),
    about: input.about,
    abstract: input.abstract,
    audience: input.audience,
    author: personOrOrganizationRef(input.author),
    dateCreated: input.dateCreated,
    dateModified: input.dateModified,
    datePublished: input.datePublished,
    text: input.text,
    contentUrl,
    duration: input.duration,
    embedUrl: input.embedUrl,
    encodingFormat: input.encodingFormat,
    thumbnailUrl: input.thumbnailUrl,
    transcript: input.transcript,
    uploadDate: input.uploadDate,
  });
}

export function mediaSubscriptionNode(input: MediaSubscriptionInput): JsonLd {
  const expectsAcceptanceOf = Array.isArray(input.expectsAcceptanceOf)
    ? input.expectsAcceptanceOf.map((entry) =>
        typeof entry === "string"
          ? { "@type": "Offer", name: entry }
          : entry && typeof entry === "object" && entry["@type"] !== "Offer"
            ? { "@type": "Offer", name: typeof entry.name === "string" ? entry.name : undefined, url: typeof entry.url === "string" ? entry.url : undefined }
            : entry,
      )
    : typeof input.expectsAcceptanceOf === "string"
      ? { "@type": "Offer", name: input.expectsAcceptanceOf }
      : input.expectsAcceptanceOf && typeof input.expectsAcceptanceOf === "object" && input.expectsAcceptanceOf["@type"] !== "Offer"
        ? { "@type": "Offer", name: typeof input.expectsAcceptanceOf.name === "string" ? input.expectsAcceptanceOf.name : undefined, url: typeof input.expectsAcceptanceOf.url === "string" ? input.expectsAcceptanceOf.url : undefined }
        : input.expectsAcceptanceOf;
  const extra = additionalProps(input, [
    "id",
    "name",
    "description",
    "url",
    "image",
    "alternateName",
    "disambiguatingDescription",
    "identifier",
    "mainEntityOfPage",
    "owner",
    "potentialAction",
    "sameAs",
    "subjectOf",
    "authenticatingAuthority",
    "expectsAcceptanceOf",
  ]);
  return node("MediaSubscription", {
    ...extra,
    "@id": input.id,
    name: requireText(input.name, "name"),
    description: input.description,
    url: input.url,
    image: imageValue(input.image, imageObjectSchema),
    alternateName: input.alternateName,
    disambiguatingDescription: input.disambiguatingDescription,
    identifier: input.identifier,
    mainEntityOfPage: input.mainEntityOfPage,
    owner: personOrOrganizationRef(input.owner),
    potentialAction: input.potentialAction,
    sameAs: input.sameAs,
    subjectOf: input.subjectOf,
    expectsAcceptanceOf,
  });
}

export function nutritionInformationNode(input: NutritionInformationInput): JsonLd {
  const extra = additionalProps(input, [
    "id",
    "name",
    "description",
    "url",
    "image",
    "alternateName",
    "disambiguatingDescription",
    "identifier",
    "mainEntityOfPage",
    "owner",
    "potentialAction",
    "sameAs",
    "subjectOf",
    "calories",
    "carbohydrateContent",
    "cholesterolContent",
    "fatContent",
    "fiberContent",
    "proteinContent",
    "saturatedFatContent",
    "servingSize",
    "sodiumContent",
    "sugarContent",
    "transFatContent",
    "unsaturatedFatContent",
  ]);
  return node("NutritionInformation", {
    ...extra,
    "@id": input.id,
    name: requireText(input.name, "name"),
    description: input.description,
    url: input.url,
    image: imageValue(input.image, imageObjectSchema),
    alternateName: input.alternateName,
    disambiguatingDescription: input.disambiguatingDescription,
    identifier: input.identifier,
    mainEntityOfPage: input.mainEntityOfPage,
    owner: personOrOrganizationRef(input.owner),
    potentialAction: input.potentialAction,
    sameAs: input.sameAs,
    subjectOf: input.subjectOf,
    servingSize: input.servingSize,
  });
}

export function offerNode(input: OfferInput): JsonLd {
  const extra = additionalProps(input, ["id", "name", "description", "url", "image", "availability", "category", "itemOffered", "price", "priceCurrency", "seller"]);
  return node("Offer", {
    ...extra,
    "@id": input.id,
    name: input.name,
    description: input.description,
    url: input.url,
    image: imageValue(input.image, imageObjectSchema),
    availability: input.availability,
    category: input.category,
    itemOffered: input.itemOffered,
    price: input.price,
    priceCurrency: input.priceCurrency,
    seller: personOrOrganizationRef(input.seller),
  });
}

export function offerCatalogNode(input: OfferCatalogInput): JsonLd {
  const extra = additionalProps(input, ["id", "name", "description", "url", "image", "itemListElement", "numberOfItems"]);
  return node("OfferCatalog", {
    ...extra,
    "@id": input.id,
    name: input.name,
    description: input.description,
    url: input.url,
    image: imageValue(input.image, imageObjectSchema),
    itemListElement: input.itemListElement,
    numberOfItems: input.numberOfItems,
  });
}

export function openingHoursSpecificationNode(input: OpeningHoursSpecificationInput): JsonLd {
  const extra = additionalProps(input, ["id", "name", "description", "closes", "dayOfWeek", "opens", "validFrom", "validThrough"]);
  return node("OpeningHoursSpecification", {
    ...extra,
    "@id": input.id,
    name: input.name,
    description: input.description,
    closes: input.closes,
    opens: input.opens,
    validFrom: input.validFrom,
    validThrough: input.validThrough,
  });
}

export function programMembershipNode(input: ProgramMembershipInput): JsonLd {
  const extra = additionalProps(input, ["id", "name", "description", "url", "image", "hostingOrganization", "member", "membershipNumber", "programName"]);
  return node("ProgramMembership", {
    ...extra,
    "@id": input.id,
    name: input.name,
    description: input.description,
    url: input.url,
    image: imageValue(input.image, imageObjectSchema),
    hostingOrganization: personOrOrganizationRef(input.hostingOrganization),
    member: input.member,
    membershipNumber: input.membershipNumber,
    programName: input.programName,
  });
}

export function publicationEventNode(input: PublicationEventInput): JsonLd {
  const extra = additionalProps(input, ["id", "name", "description", "url", "image", "publishedBy", "startDate"]);
  return node("PublicationEvent", {
    ...extra,
    "@id": input.id,
    name: input.name,
    description: input.description,
    url: input.url,
    image: imageValue(input.image, imageObjectSchema),
    publishedBy: personOrOrganizationRef(input.publishedBy),
    startDate: input.startDate,
  });
}

export function repaymentSpecificationNode(input: RepaymentSpecificationInput): JsonLd {
  const extra = additionalProps(input, ["id", "name", "description", "downPayment", "loanPaymentAmount", "loanPaymentFrequency", "numberOfLoanPayments"]);
  return node("RepaymentSpecification", {
    ...extra,
    "@id": input.id,
    name: input.name,
    description: input.description,
  });
}

export function scheduleNode(input: ScheduleInput): JsonLd {
  const extra = additionalProps(input, ["id", "name", "description", "byDay", "endDate", "repeatCount", "repeatFrequency", "startDate"]);
  return node("Schedule", {
    ...extra,
    "@id": input.id,
    name: input.name,
    description: input.description,
    byDay: input.byDay,
    endDate: input.endDate,
    repeatCount: input.repeatCount,
    repeatFrequency: input.repeatFrequency,
    startDate: input.startDate,
  });
}

export function seriesNode(input: SeriesInput): JsonLd {
  const extra = additionalProps(input, ["id", "name", "description", "url", "image", "endDate", "startDate"]);
  return node("Series", {
    ...extra,
    "@id": input.id,
    name: input.name,
    description: input.description,
    url: input.url,
    image: imageValue(input.image, imageObjectSchema),
  });
}

export function serviceNode(input: ServiceInput): JsonLd {
  const extra = additionalProps(input, ["id", "name", "description", "url", "image", "areaServed", "provider", "serviceType"]);
  return node("Service", {
    ...extra,
    "@id": input.id,
    name: input.name,
    description: input.description,
    url: input.url,
    image: imageValue(input.image, imageObjectSchema),
    areaServed: input.areaServed,
    provider: personOrOrganizationRef(input.provider),
    serviceType: input.serviceType,
  });
}

export function serviceChannelNode(input: ServiceChannelInput): JsonLd {
  const extra = additionalProps(input, ["id", "name", "description", "url", "image", "availableLanguage", "processingTime", "servicePhone", "serviceUrl"]);
  return node("ServiceChannel", {
    ...extra,
    "@id": input.id,
    name: input.name,
    description: input.description,
    url: input.url,
    image: imageValue(input.image, imageObjectSchema),
    serviceUrl: input.serviceUrl,
  });
}

export function servicePeriodNode(input: ServicePeriodInput): JsonLd {
  const extra = additionalProps(input, ["id", "name", "description", "cutoffTime", "endDate", "startDate"]);
  return node("ServicePeriod", {
    ...extra,
    "@id": input.id,
    name: input.name,
    description: input.description,
    cutoffTime: input.cutoffTime,
  });
}

export function shippingConditionsNode(input: ShippingConditionsInput): JsonLd {
  const extra = additionalProps(input, ["id", "name", "description", "shippingDestination", "shippingOrigin"]);
  return node("ShippingConditions", {
    ...extra,
    "@id": input.id,
    name: input.name,
    description: input.description,
  });
}

export function shippingDeliveryTimeNode(input: ShippingDeliveryTimeInput): JsonLd {
  const extra = additionalProps(input, ["id", "name", "description", "cutoffTime"]);
  return node("ShippingDeliveryTime", {
    ...extra,
    "@id": input.id,
    name: input.name,
    description: input.description,
    cutoffTime: input.cutoffTime,
  });
}

export function shippingRateSettingsNode(input: ShippingRateSettingsInput): JsonLd {
  const extra = additionalProps(input, ["id", "name", "description", "shippingDestination"]);
  return node("ShippingRateSettings", {
    ...extra,
    "@id": input.id,
    name: input.name,
    description: input.description,
  });
}

export function shippingServiceNode(input: ShippingServiceInput): JsonLd {
  const extra = additionalProps(input, ["id", "name", "description", "shippingConditions"]);
  return node("ShippingService", {
    ...extra,
    "@id": input.id,
    name: input.name,
    description: input.description,
  });
}

export function virtualLocationNode(input: VirtualLocationInput): JsonLd {
  const extra = additionalProps(input, ["id", "name", "description", "url", "image"]);
  return node("VirtualLocation", {
    ...extra,
    "@id": input.id,
    name: input.name,
    description: input.description,
    url: input.url,
    image: imageValue(input.image, imageObjectSchema),
  });
}

export function audioObjectNode(input: AudioObjectInput): JsonLd {
  const extra = additionalProps(input, [
    "id",
    "name",
    "description",
    "url",
    "image",
    "caption",
    "contentUrl",
    "duration",
    "embeddedTextCaption",
    "encodingFormat",
    "transcript",
    "uploadDate",
  ]);
  const contentUrl = input.contentUrl ?? input.url;
  return node("AudioObject", {
    ...extra,
    "@id": input.id,
    name: requireText(input.name, "name"),
    description: input.description,
    url: input.url ?? contentUrl,
    image: imageValue(input.image, imageObjectSchema),
    contentUrl,
    encodingFormat: input.encodingFormat,
    uploadDate: input.uploadDate,
    duration: input.duration,
    caption: input.caption,
    embeddedTextCaption: input.embeddedTextCaption,
    transcript: input.transcript,
  });
}

export function videoGalleryNode(input: VideoGalleryInput): JsonLd {
  return pageVariantNode("VideoGallery", input, {
    hasPart: input.hasPart,
    video: input.video,
  });
}

export function clipNode(input: ClipInput): JsonLd {
  const extra = additionalProps(input, ["id", "name", "description", "url", "image", "startOffset", "endOffset"]);
  return node("Clip", {
    ...extra,
    "@id": input.id,
    name: requireText(input.name, "Clip name"),
    description: input.description,
    url: input.url,
    startOffset: input.startOffset,
    endOffset: input.endOffset,
  });
}

export function broadcastEventNode(input: BroadcastEventInput): JsonLd {
  const extra = additionalProps(input, ["id", "name", "description", "url", "image", "startDate", "endDate", "isLiveBroadcast"]);
  return node("BroadcastEvent", {
    ...extra,
    "@id": input.id,
    name: input.name,
    description: input.description,
    url: input.url,
    startDate: input.startDate,
    endDate: input.endDate,
    isLiveBroadcast: input.isLiveBroadcast,
  });
}

export function profilePageNode(input: ProfilePageInput): JsonLd {
  const extra = additionalProps(input, ["id", "name", "description", "url", "image", "mainEntity"]);
  return node("ProfilePage", {
    ...extra,
    "@id": input.id,
    name: requireText(input.name, "name"),
    description: input.description,
    url: input.url,
    image: imageValue(input.image, imageObjectSchema),
    mainEntity: input.mainEntity,
  });
}

export function aggregateRatingNode(input: AggregateRatingInput): JsonLd {
  const extra = additionalProps(input, ["ratingValue", "reviewCount", "ratingCount", "bestRating", "worstRating"]);
  return node("AggregateRating", {
    ...extra,
    ratingValue: input.ratingValue,
    reviewCount: input.reviewCount,
    ratingCount: input.ratingCount,
    bestRating: input.bestRating,
    worstRating: input.worstRating,
  });
}

export function reviewNode(input: ReviewInput): JsonLd {
  const extra = additionalProps(input, ["id", "name", "description", "url", "image", "itemReviewed", "reviewRating", "author", "reviewBody"]);
  return node("Review", {
    ...extra,
    "@id": input.id,
    name: requireText(input.name, "name"),
    description: input.description,
    url: input.url,
    itemReviewed: input.itemReviewed,
    reviewRating: input.reviewRating,
    author: personOrOrganizationRef(input.author),
    reviewBody: input.reviewBody,
  });
}
