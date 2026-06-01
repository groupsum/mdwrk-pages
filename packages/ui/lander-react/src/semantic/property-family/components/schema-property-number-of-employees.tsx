import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyNumberOfEmployeesProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyNumberOfEmployees({ value, description = "The number of employees in an organization, e.g. business.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyNumberOfEmployeesProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.NumberOfEmployeesPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-number-of-employees",
    shellClassName: "lander-semantic--schema-property-number-of-employees",
    title: "numberOfEmployees",
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
