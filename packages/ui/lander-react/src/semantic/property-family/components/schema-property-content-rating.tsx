import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ContentRatingPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyContentRatingProps extends ContentRatingPropertyInput, GeneratedPropertyUiProps<ContentRatingPropertyInput> {}

export function SchemaPropertyContentRating({ value: legacyValue, description = "Official rating of a piece of content&#x2014;for example, 'MPAA PG-13'.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyContentRatingProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ContentRatingPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-content-rating",
    shellClassName: "lander-semantic--schema-property-content-rating",
    title: "contentRating",
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
