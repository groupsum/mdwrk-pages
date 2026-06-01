import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { PerformersPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPerformersProps extends PerformersPropertyInput, GeneratedPropertyUiProps<PerformersPropertyInput> {}

export function SchemaPropertyPerformers({ value: legacyValue, description = "The main performer or performers of the event&#x2014;for example, a presenter, musician, or actor.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyPerformersProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.PerformersPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-performers",
    shellClassName: "lander-semantic--schema-property-performers",
    title: "performers",
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
