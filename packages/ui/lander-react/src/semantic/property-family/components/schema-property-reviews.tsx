import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyReviewsProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyReviews({ value, description = "Review of the item.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyReviewsProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ReviewsPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-reviews",
    shellClassName: "lander-semantic--schema-property-reviews",
    title: "reviews",
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
