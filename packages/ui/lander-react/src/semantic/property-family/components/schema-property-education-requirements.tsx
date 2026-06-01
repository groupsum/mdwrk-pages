import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { EducationRequirementsPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyEducationRequirementsProps extends EducationRequirementsPropertyInput, GeneratedPropertyUiProps<EducationRequirementsPropertyInput> {}

export function SchemaPropertyEducationRequirements({ value: legacyValue, description = "Educational background needed for the position or Occupation.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyEducationRequirementsProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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
