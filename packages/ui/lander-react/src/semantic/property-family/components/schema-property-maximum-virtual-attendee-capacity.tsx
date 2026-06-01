import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyMaximumVirtualAttendeeCapacityProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyMaximumVirtualAttendeeCapacity({ value, description = "The maximum virtual attendee capacity of an [[Event]] whose [[eventAttendanceMode]] is [[OnlineEventAttendanceMode]] (or the online aspects, in the case of a [[MixedEventAttendanceMode]]). ", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyMaximumVirtualAttendeeCapacityProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.MaximumVirtualAttendeeCapacityPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-maximum-virtual-attendee-capacity",
    shellClassName: "lander-semantic--schema-property-maximum-virtual-attendee-capacity",
    title: "maximumVirtualAttendeeCapacity",
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
