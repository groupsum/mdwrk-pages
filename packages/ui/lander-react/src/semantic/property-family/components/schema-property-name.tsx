import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { NamePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyNameProps extends NamePropertyInput, GeneratedPropertyUiProps<NamePropertyInput> {}

export function SchemaPropertyName({ value: legacyValue, description = "The name of the item.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyNameProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.NamePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-name",
    shellClassName: "lander-semantic--schema-property-name",
    title: "name",
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
