import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { MaximumVirtualAttendeeCapacityPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyMaximumVirtualAttendeeCapacityProps extends MaximumVirtualAttendeeCapacityPropertyInput, GeneratedPropertyUiProps<MaximumVirtualAttendeeCapacityPropertyInput> {}

export function SchemaPropertyMaximumVirtualAttendeeCapacity({ value: legacyValue, description = "The maximum virtual attendee capacity of an [[Event]] whose [[eventAttendanceMode]] is [[OnlineEventAttendanceMode]] (or the online aspects, in the case of a [[MixedEventAttendanceMode]]). ", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyMaximumVirtualAttendeeCapacityProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyMaximumVirtualAttendeeCapacity as typeof SchemaPropertyMaximumVirtualAttendeeCapacity & { toStructuredData: (props: SchemaPropertyMaximumVirtualAttendeeCapacityProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
