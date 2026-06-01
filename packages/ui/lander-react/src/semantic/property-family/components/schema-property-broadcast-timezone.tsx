import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyBroadcastTimezoneProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyBroadcastTimezone({ value, description = "The timezone in [ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601) for which the service bases its broadcasts.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyBroadcastTimezoneProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.BroadcastTimezonePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-broadcast-timezone",
    shellClassName: "lander-semantic--schema-property-broadcast-timezone",
    title: "broadcastTimezone",
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
