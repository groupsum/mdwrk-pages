export type JsonLd = Record<string, unknown>;
export interface StructuredDataExtensible {
  [key: string]: unknown;
}
export type JsonLdNodeType =
  | "Action"
  | "AdministrativeArea"
  | "AboutPage"
  | "AggregateOffer"
  | "Thing"
  | "Intangible"
  | "StructuredValue"
  | "TypeAndQuantityNode"
  | "UnitPriceSpecification"
  | "WarrantyPromise"
  | "QuantitativeValue"
  | "QuantitativeValueDistribution"
  | "MonetaryAmount"
  | "Rating"
  | "RuntimePlatform"
  | "OperatingSystem"
  | "XPathType"
  | "GeospatialGeometry"
  | "HealthInsurancePlan"
  | "HealthPlanCostSharingSpecification"
  | "HealthPlanFormulary"
  | "HealthPlanNetwork"
  | "WebPage"
  | "WebSite"
  | "Brand"
  | "BroadcastChannel"
  | "BroadcastFrequencySpecification"
  | "BroadcastService"
  | "CategoryCode"
  | "CategoryCodeSet"
  | "CableOrSatelliteService"
  | "Class"
  | "Certification"
  | "Claim"
  | "CivicStructure"
  | "Comment"
  | "ConstraintNode"
  | "ContactPoint"
  | "CorrectionComment"
  | "Country"
  | "CreativeWork"
  | "CreativeWorkSeason"
  | "CreativeWorkSeries"
  | "Credential"
  | "CreditCard"
  | "CssSelectorType"
  | "DataCatalog"
  | "DataDownload"
  | "DataFeed"
  | "DataFeedItem"
  | "DefinedRegion"
  | "DefinedTerm"
  | "DefinedTermSet"
  | "DeliveryChargeSpecification"
  | "Demand"
  | "Distance"
  | "Duration"
  | "EducationalOccupationalCredential"
  | "EducationalOrganization"
  | "Energy"
  | "EnergyConsumptionDetails"
  | "EntryPoint"
  | "Enumeration"
  | "Episode"
  | "FinancialProduct"
  | "Gene"
  | "GeoCoordinates"
  | "GeoShape"
  | "Grant"
  | "HyperTocEntry"
  | "ImageGallery"
  | "InteractionCounter"
  | "Integer"
  | "Language"
  | "LifestyleModification"
  | "ListItem"
  | "LoanOrCredit"
  | "LocationFeatureSpecification"
  | "Mass"
  | "Map"
  | "MaximumDoseSchedule"
  | "MediaGallery"
  | "MediaObject"
  | "MediaSubscription"
  | "MenuItem"
  | "MenuSection"
  | "MedicalAudience"
  | "MedicalCause"
  | "MedicalCode"
  | "MedicalCondition"
  | "MedicalConditionStage"
  | "MedicalContraindication"
  | "MedicalDevice"
  | "MedicalEntity"
  | "MedicalGuideline"
  | "MedicalIntangible"
  | "MedicalProcedure"
  | "MedicalRiskFactor"
  | "MedicalSign"
  | "MedicalSignOrSymptom"
  | "MedicalStudy"
  | "MedicalTest"
  | "MedicalTherapy"
  | "MemberProgramTier"
  | "MerchantReturnPolicySeasonalOverride"
  | "NutritionInformation"
  | "Occupation"
  | "OccupationalExperienceRequirements"
  | "Offer"
  | "OfferCatalog"
  | "OpeningHoursSpecification"
  | "Property"
  | "PropertyValue"
  | "ProgramMembership"
  | "PublicationEvent"
  | "RepaymentSpecification"
  | "AlignmentObject"
  | "Audience"
  | "AudioObject"
  | "CheckoutPage"
  | "CollectionPage"
  | "ContactPage"
  | "Organization"
  | "SoftwareApplication"
  | "WebApplication"
  | "ItemPage"
  | "NewsArticle"
  | "Article"
  | "TechArticle"
  | "BlogPosting"
  | "BreadcrumbList"
  | "FAQPage"
  | "QAPage"
  | "Quiz"
  | "Question"
  | "Answer"
  | "HowTo"
  | "HowToItem"
  | "HowToSection"
  | "HowToStep"
  | "HowToSupply"
  | "HowToTool"
  | "ItemList"
  | "SoftwareSourceCode"
  | "Product"
  | "Dataset"
  | "Event"
  | "VideoObject"
  | "ImageObject"
  | "ProfilePage"
  | "Review"
  | "AggregateRating"
  | "Course"
  | "CourseInstance"
  | "DiscussionForumPosting"
  | "Book"
  | "ReadAction"
  | "ClaimReview"
  | "EmployerAggregateRating"
  | "MonetaryAmountDistribution"
  | "JobPosting"
  | "LocalBusiness"
  | "LearningResource"
  | "MemberProgram"
  | "MathSolver"
  | "Schedule"
  | "Series"
  | "Service"
  | "ServiceChannel"
  | "ServicePeriod"
  | "ShippingConditions"
  | "ShippingDeliveryTime"
  | "ShippingRateSettings"
  | "ShippingService"
  | "StatisticalVariable"
  | "Substance"
  | "Taxon"
  | "SolveMathAction"
  | "MerchantReturnPolicy"
  | "OfferShippingDetails"
  | "Movie"
  | "MusicAlbum"
  | "MusicComposition"
  | "MusicGroup"
  | "MusicPlaylist"
  | "MusicRecording"
  | "MusicRelease"
  | "ProductGroup"
  | "ProductModel"
  | "Recipe"
  | "RealEstateListing"
  | "SearchResultsPage"
  | "SpeakableSpecification"
  | "SuperficialAnatomy"
  | "MedicalWebPage"
  | "TherapeuticProcedure"
  | "Clip"
  | "TextObject"
  | "Trip"
  | "BroadcastEvent"
  | "VacationRental"
  | "Vehicle"
  | "VideoGallery"
  | "VirtualLocation"
  | "URL"
  | "WebContent"
  | "WebPageElement";

