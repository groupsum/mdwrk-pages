import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { AssociatedReviewPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAssociatedReviewProps extends AssociatedReviewPropertyInput, GeneratedPropertyUiProps<AssociatedReviewPropertyInput> {}

export function SchemaPropertyAssociatedReview({ value: legacyValue, description = "An associated [[Review]].", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyAssociatedReviewProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AssociatedReviewPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-associated-review",
    shellClassName: "lander-semantic--schema-property-associated-review",
    title: "associatedReview",
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
