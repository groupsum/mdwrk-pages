import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyDoorTimeProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyDoorTime({ value, description = "The time admission will commence.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyDoorTimeProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.DoorTimePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-door-time",
    shellClassName: "lander-semantic--schema-property-door-time",
    title: "doorTime",
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
