import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyDayOfWeekProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyDayOfWeek({ value, description = "The day of the week for which these opening hours are valid.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyDayOfWeekProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.DayOfWeekPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-day-of-week",
    shellClassName: "lander-semantic--schema-property-day-of-week",
    title: "dayOfWeek",
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
