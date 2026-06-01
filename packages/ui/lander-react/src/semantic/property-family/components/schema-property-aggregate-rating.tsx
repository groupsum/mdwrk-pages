import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { AggregateRatingPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAggregateRatingProps extends AggregateRatingPropertyInput, GeneratedPropertyUiProps<AggregateRatingPropertyInput> {}

export function SchemaPropertyAggregateRating({ value: legacyValue, description = "The overall rating, based on a collection of reviews or ratings, of the item.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyAggregateRatingProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AggregateRatingPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-aggregate-rating",
    shellClassName: "lander-semantic--schema-property-aggregate-rating",
    title: "aggregateRating",
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
