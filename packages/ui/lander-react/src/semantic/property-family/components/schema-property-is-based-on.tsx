import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { IsBasedOnPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyIsBasedOnProps extends IsBasedOnPropertyInput, GeneratedPropertyUiProps<IsBasedOnPropertyInput> {}

export function SchemaPropertyIsBasedOn({ value: legacyValue, description = "A resource from which this work is derived or from which it is a modification or adaptation.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyIsBasedOnProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.IsBasedOnPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-is-based-on",
    shellClassName: "lander-semantic--schema-property-is-based-on",
    title: "isBasedOn",
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
