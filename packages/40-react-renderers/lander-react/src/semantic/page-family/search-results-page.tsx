import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { SemanticShell, SemanticStructuredDataGate } from "../shared.js";
import { PageArtifactUiProps, SearchResultsPageStructuredDataInput, pageMetaEntries, pagePreviewImage, renderPageArtifactFields } from "./shared.js";

export interface SearchResultsPageProps extends SearchResultsPageStructuredDataInput, PageArtifactUiProps {
  query?: string;
  results?: Array<{ name: string; url?: string; summary?: string }>;
  structuredDataOverrides?: Partial<SearchResultsPageStructuredDataInput>;
}

export function SearchResultsPage(props: SearchResultsPageProps) {
  const { body, viewModel, className, emitStructuredData, structuredDataOverrides, query, results, ...base } = props;
  const structuredData = {
    ...base,
    significantLinks: base.significantLinks ?? results?.flatMap((item) => (item.url ? [item.url] : [])),
    ...(structuredDataOverrides ?? {}),
  } as SearchResultsPageStructuredDataInput;
  const data = { ...(structuredData as Record<string, unknown>), ...(query ? { query } : {}), ...(results ? { results } : {}) };
  return (
    <>
      <SemanticStructuredDataGate emitStructuredData={emitStructuredData}>
        <structuredDataReact.SearchResultsPageStructuredData data={structuredData} />
      </SemanticStructuredDataGate>
      <SemanticShell
        kind="search-results-page"
        title={typeof structuredData.name === "string" ? structuredData.name : "Search results page"}
        eyebrow={viewModel?.eyebrow ?? "Search results page"}
        description={typeof structuredData.description === "string" ? structuredData.description : undefined}
        imageSrc={pagePreviewImage(structuredData as Record<string, unknown>)}
        meta={pageMetaEntries(data, [
          { key: "url", label: "URL" },
          { key: "query", label: "Query" },
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
