import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { SemanticStructuredDataGate, firstImage, isRecord, joinClassNames, mergeRecordLike, nonEmptyString } from "./shared.js";

type ArticleStructuredDataInput = React.ComponentProps<typeof structuredDataReact.ArticleStructuredData>["data"];

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

function ArticleStructuredDataNode({ articleType, data }: { articleType?: ArticleProps["articleType"]; data: ArticleStructuredDataInput }) {
  if (articleType === "NewsArticle") return <structuredDataReact.NewsArticleStructuredData data={data} />;
  if (articleType === "BlogPosting") return <structuredDataReact.BlogPostingStructuredData data={data} />;
  return <structuredDataReact.ArticleStructuredData data={data} />;
}

export function Article({
  title,
  description,
  subtitle,
  author,
  publishedAt,
  modifiedAt,
  image,
  body,
  articleType = "Article",
  viewModel,
  className,
  emitStructuredData = true,
  structuredDataOverrides,
  url,
}: ArticleProps) {
  const structuredData = buildArticleStructuredData({
    title,
    description,
    subtitle,
    author,
    publishedAt,
    modifiedAt,
    image,
    body,
    articleType,
    viewModel,
    className,
    emitStructuredData,
    structuredDataOverrides,
    url,
  });
  const heroImage = firstImage(image);

  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={emitStructuredData}>
        <ArticleStructuredDataNode articleType={articleType} data={structuredData} />
      </SemanticStructuredDataGate>
      <article className={joinClassNames("lander-semantic", "lander-semantic--article", className)}>
        <header className="lander-semantic__header">
          {viewModel?.eyebrow ? <p className="lander-semantic__eyebrow">{viewModel.eyebrow}</p> : null}
          <h1 className="lander-semantic__title">{title}</h1>
          {subtitle ? <p className="lander-semantic__subtitle">{subtitle}</p> : null}
          {description ? <p className="lander-semantic__description">{description}</p> : null}
          {author || publishedAt || modifiedAt ? (
            <p className="lander-semantic__meta">
              {author ? (
                <span>
                  {viewModel?.bylinePrefix ?? "By"} {author.name}
                </span>
              ) : null}
              {publishedAt ? <time dateTime={publishedAt}>{publishedAt}</time> : null}
              {modifiedAt ? <time dateTime={modifiedAt}>Updated {modifiedAt}</time> : null}
            </p>
          ) : null}
        </header>
        {heroImage ? <img className="lander-semantic__image" src={heroImage} alt={title} /> : null}
        <div className="lander-semantic__body">{body}</div>
        {viewModel?.footer ? <footer className="lander-semantic__footer">{viewModel.footer}</footer> : null}
      </article>
    </>
  );
}
