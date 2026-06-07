import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import {
  formatDateLabel,
  joinClassNames,
  LinkList,
  MediaList,
  ReferenceInline,
  ReferenceList,
  SemanticStructuredDataGate,
  TextList,
} from "../shared.js";
import {
  AboutPageImage,
  AboutPageStructuredDataInput,
  BreadcrumbNav,
  BreadcrumbItemInput,
  NamedMediaReference,
  NamedReference,
  PageViewModel,
  SpeakableInput,
  audienceReference,
  breadcrumbValue,
  creativeWorkReference,
  mediaReference,
  namedReferenceLabel,
  normalizeReferenceArray,
  pageImageReference,
  pageImageUrl,
  partyReference,
  renderPageArtifactFields,
  speakableValue,
  thingReference,
} from "./shared.js";

export interface AboutPageProps {
  name: string;
  description?: string;
  headline?: string;
  abstract?: string;
  url?: string;
  about?: NamedReference;
  mainEntity?: NamedReference;
  mainEntityOfPage?: NamedReference;
  sameAs?: string[];
  datePublished?: string;
  dateModified?: string;
  lastReviewed?: string;
  reviewedBy?: NamedReference | NamedReference[];
  author?: NamedReference | NamedReference[];
  publisher?: NamedReference;
  breadcrumb?: BreadcrumbItemInput[];
  significantLinks?: string[];
  relatedLinks?: string[];
  image?: string | AboutPageImage;
  primaryImageOfPage?: string | AboutPageImage;
  thumbnailUrl?: string;
  video?: NamedMediaReference | NamedMediaReference[];
  audio?: NamedMediaReference | NamedMediaReference[];
  mainContentOfPage?: string;
  speakable?: SpeakableInput;
  accessibilitySummary?: string;
  accessibilityFeature?: string[];
  specialty?: string | string[];
  keywords?: string[];
  mentions?: NamedReference | NamedReference[];
  subjectOf?: NamedReference | NamedReference[];
  teaches?: string[];
  audience?: NamedReference | NamedReference[];
  body?: React.ReactNode;
  viewModel?: PageViewModel & { showStructuredFields?: boolean };
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<AboutPageStructuredDataInput>;
}

