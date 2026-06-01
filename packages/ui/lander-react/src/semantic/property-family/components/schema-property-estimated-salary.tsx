import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyEstimatedSalaryProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyEstimatedSalary({ value, description = "An estimated salary for a job posting or occupation, based on a variety of variables including, but not limited to industry, job title, and location. Estimated salaries  are often computed by outside organizations rather than the hiring organization, who may not have committed to the estimated value.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyEstimatedSalaryProps) {
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
