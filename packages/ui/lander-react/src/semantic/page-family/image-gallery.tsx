import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { SemanticShell, SemanticStructuredDataGate } from "../shared.js";
import { ImageGalleryStructuredDataInput, PageViewModel, pageLinks } from "./shared.js";

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
