import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyUsesDeviceProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyUsesDevice({ value, description = "Device used to perform the test.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyUsesDeviceProps) {
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
