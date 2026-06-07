import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { EstimatedSalaryPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyEstimatedSalaryProps extends EstimatedSalaryPropertyInput, GeneratedPropertyUiProps<EstimatedSalaryPropertyInput> {}

export function SchemaPropertyEstimatedSalary({ value: legacyValue, description = "An estimated salary for a job posting or occupation, based on a variety of variables including, but not limited to industry, job title, and location. Estimated salaries  are often computed by outside organizations rather than the hiring organization, who may not have committed to the estimated value.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyEstimatedSalaryProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.EstimatedSalaryPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-estimated-salary",
    shellClassName: "lander-semantic--schema-property-estimated-salary",
    title: "estimatedSalary",
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

(SchemaPropertyEstimatedSalary as typeof SchemaPropertyEstimatedSalary & { toStructuredData: (props: SchemaPropertyEstimatedSalaryProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
