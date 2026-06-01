import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { MaximumPhysicalAttendeeCapacityPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyMaximumPhysicalAttendeeCapacityProps extends MaximumPhysicalAttendeeCapacityPropertyInput, GeneratedPropertyUiProps<MaximumPhysicalAttendeeCapacityPropertyInput> {}

export function SchemaPropertyMaximumPhysicalAttendeeCapacity({ value: legacyValue, description = "The maximum physical attendee capacity of an [[Event]] whose [[eventAttendanceMode]] is [[OfflineEventAttendanceMode]] (or the offline aspects, in the case of a [[MixedEventAttendanceMode]]). ", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyMaximumPhysicalAttendeeCapacityProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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
