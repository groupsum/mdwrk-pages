import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { EmployeePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyEmployeeProps extends EmployeePropertyInput, GeneratedPropertyUiProps<EmployeePropertyInput> {}

export function SchemaPropertyEmployee({ value: legacyValue, description = "Someone working for this organization.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyEmployeeProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyEmployee as typeof SchemaPropertyEmployee & { toStructuredData: (props: SchemaPropertyEmployeeProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
