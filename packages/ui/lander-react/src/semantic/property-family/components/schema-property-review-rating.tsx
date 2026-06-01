import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ReviewRatingPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyReviewRatingProps extends ReviewRatingPropertyInput, GeneratedPropertyUiProps<ReviewRatingPropertyInput> {}

export function SchemaPropertyReviewRating({ value: legacyValue, description = "The rating given in this review. Note that reviews can themselves be rated. The ```reviewRating``` applies to rating given by the review. The [[aggregateRating]] property applies to the review itself, as a creative work.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyReviewRatingProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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