export interface StructuredDataImage extends StructuredDataExtensible {
  src?: string;
  url?: string;
  width?: number;
  height?: number;
  caption?: string;
  alt?: string;
}

export interface StructuredDataProduct {
  name: string;
  slug?: string;
  tagline?: string;
  description?: string;
  category?: string;
  canonicalUrl: string;
  logo?: StructuredDataImage;
  sameAs?: string[];
}

export interface StructuredDataSite {
  product: StructuredDataProduct;
}

export interface StructuredDataBreadcrumbItem {
  label: string;
  href: string;
}

export interface StructuredDataFaqItem {
  question: string;
  answer: string;
}

export interface StructuredDataPage {
  kind?: string;
  slug?: string;
  title: string;
  description?: string;
  h1: string;
  canonicalUrl: string;
  breadcrumbs: StructuredDataBreadcrumbItem[];
  faq?: StructuredDataFaqItem[];
  image?: StructuredDataImage;
  datePublished?: string;
  dateModified?: string;
  authorName?: string;
}

export interface StructuredDataThingInput extends StructuredDataExtensible {
  id?: string;
  name: string;
  description?: string;
  url?: string;
  image?: string | StructuredDataImage;
}

export interface ThingInput extends StructuredDataThingInput {
  alternateName?: string;
  disambiguatingDescription?: string;
  identifier?: JsonLd | string;
  mainEntityOfPage?: JsonLd | string;
  owner?: JsonLd | string;
  potentialAction?: JsonLd | JsonLd[] | string | string[];
  sameAs?: string[];
  subjectOf?: JsonLd | JsonLd[] | string | string[];
}

export interface IntangibleInput extends ThingInput {}

export interface StructuredValueInput extends IntangibleInput {}

export interface TypeAndQuantityNodeInput extends StructuredValueInput {
  amountOfThisGood?: number | string;
  businessFunction?: string;
  typeOfGood?: JsonLd | string;
  unitCode?: string;
  unitText?: string;
}

export interface UnitPriceSpecificationInput extends StructuredValueInput {
  billingDuration?: number | string | JsonLd;
  billingIncrement?: number;
  billingStart?: number;
  price?: number | string;
  priceComponentType?: string;
  priceCurrency?: string;
  priceType?: string;
  referenceQuantity?: number | string | JsonLd;
  unitCode?: string;
  unitText?: string;
  validFrom?: string;
  validThrough?: string;
}

export interface WarrantyPromiseInput extends StructuredValueInput {
  durationOfWarranty?: number | string | JsonLd;
  warrantyScope?: string;
}

export interface ActionInput extends StructuredDataThingInput {
  actionProcess?: string;
  actionStatus?: string;
  agent?: JsonLd | string;
  endTime?: string;
  error?: JsonLd | string;
  instrument?: JsonLd | string;
  location?: JsonLd | string;
  object?: JsonLd | string;
  participant?: JsonLd | JsonLd[] | string | string[];
  provider?: JsonLd | string;
  result?: JsonLd | string;
  startTime?: string;
  target?: JsonLd | string;
}

export interface AdministrativeAreaInput extends StructuredDataThingInput {
  containedInPlace?: JsonLd | string;
}

export interface WebPageInput extends StructuredDataThingInput {
  primaryType?: string;
  mainEntity?: JsonLd | string;
  breadcrumb?: JsonLd | string;
  isPartOf?: JsonLd | string;
  datePublished?: string;
  dateModified?: string;
}

export interface AboutPageInput extends WebPageInput {
  about?: JsonLd | string;
}

export interface AggregateOfferInput extends StructuredDataThingInput {
  availability?: string;
  businessFunction?: string;
  category?: string;
  eligibleQuantity?: JsonLd;
  highPrice?: number | string;
  itemCondition?: string;
  lowPrice?: number | string;
  offerCount?: number;
  offers?: JsonLd | JsonLd[];
  price?: number | string;
  priceCurrency?: string;
  priceValidUntil?: string;
  seller?: JsonLd | string;
  validFrom?: string;
}

export interface AlignmentObjectInput extends StructuredDataThingInput {
  alignmentType?: string;
  educationalFramework?: string;
  targetDescription?: string;
  targetName?: string;
  targetUrl?: string;
}

export interface AudienceInput extends StructuredDataThingInput {
  audienceType?: string;
  geographicArea?: JsonLd | string;
}

export interface AudioObjectInput extends StructuredDataThingInput {
  caption?: string;
  contentUrl?: string;
  duration?: string;
  embeddedTextCaption?: string;
  encodingFormat?: string;
  transcript?: string;
  uploadDate?: string;
}

export interface BrandInput extends StructuredDataThingInput {
  aggregateRating?: JsonLd;
  logo?: string | StructuredDataImage;
  review?: JsonLd | JsonLd[];
  slogan?: string;
}

export interface BroadcastChannelInput extends StructuredDataThingInput {
  broadcastChannelId?: string;
  inBroadcastLineup?: JsonLd | string;
  providesBroadcastService?: JsonLd | string;
}

export interface BroadcastFrequencySpecificationInput extends StructuredDataThingInput {
  broadcastFrequencyValue?: number | string;
  broadcastSignalModulation?: string;
  subtitleLanguage?: string;
  videoFormat?: string;
}

