import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { RemainingAttendeeCapacityPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyRemainingAttendeeCapacityProps extends RemainingAttendeeCapacityPropertyInput, GeneratedPropertyUiProps<RemainingAttendeeCapacityPropertyInput> {}

export function SchemaPropertyRemainingAttendeeCapacity({ value: legacyValue, description = "The number of attendee places for an event that remain unallocated.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyRemainingAttendeeCapacityProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.RemainingAttendeeCapacityPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-remaining-attendee-capacity",
    shellClassName: "lander-semantic--schema-property-remaining-attendee-capacity",
    title: "remainingAttendeeCapacity",
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
