import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyDeviceProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyDevice({ value, description = "Device required to run the application. Used in cases where a specific make/model is required to run the application.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyDeviceProps) {
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
