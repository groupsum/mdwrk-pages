import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyBroadcastFrequencyProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyBroadcastFrequency({ value, description = "The frequency used for over-the-air broadcasts. Numeric values or simple ranges, e.g. 87-99. In addition a shortcut idiom is supported for frequencies of AM and FM radio channels, e.g. \"87 FM\".", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyBroadcastFrequencyProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.BroadcastFrequencyPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-broadcast-frequency",
    shellClassName: "lander-semantic--schema-property-broadcast-frequency",
    title: "broadcastFrequency",
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
