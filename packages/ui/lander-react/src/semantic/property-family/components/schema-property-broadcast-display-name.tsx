import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { BroadcastDisplayNamePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyBroadcastDisplayNameProps extends BroadcastDisplayNamePropertyInput, GeneratedPropertyUiProps<BroadcastDisplayNamePropertyInput> {}

export function SchemaPropertyBroadcastDisplayName({ value: legacyValue, description = "The name displayed in the channel guide. For many US affiliates, it is the network name.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyBroadcastDisplayNameProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.BroadcastDisplayNamePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-broadcast-display-name",
    shellClassName: "lander-semantic--schema-property-broadcast-display-name",
    title: "broadcastDisplayName",
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
