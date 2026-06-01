import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyEventAttendanceModeProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyEventAttendanceMode({ value, description = "The eventAttendanceMode of an event indicates whether it occurs online, offline, or a mix.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyEventAttendanceModeProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.EventAttendanceModePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-event-attendance-mode",
    shellClassName: "lander-semantic--schema-property-event-attendance-mode",
    title: "eventAttendanceMode",
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
