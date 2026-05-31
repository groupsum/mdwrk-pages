import { getStructuredDataSchemaByType, validateStructuredDataByType } from "./structured-data-schemas.js";
import { GENERATED_SCHEMAORG_PAGE_FAMILY_KIND_NAMES } from "./generated-schemaorg-page-family-metadata.js";

export type PageKind =
  | "home"
  | "feature"
  | "use_case"
  | "answer"
  | "compare"
  | "package"
  | "proof"
  | "pricing"
  | "docs_bridge"
  | "trust";

export type SectionKind =
  | "hero"
  | "feature_grid"
  | "feature_detail"
  | "comparison"
  | "proof_matrix"
  | "package_grid"
  | "pricing"
  | "support_channels"
  | "policy_summary"
  | "cta"
  | "faq"
  | "markdown"
  | "quiz_flashcards"
  | "assessment";

export interface AssetRef {
  [key: string]: unknown;
  src: string;
  alt?: string;
  width?: number;
  height?: number;
}

export interface Cta {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "tertiary";
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface NavSpec {
  primary: NavItem[];
  secondary?: NavItem[];
  cta?: Cta;
}

export interface FooterSpec {
  links?: NavItem[];
  legal?: NavItem[];
  note?: string;
}

export interface ThemeSpec {
  id: string;
  label: string;
  mode?: "light" | "dark" | "system";
  tokens?: Record<string, string>;
}

export interface SiteSeoSpec {
  titleTemplate?: string;
  defaultTitle?: string;
  defaultDescription?: string;
  defaultImage?: AssetRef;
}

export interface AiDiscoverySpec {
  summary?: string;
  llmsTxtTitle?: string;
  coreFacts?: string[];
}

export interface ProductIdentity {
  name: string;
  slug: string;
  tagline: string;
  description: string;
  category: string;
  canonicalUrl: string;
  logo?: AssetRef;
  sameAs?: string[];
}

export interface PageSeoSpec {
  title?: string;
  description?: string;
  canonical?: string;
  noindex?: boolean;
  keywords?: string[];
  image?: AssetRef;
}

export type StructuredDataIntentKind = typeof GENERATED_SCHEMAORG_PAGE_FAMILY_KIND_NAMES[number];

export type ComponentIntentKind =
  | SectionKind
  | "breadcrumbs"
  | "page_shell"
  | "structured_data_graph"
  | "structured_data_node";

export interface ComponentIntentSpec {
  id: string;
  kind: ComponentIntentKind;
  sourceId?: string;
  data?: Record<string, unknown>;
}

export interface StructuredDataIntentSpec {
  id?: string;
  kind: StructuredDataIntentKind;
  data?: unknown;
}

export interface SchemaSpec {
  id?: string;
  kind: StructuredDataIntentKind;
  data?: unknown;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface PricingPlanSpec {
  id: string;
  name: string;
  summary?: string;
  price: string;
  interval?: string;
  badge?: string;
  featured?: boolean;
  cta?: Cta;
  featureBullets?: string[];
}

export interface PricingFeatureRowSpec {
  id: string;
  label: string;
  values: Record<string, string>;
}

export interface SupportChannelSpec {
  title: string;
  description: string;
  href?: string;
  label?: string;
}

export interface PolicySummaryItemSpec {
  title: string;
  summary: string;
  href?: string;
  label?: string;
}

export interface AssessmentQuestionSpec {
  prompt: string;
  options: string[];
  correctAnswerIndex: number;
  explanation?: string;
}

export interface FeatureCard {
  title: string;
  description: string;
  href?: string;
  icon?: string;
}

export interface ComparisonCell {
  label: string;
  value: string;
  tone?: "positive" | "neutral" | "warning";
}

export interface ComparisonColumn {
  id: string;
  label: string;
}

export interface ComparisonRow {
  id: string;
  label: string;
  cells: Record<string, ComparisonCell | string>;
}

export interface ProofItem {
  claim: string;
  status: "planned" | "supported" | "verified" | "not_applicable";
  evidence?: string;
  href?: string;
}

export interface PackageCardSpec {
  name: string;
  description: string;
  install?: string;
  href?: string;
  api?: string[];
}

export interface BaseSection {
  id: string;
  kind: SectionKind;
  title?: string;
}

export interface HeroSection extends BaseSection {
  kind: "hero";
  eyebrow?: string;
  title: string;
  subtitle: string;
  image?: AssetRef;
  primaryCta?: Cta;
  secondaryCta?: Cta;
}

export interface FeatureGridSection extends BaseSection {
  kind: "feature_grid";
  title: string;
  items: FeatureCard[];
}

export interface FeatureDetailSection extends BaseSection {
  kind: "feature_detail";
  title: string;
  body: string;
  items?: FeatureCard[];
}

export interface ComparisonSection extends BaseSection {
  kind: "comparison";
  title: string;
  columns: ComparisonColumn[];
  rows: ComparisonRow[];
}

export interface ProofMatrixSection extends BaseSection {
  kind: "proof_matrix";
  title: string;
  items: ProofItem[];
}

export interface PackageGridSection extends BaseSection {
  kind: "package_grid";
  title: string;
  packages: PackageCardSpec[];
}

export interface PricingSection extends BaseSection {
  kind: "pricing";
  title: string;
  body?: string;
  plans?: PricingPlanSpec[];
  comparisonRows?: PricingFeatureRowSpec[];
  footerNote?: string;
}

export interface SupportChannelsSection extends BaseSection {
  kind: "support_channels";
  title: string;
  intro?: string;
  channels: SupportChannelSpec[];
}

export interface PolicySummarySection extends BaseSection {
  kind: "policy_summary";
  title: string;
  intro?: string;
  policies: PolicySummaryItemSpec[];
}

export interface CtaSection extends BaseSection {
  kind: "cta";
  title: string;
  body?: string;
  primaryCta?: Cta;
  secondaryCta?: Cta;
}

export interface FaqSection extends BaseSection {
  kind: "faq";
  title?: string;
  items: FaqItem[];
}

export interface MarkdownSection extends BaseSection {
  kind: "markdown";
  body: string;
}

export interface QuizFlashcardsSection extends BaseSection {
  kind: "quiz_flashcards";
  title: string;
  intro?: string;
  cards: Array<{
    question: string;
    answer: string;
    explanation?: string;
  }>;
}

export interface AssessmentSection extends BaseSection {
  kind: "assessment";
  title: string;
  intro?: string;
  questions: AssessmentQuestionSpec[];
  completionLabel?: string;
  scoreLabel?: string;
}

export type SectionSpec =
  | HeroSection
  | FeatureGridSection
  | FeatureDetailSection
  | ComparisonSection
  | ProofMatrixSection
  | PackageGridSection
  | PricingSection
  | SupportChannelsSection
  | PolicySummarySection
  | CtaSection
  | FaqSection
  | MarkdownSection
  | QuizFlashcardsSection
  | AssessmentSection;

export interface PageSpec {
  kind: PageKind;
  slug: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  sections: SectionSpec[];
  faq?: FaqItem[];
  seo?: PageSeoSpec;
  schema?: SchemaSpec[];
  componentIntents?: ComponentIntentSpec[];
}

export interface LanderSite {
  product: ProductIdentity;
  pages: PageSpec[];
  nav?: NavSpec;
  footer?: FooterSpec;
  theme?: ThemeSpec;
  seo?: SiteSeoSpec;
  ai?: AiDiscoverySpec;
}

export const STRUCTURED_DATA_INTENT_KINDS = Object.freeze(
  [...GENERATED_SCHEMAORG_PAGE_FAMILY_KIND_NAMES] as StructuredDataIntentKind[],
);

export const COMPONENT_INTENT_KINDS = Object.freeze([
  "hero",
  "feature_grid",
  "feature_detail",
  "comparison",
  "proof_matrix",
  "package_grid",
  "pricing",
  "support_channels",
  "policy_summary",
  "cta",
  "faq",
  "markdown",
  "quiz_flashcards",
  "assessment",
  "breadcrumbs",
  "page_shell",
  "structured_data_graph",
  "structured_data_node",
] as const satisfies readonly ComponentIntentKind[]);

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null && !Array.isArray(value);

export function isStructuredDataIntentKind(value: unknown): value is StructuredDataIntentKind {
  return typeof value === "string" && STRUCTURED_DATA_INTENT_KINDS.includes(value as StructuredDataIntentKind);
}

export function isComponentIntentKind(value: unknown): value is ComponentIntentKind {
  return typeof value === "string" && COMPONENT_INTENT_KINDS.includes(value as ComponentIntentKind);
}

export function validateStructuredDataIntent(intent: StructuredDataIntentSpec): string[] {
  const failures: string[] = [];
  if (intent.id !== undefined && !String(intent.id).trim()) failures.push("structured-data intent id must be non-empty when provided");
  if (!isStructuredDataIntentKind(intent.kind)) failures.push(`unsupported structured-data intent kind: ${String(intent.kind)}`);
  return failures;
}

export function validateStructuredDataIntentStrict(intent: StructuredDataIntentSpec): string[] {
  const failures = validateStructuredDataIntent(intent);
  if (failures.length) return failures;
  if (intent.data === undefined) return failures;
  const schema = getStructuredDataSchemaByType(intent.kind);
  if (!schema) return failures;
  return [
    ...failures,
    ...validateStructuredDataByType(intent.kind, intent.data).map((issue) => `${issue.path}: ${issue.message}`),
  ];
}

export function validateComponentIntent(intent: ComponentIntentSpec): string[] {
  const failures: string[] = [];
  if (!String(intent.id ?? "").trim()) failures.push("component intent id is required");
  if (!isComponentIntentKind(intent.kind)) failures.push(`unsupported component intent kind: ${String(intent.kind)}`);
  if (intent.data !== undefined && !isRecord(intent.data)) failures.push("component intent data must be an object when provided");
  return failures;
}
