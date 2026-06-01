import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { EventsPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyEventsProps extends EventsPropertyInput, GeneratedPropertyUiProps<EventsPropertyInput> {}

export function SchemaPropertyEvents({ value: legacyValue, description = "Upcoming or past events associated with this place or organization.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyEventsProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.EventsPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-events",
    shellClassName: "lander-semantic--schema-property-events",
    title: "events",
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
