import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { SemanticShell, SemanticStructuredDataGate } from "../shared.js";
import {
  AboutPageImage,
  AboutPageStructuredDataInput,
  BreadcrumbItemInput,
  bodyList,
  NamedMediaReference,
  NamedReference,
  PageViewModel,
  SpeakableInput,
  audienceReference,
  breadcrumbValue,
  chipSection,
  creativeWorkReference,
  labeledLinks,
  mediaReference,
  mediaSection,
  namedReferenceLabel,
  normalizeReferenceArray,
  pageImageUrl,
  pageMetaEntries,
  partyReference,
  renderPageArtifactFields,
  referenceList,
  speakableValue,
  thingReference,
} from "./shared.js";

function pageImageReference(value?: string | AboutPageImage) {
  const url = pageImageUrl(value);
  if (!url) return undefined;
  return {
    "@type": "ImageObject",
    url,
    contentUrl: url,
    name: typeof value === "object" && value?.caption ? value.caption : url,
  };
}

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
  viewModel?: PageViewModel;
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
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.AboutPageStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="about-page"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "About page"}
        subtitle={props.headline}
        description={props.description}
        meta={pageMetaEntries(structuredData as Record<string, unknown>, [
          { key: "url", label: "URL" },
          { key: "datePublished", label: "Published" },
          { key: "dateModified", label: "Updated" },
          { key: "lastReviewed", label: "Reviewed" },
        ])}
        imageSrc={pageImageUrl(props.primaryImageOfPage) ?? pageImageUrl(props.image) ?? props.thumbnailUrl}
        imageAlt={props.headline ?? props.name}
        body={
          <>
            {props.about ? <div className="lander-semantic__page-band"><span className="lander-semantic__page-band-label">About</span><strong className="lander-semantic__page-band-value">{namedReferenceLabel(props.about)}</strong></div> : null}
            {(props.mainEntity || props.mainEntityOfPage || props.mainContentOfPage || props.datePublished || props.dateModified || props.lastReviewed) ? (
              <div className="lander-semantic__page-facts">
                {props.mainEntity ? <div className="lander-semantic__page-fact"><span className="lander-semantic__page-fact-label">Main entity</span><strong className="lander-semantic__page-fact-value">{namedReferenceLabel(props.mainEntity)}</strong></div> : null}
                {props.mainEntityOfPage ? <div className="lander-semantic__page-fact"><span className="lander-semantic__page-fact-label">Main entity of page</span><strong className="lander-semantic__page-fact-value">{namedReferenceLabel(props.mainEntityOfPage)}</strong></div> : null}
                {props.mainContentOfPage ? <div className="lander-semantic__page-fact"><span className="lander-semantic__page-fact-label">Main content</span><strong className="lander-semantic__page-fact-value">{props.mainContentOfPage}</strong></div> : null}
                {props.datePublished ? <div className="lander-semantic__page-fact"><span className="lander-semantic__page-fact-label">Published</span><strong className="lander-semantic__page-fact-value">{props.datePublished}</strong></div> : null}
                {props.dateModified ? <div className="lander-semantic__page-fact"><span className="lander-semantic__page-fact-label">Updated</span><strong className="lander-semantic__page-fact-value">{props.dateModified}</strong></div> : null}
                {props.lastReviewed ? <div className="lander-semantic__page-fact"><span className="lander-semantic__page-fact-label">Last reviewed</span><strong className="lander-semantic__page-fact-value">{props.lastReviewed}</strong></div> : null}
              </div>
            ) : null}
            {(authors.length || props.publisher || reviewedBy.length) ? <div className="lander-semantic__publisher-band">{authors.length ? <><span className="lander-semantic__publisher-label">Author</span><strong className="lander-semantic__publisher-value">{authors.map(namedReferenceLabel).join(", ")}</strong></> : null}{props.publisher ? <><span className="lander-semantic__publisher-label">Publisher</span><strong className="lander-semantic__publisher-value">{namedReferenceLabel(props.publisher)}</strong></> : null}{reviewedBy.length ? <><span className="lander-semantic__publisher-label">Reviewed by</span><strong className="lander-semantic__publisher-value">{reviewedBy.map(namedReferenceLabel).join(", ")}</strong></> : null}</div> : null}
            {props.abstract ? <section className="lander-semantic__about-section"><h3 className="lander-semantic__about-section-heading">Abstract</h3><div className="lander-semantic__page-fact-card"><span className="lander-semantic__page-fact-value">{props.abstract}</span></div></section> : null}
            {props.breadcrumb?.length ? <section className="lander-semantic__about-section"><h3 className="lander-semantic__about-section-heading">Breadcrumb</h3><nav aria-label="Breadcrumb"><ol className="lander-semantic__breadcrumb-trail">{props.breadcrumb.map((item, index) => <li key={`${item.href ?? item.label}-${index}`} className="lander-semantic__breadcrumb-item">{item.href ? <a href={item.href}>{item.label}</a> : <span>{item.label}</span>}{index < props.breadcrumb.length - 1 ? <span className="lander-semantic__breadcrumb-separator">/</span> : null}</li>)}</ol></nav></section> : null}
            {props.speakable ? <section className="lander-semantic__about-section"><h3 className="lander-semantic__about-section-heading">Speakable</h3><div className="lander-semantic__selector-grid">{props.speakable.cssSelector?.length ? <section className="lander-semantic__selector-block"><h4 className="lander-semantic__selector-heading">CSS selectors</h4>{bodyList(props.speakable.cssSelector)}</section> : null}{props.speakable.xpath?.length ? <section className="lander-semantic__selector-block"><h4 className="lander-semantic__selector-heading">XPath selectors</h4>{bodyList(props.speakable.xpath)}</section> : null}{props.speakable.idRefs?.length ? <section className="lander-semantic__selector-block"><h4 className="lander-semantic__selector-heading">ID references</h4>{bodyList(props.speakable.idRefs)}</section> : null}</div></section> : null}
            {props.accessibilitySummary ? <section className="lander-semantic__about-section"><h3 className="lander-semantic__about-section-heading">Accessibility summary</h3><div className="lander-semantic__page-fact-card"><span className="lander-semantic__page-fact-value">{props.accessibilitySummary}</span></div></section> : null}
            {chipSection(props.accessibilityFeature ?? [], "Accessibility features")}
            {chipSection(specialties, "Specialty")}
            {chipSection(props.keywords ?? [], "Keywords")}
            {chipSection(props.teaches ?? [], "Teaches")}
            {chipSection(props.sameAs ?? [], "Same as")}
            {chipSection(audience.map(namedReferenceLabel), "Audience")}
            {referenceList(mentions, "Mentions")}
            {referenceList(subjectOf, "Subject of")}
            {labeledLinks(props.significantLinks, "Significant links")}
            {labeledLinks(props.relatedLinks, "Related links")}
            {mediaSection(videos, "Video", "Video")}
            {mediaSection(audio, "Audio", "Audio")}
            {renderPageArtifactFields(structuredData as Record<string, unknown>, [
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
            ])}
            {props.body}
          </>
        }
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}
