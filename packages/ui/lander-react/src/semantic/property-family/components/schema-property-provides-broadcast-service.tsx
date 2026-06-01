import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ProvidesBroadcastServicePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyProvidesBroadcastServiceProps extends ProvidesBroadcastServicePropertyInput, GeneratedPropertyUiProps<ProvidesBroadcastServicePropertyInput> {}

export function SchemaPropertyProvidesBroadcastService({ value: legacyValue, description = "The BroadcastService offered on this channel.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyProvidesBroadcastServiceProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ProvidesBroadcastServicePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-provides-broadcast-service",
    shellClassName: "lander-semantic--schema-property-provides-broadcast-service",
    title: "providesBroadcastService",
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
