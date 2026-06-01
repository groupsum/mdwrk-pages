import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { OwnerPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyOwnerProps extends OwnerPropertyInput, GeneratedPropertyUiProps<OwnerPropertyInput> {}

export function SchemaPropertyOwner({ value: legacyValue, description = "A person or organization who owns this Thing.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyOwnerProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.OwnerPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-owner",
    shellClassName: "lander-semantic--schema-property-owner",
    title: "owner",
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
