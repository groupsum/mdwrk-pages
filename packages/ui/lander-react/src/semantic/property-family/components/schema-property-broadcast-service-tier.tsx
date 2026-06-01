import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyBroadcastServiceTierProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyBroadcastServiceTier({ value, description = "The type of service required to have access to the channel (e.g. Standard or Premium).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyBroadcastServiceTierProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.BroadcastServiceTierPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-broadcast-service-tier",
    shellClassName: "lander-semantic--schema-property-broadcast-service-tier",
    title: "broadcastServiceTier",
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
