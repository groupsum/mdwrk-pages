import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { AvailableOnDevicePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAvailableOnDeviceProps extends AvailableOnDevicePropertyInput, GeneratedPropertyUiProps<AvailableOnDevicePropertyInput> {}

export function SchemaPropertyAvailableOnDevice({ value: legacyValue, description = "Device required to run the application. Used in cases where a specific make/model is required to run the application.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyAvailableOnDeviceProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AvailableOnDevicePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-available-on-device",
    shellClassName: "lander-semantic--schema-property-available-on-device",
    title: "availableOnDevice",
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

(SchemaPropertyAvailableOnDevice as typeof SchemaPropertyAvailableOnDevice & { toStructuredData: (props: SchemaPropertyAvailableOnDeviceProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
