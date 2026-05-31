import React from "react";
import type { CompiledLanderSite, CompiledPage, CompiledStructuredDataIntent } from "@mdwrk/lander-core";
import { generatedPageFamilyIntentRegistry } from "./generated-page-family.js";
export * from "./generated-page-family.js";
import {
  actionNode,
  administrativeAreaNode,
  aboutPageNode,
  aggregateOfferNode,
  aggregateRatingNode,
  alignmentObjectNode,
  answerNode,
  articleNode,
  audienceNode,
  audioObjectNode,
  brandNode,
  broadcastChannelNode,
  broadcastFrequencySpecificationNode,
  broadcastServiceNode,
  cableOrSatelliteServiceNode,
  categoryCodeNode,
  categoryCodeSetNode,
  civicStructureNode,
  classNode,
  blogPostingNode,
  bookNode,
  broadcastEventNode,
  breadcrumbListSchema,
  certificationNode,
  claimNode,
  commentNode,
  constraintNodeNode,
  creditCardNode,
  cssSelectorTypeNode,
  claimReviewNode,
  checkoutPageNode,
  clipNode,
  collectionPageNode,
  contactPointNode,
  contactPageNode,
  courseInstanceNode,
  courseNode,
  correctionCommentNode,
  countryNode,
  creativeWorkNode,
  creativeWorkSeasonNode,
  creativeWorkSeriesNode,
  credentialNode,
  dataCatalogNode,
  dataDownloadNode,
  dataFeedItemNode,
  dataFeedNode,
  datasetNode,
  definedRegionNode,
  definedTermNode,
  definedTermSetNode,
  deliveryChargeSpecificationNode,
  demandNode,
  distanceNode,
  discussionForumPostingNode,
  durationNode,
  educationalOccupationalCredentialNode,
  educationalOrganizationNode,
  energyConsumptionDetailsNode,
  energyNode,
  entryPointNode,
  enumerationNode,
  episodeNode,
  employerAggregateRatingNode,
  estimatedSalaryNode,
  eventNode,
  faqPageSchema,
  financialProductNode,
  geneNode,
  geoCoordinatesNode,
  geospatialGeometryNode,
  geoShapeNode,
  grantNode,
  hyperTocEntryNode,
  healthInsurancePlanNode,
  healthPlanCostSharingSpecificationNode,
  healthPlanFormularyNode,
  healthPlanNetworkNode,
  howToItemNode,
  howToNode,
  howToSectionNode,
  howToStepNode,
  howToSupplyNode,
  howToToolNode,
  imageObjectSchema,
  imageGalleryNode,
  intangibleNode,
  interactionCounterNode,
  integerNode,
  itemPageNode,
  itemListNode,
  jobPostingNode,
  jsonLdGraph,
  languageNode,
  lifestyleModificationNode,
  learningResourceNode,
  listItemNode,
  localBusinessNode,
  loanOrCreditNode,
  locationFeatureSpecificationNode,
  loyaltyProgramNode,
  massNode,
  mapNode,
  maximumDoseScheduleNode,
  mathSolverNode,
  mediaGalleryNode,
  mediaObjectNode,
  mediaSubscriptionNode,
  menuItemNode,
  menuSectionNode,
  medicalAudienceNode,
  medicalCauseNode,
  medicalCodeNode,
  medicalConditionNode,
  medicalConditionStageNode,
  medicalContraindicationNode,
  medicalDeviceNode,
  medicalEntityNode,
  medicalGuidelineNode,
  medicalIntangibleNode,
  medicalProcedureNode,
  medicalRiskFactorNode,
  medicalSignNode,
  medicalSignOrSymptomNode,
  medicalStudyNode,
  medicalTestNode,
  medicalTherapyNode,
  medicalWebPageNode,
  memberProgramTierNode,
  monetaryAmountNode,
  merchantReturnPolicyNode,
  merchantReturnPolicySeasonalOverrideNode,
  movieNode,
  musicAlbumNode,
  musicCompositionNode,
  musicGroupNode,
  musicPlaylistNode,
  musicRecordingNode,
  musicReleaseNode,
  newsArticleNode,
  nutritionInformationNode,
  occupationNode,
  occupationalExperienceRequirementsNode,
  offerCatalogNode,
  offerNode,
  offerShippingDetailsNode,
  openingHoursSpecificationNode,
  operatingSystemNode,
  organizationNode,
  propertyNode,
  propertyValueNode,
  productNode,
  productGroupNode,
  productModelNode,
  programMembershipNode,
  profilePageNode,
  publicationEventNode,
  repaymentSpecificationNode,
  qaPageSchema,
  quantitativeValueDistributionNode,
  quantitativeValueNode,
  questionNode,
  quizNode,
  readActionNode,
  ratingNode,
  realEstateListingNode,
  recipeNode,
  reviewNode,
  runtimePlatformNode,
  scheduleNode,
  searchResultsPageNode,
  seriesNode,
  serviceNode,
  serviceChannelNode,
  servicePeriodNode,
  shippingConditionsNode,
  shippingDeliveryTimeNode,
  shippingRateSettingsNode,
  shippingServiceNode,
  solveMathActionNode,
  statisticalVariableNode,
  substanceNode,
  taxonNode,
  speakableSpecificationNode,
  softwareApplicationNode,
  softwareSourceCodeNode,
  stableId,
  structuredValueNode,
  typeAndQuantityNode,
  superficialAnatomyNode,
  techArticleNode,
  therapeuticProcedureNode,
  textObjectNode,
  thingNode,
  tripNode,
  unitPriceSpecificationNode,
  vacationRentalNode,
  vehicleListingNode,
  videoGalleryNode,
  videoObjectNode,
  virtualLocationNode,
  warrantyPromiseNode,
  webApplicationNode,
  webContentNode,
  webPageElementNode,
  webPageSchema,
  webSiteSchema,
  urlNode,
  xPathTypeNode,
  type ActionInput,
  type AdministrativeAreaInput,
  type JsonLd,
  type AboutPageInput,
  type AggregateOfferInput,
  type AggregateRatingInput,
  type AlignmentObjectInput,
  type AnswerInput,
  type ArticleInput,
  type AudienceInput,
  type AudioObjectInput,
  type BrandInput,
  type BroadcastChannelInput,
  type BroadcastFrequencySpecificationInput,
  type BroadcastServiceInput,
  type CableOrSatelliteServiceInput,
  type CategoryCodeInput,
  type CategoryCodeSetInput,
  type CivicStructureInput,
  type ClassInput,
  type BookInput,
  type BroadcastEventInput,
  type BreadcrumbListInput,
  type CertificationInput,
  type ClaimInput,
  type ClaimReviewInput,
  type CheckoutPageInput,
  type ClipInput,
  type CollectionPageInput,
  type CommentInput,
  type ConstraintNodeInput,
  type ContactPointInput,
  type ContactPageInput,
  type CourseInput,
  type CourseInstanceInput,
  type CorrectionCommentInput,
  type CountryInput,
  type CreativeWorkInput,
  type CreativeWorkSeasonInput,
  type CreativeWorkSeriesInput,
  type CredentialInput,
  type CreditCardInput,
  type CssSelectorTypeInput,
  type DataCatalogInput,
  type DataDownloadInput,
  type DataFeedInput,
  type DataFeedItemInput,
  type DatasetInput,
  type DefinedRegionInput,
  type DefinedTermInput,
  type DefinedTermSetInput,
  type DeliveryChargeSpecificationInput,
  type DemandInput,
  type DistanceInput,
  type DiscussionForumPostingInput,
  type DurationInput,
  type EducationalOccupationalCredentialInput,
  type EducationalOrganizationInput,
  type EnergyConsumptionDetailsInput,
  type EnergyInput,
  type EntryPointInput,
  type EnumerationInput,
  type EpisodeInput,
  type EventInput,
  type FaqPageInput,
  type FinancialProductInput,
  type GeneInput,
  type GeoCoordinatesInput,
  type GeospatialGeometryInput,
  type GeoShapeInput,
  type GrantInput,
  type HyperTocEntryInput,
  type HealthInsurancePlanInput,
  type HealthPlanCostSharingSpecificationInput,
  type HealthPlanFormularyInput,
  type HealthPlanNetworkInput,
  type HowToItemInput,
  type HowToInput,
  type HowToSectionInput,
  type HowToStepInput,
  type HowToSupplyInput,
  type HowToToolInput,
  type ImageGalleryInput,
  type ImageObjectInput,
  type InteractionCounterInput,
  type IntegerInput,
  type IntangibleInput,
  type ItemPageInput,
  type ItemListInput,
  type JobPostingInput,
  type LearningResourceInput,
  type LanguageInput,
  type LifestyleModificationInput,
  type ListItemInput,
  type LocalBusinessInput,
  type LoanOrCreditInput,
  type LocationFeatureSpecificationInput,
  type LoyaltyProgramInput,
  type MassInput,
  type MapInput,
  type MaximumDoseScheduleInput,
  type MathSolverInput,
  type MediaGalleryInput,
  type MediaObjectInput,
  type MediaSubscriptionInput,
  type MenuItemInput,
  type MenuSectionInput,
  type MedicalAudienceInput,
  type MedicalCauseInput,
  type MedicalCodeInput,
  type MedicalConditionInput,
  type MedicalConditionStageInput,
  type MedicalContraindicationInput,
  type MedicalDeviceInput,
  type MedicalEntityInput,
  type MedicalGuidelineInput,
  type MedicalIntangibleInput,
  type MedicalProcedureInput,
  type MedicalRiskFactorInput,
  type MedicalSignInput,
  type MedicalSignOrSymptomInput,
  type MedicalStudyInput,
  type MedicalTestInput,
  type MedicalTherapyInput,
  type MedicalWebPageInput,
  type MemberProgramTierInput,
  type MerchantReturnPolicySeasonalOverrideInput,
  type MonetaryAmountInput,
  type MovieInput,
  type MusicAlbumInput,
  type MusicCompositionInput,
  type MusicGroupInput,
  type MusicPlaylistInput,
  type MusicRecordingInput,
  type MusicReleaseInput,
  type NutritionInformationInput,
  type OccupationInput,
  type OccupationalExperienceRequirementsInput,
  type OfferCatalogInput,
  type OfferInput,
  type OpeningHoursSpecificationInput,
  type OperatingSystemInput,
  type OrganizationInput,
  type PropertyInput,
  type PropertyValueInput,
  type PolicyInput,
  type ProductInput,
  type ProductGroupInput,
  type ProductModelInput,
  type ProgramMembershipInput,
  type ProfilePageInput,
  type PublicationEventInput,
  type RepaymentSpecificationInput,
  type QaPageInput,
  type QuantitativeValueDistributionInput,
  type QuantitativeValueInput,
  type QuestionInput,
  type QuizInput,
  type RatingInput,
  type RealEstateListingInput,
  type RecipeInput,
  type ReviewInput,
  type RuntimePlatformInput,
  type ScheduleInput,
  type SearchResultsPageInput,
  type SeriesInput,
  type ServiceInput,
  type ServiceChannelInput,
  type ServicePeriodInput,
  type ShippingConditionsInput,
  type ShippingDeliveryTimeInput,
  type ShippingRateSettingsInput,
  type ShippingServiceInput,
  type SolveMathActionInput,
  type StatisticalVariableInput,
  type SubstanceInput,
  type TaxonInput,
  type SoftwareApplicationInput,
  type SoftwareSourceCodeInput,
  type SpeakableInput,
  type SuperficialAnatomyInput,
  type StructuredValueInput,
  type TypeAndQuantityNodeInput,
  type TherapeuticProcedureInput,
  type TextObjectInput,
  type ThingInput,
  type TripInput,
  type UnitPriceSpecificationInput,
  type VacationRentalInput,
  type VehicleInput,
  type VideoGalleryInput,
  type VideoObjectInput,
  type UrlInput,
  type VirtualLocationInput,
  type WarrantyPromiseInput,
  type WebContentInput,
  type WebPageInput,
  type WebPageElementInput,
  type WebSiteInput,
  type XPathTypeInput,
} from "@mdwrk/structured-data";
import { LANDER_REACT_STRUCTURED_DATA_VERSION } from "./version.js";

export { LANDER_REACT_STRUCTURED_DATA_VERSION };

export function JsonLd({ graph }: { graph: unknown }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />;
}

