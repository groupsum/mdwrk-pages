import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { AvailableChannelPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAvailableChannelProps extends AvailableChannelPropertyInput, GeneratedPropertyUiProps<AvailableChannelPropertyInput> {}

export function SchemaPropertyAvailableChannel({ value: legacyValue, description = "A means of accessing the service (e.g. a phone bank, a web site, a location, etc.).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyAvailableChannelProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AvailableChannelPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-available-channel",
    shellClassName: "lander-semantic--schema-property-available-channel",
    title: "availableChannel",
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
