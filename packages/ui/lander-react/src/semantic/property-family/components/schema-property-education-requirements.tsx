import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyEducationRequirementsProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyEducationRequirements({ value, description = "Educational background needed for the position or Occupation.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyEducationRequirementsProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.EducationRequirementsPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-education-requirements",
    shellClassName: "lander-semantic--schema-property-education-requirements",
    title: "educationRequirements",
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
