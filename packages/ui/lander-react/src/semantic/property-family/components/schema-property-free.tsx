import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { FreePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyFreeProps extends FreePropertyInput, GeneratedPropertyUiProps<FreePropertyInput> {}

export function SchemaPropertyFree({ value: legacyValue, description = "A flag to signal that the item, event, or place is accessible for free.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyFreeProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.FreePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-free",
    shellClassName: "lander-semantic--schema-property-free",
    title: "free",
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
