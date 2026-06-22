import React, { useMemo, useState } from "react";
import type {
  AssessmentSection,
  ComparisonSection,
  Cta,
  CtaSection,
  FaqItem,
  FeatureGridSection,
  HeroSection,
  MarkdownSection,
  PackageGridSection,
  PolicySummarySection,
  ProofMatrixSection,
  PricingSection,
  QuizFlashcardsSection,
  SectionSpec,
  SupportChannelsSection,
} from "@mdwrk/lander-content-contract";
import type { CompiledLanderSite, CompiledPage } from "@mdwrk/lander-core";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { LANDER_REACT_VERSION } from "./version.js";

export { LANDER_REACT_VERSION };
export const LANDER_REACT_STRUCTURED_DATA_REEXPORTS_DEPRECATED = true;
export * from "./semantic/index.js";

const warnedStructuredDataCompatExports = new Set<string>();

function warnDeprecatedStructuredDataReexport(name: string) {
  if (warnedStructuredDataCompatExports.has(name)) return;
  warnedStructuredDataCompatExports.add(name);
  if (typeof console === "undefined" || typeof console.warn !== "function") return;
  console.warn(
    `[mdwrk] ${name} is deprecated from @mdwrk/lander-react; import it from @mdwrk/lander-react-structured-data instead.`,
  );
}

function deprecatedStructuredDataComponent<TProps>(
  name: string,
  Component: React.ComponentType<TProps>,
): React.FC<TProps> {
  const DeprecatedStructuredDataComponent = (props: TProps) => {
    warnDeprecatedStructuredDataReexport(name);
    return <Component {...props} />;
  };
  DeprecatedStructuredDataComponent.displayName = `Deprecated${name}`;
  return DeprecatedStructuredDataComponent;
}

function deprecatedStructuredDataFunction<TArgs extends unknown[], TResult>(
  name: string,
  fn: (...args: TArgs) => TResult,
): (...args: TArgs) => TResult {
  return (...args: TArgs) => {
    warnDeprecatedStructuredDataReexport(name);
    return fn(...args);
  };
}

