import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyMaximumPhysicalAttendeeCapacityProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyMaximumPhysicalAttendeeCapacity({ value, description = "The maximum physical attendee capacity of an [[Event]] whose [[eventAttendanceMode]] is [[OfflineEventAttendanceMode]] (or the offline aspects, in the case of a [[MixedEventAttendanceMode]]). ", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyMaximumPhysicalAttendeeCapacityProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.MaximumPhysicalAttendeeCapacityPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-maximum-physical-attendee-capacity",
    shellClassName: "lander-semantic--schema-property-maximum-physical-attendee-capacity",
    title: "maximumPhysicalAttendeeCapacity",
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
