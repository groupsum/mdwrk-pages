import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyBroadcastFrequencyValueProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyBroadcastFrequencyValue({ value, description = "The frequency in MHz for a particular broadcast.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyBroadcastFrequencyValueProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.BroadcastFrequencyValuePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-broadcast-frequency-value",
    shellClassName: "lander-semantic--schema-property-broadcast-frequency-value",
    title: "broadcastFrequencyValue",
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