export const JsonLd = deprecatedStructuredDataComponent("JsonLd", structuredDataReact.JsonLd);
export const ActionStructuredData = deprecatedStructuredDataComponent(
  "ActionStructuredData",
  structuredDataReact.ActionStructuredData,
);
export const AdministrativeAreaStructuredData = deprecatedStructuredDataComponent(
  "AdministrativeAreaStructuredData",
  structuredDataReact.AdministrativeAreaStructuredData,
);
export const AboutPageStructuredData = deprecatedStructuredDataComponent(
  "AboutPageStructuredData",
  structuredDataReact.AboutPageStructuredData,
);
export const AggregateOfferStructuredData = deprecatedStructuredDataComponent(
  "AggregateOfferStructuredData",
  structuredDataReact.AggregateOfferStructuredData,
);
export const WebPageStructuredData = deprecatedStructuredDataComponent(
  "WebPageStructuredData",
  structuredDataReact.WebPageStructuredData,
);
export const CheckoutPageStructuredData = deprecatedStructuredDataComponent(
  "CheckoutPageStructuredData",
  structuredDataReact.CheckoutPageStructuredData,
);
export const CollectionPageStructuredData = deprecatedStructuredDataComponent(
  "CollectionPageStructuredData",
  structuredDataReact.CollectionPageStructuredData,
);
export const ContactPageStructuredData = deprecatedStructuredDataComponent(
  "ContactPageStructuredData",
  structuredDataReact.ContactPageStructuredData,
);
export const WebSiteStructuredData = deprecatedStructuredDataComponent(
  "WebSiteStructuredData",
  structuredDataReact.WebSiteStructuredData,
);
export const OrganizationStructuredData = deprecatedStructuredDataComponent(
  "OrganizationStructuredData",
  structuredDataReact.OrganizationStructuredData,
);
export const SoftwareApplicationStructuredData = deprecatedStructuredDataComponent(
  "SoftwareApplicationStructuredData",
  structuredDataReact.SoftwareApplicationStructuredData,
);
export const WebApplicationStructuredData = deprecatedStructuredDataComponent(
  "WebApplicationStructuredData",
  structuredDataReact.WebApplicationStructuredData,
);
export const ArticleStructuredData = deprecatedStructuredDataComponent(
  "ArticleStructuredData",
  structuredDataReact.ArticleStructuredData,
);
export const TechArticleStructuredData = deprecatedStructuredDataComponent(
  "TechArticleStructuredData",
  structuredDataReact.TechArticleStructuredData,
);
export const BlogPostingStructuredData = deprecatedStructuredDataComponent(
  "BlogPostingStructuredData",
  structuredDataReact.BlogPostingStructuredData,
);
export const BreadcrumbListStructuredData = deprecatedStructuredDataComponent(
  "BreadcrumbListStructuredData",
  structuredDataReact.BreadcrumbListStructuredData,
);
export const FAQPageStructuredData = deprecatedStructuredDataComponent(
  "FAQPageStructuredData",
  structuredDataReact.FAQPageStructuredData,
);
export const QAPageStructuredData = deprecatedStructuredDataComponent(
  "QAPageStructuredData",
  structuredDataReact.QAPageStructuredData,
);
export const HowToStructuredData = deprecatedStructuredDataComponent(
  "HowToStructuredData",
  structuredDataReact.HowToStructuredData,
);
export const ItemListStructuredData = deprecatedStructuredDataComponent(
  "ItemListStructuredData",
  structuredDataReact.ItemListStructuredData,
);
export const ItemPageStructuredData = deprecatedStructuredDataComponent(
  "ItemPageStructuredData",
  structuredDataReact.ItemPageStructuredData,
);
export const SoftwareSourceCodeStructuredData = deprecatedStructuredDataComponent(
  "SoftwareSourceCodeStructuredData",
  structuredDataReact.SoftwareSourceCodeStructuredData,
);
export const ProductStructuredData = deprecatedStructuredDataComponent(
  "ProductStructuredData",
  structuredDataReact.ProductStructuredData,
);
export const DatasetStructuredData = deprecatedStructuredDataComponent(
  "DatasetStructuredData",
  structuredDataReact.DatasetStructuredData,
);
export const EventStructuredData = deprecatedStructuredDataComponent(
  "EventStructuredData",
  structuredDataReact.EventStructuredData,
);
export const VideoObjectStructuredData = deprecatedStructuredDataComponent(
  "VideoObjectStructuredData",
  structuredDataReact.VideoObjectStructuredData,
);
export const ImageObjectStructuredData = deprecatedStructuredDataComponent(
  "ImageObjectStructuredData",
  structuredDataReact.ImageObjectStructuredData,
);
export const IntegerStructuredData = deprecatedStructuredDataComponent(
  "IntegerStructuredData",
  structuredDataReact.IntegerStructuredData,
);
export const ProfilePageStructuredData = deprecatedStructuredDataComponent(
  "ProfilePageStructuredData",
  structuredDataReact.ProfilePageStructuredData,
);
export const ReviewStructuredData = deprecatedStructuredDataComponent(
  "ReviewStructuredData",
  structuredDataReact.ReviewStructuredData,
);
export const AggregateRatingStructuredData = deprecatedStructuredDataComponent(
  "AggregateRatingStructuredData",
  structuredDataReact.AggregateRatingStructuredData,
);
export const AlignmentObjectStructuredData = deprecatedStructuredDataComponent(
  "AlignmentObjectStructuredData",
  structuredDataReact.AlignmentObjectStructuredData,
);
export const AudienceStructuredData = deprecatedStructuredDataComponent(
  "AudienceStructuredData",
  structuredDataReact.AudienceStructuredData,
);
export const AudioObjectStructuredData = deprecatedStructuredDataComponent(
  "AudioObjectStructuredData",
  structuredDataReact.AudioObjectStructuredData,
);
export const BrandStructuredData = deprecatedStructuredDataComponent(
  "BrandStructuredData",
  structuredDataReact.BrandStructuredData,
);
export const CategoryCodeStructuredData = deprecatedStructuredDataComponent(
  "CategoryCodeStructuredData",
  structuredDataReact.CategoryCodeStructuredData,
);
export const CategoryCodeSetStructuredData = deprecatedStructuredDataComponent(
  "CategoryCodeSetStructuredData",
  structuredDataReact.CategoryCodeSetStructuredData,
);
export const ClassStructuredData = deprecatedStructuredDataComponent(
  "ClassStructuredData",
  structuredDataReact.ClassStructuredData,
);
export const CertificationStructuredData = deprecatedStructuredDataComponent(
  "CertificationStructuredData",
  structuredDataReact.CertificationStructuredData,
);
export const ClaimStructuredData = deprecatedStructuredDataComponent(
  "ClaimStructuredData",
  structuredDataReact.ClaimStructuredData,
);
export const CommentStructuredData = deprecatedStructuredDataComponent(
  "CommentStructuredData",
  structuredDataReact.CommentStructuredData,
);
export const ContactPointStructuredData = deprecatedStructuredDataComponent(
  "ContactPointStructuredData",
  structuredDataReact.ContactPointStructuredData,
);
export const CourseStructuredData = deprecatedStructuredDataComponent(
  "CourseStructuredData",
  structuredDataReact.CourseStructuredData,
);
export const CourseInstanceStructuredData = deprecatedStructuredDataComponent(
  "CourseInstanceStructuredData",
  structuredDataReact.CourseInstanceStructuredData,
);
export const CorrectionCommentStructuredData = deprecatedStructuredDataComponent(
  "CorrectionCommentStructuredData",
  structuredDataReact.CorrectionCommentStructuredData,
);
export const CountryStructuredData = deprecatedStructuredDataComponent(
  "CountryStructuredData",
  structuredDataReact.CountryStructuredData,
);
export const CreativeWorkStructuredData = deprecatedStructuredDataComponent(
  "CreativeWorkStructuredData",
  structuredDataReact.CreativeWorkStructuredData,
);
export const CreativeWorkSeasonStructuredData = deprecatedStructuredDataComponent(
  "CreativeWorkSeasonStructuredData",
  structuredDataReact.CreativeWorkSeasonStructuredData,
);
export const CreativeWorkSeriesStructuredData = deprecatedStructuredDataComponent(
  "CreativeWorkSeriesStructuredData",
  structuredDataReact.CreativeWorkSeriesStructuredData,
);
export const CredentialStructuredData = deprecatedStructuredDataComponent(
  "CredentialStructuredData",
  structuredDataReact.CredentialStructuredData,
);
export const DataCatalogStructuredData = deprecatedStructuredDataComponent(
  "DataCatalogStructuredData",
  structuredDataReact.DataCatalogStructuredData,
);
export const DataDownloadStructuredData = deprecatedStructuredDataComponent(
  "DataDownloadStructuredData",
  structuredDataReact.DataDownloadStructuredData,
);
export const DataFeedStructuredData = deprecatedStructuredDataComponent(
  "DataFeedStructuredData",
  structuredDataReact.DataFeedStructuredData,
);
export const DataFeedItemStructuredData = deprecatedStructuredDataComponent(
  "DataFeedItemStructuredData",
  structuredDataReact.DataFeedItemStructuredData,
);
export const DiscussionForumPostingStructuredData = deprecatedStructuredDataComponent(
  "DiscussionForumPostingStructuredData",
  structuredDataReact.DiscussionForumPostingStructuredData,
);
export const DefinedRegionStructuredData = deprecatedStructuredDataComponent(
  "DefinedRegionStructuredData",
  structuredDataReact.DefinedRegionStructuredData,
);
export const DefinedTermStructuredData = deprecatedStructuredDataComponent(
  "DefinedTermStructuredData",
  structuredDataReact.DefinedTermStructuredData,
);
export const DefinedTermSetStructuredData = deprecatedStructuredDataComponent(
  "DefinedTermSetStructuredData",
  structuredDataReact.DefinedTermSetStructuredData,
);
export const DeliveryChargeSpecificationStructuredData = deprecatedStructuredDataComponent(
  "DeliveryChargeSpecificationStructuredData",
  structuredDataReact.DeliveryChargeSpecificationStructuredData,
);
export const DemandStructuredData = deprecatedStructuredDataComponent(
  "DemandStructuredData",
  structuredDataReact.DemandStructuredData,
);
export const DurationStructuredData = deprecatedStructuredDataComponent(
  "DurationStructuredData",
  structuredDataReact.DurationStructuredData,
);
export const EnumerationStructuredData = deprecatedStructuredDataComponent(
  "EnumerationStructuredData",
  structuredDataReact.EnumerationStructuredData,
);
export const BookStructuredData = deprecatedStructuredDataComponent(
  "BookStructuredData",
  structuredDataReact.BookStructuredData,
);
export const ReadActionStructuredData = deprecatedStructuredDataComponent(
  "ReadActionStructuredData",
  structuredDataReact.ReadActionStructuredData,
);
export const RealEstateListingStructuredData = deprecatedStructuredDataComponent(
  "RealEstateListingStructuredData",
  structuredDataReact.RealEstateListingStructuredData,
);
export const ClaimReviewStructuredData = deprecatedStructuredDataComponent(
  "ClaimReviewStructuredData",
  structuredDataReact.ClaimReviewStructuredData,
);
export const EmployerAggregateRatingStructuredData = deprecatedStructuredDataComponent(
  "EmployerAggregateRatingStructuredData",
  structuredDataReact.EmployerAggregateRatingStructuredData,
);
export const MonetaryAmountDistributionStructuredData = deprecatedStructuredDataComponent(
  "MonetaryAmountDistributionStructuredData",
  structuredDataReact.MonetaryAmountDistributionStructuredData,
);
export const JobPostingStructuredData = deprecatedStructuredDataComponent(
  "JobPostingStructuredData",
  structuredDataReact.JobPostingStructuredData,
);
export const LanguageStructuredData = deprecatedStructuredDataComponent(
  "LanguageStructuredData",
  structuredDataReact.LanguageStructuredData,
);
export const LocalBusinessStructuredData = deprecatedStructuredDataComponent(
  "LocalBusinessStructuredData",
  structuredDataReact.LocalBusinessStructuredData,
);
export const MemberProgramStructuredData = deprecatedStructuredDataComponent(
  "MemberProgramStructuredData",
  structuredDataReact.MemberProgramStructuredData,
);
export const MathSolverStructuredData = deprecatedStructuredDataComponent(
  "MathSolverStructuredData",
  structuredDataReact.MathSolverStructuredData,
);
export const MerchantReturnPolicyStructuredData = deprecatedStructuredDataComponent(
  "MerchantReturnPolicyStructuredData",
  structuredDataReact.MerchantReturnPolicyStructuredData,
);
export const OfferShippingDetailsStructuredData = deprecatedStructuredDataComponent(
  "OfferShippingDetailsStructuredData",
  structuredDataReact.OfferShippingDetailsStructuredData,
);
export const PropertyStructuredData = deprecatedStructuredDataComponent(
  "PropertyStructuredData",
  structuredDataReact.PropertyStructuredData,
);
export const PropertyValueStructuredData = deprecatedStructuredDataComponent(
  "PropertyValueStructuredData",
  structuredDataReact.PropertyValueStructuredData,
);
export const MovieStructuredData = deprecatedStructuredDataComponent(
  "MovieStructuredData",
  structuredDataReact.MovieStructuredData,
);
export const ProductGroupStructuredData = deprecatedStructuredDataComponent(
  "ProductGroupStructuredData",
  structuredDataReact.ProductGroupStructuredData,
);
export const RecipeStructuredData = deprecatedStructuredDataComponent(
  "RecipeStructuredData",
  structuredDataReact.RecipeStructuredData,
);
export const SearchResultsPageStructuredData = deprecatedStructuredDataComponent(
  "SearchResultsPageStructuredData",
  structuredDataReact.SearchResultsPageStructuredData,
);
export const SpeakableSpecificationStructuredData = deprecatedStructuredDataComponent(
  "SpeakableSpecificationStructuredData",
  structuredDataReact.SpeakableSpecificationStructuredData,
);
export const VacationRentalStructuredData = deprecatedStructuredDataComponent(
  "VacationRentalStructuredData",
  structuredDataReact.VacationRentalStructuredData,
);
export const VehicleStructuredData = deprecatedStructuredDataComponent(
  "VehicleStructuredData",
  structuredDataReact.VehicleStructuredData,
);
export const VideoGalleryStructuredData = deprecatedStructuredDataComponent(
  "VideoGalleryStructuredData",
  structuredDataReact.VideoGalleryStructuredData,
);
export const UrlStructuredData = deprecatedStructuredDataComponent(
  "UrlStructuredData",
  structuredDataReact.UrlStructuredData,
);
export const buildLanderJsonLdGraph = deprecatedStructuredDataFunction(
  "buildLanderJsonLdGraph",
  structuredDataReact.buildLanderJsonLdGraph,
);
export const renderStructuredDataIntent = deprecatedStructuredDataFunction(
  "renderStructuredDataIntent",
  structuredDataReact.renderStructuredDataIntent,
);
export const getStructuredDataIntentRendererEntry = deprecatedStructuredDataFunction(
  "getStructuredDataIntentRendererEntry",
  structuredDataReact.getStructuredDataIntentRendererEntry,
);
export const landerStructuredDataIntentRegistry = new Proxy(structuredDataReact.landerStructuredDataIntentRegistry, {
  get(target, prop, receiver) {
    warnDeprecatedStructuredDataReexport("landerStructuredDataIntentRegistry");
    return Reflect.get(target, prop, receiver);
  },
});
export const SUPPORTED_LANDER_STRUCTURED_DATA_INTENT_KINDS = new Proxy(
  structuredDataReact.SUPPORTED_LANDER_STRUCTURED_DATA_INTENT_KINDS,
  {
    get(target, prop, receiver) {
      warnDeprecatedStructuredDataReexport("SUPPORTED_LANDER_STRUCTURED_DATA_INTENT_KINDS");
      return Reflect.get(target, prop, receiver);
    },
  },
);

