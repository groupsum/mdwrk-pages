import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { MinValuePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyMinValueProps extends MinValuePropertyInput, GeneratedPropertyUiProps<MinValuePropertyInput> {}

export function SchemaPropertyMinValue({ value: legacyValue, description = "The lower value of some characteristic or property.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyMinValueProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.MinValuePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-min-value",
    shellClassName: "lander-semantic--schema-property-min-value",
    title: "minValue",
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
