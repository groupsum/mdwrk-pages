import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyByDayProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyByDay({ value, description = "Defines the day(s) of the week on which a recurring [[Event]] takes place. May be specified using either [[DayOfWeek]], or alternatively [[Text]] conforming to iCal's syntax for byDay recurrence rules.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyByDayProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ByDayPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-by-day",
    shellClassName: "lander-semantic--schema-property-by-day",
    title: "byDay",
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
