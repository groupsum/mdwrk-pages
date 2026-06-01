import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { SemanticShell, SemanticStructuredDataGate } from "../shared.js";
import { CheckoutPageStructuredDataInput, PageArtifactUiProps, pageMetaEntries, pagePreviewImage, renderPageArtifactFields } from "./shared.js";

export interface CheckoutPageProps extends CheckoutPageStructuredDataInput, PageArtifactUiProps {
  structuredDataOverrides?: Partial<CheckoutPageStructuredDataInput>;
}

export function CheckoutPage(props: CheckoutPageProps) {
  const {
    body,
    viewModel,
    className,
    emitStructuredData,
    structuredDataOverrides,
    ...base
  } = props;
  const structuredData = { ...base, ...(structuredDataOverrides ?? {}) } as CheckoutPageStructuredDataInput;
  const data = structuredData as Record<string, unknown>;
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={emitStructuredData}>
        <structuredDataReact.CheckoutPageStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="checkout-page"
        title={typeof structuredData.name === "string" ? structuredData.name : "Checkout page"}
        eyebrow={viewModel?.eyebrow ?? "Checkout page"}
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
