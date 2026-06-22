import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import {
  SemanticShell,
  SemanticStructuredDataGate,
  firstImage,
  isRecord,
  mergeRecordLike,
  nonEmptyString,
} from "./shared.js";

type ArticleStructuredDataInput = React.ComponentProps<typeof structuredDataReact.ArticleStructuredData>["data"];
type DiscussionForumPostingStructuredDataInput = React.ComponentProps<
  typeof structuredDataReact.DiscussionForumPostingStructuredData
>["data"];
type ClaimReviewStructuredDataInput = React.ComponentProps<typeof structuredDataReact.ClaimReviewStructuredData>["data"];

export interface ArticleProps {
  title: string;
  description?: string;
  subtitle?: string;
  author?: { name: string; url?: string };
  publishedAt?: string;
  modifiedAt?: string;
  url?: string;
  image?: string | string[];
  body: React.ReactNode;
  articleType?: "Article" | "NewsArticle" | "BlogPosting";
  viewModel?: { eyebrow?: string; bylinePrefix?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<ArticleStructuredDataInput>;
}

export interface BlogPostingProps extends Omit<ArticleProps, "articleType"> {}
export interface NewsArticleProps extends Omit<ArticleProps, "articleType"> {}
export interface TechArticleProps extends Omit<ArticleProps, "articleType"> {}

export interface DiscussionForumPostingProps {
  title: string;
  description?: string;
  body?: React.ReactNode;
  articleBody?: string;
  author?: { name: string; url?: string };
  publishedAt?: string;
  modifiedAt?: string;
  url?: string;
  image?: string | string[];
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<DiscussionForumPostingStructuredDataInput>;
}

export interface ClaimReviewProps {
  title: string;
  description?: string;
  claimReviewed: string;
  body?: React.ReactNode;
  author?: { name: string; url?: string };
  publishedAt?: string;
  reviewRating?: { ratingValue: number | string; bestRating?: number | string };
  url?: string;
  image?: string | string[];
  viewModel?: { eyebrow?: string; footer?: React.ReactNode };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<ClaimReviewStructuredDataInput>;
}

function articleKind(articleType?: ArticleProps["articleType"] | "TechArticle") {
  if (articleType === "BlogPosting") return "blog-posting";
  if (articleType === "NewsArticle") return "news-article";
  if (articleType === "TechArticle") return "tech-article";
  return "article";
}

function articleEyebrow(articleType: ArticleProps["articleType"] | "TechArticle" | undefined, explicit?: React.ReactNode) {
  if (explicit) return explicit;
  if (articleType === "BlogPosting") return "Blog posting";
  if (articleType === "NewsArticle") return "News article";
  if (articleType === "TechArticle") return "Tech article";
  return undefined;
}

function buildArticleStructuredData(props: ArticleProps): ArticleStructuredDataInput {
  const structuredImage = typeof props.image === "string" ? props.image : firstImage(props.image);
  const base: ArticleStructuredDataInput = {
    name: props.title,
    headline: props.title,
    description: props.description,
    url: props.url,
    image: structuredImage,
    author: props.author ? { "@type": "Person", name: props.author.name, url: props.author.url } : undefined,
    datePublished: props.publishedAt,
    dateModified: props.modifiedAt,
    mainEntityOfPage: props.url,
  };
  const merged = { ...base, ...(props.structuredDataOverrides ?? {}) };
  if (isRecord(base.author)) {
    const mergedAuthor = mergeRecordLike(base.author, props.structuredDataOverrides?.author);
    merged.author = {
      ...mergedAuthor,
      name: nonEmptyString(mergedAuthor.name) ?? base.author.name,
      url: nonEmptyString(mergedAuthor.url) ?? base.author.url,
    };
  }
  merged.name = props.title;
  merged.headline = nonEmptyString(props.structuredDataOverrides?.headline) ?? props.title;
  return merged;
}

function buildDiscussionStructuredData(props: DiscussionForumPostingProps): DiscussionForumPostingStructuredDataInput {
  const structuredImage = typeof props.image === "string" ? props.image : firstImage(props.image);
  const base: DiscussionForumPostingStructuredDataInput = {
    name: props.title,
    headline: props.title,
    description: props.description,
    articleBody: props.articleBody,
    url: props.url,
    image: structuredImage,
    author: props.author ? { "@type": "Person", name: props.author.name, url: props.author.url } : undefined,
    datePublished: props.publishedAt,
    dateModified: props.modifiedAt,
  };
  const merged = { ...base, ...(props.structuredDataOverrides ?? {}) };
  merged.name = props.title;
  merged.headline = nonEmptyString(props.structuredDataOverrides?.headline) ?? props.title;
  return merged;
}

function buildClaimReviewStructuredData(props: ClaimReviewProps): ClaimReviewStructuredDataInput {
  const structuredImage = typeof props.image === "string" ? props.image : firstImage(props.image);
  const base: ClaimReviewStructuredDataInput = {
    name: props.title,
    description: props.description,
    claimReviewed: props.claimReviewed,
    url: props.url,
    image: structuredImage,
    author: props.author ? { "@type": "Person", name: props.author.name, url: props.author.url } : undefined,
    datePublished: props.publishedAt,
    reviewRating: props.reviewRating
      ? {
          "@type": "Rating",
          ratingValue: props.reviewRating.ratingValue,
          bestRating: props.reviewRating.bestRating,
        }
      : undefined,
  };
  const merged = { ...base, ...(props.structuredDataOverrides ?? {}) };
  merged.name = props.title;
  merged.claimReviewed = nonEmptyString(props.structuredDataOverrides?.claimReviewed) ?? props.claimReviewed;
  return merged;
}

function ArticleStructuredDataNode({ articleType, data }: { articleType?: ArticleProps["articleType"] | "TechArticle"; data: ArticleStructuredDataInput }) {
  if (articleType === "NewsArticle") return <structuredDataReact.NewsArticleStructuredData data={data} />;
  if (articleType === "BlogPosting") return <structuredDataReact.BlogPostingStructuredData data={data} />;
  if (articleType === "TechArticle") return <structuredDataReact.TechArticleStructuredData data={data} />;
  return <structuredDataReact.ArticleStructuredData data={data} />;
}

function articleMeta(props: {
  author?: { name: string; url?: string };
  publishedAt?: string;
  modifiedAt?: string;
  bylinePrefix?: string;
}) {
  return [
    props.author ? { label: props.bylinePrefix ?? "By", value: props.author.name } : null,
    props.publishedAt ? { label: "Published", value: props.publishedAt } : null,
    props.modifiedAt ? { label: "Updated", value: props.modifiedAt } : null,
  ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>;
}

export function Article(props: ArticleProps) {
  const structuredData = buildArticleStructuredData(props);
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <ArticleStructuredDataNode articleType={props.articleType} data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind={articleKind(props.articleType)}
        title={props.title}
        eyebrow={articleEyebrow(props.articleType, props.viewModel?.eyebrow)}
        subtitle={props.subtitle}
        description={props.description}
        meta={articleMeta({ ...props, bylinePrefix: props.viewModel?.bylinePrefix })}
        imageSrc={firstImage(props.image)}
        imageAlt={props.title}
        body={props.body}
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export function BlogPosting(props: BlogPostingProps) {
  return <Article {...props} articleType="BlogPosting" />;
}

export function NewsArticle(props: NewsArticleProps) {
  return <Article {...props} articleType="NewsArticle" />;
}

export function TechArticle(props: TechArticleProps) {
  const structuredData = buildArticleStructuredData({ ...props, articleType: "Article" });
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <ArticleStructuredDataNode articleType="TechArticle" data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind={articleKind("TechArticle")}
        title={props.title}
        eyebrow={articleEyebrow("TechArticle", props.viewModel?.eyebrow)}
        subtitle={props.subtitle}
        description={props.description}
        meta={articleMeta({ ...props, bylinePrefix: props.viewModel?.bylinePrefix })}
        imageSrc={firstImage(props.image)}
        imageAlt={props.title}
        body={props.body}
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export function DiscussionForumPosting(props: DiscussionForumPostingProps) {
  const structuredData = buildDiscussionStructuredData(props);
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.DiscussionForumPostingStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="discussion-forum-posting"
        title={props.title}
        eyebrow={props.viewModel?.eyebrow ?? "Discussion thread"}
        description={props.description}
        meta={articleMeta(props)}
        imageSrc={firstImage(props.image)}
        imageAlt={props.title}
        body={props.body ?? props.articleBody}
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export function ClaimReview(props: ClaimReviewProps) {
  const structuredData = buildClaimReviewStructuredData(props);
  const meta = [
    props.author ? { label: "Reviewer", value: props.author.name } : null,
    props.publishedAt ? { label: "Published", value: props.publishedAt } : null,
    props.reviewRating ? { label: "Rating", value: String(props.reviewRating.ratingValue) } : null,
  ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>;
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.ClaimReviewStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="claim-review"
        title={props.title}
        eyebrow={props.viewModel?.eyebrow ?? "Fact check"}
        description={props.description}
        meta={meta}
        imageSrc={firstImage(props.image)}
        imageAlt={props.title}
        body={
          <>
            <section className="lander-semantic__callout" aria-label="Claim reviewed">
              <p className="lander-semantic__callout-label">Claim reviewed</p>
              <p className="lander-semantic__callout-value">{props.claimReviewed}</p>
            </section>
            {props.body}
          </>
        }
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}
