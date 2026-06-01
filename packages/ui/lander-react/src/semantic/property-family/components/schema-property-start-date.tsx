import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyStartDateProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyStartDate({ value, description = "The start date and time of the item (in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601)).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyStartDateProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.StartDatePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-start-date",
    shellClassName: "lander-semantic--schema-property-start-date",
    title: "startDate",
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