export interface BroadcastServiceInput extends StructuredDataThingInput {
  areaServed?: JsonLd | string;
  broadcastAffiliateOf?: JsonLd | string;
  broadcastDisplayName?: string;
  broadcaster?: JsonLd | string;
  hasBroadcastChannel?: JsonLd | JsonLd[] | string | string[];
  parentService?: JsonLd | string;
  provider?: JsonLd | string;
}

export interface CategoryCodeInput extends DefinedTermInput {
  codeValue?: string;
  inCodeSet?: JsonLd | string;
}

export interface CategoryCodeSetInput extends DefinedTermSetInput {
  hasCategoryCode?: JsonLd | JsonLd[] | string | string[];
}

export interface CableOrSatelliteServiceInput extends StructuredDataThingInput {
  areaServed?: JsonLd | string;
  hasOfferCatalog?: JsonLd | string;
  provider?: JsonLd | string;
  serviceLocation?: JsonLd | string;
}

export interface ClassInput extends StructuredDataThingInput {
  supersededBy?: JsonLd | string;
}

export interface ContactPointInput extends StructuredDataThingInput {
  areaServed?: JsonLd | string;
  availableLanguage?: string | string[];
  contactOption?: string | string[];
  contactType?: string;
  email?: string;
  faxNumber?: string;
  hoursAvailable?: string | string[];
  productSupported?: JsonLd | string;
  serviceArea?: JsonLd | string;
  telephone?: string;
}

export interface CreativeWorkInput extends StructuredDataThingInput {
  about?: JsonLd | string;
  abstract?: string;
  audience?: JsonLd | JsonLd[] | string | string[];
  author?: JsonLd | string;
  dateCreated?: string;
  dateModified?: string;
  datePublished?: string;
  text?: string;
}

export interface WebContentInput extends CreativeWorkInput {}

export interface WebPageElementInput extends CreativeWorkInput {
  cssSelector?: string | string[];
  xpath?: string | string[];
}

export interface CertificationInput extends CreativeWorkInput {
  certificationIdentification?: string;
  certificationRating?: string;
  certificationStatus?: string;
  issuedBy?: JsonLd | string;
  validFrom?: string;
  validIn?: JsonLd | string;
}

export interface ClaimInput extends CreativeWorkInput {
  appearance?: JsonLd | JsonLd[] | string | string[];
  claimInterpreter?: JsonLd | string;
  firstAppearance?: JsonLd | string;
}

export interface CivicStructureInput extends StructuredDataThingInput {
  openingHours?: string | string[];
  publicAccess?: boolean;
}

export interface CommentInput extends CreativeWorkInput {
  downvoteCount?: number;
  parentItem?: JsonLd | string;
  sharedContent?: JsonLd | string;
  upvoteCount?: number;
}

export interface ConstraintNodeInput extends StructuredDataThingInput {
  constraintProperty?: string;
  numConstraints?: number;
}

export interface CorrectionCommentInput extends CommentInput {}

export interface CountryInput extends AdministrativeAreaInput {}

export interface CreativeWorkSeasonInput extends CreativeWorkInput {
  actor?: JsonLd | JsonLd[] | string | string[];
  director?: JsonLd | JsonLd[] | string | string[];
  endDate?: string;
  episode?: JsonLd | JsonLd[] | string | string[];
  numberOfEpisodes?: number;
  partOfSeries?: JsonLd | string;
  productionCompany?: JsonLd | string;
  seasonNumber?: number | string;
  startDate?: string;
}

export interface CreativeWorkSeriesInput extends CreativeWorkInput {
  endDate?: string;
  issn?: string;
  startDate?: string;
}

export interface CredentialInput extends CreativeWorkInput {
  credentialCategory?: string;
  recognizedBy?: JsonLd | string;
  validFor?: JsonLd | string;
  validIn?: JsonLd | string;
}

export interface CreditCardInput extends StructuredDataThingInput {
  cashBack?: JsonLd | string;
  feesAndCommissionsSpecification?: string;
  interestRate?: number | string;
  monthlyMinimumRepaymentAmount?: JsonLd | string;
}

export interface CssSelectorTypeInput extends StructuredDataExtensible {}

export interface DataCatalogInput extends CreativeWorkInput {
  dataset?: JsonLd | JsonLd[] | string | string[];
}

export interface DataDownloadInput extends CreativeWorkInput {
  contentUrl?: string;
  encodingFormat?: string;
  measurementMethod?: string;
  measurementTechnique?: string;
}

export interface DataFeedInput extends StructuredDataThingInput {
  dataFeedElement?: JsonLd | JsonLd[] | string | string[];
  dateModified?: string;
}

export interface DataFeedItemInput extends StructuredDataThingInput {
  dateCreated?: string;
  dateDeleted?: string;
  dateModified?: string;
  item?: JsonLd | string;
}

export interface DefinedRegionInput extends StructuredDataThingInput {
  addressCountry?: string | JsonLd;
  addressRegion?: string;
  postalCode?: string;
  postalCodePrefix?: string;
  postalCodeRange?: JsonLd | string;
}

export interface DefinedTermInput extends StructuredDataThingInput {
  about?: JsonLd | string;
  inDefinedTermSet?: JsonLd | string;
  termCode?: string;
}

export interface DefinedTermSetInput extends CreativeWorkInput {
  about?: JsonLd | string;
  hasDefinedTerm?: JsonLd | JsonLd[] | string | string[];
}

export interface DeliveryChargeSpecificationInput extends StructuredDataThingInput {
  appliesToDeliveryMethod?: string | string[];
  areaServed?: JsonLd | JsonLd[] | string | string[];
  eligibleRegion?: JsonLd | JsonLd[] | string | string[];
  ineligibleRegion?: JsonLd | JsonLd[] | string | string[];
  price?: number | string;
  priceCurrency?: string;
}

