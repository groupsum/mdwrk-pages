import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { AreaPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAreaProps extends AreaPropertyInput, GeneratedPropertyUiProps<AreaPropertyInput> {}

export function SchemaPropertyArea({ value: legacyValue, description = "The area within which users can expect to reach the broadcast service.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyAreaProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AreaPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-area",
    shellClassName: "lander-semantic--schema-property-area",
    title: "area",
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
