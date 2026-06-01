import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { SeeksPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertySeeksProps extends SeeksPropertyInput, GeneratedPropertyUiProps<SeeksPropertyInput> {}

export function SchemaPropertySeeks({ value: legacyValue, description = "A pointer to products or services sought by the organization or person (demand).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertySeeksProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.SeeksPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-seeks",
    shellClassName: "lander-semantic--schema-property-seeks",
    title: "seeks",
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
