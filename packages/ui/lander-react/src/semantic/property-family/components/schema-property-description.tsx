import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { DescriptionPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyDescriptionProps extends DescriptionPropertyInput, GeneratedPropertyUiProps<DescriptionPropertyInput> {}

export function SchemaPropertyDescription({ value: legacyValue, description = "A description of the item.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyDescriptionProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.DescriptionPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-description",
    shellClassName: "lander-semantic--schema-property-description",
    title: "description",
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
