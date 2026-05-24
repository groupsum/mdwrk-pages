import React from "react";
import type { CompiledLanderSite, CompiledPage, CompiledStructuredDataIntent } from "@mdwrk/lander-core";
import {
  aggregateRatingNode,
  answerNode,
  articleNode,
  blogPostingNode,
  bookNode,
  broadcastEventNode,
  breadcrumbListSchema,
  claimReviewNode,
  clipNode,
  courseInstanceNode,
  courseNode,
  datasetNode,
  discussionForumPostingNode,
  employerAggregateRatingNode,
  estimatedSalaryNode,
  eventNode,
  faqPageSchema,
  howToNode,
  imageObjectSchema,
  itemListNode,
  jobPostingNode,
  jsonLdGraph,
  learningResourceNode,
  localBusinessNode,
  loyaltyProgramNode,
  mathSolverNode,
  merchantReturnPolicyNode,
  movieNode,
  newsArticleNode,
  offerShippingDetailsNode,
  organizationNode,
  productNode,
  productGroupNode,
  profilePageNode,
  qaPageSchema,
  questionNode,
  quizNode,
  readActionNode,
  recipeNode,
  reviewNode,
  solveMathActionNode,
  speakableSpecificationNode,
  softwareApplicationNode,
  softwareSourceCodeNode,
  stableId,
  techArticleNode,
  vacationRentalNode,
  vehicleListingNode,
  videoObjectNode,
  webApplicationNode,
  webPageSchema,
  webSiteSchema,
  type JsonLd,
  type AggregateRatingInput,
  type AnswerInput,
  type ArticleInput,
  type BookInput,
  type BroadcastEventInput,
  type BreadcrumbListInput,
  type ClaimReviewInput,
  type ClipInput,
  type CourseInput,
  type CourseInstanceInput,
  type DatasetInput,
  type DiscussionForumPostingInput,
  type EventInput,
  type FaqPageInput,
  type HowToInput,
  type ImageObjectInput,
  type ItemListInput,
  type JobPostingInput,
  type LearningResourceInput,
  type LocalBusinessInput,
  type LoyaltyProgramInput,
  type MathSolverInput,
  type MovieInput,
  type OrganizationInput,
  type PolicyInput,
  type ProductInput,
  type ProductGroupInput,
  type ProfilePageInput,
  type QaPageInput,
  type QuestionInput,
  type QuizInput,
  type RecipeInput,
  type ReviewInput,
  type SolveMathActionInput,
  type SoftwareApplicationInput,
  type SoftwareSourceCodeInput,
  type SpeakableInput,
  type VacationRentalInput,
  type VehicleInput,
  type VideoObjectInput,
  type WebPageInput,
  type WebSiteInput,
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

export function WebSiteStructuredData({ data }: { data: WebSiteInput }) {
  return <StructuredDataNode data={data} build={webSiteSchema} />;
}

export function OrganizationStructuredData({ data }: { data: OrganizationInput }) {
  return <StructuredDataNode data={data} build={organizationNode} />;
}

export function SoftwareApplicationStructuredData({ data }: { data: SoftwareApplicationInput }) {
  return <StructuredDataNode data={data} build={softwareApplicationNode} />;
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

export function QuestionStructuredData({ data }: { data: QuestionInput }) {
  return <StructuredDataNode data={data} build={questionNode} />;
}

export function AnswerStructuredData({ data }: { data: AnswerInput }) {
  return <StructuredDataNode data={data} build={answerNode} />;
}

export function HowToStructuredData({ data }: { data: HowToInput }) {
  return <StructuredDataNode data={data} build={howToNode} />;
}

export function ItemListStructuredData({ data }: { data: ItemListInput }) {
  return <StructuredDataNode data={data} build={itemListNode} />;
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

export function OfferShippingDetailsStructuredData({ data }: { data: PolicyInput }) {
  return <StructuredDataNode data={data} build={offerShippingDetailsNode} />;
}

export function MovieStructuredData({ data }: { data: MovieInput }) {
  return <StructuredDataNode data={data} build={movieNode} />;
}

export function ProductGroupStructuredData({ data }: { data: ProductGroupInput }) {
  return <StructuredDataNode data={data} build={productGroupNode} />;
}

export function RecipeStructuredData({ data }: { data: RecipeInput }) {
  return <StructuredDataNode data={data} build={recipeNode} />;
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
  AggregateRating: { componentName: "AggregateRatingStructuredData", render: (intent) => renderDataIntent(AggregateRatingStructuredData, intent) },
  Answer: { componentName: "AnswerStructuredData", render: (intent) => renderDataIntent(AnswerStructuredData, intent) },
  Article: { componentName: "ArticleStructuredData", render: (intent) => renderDataIntent(ArticleStructuredData, intent) },
  BlogPosting: { componentName: "BlogPostingStructuredData", render: (intent) => renderDataIntent(BlogPostingStructuredData, intent) },
  Book: { componentName: "BookStructuredData", render: (intent) => renderDataIntent(BookStructuredData, intent) },
  BroadcastEvent: { componentName: "BroadcastEventStructuredData", render: (intent) => renderDataIntent(BroadcastEventStructuredData, intent) },
  BreadcrumbList: { componentName: "BreadcrumbListStructuredData", render: (intent) => renderDataIntent(BreadcrumbListStructuredData, intent) },
  ClaimReview: { componentName: "ClaimReviewStructuredData", render: (intent) => renderDataIntent(ClaimReviewStructuredData, intent) },
  Clip: { componentName: "ClipStructuredData", render: (intent) => renderDataIntent(ClipStructuredData, intent) },
  Course: { componentName: "CourseStructuredData", render: (intent) => renderDataIntent(CourseStructuredData, intent) },
  CourseInstance: { componentName: "CourseInstanceStructuredData", render: (intent) => renderDataIntent(CourseInstanceStructuredData, intent) },
  Dataset: { componentName: "DatasetStructuredData", render: (intent) => renderDataIntent(DatasetStructuredData, intent) },
  DiscussionForumPosting: { componentName: "DiscussionForumPostingStructuredData", render: (intent) => renderDataIntent(DiscussionForumPostingStructuredData, intent) },
  EmployerAggregateRating: { componentName: "EmployerAggregateRatingStructuredData", render: (intent) => renderDataIntent(EmployerAggregateRatingStructuredData, intent) },
  Event: { componentName: "EventStructuredData", render: (intent) => renderDataIntent(EventStructuredData, intent) },
  FAQPage: { componentName: "FAQPageStructuredData", render: (intent) => renderDataIntent(FAQPageStructuredData, intent) },
  HowTo: { componentName: "HowToStructuredData", render: (intent) => renderDataIntent(HowToStructuredData, intent) },
  ImageObject: { componentName: "ImageObjectStructuredData", render: (intent) => renderDataIntent(ImageObjectStructuredData, intent) },
  ItemList: { componentName: "ItemListStructuredData", render: (intent) => renderDataIntent(ItemListStructuredData, intent) },
  JobPosting: { componentName: "JobPostingStructuredData", render: (intent) => renderDataIntent(JobPostingStructuredData, intent) },
  LearningResource: { componentName: "LearningResourceStructuredData", render: (intent) => renderDataIntent(LearningResourceStructuredData, intent) },
  LocalBusiness: { componentName: "LocalBusinessStructuredData", render: (intent) => renderDataIntent(LocalBusinessStructuredData, intent) },
  MathSolver: { componentName: "MathSolverStructuredData", render: (intent) => renderDataIntent(MathSolverStructuredData, intent) },
  MemberProgram: { componentName: "MemberProgramStructuredData", render: (intent) => renderDataIntent(MemberProgramStructuredData, intent) },
  MerchantReturnPolicy: { componentName: "MerchantReturnPolicyStructuredData", render: (intent) => renderDataIntent(MerchantReturnPolicyStructuredData, intent) },
  MonetaryAmountDistribution: { componentName: "MonetaryAmountDistributionStructuredData", render: (intent) => renderDataIntent(MonetaryAmountDistributionStructuredData, intent) },
  Movie: { componentName: "MovieStructuredData", render: (intent) => renderDataIntent(MovieStructuredData, intent) },
  NewsArticle: { componentName: "NewsArticleStructuredData", render: (intent) => renderDataIntent(NewsArticleStructuredData, intent) },
  OfferShippingDetails: { componentName: "OfferShippingDetailsStructuredData", render: (intent) => renderDataIntent(OfferShippingDetailsStructuredData, intent) },
  Organization: { componentName: "OrganizationStructuredData", render: (intent) => renderDataIntent(OrganizationStructuredData, intent) },
  Product: { componentName: "ProductStructuredData", render: (intent) => renderDataIntent(ProductStructuredData, intent) },
  ProductGroup: { componentName: "ProductGroupStructuredData", render: (intent) => renderDataIntent(ProductGroupStructuredData, intent) },
  ProfilePage: { componentName: "ProfilePageStructuredData", render: (intent) => renderDataIntent(ProfilePageStructuredData, intent) },
  QAPage: { componentName: "QAPageStructuredData", render: (intent) => renderDataIntent(QAPageStructuredData, intent) },
  Question: { componentName: "QuestionStructuredData", render: (intent) => renderDataIntent(QuestionStructuredData, intent) },
  Quiz: { componentName: "QuizStructuredData", render: (intent) => renderDataIntent(QuizStructuredData, intent) },
  ReadAction: {
    componentName: "ReadActionStructuredData",
    render: (intent) => <ReadActionStructuredData target={jsonLdValue(dataRecord(intent.data).target) ?? dataRecord(intent.data)} />,
  },
  Recipe: { componentName: "RecipeStructuredData", render: (intent) => renderDataIntent(RecipeStructuredData, intent) },
  Review: { componentName: "ReviewStructuredData", render: (intent) => renderDataIntent(ReviewStructuredData, intent) },
  SolveMathAction: { componentName: "SolveMathActionStructuredData", render: (intent) => renderDataIntent(SolveMathActionStructuredData, intent) },
  SoftwareApplication: { componentName: "SoftwareApplicationStructuredData", render: (intent) => renderDataIntent(SoftwareApplicationStructuredData, intent) },
  SoftwareSourceCode: { componentName: "SoftwareSourceCodeStructuredData", render: (intent) => renderDataIntent(SoftwareSourceCodeStructuredData, intent) },
  SpeakableSpecification: { componentName: "SpeakableSpecificationStructuredData", render: (intent) => renderDataIntent(SpeakableSpecificationStructuredData, intent) },
  TechArticle: { componentName: "TechArticleStructuredData", render: (intent) => renderDataIntent(TechArticleStructuredData, intent) },
  VacationRental: { componentName: "VacationRentalStructuredData", render: (intent) => renderDataIntent(VacationRentalStructuredData, intent) },
  Vehicle: { componentName: "VehicleStructuredData", render: (intent) => renderDataIntent(VehicleStructuredData, intent) },
  VideoObject: { componentName: "VideoObjectStructuredData", render: (intent) => renderDataIntent(VideoObjectStructuredData, intent) },
  WebApplication: { componentName: "WebApplicationStructuredData", render: (intent) => renderDataIntent(WebApplicationStructuredData, intent) },
  WebPage: { componentName: "WebPageStructuredData", render: (intent) => renderDataIntent(WebPageStructuredData, intent) },
  WebSite: { componentName: "WebSiteStructuredData", render: (intent) => renderDataIntent(WebSiteStructuredData, intent) },
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