export function LanderStructuredData({ site, page }: { site: CompiledLanderSite; page: CompiledPage }) {
  return <JsonLd graph={buildLanderJsonLdGraph(site, page)} />;
}

function StructuredDataNode<T>({ data, build }: { data: T; build: (data: T) => JsonLd }) {
  return <JsonLd graph={build(data)} />;
}

export function WebPageStructuredData({ data }: { data: WebPageInput }) {
  return <StructuredDataNode data={data} build={webPageSchema} />;
}

export function WebContentStructuredData({ data }: { data: WebContentInput }) {
  return <StructuredDataNode data={data} build={webContentNode} />;
}

export function WebPageElementStructuredData({ data }: { data: WebPageElementInput }) {
  return <StructuredDataNode data={data} build={webPageElementNode} />;
}

export function ActionStructuredData({ data }: { data: ActionInput }) {
  return <StructuredDataNode data={data} build={actionNode} />;
}

export function AdministrativeAreaStructuredData({ data }: { data: AdministrativeAreaInput }) {
  return <StructuredDataNode data={data} build={administrativeAreaNode} />;
}

export function AboutPageStructuredData({ data }: { data: AboutPageInput }) {
  return <StructuredDataNode data={data} build={aboutPageNode} />;
}

export function AggregateOfferStructuredData({ data }: { data: AggregateOfferInput }) {
  return <StructuredDataNode data={data} build={aggregateOfferNode} />;
}

export function ThingStructuredData({ data }: { data: ThingInput }) {
  return <StructuredDataNode data={data} build={thingNode} />;
}

export function IntangibleStructuredData({ data }: { data: IntangibleInput }) {
  return <StructuredDataNode data={data} build={intangibleNode} />;
}

export function StructuredValueStructuredData({ data }: { data: StructuredValueInput }) {
  return <StructuredDataNode data={data} build={structuredValueNode} />;
}

export function TypeAndQuantityNodeStructuredData({ data }: { data: TypeAndQuantityNodeInput }) {
  return <StructuredDataNode data={data} build={typeAndQuantityNode} />;
}

export function UnitPriceSpecificationStructuredData({ data }: { data: UnitPriceSpecificationInput }) {
  return <StructuredDataNode data={data} build={unitPriceSpecificationNode} />;
}

export function WarrantyPromiseStructuredData({ data }: { data: WarrantyPromiseInput }) {
  return <StructuredDataNode data={data} build={warrantyPromiseNode} />;
}

export function WebSiteStructuredData({ data }: { data: WebSiteInput }) {
  return <StructuredDataNode data={data} build={webSiteSchema} />;
}

export function CheckoutPageStructuredData({ data }: { data: CheckoutPageInput }) {
  return <StructuredDataNode data={data} build={checkoutPageNode} />;
}

export function CollectionPageStructuredData({ data }: { data: CollectionPageInput }) {
  return <StructuredDataNode data={data} build={collectionPageNode} />;
}

export function ContactPageStructuredData({ data }: { data: ContactPageInput }) {
  return <StructuredDataNode data={data} build={contactPageNode} />;
}

export function OrganizationStructuredData({ data }: { data: OrganizationInput }) {
  return <StructuredDataNode data={data} build={organizationNode} />;
}

export function EducationalOrganizationStructuredData({ data }: { data: EducationalOrganizationInput }) {
  return <StructuredDataNode data={data} build={educationalOrganizationNode} />;
}

export function SoftwareApplicationStructuredData({ data }: { data: SoftwareApplicationInput }) {
  return <StructuredDataNode data={data} build={softwareApplicationNode} />;
}

export function RuntimePlatformStructuredData({ data }: { data: RuntimePlatformInput }) {
  return <StructuredDataNode data={data} build={runtimePlatformNode} />;
}

export function OperatingSystemStructuredData({ data }: { data: OperatingSystemInput }) {
  return <StructuredDataNode data={data} build={operatingSystemNode} />;
}

export function WebApplicationStructuredData({ data }: { data: SoftwareApplicationInput }) {
  return <StructuredDataNode data={data} build={webApplicationNode} />;
}

export function ArticleStructuredData({ data }: { data: ArticleInput }) {
  return <StructuredDataNode data={data} build={articleNode} />;
}

export function NewsArticleStructuredData({ data }: { data: ArticleInput }) {
  return <StructuredDataNode data={data} build={newsArticleNode} />;
}

export function TechArticleStructuredData({ data }: { data: ArticleInput }) {
  return <StructuredDataNode data={data} build={techArticleNode} />;
}

export function TextObjectStructuredData({ data }: { data: TextObjectInput }) {
  return <StructuredDataNode data={data} build={textObjectNode} />;
}

export function BlogPostingStructuredData({ data }: { data: ArticleInput }) {
  return <StructuredDataNode data={data} build={blogPostingNode} />;
}

export function BreadcrumbListStructuredData({ data }: { data: BreadcrumbListInput }) {
  return <StructuredDataNode data={data} build={breadcrumbListSchema} />;
}

export function FAQPageStructuredData({ data }: { data: FaqPageInput }) {
  return <StructuredDataNode data={data} build={faqPageSchema} />;
}

export function QAPageStructuredData({ data }: { data: QaPageInput }) {
  return <StructuredDataNode data={data} build={qaPageSchema} />;
}

export function QuizStructuredData({ data }: { data: QuizInput }) {
  return <StructuredDataNode data={data} build={quizNode} />;
}

export function AlignmentObjectStructuredData({ data }: { data: AlignmentObjectInput }) {
  return <StructuredDataNode data={data} build={alignmentObjectNode} />;
}

export function QuestionStructuredData({ data }: { data: QuestionInput }) {
  return <StructuredDataNode data={data} build={questionNode} />;
}

export function AudienceStructuredData({ data }: { data: AudienceInput }) {
  return <StructuredDataNode data={data} build={audienceNode} />;
}

export function AudioObjectStructuredData({ data }: { data: AudioObjectInput }) {
  return <StructuredDataNode data={data} build={audioObjectNode} />;
}

export function BrandStructuredData({ data }: { data: BrandInput }) {
  return <StructuredDataNode data={data} build={brandNode} />;
}

export function BroadcastChannelStructuredData({ data }: { data: BroadcastChannelInput }) {
  return <StructuredDataNode data={data} build={broadcastChannelNode} />;
}

export function BroadcastFrequencySpecificationStructuredData({ data }: { data: BroadcastFrequencySpecificationInput }) {
  return <StructuredDataNode data={data} build={broadcastFrequencySpecificationNode} />;
}

export function BroadcastServiceStructuredData({ data }: { data: BroadcastServiceInput }) {
  return <StructuredDataNode data={data} build={broadcastServiceNode} />;
}

export function CategoryCodeStructuredData({ data }: { data: CategoryCodeInput }) {
  return <StructuredDataNode data={data} build={categoryCodeNode} />;
}

export function CategoryCodeSetStructuredData({ data }: { data: CategoryCodeSetInput }) {
  return <StructuredDataNode data={data} build={categoryCodeSetNode} />;
}

export function CableOrSatelliteServiceStructuredData({ data }: { data: CableOrSatelliteServiceInput }) {
  return <StructuredDataNode data={data} build={cableOrSatelliteServiceNode} />;
}

export function CivicStructureStructuredData({ data }: { data: CivicStructureInput }) {
  return <StructuredDataNode data={data} build={civicStructureNode} />;
}

export function ClassStructuredData({ data }: { data: ClassInput }) {
  return <StructuredDataNode data={data} build={classNode} />;
}

export function CertificationStructuredData({ data }: { data: CertificationInput }) {
  return <StructuredDataNode data={data} build={certificationNode} />;
}

export function ClaimStructuredData({ data }: { data: ClaimInput }) {
  return <StructuredDataNode data={data} build={claimNode} />;
}

export function ConstraintNodeStructuredData({ data }: { data: ConstraintNodeInput }) {
  return <StructuredDataNode data={data} build={constraintNodeNode} />;
}

export function CommentStructuredData({ data }: { data: CommentInput }) {
  return <StructuredDataNode data={data} build={commentNode} />;
}

export function ContactPointStructuredData({ data }: { data: ContactPointInput }) {
  return <StructuredDataNode data={data} build={contactPointNode} />;
}

export function CorrectionCommentStructuredData({ data }: { data: CorrectionCommentInput }) {
  return <StructuredDataNode data={data} build={correctionCommentNode} />;
}

export function CountryStructuredData({ data }: { data: CountryInput }) {
  return <StructuredDataNode data={data} build={countryNode} />;
}

export function CreativeWorkStructuredData({ data }: { data: CreativeWorkInput }) {
  return <StructuredDataNode data={data} build={creativeWorkNode} />;
}

export function CreativeWorkSeasonStructuredData({ data }: { data: CreativeWorkSeasonInput }) {
  return <StructuredDataNode data={data} build={creativeWorkSeasonNode} />;
}

export function CreativeWorkSeriesStructuredData({ data }: { data: CreativeWorkSeriesInput }) {
  return <StructuredDataNode data={data} build={creativeWorkSeriesNode} />;
}

export function CredentialStructuredData({ data }: { data: CredentialInput }) {
  return <StructuredDataNode data={data} build={credentialNode} />;
}

export function EducationalOccupationalCredentialStructuredData({ data }: { data: EducationalOccupationalCredentialInput }) {
  return <StructuredDataNode data={data} build={educationalOccupationalCredentialNode} />;
}

export function CreditCardStructuredData({ data }: { data: CreditCardInput }) {
  return <StructuredDataNode data={data} build={creditCardNode} />;
}

export function CssSelectorTypeStructuredData({ data }: { data: CssSelectorTypeInput }) {
  return <StructuredDataNode data={data} build={cssSelectorTypeNode} />;
}

export function DataCatalogStructuredData({ data }: { data: DataCatalogInput }) {
  return <StructuredDataNode data={data} build={dataCatalogNode} />;
}

export function DataDownloadStructuredData({ data }: { data: DataDownloadInput }) {
  return <StructuredDataNode data={data} build={dataDownloadNode} />;
}

export function DataFeedStructuredData({ data }: { data: DataFeedInput }) {
  return <StructuredDataNode data={data} build={dataFeedNode} />;
}

export function DataFeedItemStructuredData({ data }: { data: DataFeedItemInput }) {
  return <StructuredDataNode data={data} build={dataFeedItemNode} />;
}

export function DefinedRegionStructuredData({ data }: { data: DefinedRegionInput }) {
  return <StructuredDataNode data={data} build={definedRegionNode} />;
}

export function DefinedTermStructuredData({ data }: { data: DefinedTermInput }) {
  return <StructuredDataNode data={data} build={definedTermNode} />;
}

export function DefinedTermSetStructuredData({ data }: { data: DefinedTermSetInput }) {
  return <StructuredDataNode data={data} build={definedTermSetNode} />;
}

export function DeliveryChargeSpecificationStructuredData({ data }: { data: DeliveryChargeSpecificationInput }) {
  return <StructuredDataNode data={data} build={deliveryChargeSpecificationNode} />;
}

export function DemandStructuredData({ data }: { data: DemandInput }) {
  return <StructuredDataNode data={data} build={demandNode} />;
}

export function DistanceStructuredData({ data }: { data: DistanceInput }) {
  return <StructuredDataNode data={data} build={distanceNode} />;
}

export function DurationStructuredData({ data }: { data: DurationInput }) {
  return <StructuredDataNode data={data} build={durationNode} />;
}

export function EnergyStructuredData({ data }: { data: EnergyInput }) {
  return <StructuredDataNode data={data} build={energyNode} />;
}

export function EnergyConsumptionDetailsStructuredData({ data }: { data: EnergyConsumptionDetailsInput }) {
  return <StructuredDataNode data={data} build={energyConsumptionDetailsNode} />;
}

export function EntryPointStructuredData({ data }: { data: EntryPointInput }) {
  return <StructuredDataNode data={data} build={entryPointNode} />;
}

export function EnumerationStructuredData({ data }: { data: EnumerationInput }) {
  return <StructuredDataNode data={data} build={enumerationNode} />;
}

export function EpisodeStructuredData({ data }: { data: EpisodeInput }) {
  return <StructuredDataNode data={data} build={episodeNode} />;
}

export function FinancialProductStructuredData({ data }: { data: FinancialProductInput }) {
  return <StructuredDataNode data={data} build={financialProductNode} />;
}