export function AboutPage(props: AboutPageProps) {
  const reviewedBy = normalizeReferenceArray(props.reviewedBy);
  const authors = normalizeReferenceArray(props.author);
  const mentions = normalizeReferenceArray(props.mentions);
  const subjectOf = normalizeReferenceArray(props.subjectOf);
  const audience = normalizeReferenceArray(props.audience);
  const videos = normalizeReferenceArray(props.video);
  const audio = normalizeReferenceArray(props.audio);
  const specialties = Array.isArray(props.specialty) ? props.specialty : props.specialty ? [props.specialty] : [];
  const base: AboutPageStructuredDataInput = {
    name: props.name, description: props.description, headline: props.headline, abstract: props.abstract, url: props.url,
    image: props.image, primaryImageOfPage: pageImageReference(props.primaryImageOfPage), thumbnailUrl: props.thumbnailUrl,
    about: thingReference(props.about), mainEntity: thingReference(props.mainEntity), mainEntityOfPage: creativeWorkReference(props.mainEntityOfPage),
    sameAs: props.sameAs, datePublished: props.datePublished, dateModified: props.dateModified, lastReviewed: props.lastReviewed,
    reviewedBy: reviewedBy.map(partyReference), author: authors.length > 1 ? authors.map(partyReference) : partyReference(authors[0]),
    publisher: partyReference(props.publisher), breadcrumb: breadcrumbValue(props.breadcrumb), significantLinks: props.significantLinks, relatedLink: props.relatedLinks,
    video: videos.map((item) => mediaReference(item, "VideoObject")), audio: audio.map((item) => mediaReference(item, "AudioObject")),
    mainContentOfPage: props.mainContentOfPage ? { "@type": "WebPageElement", name: props.mainContentOfPage, text: props.mainContentOfPage } : undefined,
    speakable: speakableValue(props.speakable), accessibilitySummary: props.accessibilitySummary, accessibilityFeature: props.accessibilityFeature,
    specialty: specialties.length > 1 ? specialties : specialties[0], keywords: props.keywords, mentions: mentions.map(thingReference),
    subjectOf: subjectOf.map(creativeWorkReference), teaches: props.teaches, audience: audience.map(audienceReference),
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  const imageSrc = pageImageUrl(props.primaryImageOfPage) ?? pageImageUrl(props.image) ?? props.thumbnailUrl;
  const publishedLabel = formatDateLabel(props.datePublished);
  const modifiedLabel = formatDateLabel(props.dateModified);
  const reviewedLabel = formatDateLabel(props.lastReviewed);
  const editorialRows = [
    authors.length ? { label: "Written by", value: authors } : null,
    props.publisher ? { label: "Published by", value: [props.publisher] as NamedReference[] } : null,
    reviewedBy.length ? { label: "Reviewed by", value: reviewedBy } : null,
  ].filter(Boolean) as Array<{ label: string; value: NamedReference[] }>;
  const dateRows = [
    props.datePublished ? { label: "Published", value: props.datePublished, display: publishedLabel ?? props.datePublished } : null,
    props.dateModified ? { label: "Updated", value: props.dateModified, display: modifiedLabel ?? props.dateModified } : null,
    props.lastReviewed ? { label: "Reviewed", value: props.lastReviewed, display: reviewedLabel ?? props.lastReviewed } : null,
  ].filter(Boolean) as Array<{ label: string; value: string; display: string }>;
  const overviewText = [props.abstract, props.mainContentOfPage].filter((item): item is string => Boolean(item?.trim()));
  const topicRows = [
    props.about ? { label: "Focus", value: props.about } : null,
    props.mainEntity ? { label: "Primary entity", value: props.mainEntity } : null,
    props.mainEntityOfPage ? { label: "Canonical page", value: props.mainEntityOfPage } : null,
  ].filter(Boolean) as Array<{ label: string; value: NamedReference }>;

  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.AboutPageStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <article
        className={joinClassNames("mdwrk-primitive", "mdwrk-primitive--surface", "lander-semantic", "lander-semantic--about-page", props.className)}
        data-mdwrk-primitive="surface"
      >
        <BreadcrumbNav items={props.breadcrumb} />
        <header className="lander-semantic__header lander-semantic__about-hero">
          <div className="lander-semantic__about-hero-copy">
            <p className="lander-semantic__eyebrow">{props.viewModel?.eyebrow ?? "About us"}</p>
            <h1 className="lander-semantic__title">{props.name}</h1>
            {props.headline ? <p className="lander-semantic__subtitle">{props.headline}</p> : null}
            {props.description ? <p className="lander-semantic__description">{props.description}</p> : null}
            {props.url ? <a className="lander-semantic__about-canonical" href={props.url}>{props.url.replace(/^https?:\/\//, "")}</a> : null}
          </div>
          {imageSrc || dateRows.length ? (
            <aside className="lander-semantic__about-hero-aside" aria-label="About page summary">
              {imageSrc ? (
                <img
                  className="lander-semantic__image lander-semantic__about-image"
                  src={imageSrc}
                  alt={props.headline ?? props.name}
                  onError={(event) => {
                    event.currentTarget.hidden = true;
                  }}
                />
              ) : null}
              {dateRows.length ? (
                <dl className="lander-semantic__meta lander-semantic__about-date-list">
                  {dateRows.map((row) => (
                    <div key={row.label}>
                      <dt>{row.label}</dt>
                      <dd><time dateTime={row.value}>{row.display}</time></dd>
                    </div>
                  ))}
                </dl>
              ) : null}
            </aside>
          ) : null}
        </header>

        <div className="lander-semantic__body lander-semantic__about-layout">
          <main className="lander-semantic__about-main">
            {overviewText.length ? (
              <section className="lander-semantic__about-overview" aria-labelledby="about-overview-heading">
                <h2 id="about-overview-heading">Overview</h2>
                {overviewText.map((item) => <p key={item}>{item}</p>)}
              </section>
            ) : null}
            {props.body}
            {props.accessibilitySummary ? (
              <section className="lander-semantic__about-accessibility" aria-labelledby="about-accessibility-heading">
                <h2 id="about-accessibility-heading">Accessibility</h2>
                <p>{props.accessibilitySummary}</p>
                {props.accessibilityFeature?.length ? (
                  <ul>
                    {props.accessibilityFeature.map((feature) => <li key={feature}>{feature}</li>)}
                  </ul>
                ) : null}
              </section>
            ) : null}
            <div className="lander-semantic__about-related">
              <ReferenceList items={subjectOf} label="Coverage" className="lander-semantic__about-link-group" />
              <MediaList items={videos} label="Videos" type="Video" className="lander-semantic__about-link-group" typeClassName="lander-semantic__about-link-type" />
              <MediaList items={audio} label="Audio" type="Audio" className="lander-semantic__about-link-group" typeClassName="lander-semantic__about-link-type" />
            </div>
          </main>

          <aside className="lander-semantic__about-sidebar" aria-label="About details">
            {topicRows.length ? (
              <section className="lander-semantic__about-detail-section" aria-labelledby="about-focus-heading">
                <h2 id="about-focus-heading">Focus</h2>
                <dl className="lander-semantic__about-fact-list">
                  {topicRows.map((row) => (
                    <div key={row.label}>
                      <dt>{row.label}</dt>
                      <dd><ReferenceInline value={row.value} /></dd>
                    </div>
                  ))}
                </dl>
              </section>
            ) : null}
            {editorialRows.length ? (
              <section className="lander-semantic__about-detail-section" aria-labelledby="about-editorial-heading">
                <h2 id="about-editorial-heading">Editorial</h2>
                <dl className="lander-semantic__about-fact-list">
                  {editorialRows.map((row) => (
                    <div key={row.label}>
                      <dt>{row.label}</dt>
                      <dd>{row.value.map((item, index) => <React.Fragment key={`${namedReferenceLabel(item)}-${index}`}><ReferenceInline value={item} />{index < row.value.length - 1 ? ", " : null}</React.Fragment>)}</dd>
                    </div>
                  ))}
                </dl>
              </section>
            ) : null}
            <TextList items={specialties} label="Specialties" className="lander-semantic__about-list-section" />
            <TextList items={props.teaches ?? []} label="Teaches" className="lander-semantic__about-list-section" />
            <TextList items={audience.map(namedReferenceLabel)} label="Audience" className="lander-semantic__about-list-section" />
            <TextList items={props.keywords ?? []} label="Keywords" className="lander-semantic__about-list-section" />
            <ReferenceList items={mentions} label="Mentions" className="lander-semantic__about-link-group" />
            <LinkList links={props.significantLinks} label="Company links" className="lander-semantic__about-link-group" />
            <LinkList links={props.relatedLinks} label="Related links" className="lander-semantic__about-link-group" />
            <LinkList links={props.sameAs} label="External profiles" className="lander-semantic__about-link-group" />
            {props.viewModel?.showStructuredFields ? renderPageArtifactFields(structuredData as Record<string, unknown>, [
              "name",
              "description",
              "headline",
              "abstract",
              "url",
              "datePublished",
              "dateModified",
              "lastReviewed",
              "about",
              "mainEntity",
              "mainEntityOfPage",
              "mainContentOfPage",
              "author",
              "publisher",
              "reviewedBy",
              "breadcrumb",
              "speakable",
              "accessibilitySummary",
              "accessibilityFeature",
              "specialty",
              "keywords",
              "teaches",
              "sameAs",
              "audience",
              "mentions",
              "subjectOf",
              "significantLinks",
              "relatedLink",
              "video",
              "audio",
              "image",
              "primaryImageOfPage",
              "thumbnailUrl",
            ]) : null}
          </aside>
        </div>
        {props.viewModel?.footer ? <footer className="lander-semantic__footer">{props.viewModel.footer}</footer> : null}
      </article>
    </>
  );
}
