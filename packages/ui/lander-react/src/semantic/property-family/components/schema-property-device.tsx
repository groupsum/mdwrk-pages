import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { DevicePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyDeviceProps extends DevicePropertyInput, GeneratedPropertyUiProps<DevicePropertyInput> {}

export function SchemaPropertyDevice({ value: legacyValue, description = "Device required to run the application. Used in cases where a specific make/model is required to run the application.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyDeviceProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.DevicePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-device",
    shellClassName: "lander-semantic--schema-property-device",
    title: "device",
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