export function LoanOrCreditStructuredData({ data }: { data: LoanOrCreditInput }) {
  return <StructuredDataNode data={data} build={loanOrCreditNode} />;
}

export function GeneStructuredData({ data }: { data: GeneInput }) {
  return <StructuredDataNode data={data} build={geneNode} />;
}

export function GeoCoordinatesStructuredData({ data }: { data: GeoCoordinatesInput }) {
  return <StructuredDataNode data={data} build={geoCoordinatesNode} />;
}

export function GeospatialGeometryStructuredData({ data }: { data: GeospatialGeometryInput }) {
  return <StructuredDataNode data={data} build={geospatialGeometryNode} />;
}

export function GeoShapeStructuredData({ data }: { data: GeoShapeInput }) {
  return <StructuredDataNode data={data} build={geoShapeNode} />;
}

export function GrantStructuredData({ data }: { data: GrantInput }) {
  return <StructuredDataNode data={data} build={grantNode} />;
}

export function HyperTocEntryStructuredData({ data }: { data: HyperTocEntryInput }) {
  return <StructuredDataNode data={data} build={hyperTocEntryNode} />;
}

export function HealthInsurancePlanStructuredData({ data }: { data: HealthInsurancePlanInput }) {
  return <StructuredDataNode data={data} build={healthInsurancePlanNode} />;
}

export function HealthPlanCostSharingSpecificationStructuredData({ data }: { data: HealthPlanCostSharingSpecificationInput }) {
  return <StructuredDataNode data={data} build={healthPlanCostSharingSpecificationNode} />;
}

export function HealthPlanFormularyStructuredData({ data }: { data: HealthPlanFormularyInput }) {
  return <StructuredDataNode data={data} build={healthPlanFormularyNode} />;
}

export function HealthPlanNetworkStructuredData({ data }: { data: HealthPlanNetworkInput }) {
  return <StructuredDataNode data={data} build={healthPlanNetworkNode} />;
}

export function IntegerStructuredData({ data }: { data: IntegerInput }) {
  return <StructuredDataNode data={data} build={integerNode} />;
}

export function InteractionCounterStructuredData({ data }: { data: InteractionCounterInput }) {
  return <StructuredDataNode data={data} build={interactionCounterNode} />;
}

export function QuantitativeValueStructuredData({ data }: { data: QuantitativeValueInput }) {
  return <StructuredDataNode data={data} build={quantitativeValueNode} />;
}

export function QuantitativeValueDistributionStructuredData({ data }: { data: QuantitativeValueDistributionInput }) {
  return <StructuredDataNode data={data} build={quantitativeValueDistributionNode} />;
}

export function MonetaryAmountStructuredData({ data }: { data: MonetaryAmountInput }) {
  return <StructuredDataNode data={data} build={monetaryAmountNode} />;
}

export function RatingStructuredData({ data }: { data: RatingInput }) {
  return <StructuredDataNode data={data} build={ratingNode} />;
}

export function LanguageStructuredData({ data }: { data: LanguageInput }) {
  return <StructuredDataNode data={data} build={languageNode} />;
}

export function LifestyleModificationStructuredData({ data }: { data: LifestyleModificationInput }) {
  return <StructuredDataNode data={data} build={lifestyleModificationNode} />;
}

export function ListItemStructuredData({ data }: { data: ListItemInput }) {
  return <StructuredDataNode data={data} build={listItemNode} />;
}

export function MassStructuredData({ data }: { data: MassInput }) {
  return <StructuredDataNode data={data} build={massNode} />;
}

export function LocationFeatureSpecificationStructuredData({ data }: { data: LocationFeatureSpecificationInput }) {
  return <StructuredDataNode data={data} build={locationFeatureSpecificationNode} />;
}

export function MapStructuredData({ data }: { data: MapInput }) {
  return <StructuredDataNode data={data} build={mapNode} />;
}

export function MaximumDoseScheduleStructuredData({ data }: { data: MaximumDoseScheduleInput }) {
  return <StructuredDataNode data={data} build={maximumDoseScheduleNode} />;
}

export function MedicalEntityStructuredData({ data }: { data: MedicalEntityInput }) {
  return <StructuredDataNode data={data} build={medicalEntityNode} />;
}

export function MedicalIntangibleStructuredData({ data }: { data: MedicalIntangibleInput }) {
  return <StructuredDataNode data={data} build={medicalIntangibleNode} />;
}

export function MedicalAudienceStructuredData({ data }: { data: MedicalAudienceInput }) {
  return <StructuredDataNode data={data} build={medicalAudienceNode} />;
}

export function MedicalCauseStructuredData({ data }: { data: MedicalCauseInput }) {
  return <StructuredDataNode data={data} build={medicalCauseNode} />;
}

export function MedicalCodeStructuredData({ data }: { data: MedicalCodeInput }) {
  return <StructuredDataNode data={data} build={medicalCodeNode} />;
}

export function MedicalConditionStructuredData({ data }: { data: MedicalConditionInput }) {
  return <StructuredDataNode data={data} build={medicalConditionNode} />;
}

export function MedicalConditionStageStructuredData({ data }: { data: MedicalConditionStageInput }) {
  return <StructuredDataNode data={data} build={medicalConditionStageNode} />;
}

export function MedicalContraindicationStructuredData({ data }: { data: MedicalContraindicationInput }) {
  return <StructuredDataNode data={data} build={medicalContraindicationNode} />;
}

export function MedicalDeviceStructuredData({ data }: { data: MedicalDeviceInput }) {
  return <StructuredDataNode data={data} build={medicalDeviceNode} />;
}

export function MedicalGuidelineStructuredData({ data }: { data: MedicalGuidelineInput }) {
  return <StructuredDataNode data={data} build={medicalGuidelineNode} />;
}

export function MedicalRiskFactorStructuredData({ data }: { data: MedicalRiskFactorInput }) {
  return <StructuredDataNode data={data} build={medicalRiskFactorNode} />;
}

export function MedicalSignStructuredData({ data }: { data: MedicalSignInput }) {
  return <StructuredDataNode data={data} build={medicalSignNode} />;
}

export function MedicalSignOrSymptomStructuredData({ data }: { data: MedicalSignOrSymptomInput }) {
  return <StructuredDataNode data={data} build={medicalSignOrSymptomNode} />;
}

export function MedicalProcedureStructuredData({ data }: { data: MedicalProcedureInput }) {
  return <StructuredDataNode data={data} build={medicalProcedureNode} />;
}

export function MedicalStudyStructuredData({ data }: { data: MedicalStudyInput }) {
  return <StructuredDataNode data={data} build={medicalStudyNode} />;
}

export function MedicalTestStructuredData({ data }: { data: MedicalTestInput }) {
  return <StructuredDataNode data={data} build={medicalTestNode} />;
}

export function MedicalTherapyStructuredData({ data }: { data: MedicalTherapyInput }) {
  return <StructuredDataNode data={data} build={medicalTherapyNode} />;
}

export function MedicalWebPageStructuredData({ data }: { data: MedicalWebPageInput }) {
  return <StructuredDataNode data={data} build={medicalWebPageNode} />;
}

export function SuperficialAnatomyStructuredData({ data }: { data: SuperficialAnatomyInput }) {
  return <StructuredDataNode data={data} build={superficialAnatomyNode} />;
}

export function TherapeuticProcedureStructuredData({ data }: { data: TherapeuticProcedureInput }) {
  return <StructuredDataNode data={data} build={therapeuticProcedureNode} />;
}

export function XPathTypeStructuredData({ data }: { data: XPathTypeInput }) {
  return <StructuredDataNode data={data} build={xPathTypeNode} />;
}

export function PropertyStructuredData({ data }: { data: PropertyInput }) {
  return <StructuredDataNode data={data} build={propertyNode} />;
}

export function PropertyValueStructuredData({ data }: { data: PropertyValueInput }) {
  return <StructuredDataNode data={data} build={propertyValueNode} />;
}

export function UrlStructuredData({ data }: { data: UrlInput }) {
  return <StructuredDataNode data={data} build={urlNode} />;
}

export function AnswerStructuredData({ data }: { data: AnswerInput }) {
  return <StructuredDataNode data={data} build={answerNode} />;
}

export function HowToStructuredData({ data }: { data: HowToInput }) {
  return <StructuredDataNode data={data} build={howToNode} />;
}

export function HowToItemStructuredData({ data }: { data: HowToItemInput }) {
  return <StructuredDataNode data={data} build={howToItemNode} />;
}

export function HowToSectionStructuredData({ data }: { data: HowToSectionInput }) {
  return <StructuredDataNode data={data} build={howToSectionNode} />;
}

export function HowToStepStructuredData({ data }: { data: HowToStepInput }) {
  return <StructuredDataNode data={data} build={howToStepNode} />;
}

export function HowToSupplyStructuredData({ data }: { data: HowToSupplyInput }) {
  return <StructuredDataNode data={data} build={howToSupplyNode} />;
}

export function HowToToolStructuredData({ data }: { data: HowToToolInput }) {
  return <StructuredDataNode data={data} build={howToToolNode} />;
}

export function ItemListStructuredData({ data }: { data: ItemListInput }) {
  return <StructuredDataNode data={data} build={itemListNode} />;
}

export function ImageGalleryStructuredData({ data }: { data: ImageGalleryInput }) {
  return <StructuredDataNode data={data} build={imageGalleryNode} />;
}

export function MediaGalleryStructuredData({ data }: { data: MediaGalleryInput }) {
  return <StructuredDataNode data={data} build={mediaGalleryNode} />;
}

export function ItemPageStructuredData({ data }: { data: ItemPageInput }) {
  return <StructuredDataNode data={data} build={itemPageNode} />;
}

export function SoftwareSourceCodeStructuredData({ data }: { data: SoftwareSourceCodeInput }) {
  return <StructuredDataNode data={data} build={softwareSourceCodeNode} />;
}

export function ProductStructuredData({ data }: { data: ProductInput }) {
  return <StructuredDataNode data={data} build={productNode} />;
}

export function DatasetStructuredData({ data }: { data: DatasetInput }) {
  return <StructuredDataNode data={data} build={datasetNode} />;
}

export function EventStructuredData({ data }: { data: EventInput }) {
  return <StructuredDataNode data={data} build={eventNode} />;
}

export function VideoObjectStructuredData({ data }: { data: VideoObjectInput }) {
  return <StructuredDataNode data={data} build={videoObjectNode} />;
}

export function MediaObjectStructuredData({ data }: { data: MediaObjectInput }) {
  return <StructuredDataNode data={data} build={mediaObjectNode} />;
}

export function MediaSubscriptionStructuredData({ data }: { data: MediaSubscriptionInput }) {
  return <StructuredDataNode data={data} build={mediaSubscriptionNode} />;
}

export function MenuItemStructuredData({ data }: { data: MenuItemInput }) {
  return <StructuredDataNode data={data} build={menuItemNode} />;
}

export function MenuSectionStructuredData({ data }: { data: MenuSectionInput }) {
  return <StructuredDataNode data={data} build={menuSectionNode} />;
}

export function ImageObjectStructuredData({ data }: { data: ImageObjectInput }) {
  return <StructuredDataNode data={data} build={imageObjectSchema} />;
}

export function ProfilePageStructuredData({ data }: { data: ProfilePageInput }) {
  return <StructuredDataNode data={data} build={profilePageNode} />;
}

export function ReviewStructuredData({ data }: { data: ReviewInput }) {
  return <StructuredDataNode data={data} build={reviewNode} />;
}

export function AggregateRatingStructuredData({ data }: { data: AggregateRatingInput }) {
  return <StructuredDataNode data={data} build={aggregateRatingNode} />;
}

export function CourseStructuredData({ data }: { data: CourseInput }) {
  return <StructuredDataNode data={data} build={courseNode} />;
}

export function CourseInstanceStructuredData({ data }: { data: CourseInstanceInput }) {
  return <StructuredDataNode data={data} build={courseInstanceNode} />;
}

export function DiscussionForumPostingStructuredData({ data }: { data: DiscussionForumPostingInput }) {
  return <StructuredDataNode data={data} build={discussionForumPostingNode} />;
}

export function BookStructuredData({ data }: { data: BookInput }) {
  return <StructuredDataNode data={data} build={bookNode} />;
}

export function ReadActionStructuredData({ target }: { target: string | JsonLd }) {
  return <JsonLd graph={readActionNode(target)} />;
}