export interface DemandInput extends StructuredDataThingInput {
  acceptedPaymentMethod?: string | string[];
  areaServed?: JsonLd | JsonLd[] | string | string[];
  availability?: string;
  availabilityEnds?: string;
  availabilityStarts?: string;
  businessFunction?: string;
  eligibleRegion?: JsonLd | JsonLd[] | string | string[];
  ineligibleRegion?: JsonLd | JsonLd[] | string | string[];
  itemOffered?: JsonLd | string;
  priceSpecification?: JsonLd | string;
  seller?: JsonLd | string;
  validFrom?: string;
  validThrough?: string;
}

export interface DistanceInput extends StructuredDataExtensible {}

export interface DurationInput extends StructuredDataExtensible {
  id?: string;
}

export interface EducationalOccupationalCredentialInput extends CredentialInput {
  competencyRequired?: JsonLd | JsonLd[] | string | string[];
  educationalLevel?: string;
  occupationalCategory?: string | string[];
}

export interface EducationalOrganizationInput extends OrganizationInput {
  address?: JsonLd | string;
}

export interface EnergyInput extends StructuredDataExtensible {
  id?: string;
}

export interface EnergyConsumptionDetailsInput extends StructuredDataThingInput {
  energyEfficiencyScaleMax?: JsonLd | string;
  energyEfficiencyScaleMin?: JsonLd | string;
  hasEnergyEfficiencyCategory?: JsonLd | string;
}

export interface EntryPointInput extends StructuredDataThingInput {
  actionApplication?: JsonLd | JsonLd[] | string | string[];
  actionPlatform?: string | string[];
  contentType?: string;
  encodingType?: string;
  httpMethod?: string;
  urlTemplate?: string;
}

export interface EnumerationInput extends StructuredDataThingInput {
  supersededBy?: JsonLd | string;
}

export interface EpisodeInput extends CreativeWorkInput {
  actor?: JsonLd | JsonLd[] | string | string[];
  director?: JsonLd | JsonLd[] | string | string[];
  episodeNumber?: number | string;
  partOfSeason?: JsonLd | string;
  partOfSeries?: JsonLd | string;
  productionCompany?: JsonLd | string;
}

export interface FinancialProductInput extends StructuredDataThingInput {
  annualPercentageRate?: number | string | JsonLd;
  feesAndCommissionsSpecification?: string;
  interestRate?: number | string | JsonLd;
  provider?: JsonLd | string;
}

export interface GeneInput extends StructuredDataThingInput {
  associatedDisease?: JsonLd | JsonLd[] | string | string[];
  hasBioPolymerSequence?: string;
}

export interface GeoCoordinatesInput extends StructuredDataExtensible {
  id?: string;
  name?: string;
  description?: string;
  url?: string;
  image?: string | StructuredDataImage;
  addressCountry?: string;
  elevation?: number | string;
  latitude?: number | string;
  longitude?: number | string;
  postalCode?: string;
}

export interface GeoShapeInput extends StructuredDataExtensible {
  id?: string;
  name?: string;
  description?: string;
  url?: string;
  image?: string | StructuredDataImage;
  addressCountry?: string;
  box?: string;
  circle?: string;
  elevation?: number | string;
  line?: string;
  polygon?: string;
  postalCode?: string;
}

export interface GeospatialGeometryInput extends StructuredDataThingInput {
  geoContains?: JsonLd;
  geoCoveredBy?: JsonLd;
  geoCovers?: JsonLd;
  geoCrosses?: JsonLd;
  geoDisjoint?: JsonLd;
  geoEquals?: JsonLd;
  geoIntersects?: JsonLd;
  geoOverlaps?: JsonLd;
  geoTouches?: JsonLd;
  geoWithin?: JsonLd;
}

export interface GrantInput extends StructuredDataThingInput {
  fundedItem?: JsonLd | JsonLd[] | string | string[];
}

export interface HyperTocEntryInput extends CreativeWorkInput {
  position?: number | string;
  target?: JsonLd | string;
}

export interface HealthPlanCostSharingSpecificationInput extends StructuredDataThingInput {
  healthPlanCoinsuranceOption?: string;
  healthPlanCoinsuranceRate?: number | string;
  healthPlanCopay?: JsonLd;
  healthPlanCopayOption?: string;
  healthPlanPharmacyCategory?: string;
}

export interface HealthPlanFormularyInput extends StructuredDataThingInput {
  healthPlanCostSharing?: boolean | JsonLd;
  healthPlanDrugTier?: string;
  offersPrescriptionByMail?: boolean;
}

export interface HealthPlanNetworkInput extends StructuredDataThingInput {
  healthPlanCostSharing?: boolean | JsonLd;
  healthPlanNetworkId?: string;
  healthPlanNetworkTier?: string;
}

export interface HealthInsurancePlanInput extends StructuredDataThingInput {
  benefitsSummaryUrl?: string;
  contactPoint?: JsonLd;
  healthPlanDrugOption?: string;
  healthPlanDrugTier?: string;
  healthPlanId?: string;
  healthPlanMarketingUrl?: string;
  includesHealthPlanFormulary?: JsonLd;
  includesHealthPlanNetwork?: JsonLd;
  usesHealthPlanIdStandard?: string;
}

export interface QuantitativeValueInput extends StructuredValueInput {
  additionalProperty?: JsonLd | JsonLd[] | string | string[];
  maxValue?: number | string;
  minValue?: number | string;
  unitCode?: string;
  unitText?: string;
  value?: JsonLd | string | number | boolean;
  valueReference?: JsonLd | string;
}

