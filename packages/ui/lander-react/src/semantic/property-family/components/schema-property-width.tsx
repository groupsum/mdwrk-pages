import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { WidthPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyWidthProps extends WidthPropertyInput, GeneratedPropertyUiProps<WidthPropertyInput> {}

export function SchemaPropertyWidth({ value: legacyValue, description = "The width of the item.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyWidthProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.WidthPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-width",
    shellClassName: "lander-semantic--schema-property-width",
    title: "width",
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
