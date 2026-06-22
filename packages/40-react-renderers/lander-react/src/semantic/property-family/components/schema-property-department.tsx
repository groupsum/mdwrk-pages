import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { DepartmentPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyDepartmentProps extends DepartmentPropertyInput, GeneratedPropertyUiProps<DepartmentPropertyInput> {}

export function SchemaPropertyDepartment({ value: legacyValue, description = "A relationship between an organization and a department of that organization, also described as an organization (allowing different urls, logos, opening hours). For example: a store with a pharmacy, or a bakery with a cafe.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyDepartmentProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyDepartment as typeof SchemaPropertyDepartment & { toStructuredData: (props: SchemaPropertyDepartmentProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
