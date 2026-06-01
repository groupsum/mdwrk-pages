import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { SemanticShell, SemanticStructuredDataGate } from "../shared.js";
import { MediaGalleryStructuredDataInput, PageViewModel, pageLinks } from "./shared.js";

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
