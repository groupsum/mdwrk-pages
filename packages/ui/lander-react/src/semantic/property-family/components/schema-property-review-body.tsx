import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ReviewBodyPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyReviewBodyProps extends ReviewBodyPropertyInput, GeneratedPropertyUiProps<ReviewBodyPropertyInput> {}

export function SchemaPropertyReviewBody({ value: legacyValue, description = "The actual body of the review.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyReviewBodyProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ReviewBodyPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-review-body",
    shellClassName: "lander-semantic--schema-property-review-body",
    title: "reviewBody",
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
