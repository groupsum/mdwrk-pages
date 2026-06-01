import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { BroadcastServiceTierPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyBroadcastServiceTierProps extends BroadcastServiceTierPropertyInput, GeneratedPropertyUiProps<BroadcastServiceTierPropertyInput> {}

export function SchemaPropertyBroadcastServiceTier({ value: legacyValue, description = "The type of service required to have access to the channel (e.g. Standard or Premium).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyBroadcastServiceTierProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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
