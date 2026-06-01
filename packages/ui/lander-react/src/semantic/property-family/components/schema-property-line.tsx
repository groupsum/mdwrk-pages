import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { LinePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyLineProps extends LinePropertyInput, GeneratedPropertyUiProps<LinePropertyInput> {}

export function SchemaPropertyLine({ value: legacyValue, description = "A line is a point-to-point path consisting of two or more points. A line is expressed as a series of two or more point objects separated by space.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyLineProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.LinePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-line",
    shellClassName: "lander-semantic--schema-property-line",
    title: "line",
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
