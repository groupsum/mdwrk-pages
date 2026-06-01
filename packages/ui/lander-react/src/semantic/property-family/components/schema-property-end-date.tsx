import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyEndDateProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyEndDate({ value, description = "The end date and time of the item (in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601)).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyEndDateProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.EndDatePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-end-date",
    shellClassName: "lander-semantic--schema-property-end-date",
    title: "endDate",
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