export function ClaimReviewStructuredData({ data }: { data: ClaimReviewInput }) {
  return <StructuredDataNode data={data} build={claimReviewNode} />;
}

export function EmployerAggregateRatingStructuredData({ data }: { data: AggregateRatingInput }) {
  return <StructuredDataNode data={data} build={employerAggregateRatingNode} />;
}

export function MonetaryAmountDistributionStructuredData({
  data,
}: {
  data: { name?: string; currency?: string; minValue?: number; maxValue?: number; unitText?: string };
}) {
  return <JsonLd graph={estimatedSalaryNode(data)} />;
}

export function JobPostingStructuredData({ data }: { data: JobPostingInput }) {
  return <StructuredDataNode data={data} build={jobPostingNode} />;
}

export function LocalBusinessStructuredData({ data }: { data: LocalBusinessInput }) {
  return <StructuredDataNode data={data} build={localBusinessNode} />;
}

export function MemberProgramStructuredData({ data }: { data: LoyaltyProgramInput }) {
  return <StructuredDataNode data={data} build={loyaltyProgramNode} />;
}

export function MemberProgramTierStructuredData({ data }: { data: MemberProgramTierInput }) {
  return <StructuredDataNode data={data} build={memberProgramTierNode} />;
}

export function MathSolverStructuredData({ data }: { data: MathSolverInput }) {
  return <StructuredDataNode data={data} build={mathSolverNode} />;
}

export function LearningResourceStructuredData({ data }: { data: LearningResourceInput }) {
  return <StructuredDataNode data={data} build={learningResourceNode} />;
}

export function SolveMathActionStructuredData({ data }: { data: SolveMathActionInput }) {
  return <StructuredDataNode data={data} build={solveMathActionNode} />;
}

export function MerchantReturnPolicyStructuredData({ data }: { data: PolicyInput }) {
  return <StructuredDataNode data={data} build={merchantReturnPolicyNode} />;
}

export function MerchantReturnPolicySeasonalOverrideStructuredData({ data }: { data: MerchantReturnPolicySeasonalOverrideInput }) {
  return <StructuredDataNode data={data} build={merchantReturnPolicySeasonalOverrideNode} />;
}

export function NutritionInformationStructuredData({ data }: { data: NutritionInformationInput }) {
  return <StructuredDataNode data={data} build={nutritionInformationNode} />;
}

export function OccupationStructuredData({ data }: { data: OccupationInput }) {
  return <StructuredDataNode data={data} build={occupationNode} />;
}

export function OccupationalExperienceRequirementsStructuredData({ data }: { data: OccupationalExperienceRequirementsInput }) {
  return <StructuredDataNode data={data} build={occupationalExperienceRequirementsNode} />;
}

export function OfferStructuredData({ data }: { data: OfferInput }) {
  return <StructuredDataNode data={data} build={offerNode} />;
}

export function OfferCatalogStructuredData({ data }: { data: OfferCatalogInput }) {
  return <StructuredDataNode data={data} build={offerCatalogNode} />;
}

export function OpeningHoursSpecificationStructuredData({ data }: { data: OpeningHoursSpecificationInput }) {
  return <StructuredDataNode data={data} build={openingHoursSpecificationNode} />;
}

export function ProgramMembershipStructuredData({ data }: { data: ProgramMembershipInput }) {
  return <StructuredDataNode data={data} build={programMembershipNode} />;
}

export function PublicationEventStructuredData({ data }: { data: PublicationEventInput }) {
  return <StructuredDataNode data={data} build={publicationEventNode} />;
}

export function RepaymentSpecificationStructuredData({ data }: { data: RepaymentSpecificationInput }) {
  return <StructuredDataNode data={data} build={repaymentSpecificationNode} />;
}

export function ScheduleStructuredData({ data }: { data: ScheduleInput }) {
  return <StructuredDataNode data={data} build={scheduleNode} />;
}

export function SeriesStructuredData({ data }: { data: SeriesInput }) {
  return <StructuredDataNode data={data} build={seriesNode} />;
}

export function ServiceStructuredData({ data }: { data: ServiceInput }) {
  return <StructuredDataNode data={data} build={serviceNode} />;
}

export function ServiceChannelStructuredData({ data }: { data: ServiceChannelInput }) {
  return <StructuredDataNode data={data} build={serviceChannelNode} />;
}

export function ServicePeriodStructuredData({ data }: { data: ServicePeriodInput }) {
  return <StructuredDataNode data={data} build={servicePeriodNode} />;
}

export function ShippingConditionsStructuredData({ data }: { data: ShippingConditionsInput }) {
  return <StructuredDataNode data={data} build={shippingConditionsNode} />;
}

export function ShippingDeliveryTimeStructuredData({ data }: { data: ShippingDeliveryTimeInput }) {
  return <StructuredDataNode data={data} build={shippingDeliveryTimeNode} />;
}

export function ShippingRateSettingsStructuredData({ data }: { data: ShippingRateSettingsInput }) {
  return <StructuredDataNode data={data} build={shippingRateSettingsNode} />;
}

export function ShippingServiceStructuredData({ data }: { data: ShippingServiceInput }) {
  return <StructuredDataNode data={data} build={shippingServiceNode} />;
}

export function StatisticalVariableStructuredData({ data }: { data: StatisticalVariableInput }) {
  return <StructuredDataNode data={data} build={statisticalVariableNode} />;
}

export function SubstanceStructuredData({ data }: { data: SubstanceInput }) {
  return <StructuredDataNode data={data} build={substanceNode} />;
}

export function TaxonStructuredData({ data }: { data: TaxonInput }) {
  return <StructuredDataNode data={data} build={taxonNode} />;
}

export function VirtualLocationStructuredData({ data }: { data: VirtualLocationInput }) {
  return <StructuredDataNode data={data} build={virtualLocationNode} />;
}

export function TripStructuredData({ data }: { data: TripInput }) {
  return <StructuredDataNode data={data} build={tripNode} />;
}

export function OfferShippingDetailsStructuredData({ data }: { data: PolicyInput }) {
  return <StructuredDataNode data={data} build={offerShippingDetailsNode} />;
}

export function MovieStructuredData({ data }: { data: MovieInput }) {
  return <StructuredDataNode data={data} build={movieNode} />;
}

export function MusicAlbumStructuredData({ data }: { data: MusicAlbumInput }) {
  return <StructuredDataNode data={data} build={musicAlbumNode} />;
}

export function MusicCompositionStructuredData({ data }: { data: MusicCompositionInput }) {
  return <StructuredDataNode data={data} build={musicCompositionNode} />;
}

export function MusicGroupStructuredData({ data }: { data: MusicGroupInput }) {
  return <StructuredDataNode data={data} build={musicGroupNode} />;
}

export function MusicPlaylistStructuredData({ data }: { data: MusicPlaylistInput }) {
  return <StructuredDataNode data={data} build={musicPlaylistNode} />;
}

export function MusicRecordingStructuredData({ data }: { data: MusicRecordingInput }) {
  return <StructuredDataNode data={data} build={musicRecordingNode} />;
}

export function MusicReleaseStructuredData({ data }: { data: MusicReleaseInput }) {
  return <StructuredDataNode data={data} build={musicReleaseNode} />;
}

export function ProductGroupStructuredData({ data }: { data: ProductGroupInput }) {
  return <StructuredDataNode data={data} build={productGroupNode} />;
}

export function ProductModelStructuredData({ data }: { data: ProductModelInput }) {
  return <StructuredDataNode data={data} build={productModelNode} />;
}

export function RecipeStructuredData({ data }: { data: RecipeInput }) {
  return <StructuredDataNode data={data} build={recipeNode} />;
}

export function RealEstateListingStructuredData({ data }: { data: RealEstateListingInput }) {
  return <StructuredDataNode data={data} build={realEstateListingNode} />;
}

export function SearchResultsPageStructuredData({ data }: { data: SearchResultsPageInput }) {
  return <StructuredDataNode data={data} build={searchResultsPageNode} />;
}

export function SpeakableSpecificationStructuredData({ data }: { data: SpeakableInput }) {
  return <StructuredDataNode data={data} build={speakableSpecificationNode} />;
}

export function ClipStructuredData({ data }: { data: ClipInput }) {
  return <StructuredDataNode data={data} build={clipNode} />;
}

export function BroadcastEventStructuredData({ data }: { data: BroadcastEventInput }) {
  return <StructuredDataNode data={data} build={broadcastEventNode} />;
}

export function VacationRentalStructuredData({ data }: { data: VacationRentalInput }) {
  return <StructuredDataNode data={data} build={vacationRentalNode} />;
}

export function VehicleStructuredData({ data }: { data: VehicleInput }) {
  return <StructuredDataNode data={data} build={vehicleListingNode} />;
}

export function VideoGalleryStructuredData({ data }: { data: VideoGalleryInput }) {
  return <StructuredDataNode data={data} build={videoGalleryNode} />;
}

const absoluteHref = (baseUrl: string, href: string): string =>
  href.startsWith("http") ? href : `${baseUrl.replace(/\/+$/, "")}${href.startsWith("/") ? href : `/${href}`}`;

const dataRecord = (value: unknown): Record<string, unknown> =>
  value && typeof value === "object" && !Array.isArray(value) ? (value as Record<string, unknown>) : {};

const stringValue = (value: unknown): string | undefined => (typeof value === "string" && value.trim() ? value : undefined);

const jsonLdValue = (value: unknown): JsonLd | string | undefined =>
  typeof value === "string" || (value && typeof value === "object" && !Array.isArray(value))
    ? (value as JsonLd | string)
    : undefined;

const jsonLdArrayValue = (value: unknown): JsonLd | JsonLd[] | undefined =>
  value && typeof value === "object" ? (value as JsonLd | JsonLd[]) : undefined;

const stringArrayValue = (value: unknown): string[] | undefined =>
  Array.isArray(value) ? value.filter((entry): entry is string => typeof entry === "string" && Boolean(entry.trim())) : undefined;

const recordArrayValue = (value: unknown): Record<string, unknown>[] | undefined =>
  Array.isArray(value)
    ? value.filter(
        (entry): entry is Record<string, unknown> =>
          Boolean(entry) && typeof entry === "object" && !Array.isArray(entry),
      )
    : undefined;

const numberValue = (value: unknown): number | undefined => (typeof value === "number" ? value : undefined);

const booleanValue = (value: unknown): boolean | undefined => (typeof value === "boolean" ? value : undefined);

function answerInputFromRecord(data: Record<string, unknown>): AnswerInput {
  return {
    id: stringValue(data.id),
    text: stringValue(data.text) ?? "",
    url: stringValue(data.url),
    upvoteCount: numberValue(data.upvoteCount),
    dateCreated: stringValue(data.dateCreated),
    author: jsonLdValue(data.author),
  };
}

function questionInputFromRecord(data: Record<string, unknown>): QuestionInput {
  return {
    id: stringValue(data.id),
    name: stringValue(data.name) ?? stringValue(data.question) ?? "",
    text: stringValue(data.text),
    url: stringValue(data.url),
    acceptedAnswer:
      data.acceptedAnswer && typeof data.acceptedAnswer === "object" && !Array.isArray(data.acceptedAnswer)
        ? answerInputFromRecord(data.acceptedAnswer as Record<string, unknown>)
        : undefined,
    suggestedAnswer: recordArrayValue(data.suggestedAnswer)?.map((entry) => answerInputFromRecord(entry)),
    answerCount: numberValue(data.answerCount),
    eduQuestionType: stringValue(data.eduQuestionType),
  };
}

function clipInputFromRecord(data: Record<string, unknown>): ClipInput {
  return {
    id: stringValue(data.id),
    name: stringValue(data.name) ?? "",
    description: stringValue(data.description),
    url: stringValue(data.url),
    startOffset: numberValue(data.startOffset),
    endOffset: numberValue(data.endOffset),
  };
}

function broadcastEventInputFromRecord(data: Record<string, unknown>): BroadcastEventInput {
  return {
    id: stringValue(data.id),
    name: stringValue(data.name),
    description: stringValue(data.description),
    url: stringValue(data.url),
    startDate: stringValue(data.startDate),
    endDate: stringValue(data.endDate),
    isLiveBroadcast: booleanValue(data.isLiveBroadcast),
  };
}

export interface StructuredDataIntentRendererEntry {
  componentName: string;
  render: (intent: CompiledStructuredDataIntent) => React.ReactElement;
}

