import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAggregateRatingProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyAggregateRating({ value, description = "The overall rating, based on a collection of reviews or ratings, of the item.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyAggregateRatingProps) {
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
