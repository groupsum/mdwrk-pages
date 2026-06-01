import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { FirstPerformancePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyFirstPerformanceProps extends FirstPerformancePropertyInput, GeneratedPropertyUiProps<FirstPerformancePropertyInput> {}

export function SchemaPropertyFirstPerformance({ value: legacyValue, description = "The date and place the work was first performed.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyFirstPerformanceProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.FirstPerformancePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-first-performance",
    shellClassName: "lander-semantic--schema-property-first-performance",
    title: "firstPerformance",
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
