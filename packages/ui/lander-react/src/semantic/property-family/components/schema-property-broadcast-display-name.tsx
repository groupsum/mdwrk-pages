import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyBroadcastDisplayNameProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyBroadcastDisplayName({ value, description = "The name displayed in the channel guide. For many US affiliates, it is the network name.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyBroadcastDisplayNameProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.BroadcastDisplayNamePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-broadcast-display-name",
    shellClassName: "lander-semantic--schema-property-broadcast-display-name",
    title: "broadcastDisplayName",
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
