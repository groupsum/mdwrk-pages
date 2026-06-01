import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAttendeeProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyAttendee({ value, description = "A person or organization attending the event.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyAttendeeProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AttendeePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-attendee",
    shellClassName: "lander-semantic--schema-property-attendee",
    title: "attendee",
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
