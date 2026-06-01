import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { HasBroadcastChannelPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyHasBroadcastChannelProps extends HasBroadcastChannelPropertyInput, GeneratedPropertyUiProps<HasBroadcastChannelPropertyInput> {}

export function SchemaPropertyHasBroadcastChannel({ value: legacyValue, description = "A broadcast channel of a broadcast service.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyHasBroadcastChannelProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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
