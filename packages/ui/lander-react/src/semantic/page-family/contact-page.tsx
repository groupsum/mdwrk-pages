import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { SemanticShell, SemanticStructuredDataGate } from "../shared.js";
import { ContactPageStructuredDataInput, PageArtifactUiProps, pageMetaEntries, pagePreviewImage, renderPageArtifactFields } from "./shared.js";

export interface ContactPageProps extends ContactPageStructuredDataInput, PageArtifactUiProps {
  structuredDataOverrides?: Partial<ContactPageStructuredDataInput>;
}

export function ContactPage(props: ContactPageProps) {
  const { body, viewModel, className, emitStructuredData, structuredDataOverrides, ...base } = props;
  const structuredData = { ...base, ...(structuredDataOverrides ?? {}) } as ContactPageStructuredDataInput;
  const visibleData = base as Record<string, unknown>;
  const data = structuredData as Record<string, unknown>;
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={emitStructuredData}>
        <structuredDataReact.ContactPageStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="contact-page"
        title={typeof base.name === "string" ? base.name : "Contact page"}
        eyebrow={viewModel?.eyebrow ?? "Contact page"}
        description={typeof base.description === "string" ? base.description : undefined}
        imageSrc={pagePreviewImage(visibleData)}
        meta={pageMetaEntries(visibleData, [
          { key: "url", label: "URL" },
          { key: "datePublished", label: "Published" },
          { key: "dateModified", label: "Updated" },
        ])}
        body={
          <>
            {renderPageArtifactFields(visibleData)}
            {body}
          </>
        }
        footer={viewModel?.footer}
        className={className}
      />
    </>
  );
}