export interface QuantitativeValueDistributionInput extends StructuredValueInput {
  currency?: string;
  duration?: string;
  median?: number | string;
  percentile10?: number | string;
  percentile25?: number | string;
  percentile75?: number | string;
  percentile90?: number | string;
}

export interface MonetaryAmountInput extends StructuredValueInput {
  currency?: string;
  maxValue?: number | string;
  minValue?: number | string;
  validFrom?: string;
  validThrough?: string;
  value?: JsonLd | string | number | boolean;
}

export interface RatingInput extends IntangibleInput {
  author?: JsonLd | string;
  bestRating?: number | string;
  ratingExplanation?: string;
  ratingValue?: number | string;
  reviewAspect?: string;
  worstRating?: number | string;
}

export interface InteractionCounterInput extends StructuredValueInput {
  interactionService?: JsonLd | string;
  interactionStatistic?: JsonLd | string;
  userInteractionCount?: number | string;
}

export interface IntegerInput extends StructuredDataExtensible {}

export interface LanguageInput extends StructuredDataThingInput {
  alternateName?: string;
}

export interface LifestyleModificationInput extends MedicalEntityInput {
  code?: JsonLd | string;
}

export interface ListItemInput extends IntangibleInput {
  item?: JsonLd | string;
  nextItem?: JsonLd | string;
  position?: number | string;
  previousItem?: JsonLd | string;
}

export interface LoanOrCreditInput extends FinancialProductInput {
  amount?: JsonLd | string | number;
  loanTerm?: JsonLd | string;
  requiredCollateral?: string;
}

export interface LocationFeatureSpecificationInput extends PropertyValueInput {
  hoursAvailable?: JsonLd | JsonLd[] | string | string[];
  validFrom?: string;
  validThrough?: string;
}

export interface MassInput extends StructuredDataExtensible {
  id?: string;
}

export interface MapInput extends CreativeWorkInput {
  mapType?: string;
}

export interface MaximumDoseScheduleInput extends MedicalIntangibleInput {
  doseUnit?: string;
  frequency?: string;
}

export interface MedicalEntityInput extends ThingInput {
  code?: JsonLd | string;
  recognizingAuthority?: JsonLd | string;
  relevantSpecialty?: string | string[];
}

export interface MedicalIntangibleInput extends MedicalEntityInput {}

export interface MedicalAudienceInput extends AudienceInput {
  healthCondition?: JsonLd | string;
}

export interface MedicalCauseInput extends MedicalEntityInput {
  causeOf?: JsonLd | JsonLd[] | string | string[];
}

export interface MedicalCodeInput extends MedicalIntangibleInput {
  codeValue?: string;
  codingSystem?: string;
}

export interface MedicalConditionInput extends MedicalEntityInput {
  associatedAnatomy?: JsonLd | JsonLd[] | string | string[];
  possibleTreatment?: JsonLd | JsonLd[] | string | string[];
  signOrSymptom?: JsonLd | JsonLd[] | string | string[];
  stage?: JsonLd | JsonLd[] | string | string[];
}

export interface MedicalConditionStageInput extends MedicalEntityInput {
  stageAsNumber?: string;
  subStageSuffix?: string;
}

export interface MedicalContraindicationInput extends MedicalEntityInput {
  contraindication?: JsonLd | string;
}

export interface MedicalDeviceInput extends MedicalEntityInput {
  bodyLocation?: JsonLd | string;
  manufacturer?: JsonLd | string;
  procedure?: JsonLd | JsonLd[] | string | string[];
}

export interface MedicalGuidelineInput extends MedicalEntityInput {
  guidelineSubject?: JsonLd | JsonLd[] | string | string[];
}

export interface MedicalRiskFactorInput extends MedicalEntityInput {
  increasesRiskOf?: JsonLd | JsonLd[] | string | string[];
}

export interface MedicalSignInput extends MedicalEntityInput {
  identifyingTest?: JsonLd | JsonLd[] | string | string[];
}

export interface MedicalSignOrSymptomInput extends MedicalEntityInput {
  possibleTreatment?: JsonLd | JsonLd[] | string | string[];
}

export interface MedicalProcedureInput extends MedicalEntityInput {
  bodyLocation?: JsonLd | string;
  followup?: JsonLd | JsonLd[] | string | string[];
  usedToDiagnose?: JsonLd | JsonLd[] | string | string[];
}

export interface MedicalStudyInput extends MedicalEntityInput {
  status?: string;
  studySubject?: JsonLd | JsonLd[] | string | string[];
}

export interface MedicalTestInput extends MedicalEntityInput {
  bodyLocation?: JsonLd | string;
  usedToDiagnose?: JsonLd | JsonLd[] | string | string[];
}

export interface MedicalTherapyInput extends MedicalEntityInput {
  contraindication?: JsonLd | JsonLd[] | string | string[];
  duplicateTherapy?: JsonLd | JsonLd[] | string | string[];
}

export interface MedicalWebPageInput extends WebPageInput {
  about?: JsonLd | string;
  lastReviewed?: string;
}

export interface SuperficialAnatomyInput extends MedicalEntityInput {
  associatedPathophysiology?: string;
}

export interface TherapeuticProcedureInput extends MedicalProcedureInput {}

export interface MediaObjectInput extends CreativeWorkInput {
  contentUrl?: string;
  duration?: string;
  embedUrl?: string;
  encodingFormat?: string;
  thumbnailUrl?: string | string[];
  transcript?: string;
  uploadDate?: string;
}

export interface MediaSubscriptionInput extends IntangibleInput {
  authenticatingAuthority?: JsonLd | string;
  expectsAcceptanceOf?: JsonLd | JsonLd[] | string | string[];
}

