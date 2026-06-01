import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { SubEventsPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertySubEventsProps extends SubEventsPropertyInput, GeneratedPropertyUiProps<SubEventsPropertyInput> {}

export function SchemaPropertySubEvents({ value: legacyValue, description = "Events that are a part of this event. For example, a conference event includes many presentations, each subEvents of the conference.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertySubEventsProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.SubEventsPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-sub-events",
    shellClassName: "lander-semantic--schema-property-sub-events",
    title: "subEvents",
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
