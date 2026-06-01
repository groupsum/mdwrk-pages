import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ExperienceRequirementsPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyExperienceRequirementsProps extends ExperienceRequirementsPropertyInput, GeneratedPropertyUiProps<ExperienceRequirementsPropertyInput> {}

export function SchemaPropertyExperienceRequirements({ value: legacyValue, description = "Description of skills and experience needed for the position or Occupation.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyExperienceRequirementsProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ExperienceRequirementsPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-experience-requirements",
    shellClassName: "lander-semantic--schema-property-experience-requirements",
    title: "experienceRequirements",
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
