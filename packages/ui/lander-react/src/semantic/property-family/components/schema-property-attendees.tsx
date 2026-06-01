import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAttendeesProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyAttendees({ value, description = "A person attending the event.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyAttendeesProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AttendeesPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-attendees",
    shellClassName: "lander-semantic--schema-property-attendees",
    title: "attendees",
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
