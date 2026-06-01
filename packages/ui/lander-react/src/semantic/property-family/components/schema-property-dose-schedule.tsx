import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyDoseScheduleProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyDoseSchedule({ value, description = "A dosing schedule for the drug for a given population, either observed, recommended, or maximum dose based on the type used.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyDoseScheduleProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.DoseSchedulePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-dose-schedule",
    shellClassName: "lander-semantic--schema-property-dose-schedule",
    title: "doseSchedule",
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
