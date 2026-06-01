import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { UsesDevicePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyUsesDeviceProps extends UsesDevicePropertyInput, GeneratedPropertyUiProps<UsesDevicePropertyInput> {}

export function SchemaPropertyUsesDevice({ value: legacyValue, description = "Device used to perform the test.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyUsesDeviceProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.UsesDevicePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-uses-device",
    shellClassName: "lander-semantic--schema-property-uses-device",
    title: "usesDevice",
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
