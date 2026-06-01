import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { RatingExplanationPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyRatingExplanationProps extends RatingExplanationPropertyInput, GeneratedPropertyUiProps<RatingExplanationPropertyInput> {}

export function SchemaPropertyRatingExplanation({ value: legacyValue, description = "A short explanation (e.g. one to two sentences) providing background context and other information that led to the conclusion expressed in the rating. This is particularly applicable to ratings associated with \"fact check\" markup using [[ClaimReview]].", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyRatingExplanationProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.RatingExplanationPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-rating-explanation",
    shellClassName: "lander-semantic--schema-property-rating-explanation",
    title: "ratingExplanation",
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
