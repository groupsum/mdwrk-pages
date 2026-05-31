import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { SemanticShell, SemanticStructuredDataGate, bodyList, thingReference } from "./shared.js";

type AboutPageStructuredDataInput = React.ComponentProps<typeof structuredDataReact.AboutPageStructuredData>["data"];
type CheckoutPageStructuredDataInput = React.ComponentProps<typeof structuredDataReact.CheckoutPageStructuredData>["data"];
type CollectionPageStructuredDataInput = React.ComponentProps<typeof structuredDataReact.CollectionPageStructuredData>["data"];
type ContactPageStructuredDataInput = React.ComponentProps<typeof structuredDataReact.ContactPageStructuredData>["data"];
type ImageGalleryStructuredDataInput = React.ComponentProps<typeof structuredDataReact.ImageGalleryStructuredData>["data"];
type ItemPageStructuredDataInput = React.ComponentProps<typeof structuredDataReact.ItemPageStructuredData>["data"];
type MediaGalleryStructuredDataInput = React.ComponentProps<typeof structuredDataReact.MediaGalleryStructuredData>["data"];
type RealEstateListingStructuredDataInput = React.ComponentProps<typeof structuredDataReact.RealEstateListingStructuredData>["data"];
type SearchResultsPageStructuredDataInput = React.ComponentProps<typeof structuredDataReact.SearchResultsPageStructuredData>["data"];
type VideoGalleryStructuredDataInput = React.ComponentProps<typeof structuredDataReact.VideoGalleryStructuredData>["data"];
type WebContentStructuredDataInput = React.ComponentProps<typeof structuredDataReact.WebContentStructuredData>["data"];
type WebPageElementStructuredDataInput = React.ComponentProps<typeof structuredDataReact.WebPageElementStructuredData>["data"];

interface PageViewModel {
  eyebrow?: string;
  footer?: React.ReactNode;
}

export interface AboutPageProps {
  name: string;
  description?: string;
  about?: string;
  mainEntity?: string;
  body?: React.ReactNode;
  viewModel?: PageViewModel;
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<AboutPageStructuredDataInput>;
}

export interface CheckoutPageProps {
  name: string;
  description?: string;
  about?: string;
  offers?: Array<{ name: string; price?: string; href?: string }>;
  body?: React.ReactNode;
  viewModel?: PageViewModel;
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<CheckoutPageStructuredDataInput>;
}

export interface CollectionPageProps {
  name: string;
  description?: string;
  items?: Array<{ name: string; url?: string; summary?: string }>;
  significantLinks?: string[];
  body?: React.ReactNode;
  viewModel?: PageViewModel;
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<CollectionPageStructuredDataInput>;
}

export interface ContactPageProps {
  name: string;
  description?: string;
  about?: string;
  contactPoints?: Array<{ label: string; value: string; href?: string }>;
  significantLinks?: string[];
  body?: React.ReactNode;
  viewModel?: PageViewModel;
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<ContactPageStructuredDataInput>;
}

export interface ImageGalleryProps {
  name: string;
  description?: string;
  images?: Array<{ name: string; url?: string; summary?: string }>;
  significantLinks?: string[];
  body?: React.ReactNode;
  viewModel?: PageViewModel;
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<ImageGalleryStructuredDataInput>;
}

export interface ItemPageProps {
  name: string;
  description?: string;
  mainEntity: string;
  body?: React.ReactNode;
  viewModel?: PageViewModel;
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<ItemPageStructuredDataInput>;
}

export interface MediaGalleryProps {
  name: string;
  description?: string;
  items?: Array<{ name: string; url?: string; summary?: string }>;
  significantLinks?: string[];
  body?: React.ReactNode;
  viewModel?: PageViewModel;
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<MediaGalleryStructuredDataInput>;
}

export interface RealEstateListingProps {
  name: string;
  description?: string;
  datePosted?: string;
  leaseLength?: string;
  offers?: Array<{ name: string; price?: string; href?: string }>;
  location?: string;
  body?: React.ReactNode;
  viewModel?: PageViewModel;
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<RealEstateListingStructuredDataInput>;
}

