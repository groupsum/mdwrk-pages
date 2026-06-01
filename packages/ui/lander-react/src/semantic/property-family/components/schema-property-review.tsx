import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ReviewPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyReviewProps extends ReviewPropertyInput, GeneratedPropertyUiProps<ReviewPropertyInput> {}

export function SchemaPropertyReview({ value: legacyValue, description = "A review of the item.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyReviewProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ReviewPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-review",
    shellClassName: "lander-semantic--schema-property-review",
    title: "review",
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
