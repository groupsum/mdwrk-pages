import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyByMonthDayProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyByMonthDay({ value, description = "Defines the day(s) of the month on which a recurring [[Event]] takes place. Specified as an [[Integer]] between 1-31.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyByMonthDayProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ByMonthDayPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-by-month-day",
    shellClassName: "lander-semantic--schema-property-by-month-day",
    title: "byMonthDay",
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
