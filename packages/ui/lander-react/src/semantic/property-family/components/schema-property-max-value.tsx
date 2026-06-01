import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { MaxValuePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyMaxValueProps extends MaxValuePropertyInput, GeneratedPropertyUiProps<MaxValuePropertyInput> {}

export function SchemaPropertyMaxValue({ value: legacyValue, description = "The upper value of some characteristic or property.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyMaxValueProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.MaxValuePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-max-value",
    shellClassName: "lander-semantic--schema-property-max-value",
    title: "maxValue",
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
