import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { LastReviewedPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyLastReviewedProps extends LastReviewedPropertyInput, GeneratedPropertyUiProps<LastReviewedPropertyInput> {}

export function SchemaPropertyLastReviewed({ value: legacyValue, description = "Date on which the content on this web page was last reviewed for accuracy and/or completeness.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyLastReviewedProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.LastReviewedPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-last-reviewed",
    shellClassName: "lander-semantic--schema-property-last-reviewed",
    title: "lastReviewed",
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
