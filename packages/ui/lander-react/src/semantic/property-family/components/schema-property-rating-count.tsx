import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyRatingCountProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyRatingCount({ value, description = "The count of total number of ratings.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyRatingCountProps) {
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
