import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { AvailableInPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAvailableInProps extends AvailableInPropertyInput, GeneratedPropertyUiProps<AvailableInPropertyInput> {}

export function SchemaPropertyAvailableIn({ value: legacyValue, description = "The location in which the strength is available.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyAvailableInProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AvailableInPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-available-in",
    shellClassName: "lander-semantic--schema-property-available-in",
    title: "availableIn",
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
