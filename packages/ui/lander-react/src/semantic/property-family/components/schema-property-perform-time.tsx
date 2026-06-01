import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { PerformTimePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPerformTimeProps extends PerformTimePropertyInput, GeneratedPropertyUiProps<PerformTimePropertyInput> {}

export function SchemaPropertyPerformTime({ value: legacyValue, description = "The length of time it takes to perform instructions or a direction (not including time to prepare the supplies), in [ISO 8601 duration format](http://en.wikipedia.org/wiki/ISO_8601).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyPerformTimeProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.PerformTimePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-perform-time",
    shellClassName: "lander-semantic--schema-property-perform-time",
    title: "performTime",
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
