import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyMaximumAttendeeCapacityProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyMaximumAttendeeCapacity({ value, description = "The total number of individuals that may attend an event or venue.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyMaximumAttendeeCapacityProps) {
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
