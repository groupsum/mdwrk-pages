import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyByMonthProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyByMonth({ value, description = "Defines the month(s) of the year on which a recurring [[Event]] takes place. Specified as an [[Integer]] between 1-12. January is 1.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyByMonthProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ByMonthPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-by-month",
    shellClassName: "lander-semantic--schema-property-by-month",
    title: "byMonth",
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
