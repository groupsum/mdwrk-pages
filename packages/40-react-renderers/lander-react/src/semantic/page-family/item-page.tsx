import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { SemanticShell, SemanticStructuredDataGate } from "../shared.js";
import { ItemPageStructuredDataInput, PageArtifactUiProps, pageMetaEntries, pagePreviewImage, renderPageArtifactFields, thingReference } from "./shared.js";

export interface ItemPageProps extends ItemPageStructuredDataInput, PageArtifactUiProps {
  structuredDataOverrides?: Partial<ItemPageStructuredDataInput>;
}

export function ItemPage(props: ItemPageProps) {
  const { body, viewModel, className, emitStructuredData, structuredDataOverrides, ...base } = props;
  const structuredData = {
    ...base,
    mainEntity: thingReference(base.mainEntity),
    ...(structuredDataOverrides ?? {}),
  } as ItemPageStructuredDataInput;
  const visibleData = base as Record<string, unknown>;
  const data = structuredData as Record<string, unknown>;
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={emitStructuredData}>
        <structuredDataReact.ItemPageStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="item-page"
        title={typeof base.name === "string" ? base.name : "Item page"}
        eyebrow={viewModel?.eyebrow ?? "Item page"}
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
