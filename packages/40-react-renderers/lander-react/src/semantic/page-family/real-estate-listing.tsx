import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { SemanticShell, SemanticStructuredDataGate } from "../shared.js";
import { PageArtifactUiProps, RealEstateListingStructuredDataInput, pageMetaEntries, pagePreviewImage, renderPageArtifactFields } from "./shared.js";

export interface RealEstateListingProps extends RealEstateListingStructuredDataInput, PageArtifactUiProps {
  structuredDataOverrides?: Partial<RealEstateListingStructuredDataInput>;
}

export function RealEstateListing(props: RealEstateListingProps) {
  const { body, viewModel, className, emitStructuredData, structuredDataOverrides, ...base } = props;
  const structuredData = { ...base, ...(structuredDataOverrides ?? {}) } as RealEstateListingStructuredDataInput;
  const data = structuredData as Record<string, unknown>;
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={emitStructuredData}>
        <structuredDataReact.RealEstateListingStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="real-estate-listing"
        title={typeof structuredData.name === "string" ? structuredData.name : "Real estate listing"}
        eyebrow={viewModel?.eyebrow ?? "Real estate listing"}
        description={typeof structuredData.description === "string" ? structuredData.description : undefined}
        imageSrc={pagePreviewImage(data)}
        meta={pageMetaEntries(data, [
          { key: "url", label: "URL" },
          { key: "datePosted", label: "Posted" },
          { key: "datePublished", label: "Published" },
          { key: "dateModified", label: "Updated" },
          { key: "leaseLength", label: "Lease" },
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
