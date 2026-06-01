import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyBroadcastChannelIdProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyBroadcastChannelId({ value, description = "The unique address by which the BroadcastService can be identified in a provider lineup. In US, this is typically a number.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyBroadcastChannelIdProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.BroadcastChannelIdPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-broadcast-channel-id",
    shellClassName: "lander-semantic--schema-property-broadcast-channel-id",
    title: "broadcastChannelId",
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
