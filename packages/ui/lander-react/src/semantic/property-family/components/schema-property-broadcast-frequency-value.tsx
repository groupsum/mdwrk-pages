import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { BroadcastFrequencyValuePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyBroadcastFrequencyValueProps extends BroadcastFrequencyValuePropertyInput, GeneratedPropertyUiProps<BroadcastFrequencyValuePropertyInput> {}

export function SchemaPropertyBroadcastFrequencyValue({ value: legacyValue, description = "The frequency in MHz for a particular broadcast.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyBroadcastFrequencyValueProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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
