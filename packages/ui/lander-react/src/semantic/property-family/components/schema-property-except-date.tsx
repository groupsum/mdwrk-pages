import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyExceptDateProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyExceptDate({ value, description = "Defines a [[Date]] or [[DateTime]] during which a scheduled [[Event]] will not take place. The property allows exceptions to\n      a [[Schedule]] to be specified. If an exception is specified as a [[DateTime]] then only the event that would have started at that specific date and time\n      should be excluded from the schedule. If an exception is specified as a [[Date]] then any event that is scheduled for that 24 hour period should be\n      excluded from the schedule. This allows a whole day to be excluded from the schedule without having to itemise every scheduled event.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyExceptDateProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ExceptDatePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-except-date",
    shellClassName: "lander-semantic--schema-property-except-date",
    title: "exceptDate",
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
