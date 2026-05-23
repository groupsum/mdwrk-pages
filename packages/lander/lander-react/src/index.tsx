import React from "react";
import type {
  ComparisonSection,
  Cta,
  CtaSection,
  FaqItem,
  FeatureGridSection,
  HeroSection,
  MarkdownSection,
  PackageGridSection,
  ProofMatrixSection,
  SectionSpec,
} from "@mdwrk/lander-content-contract";
import type { CompiledLanderSite, CompiledPage } from "@mdwrk/lander-core";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { LANDER_REACT_VERSION } from "./version.js";

export { LANDER_REACT_VERSION };
export const LANDER_REACT_STRUCTURED_DATA_REEXPORTS_DEPRECATED = true;

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
export const WebPageStructuredData = deprecatedStructuredDataComponent(
  "WebPageStructuredData",
  structuredDataReact.WebPageStructuredData,
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
export const CourseStructuredData = deprecatedStructuredDataComponent(
  "CourseStructuredData",
  structuredDataReact.CourseStructuredData,
);
export const CourseInstanceStructuredData = deprecatedStructuredDataComponent(
  "CourseInstanceStructuredData",
  structuredDataReact.CourseInstanceStructuredData,
);
export const DiscussionForumPostingStructuredData = deprecatedStructuredDataComponent(
  "DiscussionForumPostingStructuredData",
  structuredDataReact.DiscussionForumPostingStructuredData,
);
export const BookStructuredData = deprecatedStructuredDataComponent(
  "BookStructuredData",
  structuredDataReact.BookStructuredData,
);
export const ReadActionStructuredData = deprecatedStructuredDataComponent(
  "ReadActionStructuredData",
  structuredDataReact.ReadActionStructuredData,
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

export interface BreadcrumbListItem {
  label: string;
  href?: string;
}

export interface BreadcrumbListProps {
  items: BreadcrumbListItem[];
  className?: string;
  label?: string;
  listClassName?: string;
  itemClassName?: string;
  linkClassName?: string;
  currentClassName?: string;
}

export interface FaqPageProps {
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
          <article className="lander-page__card" key={item.title}>
            <h3>{item.href ? <a href={item.href}>{item.title}</a> : item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function MarkdownSectionView({ section }: { section: MarkdownSection }) {
  return (
    <section className="lander-page__section" id={section.id}>
      {section.title ? <h2>{section.title}</h2> : null}
      <div className="lander-page__panel">
        {section.body.split(/\n\s*\n/g).map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}

export function FaqPage({
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
}: FaqPageProps) {
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
  return <FaqPage items={items} />;
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
          <article className="lander-page__card" key={item.name}>
            <h3>{item.href ? <a href={item.href}>{item.name}</a> : item.name}</h3>
            <p>{item.description}</p>
            {item.install ? <code>{item.install}</code> : null}
          </article>
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
      return <MarkdownSectionView section={{ id: section.id, kind: "markdown", title: section.title, body: section.body }} />;
    case "cta":
      return <CtaBand section={section} />;
    case "faq":
      return <FaqBlock items={section.items} />;
    default:
      return assertNever(section);
  }
}

export function BreadcrumbList({
  items,
  className,
  label = "Breadcrumb",
  listClassName,
  itemClassName,
  linkClassName,
  currentClassName,
}: BreadcrumbListProps) {
  if (!items.length) return null;
  return (
    <nav aria-label={label} className={cx("lander-breadcrumbs", className)}>
      <ol className={cx("lander-breadcrumbs__list", listClassName)}>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={`${item.href ?? item.label}-${index}`} className={cx("lander-breadcrumbs__item", itemClassName)}>
              {item.href && !isLast ? (
                <a href={item.href} className={cx("lander-breadcrumbs__link", linkClassName)}>
                  {item.label}
                </a>
              ) : (
                <span className={cx("lander-breadcrumbs__current", currentClassName)} aria-current={isLast ? "page" : undefined}>
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export function Breadcrumbs({ page }: { page: CompiledPage }) {
  return <BreadcrumbList items={page.breadcrumbs} />;
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
