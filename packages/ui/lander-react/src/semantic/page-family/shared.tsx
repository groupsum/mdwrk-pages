import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import {
  bodyList,
  creativeWorkReference,
  firstImage,
  omitRecordKeys,
  renderStructuredSection,
  thingReference,
} from "../shared.js";

export type AboutPageStructuredDataInput = React.ComponentProps<typeof structuredDataReact.AboutPageStructuredData>["data"];
export type CheckoutPageStructuredDataInput = React.ComponentProps<typeof structuredDataReact.CheckoutPageStructuredData>["data"];
export type CollectionPageStructuredDataInput = React.ComponentProps<typeof structuredDataReact.CollectionPageStructuredData>["data"];
export type ContactPageStructuredDataInput = React.ComponentProps<typeof structuredDataReact.ContactPageStructuredData>["data"];
export type ImageGalleryStructuredDataInput = React.ComponentProps<typeof structuredDataReact.ImageGalleryStructuredData>["data"];
export type ItemPageStructuredDataInput = React.ComponentProps<typeof structuredDataReact.ItemPageStructuredData>["data"];
export type MediaGalleryStructuredDataInput = React.ComponentProps<typeof structuredDataReact.MediaGalleryStructuredData>["data"];
export type RealEstateListingStructuredDataInput = React.ComponentProps<typeof structuredDataReact.RealEstateListingStructuredData>["data"];
export type SearchResultsPageStructuredDataInput = React.ComponentProps<typeof structuredDataReact.SearchResultsPageStructuredData>["data"];
export type VideoGalleryStructuredDataInput = React.ComponentProps<typeof structuredDataReact.VideoGalleryStructuredData>["data"];
export type WebContentStructuredDataInput = React.ComponentProps<typeof structuredDataReact.WebContentStructuredData>["data"];
export type WebPageElementStructuredDataInput = React.ComponentProps<typeof structuredDataReact.WebPageElementStructuredData>["data"];

export interface PageViewModel {
  eyebrow?: string;
  footer?: React.ReactNode;
}

export interface PageArtifactUiProps {
  body?: React.ReactNode;
  viewModel?: PageViewModel;
  className?: string;
  emitStructuredData?: boolean;
}

export type AboutPageImage = {
  src?: string;
  url?: string;
  alt?: string;
  caption?: string;
  width?: number;
  height?: number;
};

export type NamedReference = string | { name?: string; url?: string; ["@id"]?: string; ["@type"]?: string };
export type NamedMediaReference = string | { name?: string; url?: string; contentUrl?: string; thumbnailUrl?: string };
export type BreadcrumbItemInput = { label: string; href?: string };
export type SpeakableInput = {
  cssSelector?: string[];
  xpath?: string[];
  idRefs?: string[];
};

export function namedReferenceLabel(value: unknown): string {
  if (typeof value === "string") return value;
  if (value && typeof value === "object") {
    const record = value as Record<string, unknown>;
    if (typeof record.name === "string" && record.name.trim()) return record.name;
    if (typeof record.url === "string" && record.url.trim()) return record.url;
    if (typeof record["@id"] === "string" && record["@id"].trim()) return record["@id"];
    if (typeof record["@type"] === "string" && record["@type"].trim()) return record["@type"];
  }
  return String(value ?? "");
}

export function namedReferenceHref(value: unknown): string | undefined {
  if (typeof value === "string" && /^https?:\/\//i.test(value)) return value;
  if (value && typeof value === "object") {
    const record = value as Record<string, unknown>;
    if (typeof record.url === "string" && record.url.trim()) return record.url;
    if (typeof record["@id"] === "string" && /^https?:\/\//i.test(record["@id"])) return record["@id"];
  }
  return undefined;
}

export function pageImageUrl(value?: string | AboutPageImage): string | undefined {
  if (typeof value === "string" && value.trim()) return value;
  if (value && typeof value === "object") return value.url ?? value.src;
  return undefined;
}

export function normalizeReferenceArray<T>(value?: T | T[]): T[] {
  if (!value) return [];
  return Array.isArray(value) ? value : [value];
}

export function partyReference(value: NamedReference | undefined) {
  if (!value) return undefined;
  if (typeof value === "string") return { "@type": "Organization", name: value };
  return value;
}

export function audienceReference(value: NamedReference | undefined) {
  if (!value) return undefined;
  if (typeof value === "string") return { "@type": "Audience", name: value, audienceType: value };
  return value;
}

export function mediaReference(value: NamedMediaReference | undefined, type: "VideoObject" | "AudioObject") {
  if (!value) return undefined;
  if (typeof value === "string") {
    return /^https?:\/\//i.test(value)
      ? { "@type": type, url: value, contentUrl: value, name: value }
      : { "@type": type, name: value };
  }
  return {
    "@type": type,
    name: value.name ?? value.url ?? value.contentUrl ?? type,
    url: value.url ?? value.contentUrl,
    contentUrl: value.contentUrl ?? value.url,
    thumbnailUrl: value.thumbnailUrl,
  };
}

export function breadcrumbValue(items?: BreadcrumbItemInput[]) {
  if (!items?.length) return undefined;
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: item.href ? { "@type": "Thing", name: item.label, url: item.href } : { "@type": "Thing", name: item.label },
    })),
  };
}

