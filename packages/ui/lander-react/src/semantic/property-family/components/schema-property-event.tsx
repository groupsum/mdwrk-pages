import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { EventPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyEventProps extends EventPropertyInput, GeneratedPropertyUiProps<EventPropertyInput> {}

export function SchemaPropertyEvent({ value: legacyValue, description = "Upcoming or past event associated with this place, organization, or action.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyEventProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.EventPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-event",
    shellClassName: "lander-semantic--schema-property-event",
    title: "event",
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
