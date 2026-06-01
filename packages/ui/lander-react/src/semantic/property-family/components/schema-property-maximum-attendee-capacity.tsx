import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { MaximumAttendeeCapacityPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyMaximumAttendeeCapacityProps extends MaximumAttendeeCapacityPropertyInput, GeneratedPropertyUiProps<MaximumAttendeeCapacityPropertyInput> {}

export function SchemaPropertyMaximumAttendeeCapacity({ value: legacyValue, description = "The total number of individuals that may attend an event or venue.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyMaximumAttendeeCapacityProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.MaximumAttendeeCapacityPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-maximum-attendee-capacity",
    shellClassName: "lander-semantic--schema-property-maximum-attendee-capacity",
    title: "maximumAttendeeCapacity",
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
