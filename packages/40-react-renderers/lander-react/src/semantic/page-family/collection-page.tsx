import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { SemanticShell, SemanticStructuredDataGate } from "../shared.js";
import { CollectionPageStructuredDataInput, PageArtifactUiProps, pageMetaEntries, pagePreviewImage, renderPageArtifactFields } from "./shared.js";

export interface CollectionPageProps extends CollectionPageStructuredDataInput, PageArtifactUiProps {
  structuredDataOverrides?: Partial<CollectionPageStructuredDataInput>;
}

export function CollectionPage(props: CollectionPageProps) {
  const { body, viewModel, className, emitStructuredData, structuredDataOverrides, ...base } = props;
  const structuredData = { ...base, ...(structuredDataOverrides ?? {}) } as CollectionPageStructuredDataInput;
  const data = structuredData as Record<string, unknown>;
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={emitStructuredData}>
        <structuredDataReact.CollectionPageStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="collection-page"
        title={typeof structuredData.name === "string" ? structuredData.name : "Collection page"}
        eyebrow={viewModel?.eyebrow ?? "Collection page"}
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