export function speakableValue(value?: SpeakableInput) {
  if (!value) return undefined;
  const selectors = value.cssSelector?.length || value.xpath?.length
    ? { "@type": "SpeakableSpecification", cssSelector: value.cssSelector, xpath: value.xpath }
    : undefined;
  if (selectors && value.idRefs?.length) return [...value.idRefs, selectors];
  if (selectors) return selectors;
  if (value.idRefs?.length === 1) return value.idRefs[0];
  if (value.idRefs?.length) return value.idRefs;
  return undefined;
}

export function pageLinks(links?: string[]) {
  if (!links?.length) return null;
  return (
    <ul className="lander-semantic__page-link-list">
      {links.map((link) => (
        <li key={link} className="lander-semantic__page-link-item">
          <a href={link}>{link.replace(/^https?:\/\//, "")}</a>
        </li>
      ))}
    </ul>
  );
}

export function labeledLinks(links?: string[], label = "Links") {
  if (!links?.length) return null;
  return (
    <section className="lander-semantic__about-section">
      <h3 className="lander-semantic__about-section-heading">{label}</h3>
      {pageLinks(links)}
    </section>
  );
}

export function referenceList(items: NamedReference[], label: string) {
  if (!items.length) return null;
  return (
    <section className="lander-semantic__about-section">
      <h3 className="lander-semantic__about-section-heading">{label}</h3>
      <ul className="lander-semantic__page-link-list">
        {items.map((item, index) => {
          const text = namedReferenceLabel(item);
          const href = namedReferenceHref(item);
          return <li key={`${text}-${index}`} className="lander-semantic__page-link-item">{href ? <a href={href}>{text}</a> : <span>{text}</span>}</li>;
        })}
      </ul>
    </section>
  );
}

export function chipSection(items: Array<string | undefined>, label: string) {
  const values = items.filter((item): item is string => typeof item === "string" && item.trim().length > 0);
  if (!values.length) return null;
  return (
    <section className="lander-semantic__about-section">
      <h3 className="lander-semantic__about-section-heading">{label}</h3>
      <div className="lander-semantic__chip-list">
        {values.map((item) => <span key={item} className="lander-semantic__chip">{item}</span>)}
      </div>
    </section>
  );
}

export function mediaSection(items: NamedMediaReference[], label: string, type: "Video" | "Audio") {
  if (!items.length) return null;
  return (
    <section className="lander-semantic__about-section">
      <h3 className="lander-semantic__about-section-heading">{label}</h3>
      <div className="lander-semantic__about-media-grid">
        {items.map((item, index) => {
          const title = namedReferenceLabel(item);
          const href = namedReferenceHref(item);
          const preview = typeof item === "object" && item ? item.thumbnailUrl : undefined;
          return (
            <article key={`${title}-${index}`} className="lander-semantic__about-media-card">
              {preview ? <img src={preview} alt={title} className="lander-semantic__about-media-thumb" /> : null}
              <span className="lander-semantic__about-media-kicker">{type}</span>
              {href ? <a href={href}>{title}</a> : <strong>{title}</strong>}
            </article>
          );
        })}
      </div>
    </section>
  );
}

export function pageMetaEntries(data: Record<string, unknown>, pairs: Array<{ key: string; label: string }>) {
  return pairs
    .map(({ key, label }) => {
      const value = data[key];
      if (value === undefined || value === null) return null;
      if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
        return { label, value: String(value) };
      }
      return null;
    })
    .filter(Boolean) as Array<{ label: string; value: React.ReactNode }>;
}

export function pagePreviewImage(data: Record<string, unknown>) {
  return (
    firstImage(data.primaryImageOfPage as string | string[] | undefined)
    ?? firstImage(data.image as string | string[] | undefined)
    ?? (typeof data.thumbnailUrl === "string" ? data.thumbnailUrl : undefined)
  );
}

export function renderPageArtifactFields(
  data: Record<string, unknown>,
  omittedKeys: string[] = ["name", "description", "headline", "abstract"],
  heading = "Structured fields",
) {
  return renderStructuredSection(omitRecordKeys(data, omittedKeys), heading);
}

export { bodyList, creativeWorkReference, thingReference };
