import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAvailableOnDeviceProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyAvailableOnDevice({ value, description = "Device required to run the application. Used in cases where a specific make/model is required to run the application.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyAvailableOnDeviceProps) {
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
