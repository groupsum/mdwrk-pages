import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { BestRatingPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyBestRatingProps extends BestRatingPropertyInput, GeneratedPropertyUiProps<BestRatingPropertyInput> {}

export function SchemaPropertyBestRating({ value: legacyValue, description = "The highest value allowed in this rating system.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyBestRatingProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.BestRatingPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-best-rating",
    shellClassName: "lander-semantic--schema-property-best-rating",
    title: "bestRating",
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
