import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyRatingExplanationProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyRatingExplanation({ value, description = "A short explanation (e.g. one to two sentences) providing background context and other information that led to the conclusion expressed in the rating. This is particularly applicable to ratings associated with \"fact check\" markup using [[ClaimReview]].", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyRatingExplanationProps) {
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
