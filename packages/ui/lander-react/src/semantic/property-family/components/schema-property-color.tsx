import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ColorPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyColorProps extends ColorPropertyInput, GeneratedPropertyUiProps<ColorPropertyInput> {}

export function SchemaPropertyColor({ value: legacyValue, description = "The color of the product.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyColorProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ColorPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-color",
    shellClassName: "lander-semantic--schema-property-color",
    title: "color",
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
