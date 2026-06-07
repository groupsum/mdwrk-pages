import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ArchivedAtPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyArchivedAtProps extends ArchivedAtPropertyInput, GeneratedPropertyUiProps<ArchivedAtPropertyInput> {}

export function SchemaPropertyArchivedAt({ value: legacyValue, description = "Indicates a page or other link involved in archival of a [[CreativeWork]]. In the case of [[MediaReview]], the items in a [[MediaReviewItem]] may often become inaccessible, but be archived by archival, journalistic, activist, or law enforcement organizations. In such cases, the referenced page may not directly publish the content.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyArchivedAtProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyArchivedAt as typeof SchemaPropertyArchivedAt & { toStructuredData: (props: SchemaPropertyArchivedAtProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
