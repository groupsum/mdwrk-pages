import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ReviewsPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyReviewsProps extends ReviewsPropertyInput, GeneratedPropertyUiProps<ReviewsPropertyInput> {}

export function SchemaPropertyReviews({ value: legacyValue, description = "Review of the item.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyReviewsProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyReviews as typeof SchemaPropertyReviews & { toStructuredData: (props: SchemaPropertyReviewsProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
