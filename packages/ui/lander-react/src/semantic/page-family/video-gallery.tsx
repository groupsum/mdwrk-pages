import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { SemanticShell, SemanticStructuredDataGate } from "../shared.js";
import { PageArtifactUiProps, VideoGalleryStructuredDataInput, pageMetaEntries, pagePreviewImage, renderPageArtifactFields } from "./shared.js";

export interface VideoGalleryProps extends VideoGalleryStructuredDataInput, PageArtifactUiProps {
  structuredDataOverrides?: Partial<VideoGalleryStructuredDataInput>;
}

export function VideoGallery(props: VideoGalleryProps) {
  const { body, viewModel, className, emitStructuredData, structuredDataOverrides, ...base } = props;
  const structuredData = { ...base, ...(structuredDataOverrides ?? {}) } as VideoGalleryStructuredDataInput;
  const data = structuredData as Record<string, unknown>;
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={emitStructuredData}>
        <structuredDataReact.VideoGalleryStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="video-gallery"
        title={typeof structuredData.name === "string" ? structuredData.name : "Video gallery"}
        eyebrow={viewModel?.eyebrow ?? "Video gallery"}
        description={typeof structuredData.description === "string" ? structuredData.description : undefined}
        imageSrc={pagePreviewImage(data)}
        meta={pageMetaEntries(data, [
          { key: "url", label: "URL" },
          { key: "datePublished", label: "Published" },
          { key: "dateModified", label: "Updated" },
        ])}
        body={
          <>
            {renderPageArtifactFields(data)}
            {body}
          </>
        }
        footer={viewModel?.footer}
        className={className}
      />
    </>
  );
}