export interface VisibleBreadcrumbListItem {
  label: string;
  href?: string;
}

export interface VisibleBreadcrumbListProps {
  items: VisibleBreadcrumbListItem[];
  className?: string;
  label?: string;
  listClassName?: string;
  itemClassName?: string;
  linkClassName?: string;
  currentClassName?: string;
}

export interface VisibleFaqPageProps {
  items: FaqItem[];
  heading?: string;
  headingId?: string;
  className?: string;
  headingClassName?: string;
  listClassName?: string;
  itemClassName?: string;
  questionClassName?: string;
  answerContainerClassName?: string;
  answerClassName?: string;
  collapsible?: boolean;
}

function cx(...classes: Array<string | undefined>) {
  return classes.filter(Boolean).join(" ");
}

type MarkdownBlock =
  | { kind: "heading"; level: 2 | 3; text: string }
  | { kind: "unordered_list"; items: string[] }
  | { kind: "ordered_list"; items: string[] }
  | { kind: "paragraph"; text: string };

function normalizeMarkdownLines(value: string): string[] {
  return String(value ?? "").replace(/\r\n/g, "\n").split("\n");
}

function parseMarkdownBlocks(value: string): MarkdownBlock[] {
  const lines = normalizeMarkdownLines(value);
  const blocks: MarkdownBlock[] = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index].trim();
    if (!line) {
      index += 1;
      continue;
    }

    if (line.startsWith("### ")) {
      blocks.push({ kind: "heading", level: 3, text: line.slice(4).trim() });
      index += 1;
      continue;
    }
    if (line.startsWith("## ")) {
      blocks.push({ kind: "heading", level: 2, text: line.slice(3).trim() });
      index += 1;
      continue;
    }
    if (line.startsWith("- ")) {
      const items: string[] = [];
      while (index < lines.length && lines[index].trim().startsWith("- ")) {
        items.push(lines[index].trim().slice(2).trim());
        index += 1;
      }
      blocks.push({ kind: "unordered_list", items });
      continue;
    }
    if (/^\d+\.\s+/.test(line)) {
      const items: string[] = [];
      while (index < lines.length && /^\d+\.\s+/.test(lines[index].trim())) {
        items.push(lines[index].trim().replace(/^\d+\.\s+/, "").trim());
        index += 1;
      }
      blocks.push({ kind: "ordered_list", items });
      continue;
    }

    const paragraphLines: string[] = [];
    while (index < lines.length) {
      const next = lines[index].trim();
      if (!next) break;
      if (next.startsWith("## ") || next.startsWith("### ") || next.startsWith("- ") || /^\d+\.\s+/.test(next)) break;
      paragraphLines.push(next);
      index += 1;
    }
    blocks.push({ kind: "paragraph", text: paragraphLines.join(" ") });
  }

  return blocks;
}

