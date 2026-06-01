import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAvailableChannelProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyAvailableChannel({ value, description = "A means of accessing the service (e.g. a phone bank, a web site, a location, etc.).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyAvailableChannelProps) {
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
