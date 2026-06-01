import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyHasBroadcastChannelProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyHasBroadcastChannel({ value, description = "A broadcast channel of a broadcast service.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyHasBroadcastChannelProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.HasBroadcastChannelPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-has-broadcast-channel",
    shellClassName: "lander-semantic--schema-property-has-broadcast-channel",
    title: "hasBroadcastChannel",
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
