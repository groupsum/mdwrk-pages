import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { InBroadcastLineupPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyInBroadcastLineupProps extends InBroadcastLineupPropertyInput, GeneratedPropertyUiProps<InBroadcastLineupPropertyInput> {}

export function SchemaPropertyInBroadcastLineup({ value: legacyValue, description = "The CableOrSatelliteService offering the channel.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyInBroadcastLineupProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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
