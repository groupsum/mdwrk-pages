import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyRemainingAttendeeCapacityProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyRemainingAttendeeCapacity({ value, description = "The number of attendee places for an event that remain unallocated.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyRemainingAttendeeCapacityProps) {
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