export interface MenuItemInput extends StructuredDataThingInput {
  offers?: JsonLd | JsonLd[] | string | string[];
  nutrition?: JsonLd | string;
  suitableForDiet?: string | string[];
}

export interface MenuSectionInput extends CreativeWorkInput {
  hasMenuItem?: JsonLd | JsonLd[] | string | string[];
}

export interface MemberProgramTierInput extends IntangibleInput {
  hasTierBenefit?: string | string[];
  membershipPointsEarned?: JsonLd | number | string;
  membershipPointsRequired?: JsonLd | number | string;
  validFrom?: string;
  validThrough?: string;
}

export interface MerchantReturnPolicySeasonalOverrideInput extends IntangibleInput {
  endDate?: string;
  merchantReturnDays?: number;
  returnPolicyCategory?: string;
  startDate?: string;
}

export interface NutritionInformationInput extends StructuredValueInput {
  calories?: string;
  carbohydrateContent?: string;
  cholesterolContent?: string;
  fatContent?: string;
  fiberContent?: string;
  proteinContent?: string;
  saturatedFatContent?: string;
  servingSize?: string;
  sodiumContent?: string;
  sugarContent?: string;
  transFatContent?: string;
  unsaturatedFatContent?: string;
}

export interface OccupationInput extends IntangibleInput {
  educationRequirements?: string;
  experienceRequirements?: string;
  occupationalCategory?: string | string[];
  skills?: string | string[];
}

export interface OccupationalExperienceRequirementsInput extends IntangibleInput {
  monthsOfExperience?: number | string;
  occupationalExperienceProperties?: JsonLd | string;
}

export interface OfferInput extends StructuredDataThingInput {
  availability?: string;
  category?: string;
  itemOffered?: JsonLd | string;
  price?: string | number;
  priceCurrency?: string;
  seller?: JsonLd | string;
}

export interface OfferCatalogInput extends StructuredDataThingInput {
  itemListElement?: JsonLd | JsonLd[] | string | string[];
  numberOfItems?: number;
}

export interface OpeningHoursSpecificationInput extends StructuredValueInput {
  closes?: string;
  dayOfWeek?: string | string[];
  opens?: string;
  validFrom?: string;
  validThrough?: string;
}

export interface ProgramMembershipInput extends IntangibleInput {
  hostingOrganization?: JsonLd | string;
  member?: JsonLd | string;
  membershipNumber?: string;
  programName?: string;
}

export interface PublicationEventInput extends StructuredDataThingInput {
  publishedBy?: JsonLd | string;
  startDate?: string;
}

export interface RepaymentSpecificationInput extends StructuredValueInput {
  downPayment?: JsonLd | number | string;
  loanPaymentAmount?: JsonLd | string;
  loanPaymentFrequency?: number;
  numberOfLoanPayments?: number;
}

export interface ScheduleInput extends StructuredDataThingInput {
  byDay?: string | string[];
  endDate?: string;
  repeatCount?: number;
  repeatFrequency?: string;
  startDate?: string;
}

export interface SeriesInput extends StructuredDataThingInput {
  endDate?: string;
  startDate?: string;
}

export interface ServiceInput extends StructuredDataThingInput {
  areaServed?: JsonLd | string;
  provider?: JsonLd | string;
  serviceType?: string;
}

export interface ServiceChannelInput extends IntangibleInput {
  availableLanguage?: string | string[];
  processingTime?: string;
  servicePhone?: JsonLd | string;
  serviceUrl?: string;
}

export interface ServicePeriodInput extends StructuredValueInput {
  cutoffTime?: string;
  endDate?: string;
  startDate?: string;
}

export interface ShippingConditionsInput extends StructuredValueInput {
  shippingDestination?: JsonLd | string;
  shippingOrigin?: JsonLd | string;
}

export interface ShippingDeliveryTimeInput extends StructuredValueInput {
  cutoffTime?: string;
}

export interface ShippingRateSettingsInput extends StructuredValueInput {
  shippingDestination?: JsonLd | string;
}

export interface ShippingServiceInput extends StructuredValueInput {
  shippingConditions?: JsonLd | string;
}

export interface StatisticalVariableInput extends StructuredDataThingInput {
  measurementMethod?: string;
  measurementTechnique?: string;
  populationType?: JsonLd | string;
}

export interface SubstanceInput extends MedicalEntityInput {
  activeIngredient?: string;
}

export interface TaxonInput extends StructuredDataThingInput {
  parentTaxon?: JsonLd | string;
  taxonRank?: string;
}

export interface TripInput extends IntangibleInput {
  arrivalTime?: string;
  departureTime?: string;
  itinerary?: JsonLd | JsonLd[] | string | string[];
  offers?: JsonLd | JsonLd[] | string | string[];
  partOfTrip?: JsonLd | string;
  provider?: JsonLd | string;
  subTrip?: JsonLd | JsonLd[] | string | string[];
  tripOrigin?: JsonLd | string;
}

export interface VirtualLocationInput extends IntangibleInput {
  url?: string;
}

export interface XPathTypeInput extends StructuredDataExtensible {
  id?: string;
}

export interface PropertyInput extends StructuredDataThingInput {
  domainIncludes?: JsonLd | JsonLd[] | string | string[];
  inverseOf?: JsonLd | string;
  rangeIncludes?: JsonLd | JsonLd[] | string | string[];
  supersededBy?: JsonLd | string;
}

export interface PropertyValueInput extends StructuredDataThingInput {
  maxValue?: number | string;
  measurementMethod?: string;
  measurementTechnique?: string;
  minValue?: number | string;
  propertyID?: string;
  unitCode?: string;
  unitText?: string;
  value?: JsonLd | string | number | boolean;
  valueReference?: JsonLd | string;
}

