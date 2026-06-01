import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyDepartmentProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyDepartment({ value, description = "A relationship between an organization and a department of that organization, also described as an organization (allowing different urls, logos, opening hours). For example: a store with a pharmacy, or a bakery with a cafe.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyDepartmentProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.DepartmentPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-department",
    shellClassName: "lander-semantic--schema-property-department",
    title: "department",
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
