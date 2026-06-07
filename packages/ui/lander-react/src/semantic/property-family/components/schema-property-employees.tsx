import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { EmployeesPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyEmployeesProps extends EmployeesPropertyInput, GeneratedPropertyUiProps<EmployeesPropertyInput> {}

export function SchemaPropertyEmployees({ value: legacyValue, description = "People working for this organization.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyEmployeesProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyEmployees as typeof SchemaPropertyEmployees & { toStructuredData: (props: SchemaPropertyEmployeesProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
