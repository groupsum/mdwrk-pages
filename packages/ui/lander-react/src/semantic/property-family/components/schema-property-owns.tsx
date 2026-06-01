import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { OwnsPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyOwnsProps extends OwnsPropertyInput, GeneratedPropertyUiProps<OwnsPropertyInput> {}

export function SchemaPropertyOwns({ value: legacyValue, description = "Things owned by the organization or person.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyOwnsProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.OwnsPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-owns",
    shellClassName: "lander-semantic--schema-property-owns",
    title: "owns",
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
