import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyHoursAvailableProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyHoursAvailable({ value, description = "The hours during which this service or contact is available.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyHoursAvailableProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.HoursAvailablePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-hours-available",
    shellClassName: "lander-semantic--schema-property-hours-available",
    title: "hoursAvailable",
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