export interface SearchResultsPageProps {
  name: string;
  description?: string;
  query?: string;
  results?: Array<{ name: string; url?: string; summary?: string }>;
  body?: React.ReactNode;
  viewModel?: PageViewModel;
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<SearchResultsPageStructuredDataInput>;
}

export interface VideoGalleryProps {
  name: string;
  description?: string;
  videos?: Array<{ name: string; url?: string; thumbnailUrl?: string; uploadDate?: string }>;
  body?: React.ReactNode;
  viewModel?: PageViewModel;
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<VideoGalleryStructuredDataInput>;
}

export interface WebContentProps {
  name: string;
  description?: string;
  text?: string;
  author?: string;
  body?: React.ReactNode;
  viewModel?: PageViewModel;
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<WebContentStructuredDataInput>;
}

export interface WebPageElementProps {
  name: string;
  description?: string;
  text?: string;
  cssSelector?: string[];
  xpath?: string[];
  body?: React.ReactNode;
  viewModel?: PageViewModel;
  className?: string;
  emitStructuredData?: boolean;
  structuredDataOverrides?: Partial<WebPageElementStructuredDataInput>;
}

function pageLinks(links?: string[]) {
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

export function AboutPage(props: AboutPageProps) {
  const base: AboutPageStructuredDataInput = {
    name: props.name,
    description: props.description,
    about: thingReference(props.about),
    mainEntity: thingReference(props.mainEntity),
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
        description={props.description}
        body={
          <>
            {props.about ? (
              <div className="lander-semantic__page-band">
                <span className="lander-semantic__page-band-label">About</span>
                <strong className="lander-semantic__page-band-value">{props.about}</strong>
              </div>
            ) : null}
            {props.mainEntity ? (
              <div className="lander-semantic__page-fact-card">
                <span className="lander-semantic__page-fact-label">Main entity</span>
                <strong className="lander-semantic__page-fact-value">{props.mainEntity}</strong>
              </div>
            ) : null}
            {props.body}
          </>
        }
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export function CheckoutPage(props: CheckoutPageProps) {
  const base: CheckoutPageStructuredDataInput = {
    name: props.name,
    description: props.description,
    about: thingReference(props.about),
    offers: props.offers?.map((offer) => ({
      "@type": "Offer",
      name: offer.name,
      price: offer.price,
      url: offer.href,
    })),
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.CheckoutPageStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="checkout-page"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Checkout page"}
        description={props.description}
        body={
          <>
            {props.about ? (
              <p className="lander-semantic__checkout-summary">{props.about}</p>
            ) : null}
            {props.offers?.length ? (
              <div className="lander-semantic__checkout-offer-list">
                {props.offers.map((offer) => (
                  <div key={`${offer.name}-${offer.href ?? offer.price ?? ""}`} className="lander-semantic__checkout-offer">
                    <strong>{offer.name}</strong>
                    {offer.price ? <span>{offer.price}</span> : null}
                    {offer.href ? <a href={offer.href}>Open</a> : null}
                  </div>
                ))}
              </div>
            ) : null}
            {props.body}
          </>
        }
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export function CollectionPage(props: CollectionPageProps) {
  const base: CollectionPageStructuredDataInput = {
    name: props.name,
    description: props.description,
    hasPart: props.items?.map((item) => ({ "@type": "CreativeWork", name: item.name, url: item.url })),
    significantLinks: props.significantLinks,
    mainEntity: props.items?.[0] ? { "@type": "Thing", name: props.items[0].name, url: props.items[0].url } : undefined,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.CollectionPageStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="collection-page"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Collection page"}
        description={props.description}
        body={
          <>
            {props.items?.length ? (
              <div className="lander-semantic__collection-grid">
                {props.items.map((item) => (
                  <article key={`${item.name}-${item.url ?? ""}`} className="lander-semantic__collection-card">
                    {item.url ? <a href={item.url}>{item.name}</a> : <strong>{item.name}</strong>}
                    {item.summary ? <p>{item.summary}</p> : null}
                  </article>
                ))}
              </div>
            ) : null}
            {pageLinks(props.significantLinks)}
            {props.body}
          </>
        }
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export function ContactPage(props: ContactPageProps) {
  const base: ContactPageStructuredDataInput = {
    name: props.name,
    description: props.description,
    about: thingReference(props.about),
    significantLinks: props.significantLinks ?? props.contactPoints?.flatMap((point) => (point.href ? [point.href] : [])),
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.ContactPageStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="contact-page"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Contact page"}
        description={props.description}
        body={
          <>
            {props.contactPoints?.length ? (
              <div className="lander-semantic__contact-grid">
                {props.contactPoints.map((point) => (
                  <article key={`${point.label}-${point.value}`} className="lander-semantic__contact-card">
                    <span>{point.label}</span>
                    {point.href ? <a href={point.href}>{point.value}</a> : <strong>{point.value}</strong>}
                  </article>
                ))}
              </div>
            ) : null}
            {pageLinks(props.significantLinks)}
            {props.body}
          </>
        }
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export function ImageGallery(props: ImageGalleryProps) {
  const base: ImageGalleryStructuredDataInput = {
    name: props.name,
    description: props.description,
    hasPart: props.images?.map((item) => ({ "@type": "ImageObject", name: item.name, url: item.url })),
    significantLinks: props.significantLinks,
    mainEntity: props.images?.[0] ? { "@type": "ImageObject", name: props.images[0].name, url: props.images[0].url } : undefined,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.ImageGalleryStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="image-gallery"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Image gallery"}
        description={props.description}
        body={
          <>
            {props.images?.length ? (
              <div className="lander-semantic__collection-grid">
                {props.images.map((item) => (
                  <article key={`${item.name}-${item.url ?? ""}`} className="lander-semantic__collection-card">
                    {item.url ? <a href={item.url}>{item.name}</a> : <strong>{item.name}</strong>}
                    {item.summary ? <p>{item.summary}</p> : null}
                  </article>
                ))}
              </div>
            ) : null}
            {pageLinks(props.significantLinks)}
            {props.body}
          </>
        }
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export function ItemPage(props: ItemPageProps) {
  const base: ItemPageStructuredDataInput = {
    name: props.name,
    description: props.description,
    mainEntity: thingReference(props.mainEntity),
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.ItemPageStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="item-page"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Item page"}
        description={props.description}
        body={
          <>
            <div className="lander-semantic__page-fact-card">
              <span className="lander-semantic__page-fact-label">Main entity</span>
              <strong className="lander-semantic__page-fact-value">{props.mainEntity}</strong>
            </div>
            {props.body}
          </>
        }
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export function MediaGallery(props: MediaGalleryProps) {
  const base: MediaGalleryStructuredDataInput = {
    name: props.name,
    description: props.description,
    hasPart: props.items?.map((item) => ({ "@type": "MediaObject", name: item.name, url: item.url })),
    significantLinks: props.significantLinks,
    mainEntity: props.items?.[0] ? { "@type": "MediaObject", name: props.items[0].name, url: props.items[0].url } : undefined,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.MediaGalleryStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="media-gallery"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Media gallery"}
        description={props.description}
        body={
          <>
            {props.items?.length ? (
              <div className="lander-semantic__collection-grid">
                {props.items.map((item) => (
                  <article key={`${item.name}-${item.url ?? ""}`} className="lander-semantic__collection-card">
                    {item.url ? <a href={item.url}>{item.name}</a> : <strong>{item.name}</strong>}
                    {item.summary ? <p>{item.summary}</p> : null}
                  </article>
                ))}
              </div>
            ) : null}
            {pageLinks(props.significantLinks)}
            {props.body}
          </>
        }
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export function RealEstateListing(props: RealEstateListingProps) {
  const base: RealEstateListingStructuredDataInput = {
    name: props.name,
    description: props.description,
    datePosted: props.datePosted,
    leaseLength: props.leaseLength,
    offers: props.offers?.map((offer) => ({
      "@type": "Offer",
      name: offer.name,
      price: offer.price,
      url: offer.href,
    })),
    mainEntity: props.location ? { "@type": "Place", name: props.location } : undefined,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.RealEstateListingStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="real-estate-listing"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Real estate listing"}
        description={props.description}
        meta={[
          props.location ? { label: "Location", value: props.location } : null,
          props.datePosted ? { label: "Posted", value: props.datePosted } : null,
          props.leaseLength ? { label: "Lease", value: props.leaseLength } : null,
        ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>}
        body={
          <>
            {props.offers?.length ? (
              <div className="lander-semantic__listing-offers">
                {props.offers.map((offer) => (
                  <article key={`${offer.name}-${offer.href ?? offer.price ?? ""}`} className="lander-semantic__listing-offer-card">
                    <strong>{offer.name}</strong>
                    {offer.price ? <p>{offer.price}</p> : null}
                    {offer.href ? <a href={offer.href}>View listing</a> : null}
                  </article>
                ))}
              </div>
            ) : null}
            {props.body}
          </>
        }
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export function SearchResultsPage(props: SearchResultsPageProps) {
  const base: SearchResultsPageStructuredDataInput = {
    name: props.name,
    description: props.description,
    query: props.query,
    mainEntity: props.results?.[0] ? thingReference(props.results[0].url ?? props.results[0].name) : undefined,
    significantLinks: props.results?.flatMap((item) => (item.url ? [item.url] : [])),
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.SearchResultsPageStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="search-results-page"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Search results page"}
        description={props.description}
        body={
          <>
            {props.query ? (
              <div className="lander-semantic__search-query">
                <span>Query</span>
                <strong>{props.query}</strong>
              </div>
            ) : null}
            {props.results?.length ? (
              <div className="lander-semantic__results-list">
                {props.results.map((result) => (
                  <article key={`${result.name}-${result.url ?? ""}`} className="lander-semantic__result-card">
                    {result.url ? <a href={result.url}>{result.name}</a> : <strong>{result.name}</strong>}
                    {result.summary ? <p>{result.summary}</p> : null}
                  </article>
                ))}
              </div>
            ) : null}
            {props.body}
          </>
        }
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export function VideoGallery(props: VideoGalleryProps) {
  const base: VideoGalleryStructuredDataInput = {
    name: props.name,
    description: props.description,
    hasPart: props.videos?.map((video) => ({ "@type": "VideoObject", name: video.name, url: video.url })),
    video: props.videos?.map((video) => ({ "@type": "VideoObject", name: video.name, url: video.url })),
    mainEntity: props.videos?.[0] ? { "@type": "VideoObject", name: props.videos[0].name, url: props.videos[0].url } : undefined,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.VideoGalleryStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="video-gallery"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Video gallery"}
        description={props.description}
        body={
          <>
            {props.videos?.length ? (
              <div className="lander-semantic__video-gallery-grid">
                {props.videos.map((video) => (
                  <article key={`${video.name}-${video.url ?? ""}`} className="lander-semantic__video-gallery-card">
                    {video.thumbnailUrl ? <img src={video.thumbnailUrl} alt={video.name} className="lander-semantic__video-gallery-thumb" /> : null}
                    {video.url ? <a href={video.url}>{video.name}</a> : <strong>{video.name}</strong>}
                    {video.uploadDate ? <p>{video.uploadDate}</p> : null}
                  </article>
                ))}
              </div>
            ) : null}
            {props.body}
          </>
        }
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export function WebContent(props: WebContentProps) {
  const base: WebContentStructuredDataInput = {
    name: props.name,
    description: props.description,
    text: props.text,
    author: props.author ? { "@type": "Person", name: props.author } : undefined,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.WebContentStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="web-content"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Web content"}
        description={props.description}
        meta={props.author ? [{ label: "Author", value: props.author }] : undefined}
        body={
          <>
            {props.text ? <p>{props.text}</p> : null}
            {props.body}
          </>
        }
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}

export function WebPageElement(props: WebPageElementProps) {
  const base: WebPageElementStructuredDataInput = {
    name: props.name,
    description: props.description,
    text: props.text,
    cssSelector: props.cssSelector,
    xpath: props.xpath,
  };
  const structuredData = { ...base, ...(props.structuredDataOverrides ?? {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={props.emitStructuredData}>
        <structuredDataReact.WebPageElementStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="web-page-element"
        title={props.name}
        eyebrow={props.viewModel?.eyebrow ?? "Web page element"}
        description={props.description}
        body={
          <>
            {props.text ? <p>{props.text}</p> : null}
            {props.cssSelector?.length ? bodyList(props.cssSelector) : null}
            {props.xpath?.length ? bodyList(props.xpath) : null}
            {props.body}
          </>
        }
        footer={props.viewModel?.footer}
        className={props.className}
      />
    </>
  );
}
