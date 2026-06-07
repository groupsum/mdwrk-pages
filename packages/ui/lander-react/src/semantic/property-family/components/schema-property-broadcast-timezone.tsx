import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { BroadcastTimezonePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyBroadcastTimezoneProps extends BroadcastTimezonePropertyInput, GeneratedPropertyUiProps<BroadcastTimezonePropertyInput> {}

export function SchemaPropertyBroadcastTimezone({ value: legacyValue, description = "The timezone in [ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601) for which the service bases its broadcasts.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyBroadcastTimezoneProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.BroadcastTimezonePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-broadcast-timezone",
    shellClassName: "lander-semantic--schema-property-broadcast-timezone",
    title: "broadcastTimezone",
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

(SchemaPropertyBroadcastTimezone as typeof SchemaPropertyBroadcastTimezone & { toStructuredData: (props: SchemaPropertyBroadcastTimezoneProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
