import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { FounderPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyFounderProps extends FounderPropertyInput, GeneratedPropertyUiProps<FounderPropertyInput> {}

export function SchemaPropertyFounder({ value: legacyValue, description = "A person or organization who founded this organization.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyFounderProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.FounderPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-founder",
    shellClassName: "lander-semantic--schema-property-founder",
    title: "founder",
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