function renderDataIntent<T extends object>(
  Component: React.ComponentType<{ data: T }>,
  intent: CompiledStructuredDataIntent,
): React.ReactElement {
  return <Component data={dataRecord(intent.data) as T} />;
}

export const landerStructuredDataIntentRegistry = Object.freeze({
  Action: { componentName: "ActionStructuredData", render: (intent) => renderDataIntent(ActionStructuredData, intent) },
  AdministrativeArea: { componentName: "AdministrativeAreaStructuredData", render: (intent) => renderDataIntent(AdministrativeAreaStructuredData, intent) },
  AboutPage: { componentName: "AboutPageStructuredData", render: (intent) => renderDataIntent(AboutPageStructuredData, intent) },
  AggregateOffer: { componentName: "AggregateOfferStructuredData", render: (intent) => renderDataIntent(AggregateOfferStructuredData, intent) },
  AggregateRating: { componentName: "AggregateRatingStructuredData", render: (intent) => renderDataIntent(AggregateRatingStructuredData, intent) },
  AlignmentObject: { componentName: "AlignmentObjectStructuredData", render: (intent) => renderDataIntent(AlignmentObjectStructuredData, intent) },
  Thing: { componentName: "ThingStructuredData", render: (intent) => renderDataIntent(ThingStructuredData, intent) },
  Intangible: { componentName: "IntangibleStructuredData", render: (intent) => renderDataIntent(IntangibleStructuredData, intent) },
  StructuredValue: { componentName: "StructuredValueStructuredData", render: (intent) => renderDataIntent(StructuredValueStructuredData, intent) },
  TypeAndQuantityNode: { componentName: "TypeAndQuantityNodeStructuredData", render: (intent) => renderDataIntent(TypeAndQuantityNodeStructuredData, intent) },
  UnitPriceSpecification: { componentName: "UnitPriceSpecificationStructuredData", render: (intent) => renderDataIntent(UnitPriceSpecificationStructuredData, intent) },
  WarrantyPromise: { componentName: "WarrantyPromiseStructuredData", render: (intent) => renderDataIntent(WarrantyPromiseStructuredData, intent) },
  Answer: { componentName: "AnswerStructuredData", render: (intent) => renderDataIntent(AnswerStructuredData, intent) },
  Article: { componentName: "ArticleStructuredData", render: (intent) => renderDataIntent(ArticleStructuredData, intent) },
  Audience: { componentName: "AudienceStructuredData", render: (intent) => renderDataIntent(AudienceStructuredData, intent) },
  AudioObject: { componentName: "AudioObjectStructuredData", render: (intent) => renderDataIntent(AudioObjectStructuredData, intent) },
  Brand: { componentName: "BrandStructuredData", render: (intent) => renderDataIntent(BrandStructuredData, intent) },
  BroadcastChannel: { componentName: "BroadcastChannelStructuredData", render: (intent) => renderDataIntent(BroadcastChannelStructuredData, intent) },
  BroadcastFrequencySpecification: { componentName: "BroadcastFrequencySpecificationStructuredData", render: (intent) => renderDataIntent(BroadcastFrequencySpecificationStructuredData, intent) },
  BroadcastService: { componentName: "BroadcastServiceStructuredData", render: (intent) => renderDataIntent(BroadcastServiceStructuredData, intent) },
  CategoryCode: { componentName: "CategoryCodeStructuredData", render: (intent) => renderDataIntent(CategoryCodeStructuredData, intent) },
  CategoryCodeSet: { componentName: "CategoryCodeSetStructuredData", render: (intent) => renderDataIntent(CategoryCodeSetStructuredData, intent) },
  CableOrSatelliteService: { componentName: "CableOrSatelliteServiceStructuredData", render: (intent) => renderDataIntent(CableOrSatelliteServiceStructuredData, intent) },
  CivicStructure: { componentName: "CivicStructureStructuredData", render: (intent) => renderDataIntent(CivicStructureStructuredData, intent) },
  Class: { componentName: "ClassStructuredData", render: (intent) => renderDataIntent(ClassStructuredData, intent) },
  BlogPosting: { componentName: "BlogPostingStructuredData", render: (intent) => renderDataIntent(BlogPostingStructuredData, intent) },
  Book: { componentName: "BookStructuredData", render: (intent) => renderDataIntent(BookStructuredData, intent) },
  BroadcastEvent: { componentName: "BroadcastEventStructuredData", render: (intent) => renderDataIntent(BroadcastEventStructuredData, intent) },
  BreadcrumbList: { componentName: "BreadcrumbListStructuredData", render: (intent) => renderDataIntent(BreadcrumbListStructuredData, intent) },
  Certification: { componentName: "CertificationStructuredData", render: (intent) => renderDataIntent(CertificationStructuredData, intent) },
  Claim: { componentName: "ClaimStructuredData", render: (intent) => renderDataIntent(ClaimStructuredData, intent) },
  ConstraintNode: { componentName: "ConstraintNodeStructuredData", render: (intent) => renderDataIntent(ConstraintNodeStructuredData, intent) },
  Comment: { componentName: "CommentStructuredData", render: (intent) => renderDataIntent(CommentStructuredData, intent) },
  ContactPoint: { componentName: "ContactPointStructuredData", render: (intent) => renderDataIntent(ContactPointStructuredData, intent) },
  CorrectionComment: { componentName: "CorrectionCommentStructuredData", render: (intent) => renderDataIntent(CorrectionCommentStructuredData, intent) },
  ClaimReview: { componentName: "ClaimReviewStructuredData", render: (intent) => renderDataIntent(ClaimReviewStructuredData, intent) },
  CheckoutPage: { componentName: "CheckoutPageStructuredData", render: (intent) => renderDataIntent(CheckoutPageStructuredData, intent) },
  Clip: { componentName: "ClipStructuredData", render: (intent) => renderDataIntent(ClipStructuredData, intent) },
  CollectionPage: { componentName: "CollectionPageStructuredData", render: (intent) => renderDataIntent(CollectionPageStructuredData, intent) },
  ContactPage: { componentName: "ContactPageStructuredData", render: (intent) => renderDataIntent(ContactPageStructuredData, intent) },
  Course: { componentName: "CourseStructuredData", render: (intent) => renderDataIntent(CourseStructuredData, intent) },
  CourseInstance: { componentName: "CourseInstanceStructuredData", render: (intent) => renderDataIntent(CourseInstanceStructuredData, intent) },
  Country: { componentName: "CountryStructuredData", render: (intent) => renderDataIntent(CountryStructuredData, intent) },
  CreativeWork: { componentName: "CreativeWorkStructuredData", render: (intent) => renderDataIntent(CreativeWorkStructuredData, intent) },
  CreativeWorkSeason: { componentName: "CreativeWorkSeasonStructuredData", render: (intent) => renderDataIntent(CreativeWorkSeasonStructuredData, intent) },
  CreativeWorkSeries: { componentName: "CreativeWorkSeriesStructuredData", render: (intent) => renderDataIntent(CreativeWorkSeriesStructuredData, intent) },
  Credential: { componentName: "CredentialStructuredData", render: (intent) => renderDataIntent(CredentialStructuredData, intent) },
  CreditCard: { componentName: "CreditCardStructuredData", render: (intent) => renderDataIntent(CreditCardStructuredData, intent) },
  CssSelectorType: { componentName: "CssSelectorTypeStructuredData", render: (intent) => renderDataIntent(CssSelectorTypeStructuredData, intent) },
  DataCatalog: { componentName: "DataCatalogStructuredData", render: (intent) => renderDataIntent(DataCatalogStructuredData, intent) },
  DataDownload: { componentName: "DataDownloadStructuredData", render: (intent) => renderDataIntent(DataDownloadStructuredData, intent) },
  DataFeed: { componentName: "DataFeedStructuredData", render: (intent) => renderDataIntent(DataFeedStructuredData, intent) },
  DataFeedItem: { componentName: "DataFeedItemStructuredData", render: (intent) => renderDataIntent(DataFeedItemStructuredData, intent) },
  Dataset: { componentName: "DatasetStructuredData", render: (intent) => renderDataIntent(DatasetStructuredData, intent) },
  DefinedRegion: { componentName: "DefinedRegionStructuredData", render: (intent) => renderDataIntent(DefinedRegionStructuredData, intent) },
  DefinedTerm: { componentName: "DefinedTermStructuredData", render: (intent) => renderDataIntent(DefinedTermStructuredData, intent) },
  DefinedTermSet: { componentName: "DefinedTermSetStructuredData", render: (intent) => renderDataIntent(DefinedTermSetStructuredData, intent) },
  DeliveryChargeSpecification: { componentName: "DeliveryChargeSpecificationStructuredData", render: (intent) => renderDataIntent(DeliveryChargeSpecificationStructuredData, intent) },
  Demand: { componentName: "DemandStructuredData", render: (intent) => renderDataIntent(DemandStructuredData, intent) },
  Distance: { componentName: "DistanceStructuredData", render: (intent) => renderDataIntent(DistanceStructuredData, intent) },
  DiscussionForumPosting: { componentName: "DiscussionForumPostingStructuredData", render: (intent) => renderDataIntent(DiscussionForumPostingStructuredData, intent) },
  Duration: { componentName: "DurationStructuredData", render: (intent) => renderDataIntent(DurationStructuredData, intent) },
  EducationalOccupationalCredential: { componentName: "EducationalOccupationalCredentialStructuredData", render: (intent) => renderDataIntent(EducationalOccupationalCredentialStructuredData, intent) },
  EducationalOrganization: { componentName: "EducationalOrganizationStructuredData", render: (intent) => renderDataIntent(EducationalOrganizationStructuredData, intent) },
  Energy: { componentName: "EnergyStructuredData", render: (intent) => renderDataIntent(EnergyStructuredData, intent) },
  EnergyConsumptionDetails: { componentName: "EnergyConsumptionDetailsStructuredData", render: (intent) => renderDataIntent(EnergyConsumptionDetailsStructuredData, intent) },
  EntryPoint: { componentName: "EntryPointStructuredData", render: (intent) => renderDataIntent(EntryPointStructuredData, intent) },
  Enumeration: { componentName: "EnumerationStructuredData", render: (intent) => renderDataIntent(EnumerationStructuredData, intent) },
  Episode: { componentName: "EpisodeStructuredData", render: (intent) => renderDataIntent(EpisodeStructuredData, intent) },
  EmployerAggregateRating: { componentName: "EmployerAggregateRatingStructuredData", render: (intent) => renderDataIntent(EmployerAggregateRatingStructuredData, intent) },
  Event: { componentName: "EventStructuredData", render: (intent) => renderDataIntent(EventStructuredData, intent) },
  FAQPage: { componentName: "FAQPageStructuredData", render: (intent) => renderDataIntent(FAQPageStructuredData, intent) },
  FinancialProduct: { componentName: "FinancialProductStructuredData", render: (intent) => renderDataIntent(FinancialProductStructuredData, intent) },
  LoanOrCredit: { componentName: "LoanOrCreditStructuredData", render: (intent) => renderDataIntent(LoanOrCreditStructuredData, intent) },
  Gene: { componentName: "GeneStructuredData", render: (intent) => renderDataIntent(GeneStructuredData, intent) },
  GeoCoordinates: { componentName: "GeoCoordinatesStructuredData", render: (intent) => renderDataIntent(GeoCoordinatesStructuredData, intent) },
  GeospatialGeometry: { componentName: "GeospatialGeometryStructuredData", render: (intent) => renderDataIntent(GeospatialGeometryStructuredData, intent) },
  GeoShape: { componentName: "GeoShapeStructuredData", render: (intent) => renderDataIntent(GeoShapeStructuredData, intent) },
  Grant: { componentName: "GrantStructuredData", render: (intent) => renderDataIntent(GrantStructuredData, intent) },
  HyperTocEntry: { componentName: "HyperTocEntryStructuredData", render: (intent) => renderDataIntent(HyperTocEntryStructuredData, intent) },
  HealthInsurancePlan: { componentName: "HealthInsurancePlanStructuredData", render: (intent) => renderDataIntent(HealthInsurancePlanStructuredData, intent) },
  HealthPlanCostSharingSpecification: { componentName: "HealthPlanCostSharingSpecificationStructuredData", render: (intent) => renderDataIntent(HealthPlanCostSharingSpecificationStructuredData, intent) },
  HealthPlanFormulary: { componentName: "HealthPlanFormularyStructuredData", render: (intent) => renderDataIntent(HealthPlanFormularyStructuredData, intent) },
  HealthPlanNetwork: { componentName: "HealthPlanNetworkStructuredData", render: (intent) => renderDataIntent(HealthPlanNetworkStructuredData, intent) },
  HowTo: { componentName: "HowToStructuredData", render: (intent) => renderDataIntent(HowToStructuredData, intent) },
  HowToItem: { componentName: "HowToItemStructuredData", render: (intent) => renderDataIntent(HowToItemStructuredData, intent) },
  HowToSection: { componentName: "HowToSectionStructuredData", render: (intent) => renderDataIntent(HowToSectionStructuredData, intent) },
  HowToStep: { componentName: "HowToStepStructuredData", render: (intent) => renderDataIntent(HowToStepStructuredData, intent) },
  HowToSupply: { componentName: "HowToSupplyStructuredData", render: (intent) => renderDataIntent(HowToSupplyStructuredData, intent) },
  HowToTool: { componentName: "HowToToolStructuredData", render: (intent) => renderDataIntent(HowToToolStructuredData, intent) },
  ImageGallery: { componentName: "ImageGalleryStructuredData", render: (intent) => renderDataIntent(ImageGalleryStructuredData, intent) },
  ImageObject: { componentName: "ImageObjectStructuredData", render: (intent) => renderDataIntent(ImageObjectStructuredData, intent) },
  InteractionCounter: { componentName: "InteractionCounterStructuredData", render: (intent) => renderDataIntent(InteractionCounterStructuredData, intent) },
  Integer: { componentName: "IntegerStructuredData", render: (intent) => renderDataIntent(IntegerStructuredData, intent) },
  QuantitativeValue: { componentName: "QuantitativeValueStructuredData", render: (intent) => renderDataIntent(QuantitativeValueStructuredData, intent) },
  QuantitativeValueDistribution: { componentName: "QuantitativeValueDistributionStructuredData", render: (intent) => renderDataIntent(QuantitativeValueDistributionStructuredData, intent) },
  MonetaryAmount: { componentName: "MonetaryAmountStructuredData", render: (intent) => renderDataIntent(MonetaryAmountStructuredData, intent) },
  Rating: { componentName: "RatingStructuredData", render: (intent) => renderDataIntent(RatingStructuredData, intent) },
  ItemList: { componentName: "ItemListStructuredData", render: (intent) => renderDataIntent(ItemListStructuredData, intent) },
  ItemPage: { componentName: "ItemPageStructuredData", render: (intent) => renderDataIntent(ItemPageStructuredData, intent) },
  JobPosting: { componentName: "JobPostingStructuredData", render: (intent) => renderDataIntent(JobPostingStructuredData, intent) },
  Language: { componentName: "LanguageStructuredData", render: (intent) => renderDataIntent(LanguageStructuredData, intent) },
  LifestyleModification: { componentName: "LifestyleModificationStructuredData", render: (intent) => renderDataIntent(LifestyleModificationStructuredData, intent) },
  LearningResource: { componentName: "LearningResourceStructuredData", render: (intent) => renderDataIntent(LearningResourceStructuredData, intent) },
  ListItem: { componentName: "ListItemStructuredData", render: (intent) => renderDataIntent(ListItemStructuredData, intent) },
  LocalBusiness: { componentName: "LocalBusinessStructuredData", render: (intent) => renderDataIntent(LocalBusinessStructuredData, intent) },
  Mass: { componentName: "MassStructuredData", render: (intent) => renderDataIntent(MassStructuredData, intent) },
  LocationFeatureSpecification: {
    componentName: "LocationFeatureSpecificationStructuredData",
    render: (intent) => renderDataIntent(LocationFeatureSpecificationStructuredData, intent),
  },
  Map: { componentName: "MapStructuredData", render: (intent) => renderDataIntent(MapStructuredData, intent) },
  MaximumDoseSchedule: { componentName: "MaximumDoseScheduleStructuredData", render: (intent) => renderDataIntent(MaximumDoseScheduleStructuredData, intent) },
  MedicalAudience: { componentName: "MedicalAudienceStructuredData", render: (intent) => renderDataIntent(MedicalAudienceStructuredData, intent) },
  MedicalCause: { componentName: "MedicalCauseStructuredData", render: (intent) => renderDataIntent(MedicalCauseStructuredData, intent) },
  MedicalCode: { componentName: "MedicalCodeStructuredData", render: (intent) => renderDataIntent(MedicalCodeStructuredData, intent) },
  MedicalCondition: { componentName: "MedicalConditionStructuredData", render: (intent) => renderDataIntent(MedicalConditionStructuredData, intent) },
  MedicalConditionStage: { componentName: "MedicalConditionStageStructuredData", render: (intent) => renderDataIntent(MedicalConditionStageStructuredData, intent) },
  MedicalContraindication: { componentName: "MedicalContraindicationStructuredData", render: (intent) => renderDataIntent(MedicalContraindicationStructuredData, intent) },
  MedicalDevice: { componentName: "MedicalDeviceStructuredData", render: (intent) => renderDataIntent(MedicalDeviceStructuredData, intent) },
  MedicalEntity: { componentName: "MedicalEntityStructuredData", render: (intent) => renderDataIntent(MedicalEntityStructuredData, intent) },
  MedicalGuideline: { componentName: "MedicalGuidelineStructuredData", render: (intent) => renderDataIntent(MedicalGuidelineStructuredData, intent) },
  MedicalIntangible: { componentName: "MedicalIntangibleStructuredData", render: (intent) => renderDataIntent(MedicalIntangibleStructuredData, intent) },
  MedicalProcedure: { componentName: "MedicalProcedureStructuredData", render: (intent) => renderDataIntent(MedicalProcedureStructuredData, intent) },
  MedicalRiskFactor: { componentName: "MedicalRiskFactorStructuredData", render: (intent) => renderDataIntent(MedicalRiskFactorStructuredData, intent) },
  MedicalSign: { componentName: "MedicalSignStructuredData", render: (intent) => renderDataIntent(MedicalSignStructuredData, intent) },
  MedicalSignOrSymptom: { componentName: "MedicalSignOrSymptomStructuredData", render: (intent) => renderDataIntent(MedicalSignOrSymptomStructuredData, intent) },
  MedicalStudy: { componentName: "MedicalStudyStructuredData", render: (intent) => renderDataIntent(MedicalStudyStructuredData, intent) },
  MedicalTest: { componentName: "MedicalTestStructuredData", render: (intent) => renderDataIntent(MedicalTestStructuredData, intent) },
  MedicalTherapy: { componentName: "MedicalTherapyStructuredData", render: (intent) => renderDataIntent(MedicalTherapyStructuredData, intent) },
  MedicalWebPage: { componentName: "MedicalWebPageStructuredData", render: (intent) => renderDataIntent(MedicalWebPageStructuredData, intent) },
  MathSolver: { componentName: "MathSolverStructuredData", render: (intent) => renderDataIntent(MathSolverStructuredData, intent) },
  MediaGallery: { componentName: "MediaGalleryStructuredData", render: (intent) => renderDataIntent(MediaGalleryStructuredData, intent) },
  MediaObject: { componentName: "MediaObjectStructuredData", render: (intent) => renderDataIntent(MediaObjectStructuredData, intent) },
  MediaSubscription: {
    componentName: "MediaSubscriptionStructuredData",
    render: (intent) => renderDataIntent(MediaSubscriptionStructuredData, intent),
  },
  MenuItem: { componentName: "MenuItemStructuredData", render: (intent) => renderDataIntent(MenuItemStructuredData, intent) },
  MenuSection: { componentName: "MenuSectionStructuredData", render: (intent) => renderDataIntent(MenuSectionStructuredData, intent) },
  MemberProgram: { componentName: "MemberProgramStructuredData", render: (intent) => renderDataIntent(MemberProgramStructuredData, intent) },
  MemberProgramTier: { componentName: "MemberProgramTierStructuredData", render: (intent) => renderDataIntent(MemberProgramTierStructuredData, intent) },
  MerchantReturnPolicy: { componentName: "MerchantReturnPolicyStructuredData", render: (intent) => renderDataIntent(MerchantReturnPolicyStructuredData, intent) },
  MerchantReturnPolicySeasonalOverride: {
    componentName: "MerchantReturnPolicySeasonalOverrideStructuredData",
    render: (intent) => renderDataIntent(MerchantReturnPolicySeasonalOverrideStructuredData, intent),
  },
  MonetaryAmountDistribution: { componentName: "MonetaryAmountDistributionStructuredData", render: (intent) => renderDataIntent(MonetaryAmountDistributionStructuredData, intent) },
  Movie: { componentName: "MovieStructuredData", render: (intent) => renderDataIntent(MovieStructuredData, intent) },
  MusicAlbum: { componentName: "MusicAlbumStructuredData", render: (intent) => renderDataIntent(MusicAlbumStructuredData, intent) },
  MusicComposition: { componentName: "MusicCompositionStructuredData", render: (intent) => renderDataIntent(MusicCompositionStructuredData, intent) },
  MusicGroup: { componentName: "MusicGroupStructuredData", render: (intent) => renderDataIntent(MusicGroupStructuredData, intent) },
  MusicPlaylist: { componentName: "MusicPlaylistStructuredData", render: (intent) => renderDataIntent(MusicPlaylistStructuredData, intent) },
  MusicRecording: { componentName: "MusicRecordingStructuredData", render: (intent) => renderDataIntent(MusicRecordingStructuredData, intent) },
  MusicRelease: { componentName: "MusicReleaseStructuredData", render: (intent) => renderDataIntent(MusicReleaseStructuredData, intent) },
  NewsArticle: { componentName: "NewsArticleStructuredData", render: (intent) => renderDataIntent(NewsArticleStructuredData, intent) },
  NutritionInformation: { componentName: "NutritionInformationStructuredData", render: (intent) => renderDataIntent(NutritionInformationStructuredData, intent) },
  Occupation: { componentName: "OccupationStructuredData", render: (intent) => renderDataIntent(OccupationStructuredData, intent) },
  OccupationalExperienceRequirements: { componentName: "OccupationalExperienceRequirementsStructuredData", render: (intent) => renderDataIntent(OccupationalExperienceRequirementsStructuredData, intent) },
  Offer: { componentName: "OfferStructuredData", render: (intent) => renderDataIntent(OfferStructuredData, intent) },
  OfferCatalog: { componentName: "OfferCatalogStructuredData", render: (intent) => renderDataIntent(OfferCatalogStructuredData, intent) },
  OfferShippingDetails: { componentName: "OfferShippingDetailsStructuredData", render: (intent) => renderDataIntent(OfferShippingDetailsStructuredData, intent) },
  OpeningHoursSpecification: {
    componentName: "OpeningHoursSpecificationStructuredData",
    render: (intent) => renderDataIntent(OpeningHoursSpecificationStructuredData, intent),
  },
  Organization: { componentName: "OrganizationStructuredData", render: (intent) => renderDataIntent(OrganizationStructuredData, intent) },
  Property: { componentName: "PropertyStructuredData", render: (intent) => renderDataIntent(PropertyStructuredData, intent) },
  PropertyValue: { componentName: "PropertyValueStructuredData", render: (intent) => renderDataIntent(PropertyValueStructuredData, intent) },
  Product: { componentName: "ProductStructuredData", render: (intent) => renderDataIntent(ProductStructuredData, intent) },
  ProductGroup: { componentName: "ProductGroupStructuredData", render: (intent) => renderDataIntent(ProductGroupStructuredData, intent) },
  ProductModel: { componentName: "ProductModelStructuredData", render: (intent) => renderDataIntent(ProductModelStructuredData, intent) },
  ProgramMembership: { componentName: "ProgramMembershipStructuredData", render: (intent) => renderDataIntent(ProgramMembershipStructuredData, intent) },
  ProfilePage: { componentName: "ProfilePageStructuredData", render: (intent) => renderDataIntent(ProfilePageStructuredData, intent) },
  PublicationEvent: { componentName: "PublicationEventStructuredData", render: (intent) => renderDataIntent(PublicationEventStructuredData, intent) },
  RepaymentSpecification: { componentName: "RepaymentSpecificationStructuredData", render: (intent) => renderDataIntent(RepaymentSpecificationStructuredData, intent) },
  QAPage: { componentName: "QAPageStructuredData", render: (intent) => renderDataIntent(QAPageStructuredData, intent) },
  Question: { componentName: "QuestionStructuredData", render: (intent) => renderDataIntent(QuestionStructuredData, intent) },
  Quiz: { componentName: "QuizStructuredData", render: (intent) => renderDataIntent(QuizStructuredData, intent) },
  ReadAction: {
    componentName: "ReadActionStructuredData",
    render: (intent) => <ReadActionStructuredData target={jsonLdValue(dataRecord(intent.data).target) ?? dataRecord(intent.data)} />,
  },
  RealEstateListing: { componentName: "RealEstateListingStructuredData", render: (intent) => renderDataIntent(RealEstateListingStructuredData, intent) },
  Recipe: { componentName: "RecipeStructuredData", render: (intent) => renderDataIntent(RecipeStructuredData, intent) },
  Review: { componentName: "ReviewStructuredData", render: (intent) => renderDataIntent(ReviewStructuredData, intent) },
  Schedule: { componentName: "ScheduleStructuredData", render: (intent) => renderDataIntent(ScheduleStructuredData, intent) },
  SearchResultsPage: { componentName: "SearchResultsPageStructuredData", render: (intent) => renderDataIntent(SearchResultsPageStructuredData, intent) },
  Series: { componentName: "SeriesStructuredData", render: (intent) => renderDataIntent(SeriesStructuredData, intent) },
  Service: { componentName: "ServiceStructuredData", render: (intent) => renderDataIntent(ServiceStructuredData, intent) },
  ServiceChannel: { componentName: "ServiceChannelStructuredData", render: (intent) => renderDataIntent(ServiceChannelStructuredData, intent) },
  ServicePeriod: { componentName: "ServicePeriodStructuredData", render: (intent) => renderDataIntent(ServicePeriodStructuredData, intent) },
  ShippingConditions: { componentName: "ShippingConditionsStructuredData", render: (intent) => renderDataIntent(ShippingConditionsStructuredData, intent) },
  ShippingDeliveryTime: { componentName: "ShippingDeliveryTimeStructuredData", render: (intent) => renderDataIntent(ShippingDeliveryTimeStructuredData, intent) },
  ShippingRateSettings: { componentName: "ShippingRateSettingsStructuredData", render: (intent) => renderDataIntent(ShippingRateSettingsStructuredData, intent) },
  ShippingService: { componentName: "ShippingServiceStructuredData", render: (intent) => renderDataIntent(ShippingServiceStructuredData, intent) },
  StatisticalVariable: { componentName: "StatisticalVariableStructuredData", render: (intent) => renderDataIntent(StatisticalVariableStructuredData, intent) },
  SuperficialAnatomy: { componentName: "SuperficialAnatomyStructuredData", render: (intent) => renderDataIntent(SuperficialAnatomyStructuredData, intent) },
  Substance: { componentName: "SubstanceStructuredData", render: (intent) => renderDataIntent(SubstanceStructuredData, intent) },
  Taxon: { componentName: "TaxonStructuredData", render: (intent) => renderDataIntent(TaxonStructuredData, intent) },
  TherapeuticProcedure: { componentName: "TherapeuticProcedureStructuredData", render: (intent) => renderDataIntent(TherapeuticProcedureStructuredData, intent) },
  SolveMathAction: { componentName: "SolveMathActionStructuredData", render: (intent) => renderDataIntent(SolveMathActionStructuredData, intent) },
  SoftwareApplication: { componentName: "SoftwareApplicationStructuredData", render: (intent) => renderDataIntent(SoftwareApplicationStructuredData, intent) },
  RuntimePlatform: { componentName: "RuntimePlatformStructuredData", render: (intent) => renderDataIntent(RuntimePlatformStructuredData, intent) },
  OperatingSystem: { componentName: "OperatingSystemStructuredData", render: (intent) => renderDataIntent(OperatingSystemStructuredData, intent) },
  SoftwareSourceCode: { componentName: "SoftwareSourceCodeStructuredData", render: (intent) => renderDataIntent(SoftwareSourceCodeStructuredData, intent) },
  SpeakableSpecification: { componentName: "SpeakableSpecificationStructuredData", render: (intent) => renderDataIntent(SpeakableSpecificationStructuredData, intent) },
  TechArticle: { componentName: "TechArticleStructuredData", render: (intent) => renderDataIntent(TechArticleStructuredData, intent) },
  TextObject: { componentName: "TextObjectStructuredData", render: (intent) => renderDataIntent(TextObjectStructuredData, intent) },
  Trip: { componentName: "TripStructuredData", render: (intent) => renderDataIntent(TripStructuredData, intent) },
  VacationRental: { componentName: "VacationRentalStructuredData", render: (intent) => renderDataIntent(VacationRentalStructuredData, intent) },
  Vehicle: { componentName: "VehicleStructuredData", render: (intent) => renderDataIntent(VehicleStructuredData, intent) },
  VideoGallery: { componentName: "VideoGalleryStructuredData", render: (intent) => renderDataIntent(VideoGalleryStructuredData, intent) },
  VideoObject: { componentName: "VideoObjectStructuredData", render: (intent) => renderDataIntent(VideoObjectStructuredData, intent) },
  VirtualLocation: { componentName: "VirtualLocationStructuredData", render: (intent) => renderDataIntent(VirtualLocationStructuredData, intent) },
  XPathType: { componentName: "XPathTypeStructuredData", render: (intent) => renderDataIntent(XPathTypeStructuredData, intent) },
  URL: { componentName: "UrlStructuredData", render: (intent) => renderDataIntent(UrlStructuredData, intent) },
  WebApplication: { componentName: "WebApplicationStructuredData", render: (intent) => renderDataIntent(WebApplicationStructuredData, intent) },
  WebContent: { componentName: "WebContentStructuredData", render: (intent) => renderDataIntent(WebContentStructuredData, intent) },
  WebPage: { componentName: "WebPageStructuredData", render: (intent) => renderDataIntent(WebPageStructuredData, intent) },
  WebPageElement: { componentName: "WebPageElementStructuredData", render: (intent) => renderDataIntent(WebPageElementStructuredData, intent) },
  WebSite: { componentName: "WebSiteStructuredData", render: (intent) => renderDataIntent(WebSiteStructuredData, intent) },
  ...generatedPageFamilyIntentRegistry,
} satisfies Record<string, StructuredDataIntentRendererEntry>);

