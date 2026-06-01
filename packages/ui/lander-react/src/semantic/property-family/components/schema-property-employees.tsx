import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyEmployeesProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyEmployees({ value, description = "People working for this organization.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyEmployeesProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.EmployeesPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-employees",
    shellClassName: "lander-semantic--schema-property-employees",
    title: "employees",
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
