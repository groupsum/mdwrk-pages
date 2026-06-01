import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { StartOffsetPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyStartOffsetProps extends StartOffsetPropertyInput, GeneratedPropertyUiProps<StartOffsetPropertyInput> {}

export function SchemaPropertyStartOffset({ value: legacyValue, description = "The start time of the clip expressed as the number of seconds from the beginning of the work.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyStartOffsetProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.StartOffsetPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-start-offset",
    shellClassName: "lander-semantic--schema-property-start-offset",
    title: "startOffset",
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
