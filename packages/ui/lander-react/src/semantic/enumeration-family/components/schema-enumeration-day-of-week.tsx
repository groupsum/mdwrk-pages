import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedEnumerationProps, renderGeneratedEnumerationCard } from "../shared.js";

export interface DayOfWeekProps extends GeneratedEnumerationProps<string> {}

export function DayOfWeek({ value, description = "The day of the week, e.g. used to specify to which day the opening hours of an OpeningHoursSpecification refer.\n\nOriginally, URLs from [GoodRelations](http://purl.org/goodrelations/v1) were used (for [[Monday]], [[Tuesday]], [[Wednesday]], [[Thursday]], [[Friday]], [[Saturday]], [[Sunday]] plus a special entry for [[PublicHolidays]]); these have now been integrated directly into schema.org.\n      ", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: DayOfWeekProps) {
  return renderGeneratedEnumerationCard({
    StructuredDataComponent: structuredDataReact.DayOfWeekStructuredData,
    defaultEyebrow: "Enumeration",
    kind: "schema-enumeration-day-of-week",
    shellClassName: "lander-semantic--schema-enumeration-day-of-week",
    title: "DayOfWeek",
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
