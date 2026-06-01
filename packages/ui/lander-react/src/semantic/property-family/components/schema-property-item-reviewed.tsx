import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ItemReviewedPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyItemReviewedProps extends ItemReviewedPropertyInput, GeneratedPropertyUiProps<ItemReviewedPropertyInput> {}

export function SchemaPropertyItemReviewed({ value: legacyValue, description = "The item that is being reviewed/rated.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyItemReviewedProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ItemReviewedPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-item-reviewed",
    shellClassName: "lander-semantic--schema-property-item-reviewed",
    title: "itemReviewed",
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