export interface CheckoutPageInput extends WebPageInput {
  about?: JsonLd | string;
  offers?: JsonLd | JsonLd[];
}

export interface CollectionPageInput extends WebPageInput {
  hasPart?: JsonLd | JsonLd[];
  significantLinks?: string[];
}

export interface ImageGalleryInput extends CollectionPageInput {}

export interface MediaGalleryInput extends CollectionPageInput {}

export interface ContactPageInput extends WebPageInput {
  about?: JsonLd | string;
  significantLinks?: string[];
}

export interface ItemPageInput extends WebPageInput {
  mainEntity: JsonLd | string;
}

export interface WebSiteInput extends StructuredDataThingInput {
  publisher?: JsonLd | string;
  potentialAction?: JsonLd;
}

export interface UrlInput extends StructuredDataExtensible {}

export interface OrganizationInput extends StructuredDataThingInput {
  logo?: string | StructuredDataImage;
  sameAs?: string[];
}

export interface SoftwareApplicationInput extends StructuredDataThingInput {
  applicationCategory?: string;
  operatingSystem?: string;
  offers?: JsonLd;
  softwareVersion?: string;
}

export interface RuntimePlatformInput extends SoftwareApplicationInput {}

export interface OperatingSystemInput extends SoftwareApplicationInput {}

export interface ArticleInput extends StructuredDataThingInput {
  headline?: string;
  author?: JsonLd | string;
  publisher?: JsonLd | string;
  datePublished?: string;
  dateModified?: string;
  mainEntityOfPage?: string | JsonLd;
}

export interface BreadcrumbListInput extends StructuredDataExtensible {
  id?: string;
  items: StructuredDataBreadcrumbItem[];
}

export interface FaqPageInput extends Omit<WebPageInput, "name"> {
  id?: string;
  name?: string;
  items: StructuredDataFaqItem[];
}

export interface QaPageInput extends Omit<WebPageInput, "name"> {
  id?: string;
  name?: string;
  question: string;
  answer?: string;
  acceptedAnswer?: AnswerInput;
  suggestedAnswer?: AnswerInput[];
  answerCount?: number;
  eduQuestionType?: string;
  url?: string;
}

export interface AnswerInput extends StructuredDataExtensible {
  id?: string;
  text: string;
  url?: string;
  upvoteCount?: number;
  dateCreated?: string;
  author?: JsonLd | string;
}

export interface QuestionInput extends StructuredDataThingInput {
  text?: string;
  acceptedAnswer?: AnswerInput;
  suggestedAnswer?: AnswerInput[];
  answerCount?: number;
  eduQuestionType?: string;
}

export interface QuizInput extends StructuredDataThingInput {
  hasPart: QuestionInput[];
  educationalLevel?: string;
  assesses?: string | string[];
  learningResourceType?: string;
}

export interface HowToStepInput extends StructuredDataExtensible {
  id?: string;
  name: string;
  text: string;
  url?: string;
  image?: string | StructuredDataImage;
  position?: number;
  itemListElement?: Array<JsonLd | string>;
}

export interface HowToSectionInput extends StructuredDataExtensible {
  id?: string;
  name: string;
  text?: string;
  url?: string;
  position?: number;
  steps?: HowToStepInput | string | JsonLd;
  itemListElement?: Array<JsonLd | string>;
}

export interface HowToItemInput extends StructuredDataExtensible {
  id?: string;
  name?: string;
  url?: string;
  position?: number;
  requiredQuantity?: number | string | JsonLd;
}

export interface HowToSupplyInput extends HowToItemInput {
  estimatedCost?: JsonLd;
}

export interface HowToToolInput extends HowToItemInput {}

export interface HowToInput extends StructuredDataThingInput {
  steps: HowToStepInput[];
  totalTime?: string;
}

export interface ItemListInput extends StructuredDataExtensible {
  id?: string;
  name: string;
  items: Array<{ name: string; url?: string; item?: JsonLd | string }>;
}

export interface SoftwareSourceCodeInput extends StructuredDataThingInput {
  codeRepository?: string;
  programmingLanguage?: string | string[];
  runtimePlatform?: string;
}

export interface ProductInput extends StructuredDataThingInput {
  brand?: JsonLd | string;
  sku?: string;
  category?: string;
  offers?: JsonLd;
  aggregateRating?: JsonLd;
  review?: JsonLd | JsonLd[];
}

export interface DatasetInput extends StructuredDataThingInput {
  creator?: JsonLd | string;
  distribution?: JsonLd | JsonLd[];
  keywords?: string[];
  datePublished?: string;
  dateModified?: string;
}

export interface EventInput extends StructuredDataThingInput {
  startDate: string;
  endDate?: string;
  eventStatus?: string;
  eventAttendanceMode?: string;
  location?: JsonLd | string;
  organizer?: JsonLd | string;
}

export interface VideoObjectInput extends StructuredDataThingInput {
  thumbnailUrl: string | string[];
  uploadDate: string;
  duration?: string;
  embedUrl?: string;
  contentUrl?: string;
  clip?: ClipInput[];
  publication?: BroadcastEventInput | BroadcastEventInput[];
}

export interface ImageObjectInput extends StructuredDataThingInput {
  contentUrl?: string;
  width?: number;
  height?: number;
  caption?: string;
}

export interface ProfilePageInput extends StructuredDataThingInput {
  mainEntity: JsonLd | string;
}

export interface ReviewInput extends StructuredDataThingInput {
  itemReviewed: JsonLd | string;
  reviewRating?: JsonLd;
  author?: JsonLd | string;
  reviewBody?: string;
}

export interface AggregateRatingInput extends StructuredDataExtensible {
  ratingValue: number | string;
  reviewCount?: number;
  ratingCount?: number;
  bestRating?: number | string;
  worstRating?: number | string;
}