export function CtaLink({ cta }: { cta: Cta }) {
  return (
    <a className={`lander-page__button lander-page__button--${cta.variant ?? "secondary"}`} href={cta.href}>
      {cta.label}
    </a>
  );
}

export function Hero({ section }: { section: HeroSection }) {
  return (
    <section className="lander-page__hero">
      <div className="lander-page__inner">
        {section.eyebrow ? <p className="lander-page__eyebrow">{section.eyebrow}</p> : null}
        <h1 className="lander-page__title">{section.title}</h1>
        <p className="lander-page__intro">{section.subtitle}</p>
        <div className="lander-page__button-row">
          {section.primaryCta ? <CtaLink cta={{ ...section.primaryCta, variant: "primary" }} /> : null}
          {section.secondaryCta ? <CtaLink cta={section.secondaryCta} /> : null}
        </div>
      </div>
    </section>
  );
}

export function FeatureGrid({ section }: { section: FeatureGridSection }) {
  return (
    <section className="lander-page__section" id={section.id}>
      <h2>{section.title}</h2>
      <div className="lander-page__grid">
        {section.items.map((item) => (
          item.href ? (
            <a className="lander-page__card lander-page__card--interactive" href={item.href} key={item.title}>
              <span className="lander-page__card-link-label">Open</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </a>
          ) : (
            <article className="lander-page__card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          )
        ))}
      </div>
    </section>
  );
}

export function MarkdownSectionView({ section }: { section: MarkdownSection }) {
  const blocks = parseMarkdownBlocks(section.body);
  return (
    <section className="lander-page__section" id={section.id}>
      {section.title ? <h2>{section.title}</h2> : null}
      <div className="lander-page__panel lander-page__rich-text">
        {blocks.map((block, index) => {
          if (block.kind === "heading" && block.level === 2) return <h3 key={index}>{block.text}</h3>;
          if (block.kind === "heading" && block.level === 3) return <h4 key={index}>{block.text}</h4>;
          if (block.kind === "unordered_list") {
            return (
              <ul className="lander-page__list" key={index}>
                {block.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            );
          }
          if (block.kind === "ordered_list") {
            return (
              <ol className="lander-page__list lander-page__list--ordered" key={index}>
                {block.items.map((item) => <li key={item}>{item}</li>)}
              </ol>
            );
          }
          return <p key={index}>{block.text}</p>;
        })}
      </div>
    </section>
  );
}

export function VisibleFaqPage({
  items,
  heading = "Frequently Asked Questions",
  headingId = "faq-heading",
  className = "lander-page__section",
  headingClassName,
  listClassName = "lander-page__grid",
  itemClassName = "lander-page__card",
  questionClassName,
  answerContainerClassName,
  answerClassName,
  collapsible = false,
}: VisibleFaqPageProps) {
  if (!items.length) return null;
  return (
    <section className={className} aria-labelledby={headingId}>
      <h2 id={headingId} className={headingClassName}>{heading}</h2>
      <div className={listClassName}>
        {items.map((item) => collapsible ? (
          <details className={itemClassName} key={item.question}>
            <summary className={questionClassName}>{item.question}</summary>
            <div className={answerContainerClassName}>
              <p className={answerClassName}>{item.answer}</p>
            </div>
          </details>
        ) : (
          <article className={itemClassName} key={item.question}>
            <h3 className={questionClassName}>{item.question}</h3>
            <div className={answerContainerClassName}>
              <p className={answerClassName}>{item.answer}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function FaqBlock({ items }: { items: FaqItem[] }) {
  return <VisibleFaqPage items={items} />;
}

export function ComparisonMatrix({ section }: { section: ComparisonSection }) {
  return (
    <section className="lander-page__section" id={section.id}>
      <h2>{section.title}</h2>
      <table className="lander-page__comparison">
        <thead>
          <tr>
            <th>Criteria</th>
            {section.columns.map((column) => <th key={column.id}>{column.label}</th>)}
          </tr>
        </thead>
        <tbody>
          {section.rows.map((row) => (
            <tr key={row.id}>
              <th>{row.label}</th>
              {section.columns.map((column) => {
                const cell = row.cells[column.id];
                return <td key={column.id}>{typeof cell === "string" ? cell : cell?.value}</td>;
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export function ProofMatrix({ section }: { section: ProofMatrixSection }) {
  return (
    <section className="lander-page__section" id={section.id}>
      <h2>{section.title}</h2>
      <div className="lander-page__grid">
        {section.items.map((item) => (
          <article className="lander-page__card" key={item.claim}>
            <h3>{item.claim}</h3>
            <p>{item.evidence}</p>
            <p className="lander-page__muted">{item.status}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function PackageGrid({ section }: { section: PackageGridSection }) {
  return (
    <section className="lander-page__section" id={section.id}>
      <h2>{section.title}</h2>
      <div className="lander-page__grid">
        {section.packages.map((item) => (
          item.href ? (
            <a className="lander-page__card lander-page__card--interactive" href={item.href} key={item.name}>
              <span className="lander-page__card-link-label">Package</span>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              {item.install ? <code>{item.install}</code> : null}
            </a>
          ) : (
            <article className="lander-page__card" key={item.name}>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              {item.install ? <code>{item.install}</code> : null}
            </article>
          )
        ))}
      </div>
    </section>
  );
}

export function PricingTable({ section }: { section: PricingSection }) {
  return (
    <section className="lander-page__section" id={section.id}>
      <h2>{section.title}</h2>
      {section.body ? <MarkdownSectionView section={{ id: `${section.id}-body`, kind: "markdown", body: section.body }} /> : null}
      {section.plans?.length ? (
        <div className="lander-page__grid">
          {section.plans.map((plan) => (
            <article className={`lander-page__card${plan.featured ? " lander-page__card--interactive" : ""}`} key={plan.id}>
              {plan.badge ? <span className="lander-page__card-link-label">{plan.badge}</span> : null}
              <h3>{plan.name}</h3>
              {plan.summary ? <p>{plan.summary}</p> : null}
              <p className="lander-page__intro">
                {plan.price}
                {plan.interval ? <span className="lander-page__muted">/{plan.interval}</span> : null}
              </p>
              {plan.featureBullets?.length ? (
                <ul className="lander-page__list">
                  {plan.featureBullets.map((item) => <li key={item}>{item}</li>)}
                </ul>
              ) : null}
              {plan.cta ? <div className="lander-page__button-row"><CtaLink cta={{ ...plan.cta, variant: plan.cta.variant ?? "primary" }} /></div> : null}
            </article>
          ))}
        </div>
      ) : null}
      {section.comparisonRows?.length && section.plans?.length ? (
        <table className="lander-page__comparison">
          <thead>
            <tr>
              <th>Feature</th>
              {section.plans.map((plan) => <th key={plan.id}>{plan.name}</th>)}
            </tr>
          </thead>
          <tbody>
            {section.comparisonRows.map((row) => (
              <tr key={row.id}>
                <th>{row.label}</th>
                {section.plans?.map((plan) => <td key={plan.id}>{row.values[plan.id] ?? ""}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      ) : null}
      {section.footerNote ? <p className="lander-page__muted">{section.footerNote}</p> : null}
    </section>
  );
}

export function SupportHub({ section }: { section: SupportChannelsSection }) {
  return (
    <section className="lander-page__section" id={section.id}>
      <h2>{section.title}</h2>
      {section.intro ? <p className="lander-page__section-intro">{section.intro}</p> : null}
      <div className="lander-page__grid">
        {section.channels.map((channel) => (
          channel.href ? (
            <a className="lander-page__card lander-page__card--interactive" href={channel.href} key={channel.title}>
              <span className="lander-page__card-link-label">{channel.label ?? "Contact"}</span>
              <h3>{channel.title}</h3>
              <p>{channel.description}</p>
            </a>
          ) : (
            <article className="lander-page__card" key={channel.title}>
              <h3>{channel.title}</h3>
              <p>{channel.description}</p>
            </article>
          )
        ))}
      </div>
    </section>
  );
}

export function TrustPolicySummary({ section }: { section: PolicySummarySection }) {
  return (
    <section className="lander-page__section" id={section.id}>
      <h2>{section.title}</h2>
      {section.intro ? <p className="lander-page__section-intro">{section.intro}</p> : null}
      <div className="lander-page__grid">
        {section.policies.map((policy) => (
          policy.href ? (
            <a className="lander-page__card lander-page__card--interactive" href={policy.href} key={policy.title}>
              <span className="lander-page__card-link-label">{policy.label ?? "Policy"}</span>
              <h3>{policy.title}</h3>
              <p>{policy.summary}</p>
            </a>
          ) : (
            <article className="lander-page__card" key={policy.title}>
              <h3>{policy.title}</h3>
              <p>{policy.summary}</p>
            </article>
          )
        ))}
      </div>
    </section>
  );
}

export function CtaBand({ section }: { section: CtaSection }) {
  return (
    <section className="lander-page__section" id={section.id}>
      <div className="lander-page__panel">
        <h2>{section.title}</h2>
        {section.body ? <p>{section.body}</p> : null}
        <div className="lander-page__button-row">
          {section.primaryCta ? <CtaLink cta={{ ...section.primaryCta, variant: "primary" }} /> : null}
          {section.secondaryCta ? <CtaLink cta={section.secondaryCta} /> : null}
        </div>
      </div>
    </section>
  );
}

export function QuizFlashcards({ section }: { section: QuizFlashcardsSection }) {
  const [revealed, setRevealed] = useState<Record<number, boolean>>({});

  return (
    <section className="lander-page__section" id={section.id}>
      <h2>{section.title}</h2>
      {section.intro ? <p className="lander-page__section-intro">{section.intro}</p> : null}
      <div className="lander-page__assessment-grid">
        {section.cards.map((card, index) => {
          const isRevealed = Boolean(revealed[index]);
          return (
            <article className="lander-page__card lander-page__flashcard" key={`${card.question}-${index}`}>
              <span className="lander-page__card-link-label">Q{index + 1}</span>
              <h3>{card.question}</h3>
              <div className="lander-page__flashcard-answer">
                {isRevealed ? (
                  <>
                    <p className="lander-page__flashcard-answer-text">{card.answer}</p>
                    {card.explanation ? <p className="lander-page__flashcard-explanation">{card.explanation}</p> : null}
                  </>
                ) : (
                  <p className="lander-page__flashcard-placeholder">Answer hidden. Reveal when ready.</p>
                )}
              </div>
              <button
                type="button"
                className="lander-page__button lander-page__button--secondary"
                onClick={() => setRevealed((current) => ({ ...current, [index]: !isRevealed }))}
              >
                {isRevealed ? "Hide answer" : "Reveal answer"}
              </button>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export function AssessmentForm({ section }: { section: AssessmentSection }) {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const totalQuestions = section.questions.length;
  const answeredCount = Object.keys(answers).length;
  const score = useMemo(
    () => section.questions.reduce((total, question, index) => total + (answers[index] === question.correctAnswerIndex ? 1 : 0), 0),
    [answers, section.questions],
  );

  return (
    <section className="lander-page__section" id={section.id}>
      <h2>{section.title}</h2>
      {section.intro ? <p className="lander-page__section-intro">{section.intro}</p> : null}
      <div className="lander-page__assessment-grid">
        {section.questions.map((question, questionIndex) => (
          <article className="lander-page__card lander-page__assessment-card" key={`${question.prompt}-${questionIndex}`}>
            <span className="lander-page__card-link-label">Q{questionIndex + 1}</span>
            <h3>{question.prompt}</h3>
            <div className="lander-page__assessment-options" role="group" aria-label={`Question ${questionIndex + 1}`}>
              {question.options.map((option, optionIndex) => {
                const checked = answers[questionIndex] === optionIndex;
                return (
                  <label className="lander-page__assessment-option" key={`${option}-${optionIndex}`}>
                    <input
                      type="radio"
                      name={`${section.id}-question-${questionIndex}`}
                      checked={checked}
                      onChange={() => setAnswers((current) => ({ ...current, [questionIndex]: optionIndex }))}
                    />
                    <span>{option}</span>
                  </label>
                );
              })}
            </div>
          </article>
        ))}
      </div>
      <div className="lander-page__panel lander-page__assessment-summary">
        {!submitted ? (
          <>
            <p>{answeredCount} of {totalQuestions} questions answered.</p>
            <button
              type="button"
              className="lander-page__button lander-page__button--primary"
              onClick={() => setSubmitted(true)}
            >
              {section.completionLabel ?? "Submit assessment"}
            </button>
          </>
        ) : (
          <>
            <p className="lander-page__assessment-score">
              {score} / {totalQuestions}
            </p>
            <p>{section.scoreLabel ?? "Score"}</p>
          </>
        )}
      </div>
    </section>
  );
}

export function SectionRenderer({ section }: { section: SectionSpec }) {
  switch (section.kind) {
    case "hero":
      return <Hero section={section} />;
    case "feature_grid":
      return <FeatureGrid section={section} />;
    case "feature_detail":
    case "markdown":
      return <MarkdownSectionView section={{ id: section.id, kind: "markdown", title: section.title, body: section.body }} />;
    case "comparison":
      return <ComparisonMatrix section={section} />;
    case "proof_matrix":
      return <ProofMatrix section={section} />;
    case "package_grid":
      return <PackageGrid section={section} />;
    case "pricing":
      return <PricingTable section={section} />;
    case "support_channels":
      return <SupportHub section={section} />;
    case "policy_summary":
      return <TrustPolicySummary section={section} />;
    case "cta":
      return <CtaBand section={section} />;
    case "faq":
      return <FaqBlock items={section.items} />;
    case "quiz_flashcards":
      return <QuizFlashcards section={section} />;
    case "assessment":
      return <AssessmentForm section={section} />;
    default:
      return assertNever(section);
  }
}

export function VisibleBreadcrumbList({
  items,
  className,
  label = "Breadcrumb",
  listClassName,
  itemClassName,
  linkClassName,
  currentClassName,
}: VisibleBreadcrumbListProps) {
  if (!items.length) return null;
  return (
    <nav aria-label={label} className={cx("lander-breadcrumbs", className)}>
      <div className={cx("lander-breadcrumbs__list", listClassName)}>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <React.Fragment key={`${item.href ?? item.label}-${index}`}>
              {index > 0 ? <span className="lander-breadcrumbs__separator" aria-hidden="true">/</span> : null}
              {item.href && !isLast ? (
                <a href={item.href} className={cx("lander-breadcrumbs__link", linkClassName, itemClassName)}>
                  {item.label}
                </a>
              ) : (
                <span className={cx("lander-breadcrumbs__current", currentClassName, itemClassName)} aria-current={isLast ? "page" : undefined}>
                  {item.label}
                </span>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </nav>
  );
}

export function Breadcrumbs({ page }: { page: CompiledPage }) {
  return <VisibleBreadcrumbList items={page.breadcrumbs} />;
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return <article className="lander-page">{children}</article>;
}

export function VisibleLanderPage({ page }: { page: CompiledPage }) {
  return (
    <PageShell>
      <div className="lander-page__inner">
        <Breadcrumbs page={page} />
        {page.sections[0]?.kind !== "hero" ? (
          <header className="lander-page__section">
            <h1>{page.h1}</h1>
            <p className="lander-page__intro">{page.intro}</p>
          </header>
        ) : null}
      </div>
      {page.sections.map((section) => (
        <React.Fragment key={section.id}>
          <SectionRenderer section={section} />
        </React.Fragment>
      ))}
      {page.faq?.length ? <FaqBlock items={page.faq} /> : null}
    </PageShell>
  );
}

export function LanderPage({ site, page }: { site: CompiledLanderSite; page: CompiledPage }) {
  const graph = buildLanderJsonLdGraph(site, page);
  return (
    <>
      <JsonLd graph={graph} />
      <VisibleLanderPage page={page} />
    </>
  );
}

function assertNever(value: never): never {
  throw new Error(`Unsupported section: ${JSON.stringify(value)}`);
}
