import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ReviewAspectPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyReviewAspectProps extends ReviewAspectPropertyInput, GeneratedPropertyUiProps<ReviewAspectPropertyInput> {}

export function SchemaPropertyReviewAspect({ value: legacyValue, description = "This Review or Rating is relevant to this part or facet of the itemReviewed.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyReviewAspectProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ReviewAspectPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-review-aspect",
    shellClassName: "lander-semantic--schema-property-review-aspect",
    title: "reviewAspect",
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
