import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { BroadcasterPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyBroadcasterProps extends BroadcasterPropertyInput, GeneratedPropertyUiProps<BroadcasterPropertyInput> {}

export function SchemaPropertyBroadcaster({ value: legacyValue, description = "The organization owning or operating the broadcast service.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyBroadcasterProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.BroadcasterPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-broadcaster",
    shellClassName: "lander-semantic--schema-property-broadcaster",
    title: "broadcaster",
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
