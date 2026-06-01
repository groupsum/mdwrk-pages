import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { SpousePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertySpouseProps extends SpousePropertyInput, GeneratedPropertyUiProps<SpousePropertyInput> {}

export function SchemaPropertySpouse({ value: legacyValue, description = "The person's spouse.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertySpouseProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.SpousePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-spouse",
    shellClassName: "lander-semantic--schema-property-spouse",
    title: "spouse",
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
