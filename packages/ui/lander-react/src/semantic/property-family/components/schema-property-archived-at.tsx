import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyArchivedAtProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyArchivedAt({ value, description = "Indicates a page or other link involved in archival of a [[CreativeWork]]. In the case of [[MediaReview]], the items in a [[MediaReviewItem]] may often become inaccessible, but be archived by archival, journalistic, activist, or law enforcement organizations. In such cases, the referenced page may not directly publish the content.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyArchivedAtProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ArchivedAtPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-archived-at",
    shellClassName: "lander-semantic--schema-property-archived-at",
    title: "archivedAt",
    value,
    description,
    examples,
    body,
    className,
    emitStructuredData,
    structuredDataOverrides,
    viewModel,
  });
}
