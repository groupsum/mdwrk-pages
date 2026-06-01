import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { NumberOfEmployeesPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyNumberOfEmployeesProps extends NumberOfEmployeesPropertyInput, GeneratedPropertyUiProps<NumberOfEmployeesPropertyInput> {}

export function SchemaPropertyNumberOfEmployees({ value: legacyValue, description = "The number of employees in an organization, e.g. business.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyNumberOfEmployeesProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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