export const SUPPORTED_LANDER_STRUCTURED_DATA_INTENT_KINDS = Object.freeze(
  Object.keys(landerStructuredDataIntentRegistry),
);

export function getStructuredDataIntentRendererEntry(kind: string): StructuredDataIntentRendererEntry {
  const entry = landerStructuredDataIntentRegistry[kind];
  if (!entry) throw new Error(`Unsupported structured data intent kind: ${kind}`);
  return entry;
}

export function renderStructuredDataIntent(intent: CompiledStructuredDataIntent): React.ReactElement {
  return getStructuredDataIntentRendererEntry(intent.kind).render(intent);
}

function schemaData(page: CompiledPage, kind: string): Record<string, unknown> {
  return dataRecord(page.schema?.find((schema) => schema.kind === kind)?.data);
}

function shouldEmit(page: CompiledPage, kind: string, defaults = false): boolean {
  return defaults || Boolean(page.schema?.some((schema) => schema.kind === kind));
}

export function buildLanderJsonLdGraph(site: CompiledLanderSite, page: CompiledPage): JsonLd {
  const nodes: JsonLd[] = [];
  const canonicalRoot = site.product.canonicalUrl.replace(/\/+$/, "");
  const organizationData = schemaData(page, "Organization");
  const organization = organizationNode({
    id: stringValue(organizationData.id) ?? stableId(canonicalRoot, "organization"),
    name: stringValue(organizationData.name) ?? site.product.name,
    description: stringValue(organizationData.description) ?? site.product.description,
    url: stringValue(organizationData.url) ?? `${canonicalRoot}/`,
    logo: stringValue(organizationData.logo) ?? site.product.logo,
    sameAs: stringArrayValue(organizationData.sameAs) ?? site.product.sameAs,
  });
  const websiteData = schemaData(page, "WebSite");
  const website = webSiteSchema({
    id: stringValue(websiteData.id) ?? stableId(canonicalRoot, "website"),
    name: stringValue(websiteData.name) ?? site.product.name,
    description: stringValue(websiteData.description) ?? site.product.description,
    url: stringValue(websiteData.url) ?? `${canonicalRoot}/`,
    image: stringValue(websiteData.image) ?? site.product.logo,
    publisher: jsonLdValue(websiteData.publisher) ?? organization,
  });
  const breadcrumbData = schemaData(page, "BreadcrumbList");
  const breadcrumb = breadcrumbListSchema({
    id: stringValue(breadcrumbData.id) ?? stableId(page.canonicalUrl, "breadcrumbs"),
    items: page.breadcrumbs.map((item) => ({ label: item.label, href: absoluteHref(canonicalRoot, item.href) })),
  });
  const pageImage = page.seo?.image ?? site.seo?.defaultImage;
  const imageData = schemaData(page, "ImageObject");
  const image = imageObjectSchema({
    id: stringValue(imageData.id) ?? stableId(page.canonicalUrl, "image"),
    name: stringValue(imageData.name) ?? pageImage?.alt ?? `${page.h1} image`,
    description: stringValue(imageData.description) ?? page.description,
    url: stringValue(imageData.url) ?? pageImage?.src,
    contentUrl: stringValue(imageData.contentUrl) ?? pageImage?.src,
    width: typeof imageData.width === "number" ? imageData.width : pageImage?.width,
    height: typeof imageData.height === "number" ? imageData.height : pageImage?.height,
    caption: stringValue(imageData.caption) ?? pageImage?.alt,
  });
  const pageData = schemaData(page, "WebPage");
  const webPage = webPageSchema({
    id: stringValue(pageData.id) ?? stableId(page.canonicalUrl, "webpage"),
    name: stringValue(pageData.name) ?? page.title,
    description: stringValue(pageData.description) ?? page.description,
    url: stringValue(pageData.url) ?? page.canonicalUrl,
    image: jsonLdValue(pageData.image) ?? (pageImage ? image : undefined),
    breadcrumb,
    isPartOf: jsonLdValue(pageData.isPartOf) ?? website,
    mainEntity: jsonLdValue(pageData.mainEntity),
    datePublished: stringValue(pageData.datePublished),
    dateModified: stringValue(pageData.dateModified),
  });

  nodes.push(organization, website, webPage);
  if (shouldEmit(page, "BreadcrumbList", page.breadcrumbs.length > 1)) nodes.push(breadcrumb);
  if (shouldEmit(page, "ImageObject", Boolean(pageImage))) nodes.push(image);

  const appDefaults = {
    id: stableId(canonicalRoot, "software-application"),
    name: site.product.name,
    description: site.product.description,
    url: `${canonicalRoot}/`,
    image: site.product.logo,
    applicationCategory: site.product.category,
  };
  if (shouldEmit(page, "SoftwareApplication", page.kind === "home")) {
    const data = schemaData(page, "SoftwareApplication");
    nodes.push(softwareApplicationNode({ ...appDefaults, ...data }));
  }
  if (shouldEmit(page, "WebApplication")) {
    const data = schemaData(page, "WebApplication");
    nodes.push(webApplicationNode({ ...appDefaults, id: stableId(canonicalRoot, "web-application"), ...data }));
  }
  if (shouldEmit(page, "Product", page.kind === "home")) {
    const data = schemaData(page, "Product");
    nodes.push(productNode({
      id: stringValue(data.id) ?? stableId(canonicalRoot, "product"),
      name: stringValue(data.name) ?? site.product.name,
      description: stringValue(data.description) ?? site.product.description,
      url: stringValue(data.url) ?? `${canonicalRoot}/`,
      image: jsonLdValue(data.image) ?? site.product.logo,
      brand: jsonLdValue(data.brand) ?? organization,
      category: stringValue(data.category) ?? site.product.category,
      offers: jsonLdValue(data.offers) as JsonLd | undefined,
    }));
  }
  if (shouldEmit(page, "Course")) {
    const data = schemaData(page, "Course");
    nodes.push(courseNode({
      id: stringValue(data.id) ?? stableId(page.canonicalUrl, "course"),
      name: stringValue(data.name) ?? page.h1,
      description: stringValue(data.description) ?? page.description,
      url: stringValue(data.url) ?? page.canonicalUrl,
      provider: jsonLdValue(data.provider) ?? organization,
      coursePrerequisites: stringArrayValue(data.coursePrerequisites) ?? stringValue(data.coursePrerequisites),
      hasCourseInstance: jsonLdArrayValue(data.hasCourseInstance),
    }));
  }
  if (shouldEmit(page, "CourseInstance")) {
    const data = schemaData(page, "CourseInstance");
    nodes.push(courseInstanceNode({
      id: stringValue(data.id) ?? stableId(page.canonicalUrl, "course-instance"),
      name: stringValue(data.name) ?? page.h1,
      description: stringValue(data.description) ?? page.description,
      url: stringValue(data.url) ?? page.canonicalUrl,
      courseMode: stringValue(data.courseMode),
      instructor: jsonLdValue(data.instructor),
      location: jsonLdValue(data.location),
      startDate: stringValue(data.startDate),
      endDate: stringValue(data.endDate),
    }));
  }

  const articleDefaults = {
    id: stableId(page.canonicalUrl, "article"),
    name: page.h1,
    headline: page.title,
    description: page.description,
    url: page.canonicalUrl,
    image: pageImage,
    publisher: organization,
    author: organization,
  };
  if (shouldEmit(page, "Article", ["trust", "proof", "compare"].includes(page.kind))) {
    nodes.push(articleNode({ ...articleDefaults, ...schemaData(page, "Article") }));
  }
  if (shouldEmit(page, "NewsArticle")) {
    nodes.push(newsArticleNode({ ...articleDefaults, id: stableId(page.canonicalUrl, "news-article"), ...schemaData(page, "NewsArticle") }));
  }
  if (shouldEmit(page, "TechArticle", ["answer", "feature", "docs_bridge", "package"].includes(page.kind))) {
    nodes.push(techArticleNode({ ...articleDefaults, id: stableId(page.canonicalUrl, "tech-article"), ...schemaData(page, "TechArticle") }));
  }
  if (shouldEmit(page, "BlogPosting")) {
    nodes.push(blogPostingNode({ ...articleDefaults, id: stableId(page.canonicalUrl, "blog-posting"), ...schemaData(page, "BlogPosting") }));
  }
  if (shouldEmit(page, "FAQPage", Boolean(page.faq?.length))) {
    const data = schemaData(page, "FAQPage");
    nodes.push(faqPageSchema({
      id: stringValue(data.id) ?? stableId(page.canonicalUrl, "faq"),
      items: Array.isArray(data.items) ? data.items as Array<{ question: string; answer: string }> : page.faq ?? [],
    }));
  }
  if (shouldEmit(page, "QAPage")) {
    const data = schemaData(page, "QAPage");
    nodes.push(qaPageSchema({
      id: stringValue(data.id) ?? stableId(page.canonicalUrl, "qa-page"),
      question: stringValue(data.question) ?? page.h1,
      answer: stringValue(data.answer),
      acceptedAnswer:
        data.acceptedAnswer && typeof data.acceptedAnswer === "object" && !Array.isArray(data.acceptedAnswer)
          ? answerInputFromRecord(data.acceptedAnswer as Record<string, unknown>)
          : undefined,
      suggestedAnswer: recordArrayValue(data.suggestedAnswer)?.map((entry) => answerInputFromRecord(entry)),
      answerCount: numberValue(data.answerCount),
      eduQuestionType: stringValue(data.eduQuestionType),
      url: stringValue(data.url) ?? page.canonicalUrl,
    }));
  }
  if (shouldEmit(page, "Quiz")) {
    const data = schemaData(page, "Quiz");
    const hasPart =
      recordArrayValue(data.hasPart)?.map((entry) => questionInputFromRecord(entry)) ??
      page.faq?.map((entry) => ({ name: entry.question, acceptedAnswer: { text: entry.answer } })) ??
      [];
    nodes.push(quizNode({
      id: stringValue(data.id) ?? stableId(page.canonicalUrl, "quiz"),
      name: stringValue(data.name) ?? page.h1,
      description: stringValue(data.description) ?? page.description,
      url: stringValue(data.url) ?? page.canonicalUrl,
      educationalLevel: stringValue(data.educationalLevel),
      assesses: stringArrayValue(data.assesses) ?? stringValue(data.assesses),
      learningResourceType: stringValue(data.learningResourceType),
      hasPart,
    }));
  }
  if (shouldEmit(page, "Question")) {
    nodes.push(questionNode(questionInputFromRecord({ name: page.h1, ...schemaData(page, "Question") })));
  }
  if (shouldEmit(page, "Answer")) {
    nodes.push(answerNode(answerInputFromRecord({ text: page.description, ...schemaData(page, "Answer") })));
  }
  if (shouldEmit(page, "SoftwareSourceCode", page.kind === "package")) {
    const data = schemaData(page, "SoftwareSourceCode");
    nodes.push(softwareSourceCodeNode({
      id: stringValue(data.id) ?? stableId(page.canonicalUrl, "software-source-code"),
      name: stringValue(data.name) ?? page.h1,
      description: stringValue(data.description) ?? page.description,
      url: stringValue(data.url) ?? page.canonicalUrl,
      codeRepository: stringValue(data.codeRepository),
      programmingLanguage: stringValue(data.programmingLanguage) ?? "TypeScript",
      runtimePlatform: stringValue(data.runtimePlatform),
    }));
  }
  if (shouldEmit(page, "Dataset")) {
    const data = schemaData(page, "Dataset");
    nodes.push(datasetNode({
      id: stringValue(data.id) ?? stableId(page.canonicalUrl, "dataset"),
      name: stringValue(data.name) ?? `${page.h1} dataset`,
      description: stringValue(data.description) ?? page.description,
      url: stringValue(data.url) ?? page.canonicalUrl,
      creator: jsonLdValue(data.creator) ?? organization,
      distribution: jsonLdArrayValue(data.distribution),
      keywords: stringArrayValue(data.keywords) ?? page.seo?.keywords,
      datePublished: stringValue(data.datePublished),
      dateModified: stringValue(data.dateModified),
    }));
  }
  if (shouldEmit(page, "ProfilePage")) {
    const data = schemaData(page, "ProfilePage");
    nodes.push(profilePageNode({
      id: stringValue(data.id) ?? stableId(page.canonicalUrl, "profile"),
      name: stringValue(data.name) ?? page.h1,
      description: stringValue(data.description) ?? page.description,
      url: stringValue(data.url) ?? page.canonicalUrl,
      image: jsonLdValue(data.image) ?? pageImage,
      mainEntity: jsonLdValue(data.mainEntity) ?? organization,
    }));
  }
  if (shouldEmit(page, "VideoObject")) {
    const data = schemaData(page, "VideoObject");
    nodes.push(videoObjectNode({
      id: stringValue(data.id) ?? stableId(page.canonicalUrl, "video"),
      name: stringValue(data.name) ?? page.h1,
      description: stringValue(data.description) ?? page.description,
      url: stringValue(data.url) ?? page.canonicalUrl,
      thumbnailUrl: stringValue(data.thumbnailUrl) ?? pageImage?.src ?? site.product.logo?.src ?? `${canonicalRoot}/favicon.svg`,
      uploadDate: stringValue(data.uploadDate) ?? stringValue(data.datePublished) ?? stringValue(data.dateModified) ?? "2026-05-06",
      duration: stringValue(data.duration),
      embedUrl: stringValue(data.embedUrl),
      contentUrl: stringValue(data.contentUrl),
      clip: recordArrayValue(data.clip)?.map((entry) => clipInputFromRecord(entry)),
      publication: recordArrayValue(data.publication)?.map((entry) => broadcastEventInputFromRecord(entry))
        ?? (data.publication && typeof data.publication === "object" && !Array.isArray(data.publication)
          ? broadcastEventInputFromRecord(data.publication as Record<string, unknown>)
          : undefined),
    }));
  }
  if (shouldEmit(page, "Clip")) {
    nodes.push(clipNode(clipInputFromRecord({ name: page.h1, ...schemaData(page, "Clip") })));
  }
  if (shouldEmit(page, "BroadcastEvent")) {
    nodes.push(broadcastEventNode(broadcastEventInputFromRecord(schemaData(page, "BroadcastEvent"))));
  }
  if (shouldEmit(page, "ItemList")) {
    const data = schemaData(page, "ItemList");
    const items = Array.isArray(data.items)
      ? data.items as Array<{ name: string; url?: string }>
      : page.sections.map((section) => ({ name: section.title ?? section.id, url: `${page.canonicalUrl}#${section.id}` }));
    nodes.push(itemListNode({ id: stringValue(data.id) ?? stableId(page.canonicalUrl, "item-list"), name: stringValue(data.name) ?? page.h1, items }));
  }
  if (shouldEmit(page, "HowTo")) {
    const data = schemaData(page, "HowTo");
    nodes.push(howToNode({
      id: stringValue(data.id) ?? stableId(page.canonicalUrl, "how-to"),
      name: stringValue(data.name) ?? page.h1,
      description: stringValue(data.description) ?? page.description,
      url: stringValue(data.url) ?? page.canonicalUrl,
      image: jsonLdValue(data.image) ?? pageImage,
      steps: Array.isArray(data.steps)
        ? data.steps as Array<{ name: string; text: string; url?: string }>
        : [{ name: page.h1, text: page.intro, url: page.canonicalUrl }],
      totalTime: stringValue(data.totalTime),
    }));
  }
  if (shouldEmit(page, "LearningResource")) {
    const data = schemaData(page, "LearningResource");
    nodes.push(learningResourceNode({
      id: stringValue(data.id) ?? stableId(page.canonicalUrl, "learning-resource"),
      name: stringValue(data.name) ?? page.h1,
      description: stringValue(data.description) ?? page.description,
      url: stringValue(data.url) ?? page.canonicalUrl,
      learningResourceType: stringValue(data.learningResourceType),
      educationalLevel: stringValue(data.educationalLevel),
      teaches: stringArrayValue(data.teaches) ?? stringValue(data.teaches),
    }));
  }
  if (shouldEmit(page, "SolveMathAction")) {
    const data = schemaData(page, "SolveMathAction");
    nodes.push(solveMathActionNode({
      id: stringValue(data.id) ?? stableId(page.canonicalUrl, "solve-math-action"),
      target: jsonLdValue(data.target) ?? stringValue(data.target) ?? page.canonicalUrl,
      mathExpressionInput: stringValue(data.mathExpressionInput),
      eduQuestionType: stringArrayValue(data.eduQuestionType) ?? stringValue(data.eduQuestionType),
    }));
  }
  if (shouldEmit(page, "MathSolver")) {
    const data = schemaData(page, "MathSolver");
    const solveMathAction = schemaData(page, "SolveMathAction");
    const learningResource = schemaData(page, "LearningResource");
    nodes.push(mathSolverNode({
      id: stringValue(data.id) ?? stableId(page.canonicalUrl, "math-solver"),
      name: stringValue(data.name) ?? page.h1,
      description: stringValue(data.description) ?? page.description,
      url: stringValue(data.url) ?? page.canonicalUrl,
      mathExpression: stringValue(data.mathExpression),
      potentialAction:
        shouldEmit(page, "SolveMathAction")
          ? solveMathActionNode({
              id: stringValue(solveMathAction.id) ?? stableId(page.canonicalUrl, "solve-math-action"),
              target: jsonLdValue(solveMathAction.target) ?? stringValue(solveMathAction.target) ?? page.canonicalUrl,
              mathExpressionInput: stringValue(solveMathAction.mathExpressionInput),
              eduQuestionType: stringArrayValue(solveMathAction.eduQuestionType) ?? stringValue(solveMathAction.eduQuestionType),
            })
          : undefined,
      learningResource:
        shouldEmit(page, "LearningResource")
          ? learningResourceNode({
              id: stringValue(learningResource.id) ?? stableId(page.canonicalUrl, "learning-resource"),
              name: stringValue(learningResource.name) ?? page.h1,
              description: stringValue(learningResource.description) ?? page.description,
              url: stringValue(learningResource.url) ?? page.canonicalUrl,
              learningResourceType: stringValue(learningResource.learningResourceType),
              educationalLevel: stringValue(learningResource.educationalLevel),
              teaches: stringArrayValue(learningResource.teaches) ?? stringValue(learningResource.teaches),
            })
          : undefined,
    }));
  }

  return jsonLdGraph(nodes, stableId(page.canonicalUrl, "jsonld"));
}
