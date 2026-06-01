import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyScheduleTimezoneProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyScheduleTimezone({ value, description = "Indicates the timezone for which the time(s) indicated in the [[Schedule]] are given. The value provided should be among those listed in the IANA Time Zone Database.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyScheduleTimezoneProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ScheduleTimezonePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-schedule-timezone",
    shellClassName: "lander-semantic--schema-property-schedule-timezone",
    title: "scheduleTimezone",
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
