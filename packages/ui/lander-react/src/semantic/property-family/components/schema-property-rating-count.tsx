import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { RatingCountPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyRatingCountProps extends RatingCountPropertyInput, GeneratedPropertyUiProps<RatingCountPropertyInput> {}

export function SchemaPropertyRatingCount({ value: legacyValue, description = "The count of total number of ratings.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyRatingCountProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.RatingCountPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-rating-count",
    shellClassName: "lander-semantic--schema-property-rating-count",
    title: "ratingCount",
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
