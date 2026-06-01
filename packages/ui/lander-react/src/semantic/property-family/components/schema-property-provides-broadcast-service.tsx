import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyProvidesBroadcastServiceProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyProvidesBroadcastService({ value, description = "The BroadcastService offered on this channel.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyProvidesBroadcastServiceProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ProvidesBroadcastServicePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-provides-broadcast-service",
    shellClassName: "lander-semantic--schema-property-provides-broadcast-service",
    title: "providesBroadcastService",
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
