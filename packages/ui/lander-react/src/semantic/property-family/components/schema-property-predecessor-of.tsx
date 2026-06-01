import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { PredecessorOfPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPredecessorOfProps extends PredecessorOfPropertyInput, GeneratedPropertyUiProps<PredecessorOfPropertyInput> {}

export function SchemaPropertyPredecessorOf({ value: legacyValue, description = "A pointer from a previous, often discontinued variant of the product to its newer variant.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyPredecessorOfProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.PredecessorOfPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-predecessor-of",
    shellClassName: "lander-semantic--schema-property-predecessor-of",
    title: "predecessorOf",
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
