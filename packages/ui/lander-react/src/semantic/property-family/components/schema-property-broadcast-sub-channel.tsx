import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyBroadcastSubChannelProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyBroadcastSubChannel({ value, description = "The subchannel used for the broadcast.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyBroadcastSubChannelProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.BroadcastSubChannelPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-broadcast-sub-channel",
    shellClassName: "lander-semantic--schema-property-broadcast-sub-channel",
    title: "broadcastSubChannel",
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
