import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { TextPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyTextProps extends TextPropertyInput, GeneratedPropertyUiProps<TextPropertyInput> {}

export function SchemaPropertyText({ value: legacyValue, description = "The textual content of this CreativeWork.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyTextProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.TextPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-text",
    shellClassName: "lander-semantic--schema-property-text",
    title: "text",
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
