import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyReviewRatingProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyReviewRating({ value, description = "The rating given in this review. Note that reviews can themselves be rated. The ```reviewRating``` applies to rating given by the review. The [[aggregateRating]] property applies to the review itself, as a creative work.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyReviewRatingProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ReviewRatingPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-review-rating",
    shellClassName: "lander-semantic--schema-property-review-rating",
    title: "reviewRating",
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
