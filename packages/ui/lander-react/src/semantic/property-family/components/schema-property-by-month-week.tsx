import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyByMonthWeekProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyByMonthWeek({ value, description = "Defines the week(s) of the month on which a recurring Event takes place. Specified as an Integer between 1-5. For clarity, byMonthWeek is best used in conjunction with byDay to indicate concepts like the first and third Mondays of a month.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyByMonthWeekProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ByMonthWeekPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-by-month-week",
    shellClassName: "lander-semantic--schema-property-by-month-week",
    title: "byMonthWeek",
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
