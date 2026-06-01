import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyInBroadcastLineupProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyInBroadcastLineup({ value, description = "The CableOrSatelliteService offering the channel.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyInBroadcastLineupProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.InBroadcastLineupPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-in-broadcast-lineup",
    shellClassName: "lander-semantic--schema-property-in-broadcast-lineup",
    title: "inBroadcastLineup",
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