export interface CourseInput extends StructuredDataThingInput {
  provider?: JsonLd | string;
  courseCode?: string;
  coursePrerequisites?: string | string[];
  hasCourseInstance?: JsonLd | JsonLd[];
}

export interface CourseInstanceInput extends StructuredDataThingInput {
  courseMode?: string;
  startDate?: string;
  endDate?: string;
  location?: JsonLd | string;
  instructor?: JsonLd | string;
}

export interface DiscussionForumPostingInput extends StructuredDataThingInput {
  headline?: string;
  author?: JsonLd | string;
  datePublished?: string;
  dateModified?: string;
  articleBody?: string;
}

export interface BookInput extends StructuredDataThingInput {
  author?: JsonLd | string;
  isbn?: string;
  readAction?: JsonLd;
}

export interface ClaimReviewInput extends StructuredDataThingInput {
  claimReviewed: string;
  itemReviewed?: JsonLd | string;
  author?: JsonLd | string;
  reviewRating?: JsonLd;
  datePublished?: string;
}

export interface JobPostingInput extends StructuredDataThingInput {
  title: string;
  datePosted: string;
  validThrough?: string;
  employmentType?: string | string[];
  hiringOrganization: JsonLd | string;
  jobLocation?: JsonLd | string;
  baseSalary?: JsonLd;
}

export interface LocalBusinessInput extends OrganizationInput {
  address?: JsonLd | string;
  telephone?: string;
  priceRange?: string;
  openingHours?: string | string[];
}

export interface LoyaltyProgramInput extends StructuredDataThingInput {
  provider?: JsonLd | string;
}

export interface MathSolverInput extends StructuredDataThingInput {
  mathExpression?: string;
  potentialAction?: JsonLd | JsonLd[];
  learningResource?: JsonLd | JsonLd[];
}

export interface LearningResourceInput extends StructuredDataThingInput {
  learningResourceType?: string;
  educationalLevel?: string;
  teaches?: string | string[];
}

export interface SolveMathActionInput extends StructuredDataExtensible {
  id?: string;
  target: string | JsonLd;
  mathExpressionInput?: string;
  eduQuestionType?: string | string[];
}

export interface PolicyInput extends StructuredDataThingInput {
  merchantReturnDays?: number;
  returnPolicyCategory?: string;
  shippingDestination?: JsonLd | string;
  shippingRate?: JsonLd;
}

export interface MovieInput extends StructuredDataThingInput {
  director?: JsonLd | string;
  actor?: JsonLd | JsonLd[] | string | string[];
  datePublished?: string;
}

export interface MusicAlbumInput extends CreativeWorkInput {
  byArtist?: JsonLd | JsonLd[] | string | string[];
  numTracks?: number;
  track?: JsonLd | JsonLd[] | string | string[];
}

export interface MusicCompositionInput extends CreativeWorkInput {
  composer?: JsonLd | JsonLd[] | string | string[];
  lyricist?: JsonLd | JsonLd[] | string | string[];
}

export interface MusicGroupInput extends StructuredDataThingInput {
  album?: JsonLd | JsonLd[] | string | string[];
  track?: JsonLd | JsonLd[] | string | string[];
}

export interface MusicPlaylistInput extends CreativeWorkInput {
  numTracks?: number;
  track?: JsonLd | JsonLd[] | string | string[];
}

export interface MusicRecordingInput extends CreativeWorkInput {
  byArtist?: JsonLd | JsonLd[] | string | string[];
  duration?: string;
  inAlbum?: JsonLd | JsonLd[] | string | string[];
}

export interface MusicReleaseInput extends CreativeWorkInput {
  catalogNumber?: string;
  musicReleaseFormat?: string;
  recordLabel?: JsonLd | string;
}

export interface ProductGroupInput extends ProductInput {
  hasVariant?: JsonLd | JsonLd[];
  variesBy?: string | string[];
}

export interface ProductModelInput extends ProductInput {
  isVariantOf?: JsonLd | string;
  model?: string;
}

export interface RecipeInput extends StructuredDataThingInput {
  recipeIngredient: string[];
  recipeInstructions: string | HowToStepInput[];
  author?: JsonLd | string;
  datePublished?: string;
  prepTime?: string;
  cookTime?: string;
  totalTime?: string;
}

export interface RealEstateListingInput extends WebPageInput {
  datePosted?: string;
  leaseLength?: string | JsonLd;
  offers?: JsonLd | JsonLd[];
}

export interface SearchResultsPageInput extends WebPageInput {
  query?: string;
  significantLinks?: string[];
}

export interface SpeakableInput extends StructuredDataExtensible {
  cssSelector?: string[];
  xpath?: string[];
}

export interface TextObjectInput extends CreativeWorkInput {
  encodingFormat?: string;
}

export interface ClipInput extends StructuredDataThingInput {
  startOffset?: number;
  endOffset?: number;
}

export interface BroadcastEventInput extends StructuredDataThingInput {
  startDate?: string;
  endDate?: string;
  isLiveBroadcast?: boolean;
}

export interface PaywalledContentInput extends WebPageInput {
  cssSelector?: string[];
}

export interface VacationRentalInput extends StructuredDataThingInput {
  address?: JsonLd | string;
  containsPlace?: JsonLd | JsonLd[];
}

export interface VehicleInput extends ProductInput {
  vehicleIdentificationNumber?: string;
  vehicleModelDate?: string;
  mileageFromOdometer?: JsonLd;
}

export interface VideoGalleryInput extends WebPageInput {
  hasPart?: JsonLd | JsonLd[];
  video?: JsonLd | JsonLd[];
}
