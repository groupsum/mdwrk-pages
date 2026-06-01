import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyEmployeeProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyEmployee({ value, description = "Someone working for this organization.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyEmployeeProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.EmployeePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-employee",
    shellClassName: "lander-semantic--schema-property-employee",
    title: "employee",
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
