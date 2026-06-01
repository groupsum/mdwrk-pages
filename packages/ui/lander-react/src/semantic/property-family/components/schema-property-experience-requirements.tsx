import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyExperienceRequirementsProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyExperienceRequirements({ value, description = "Description of skills and experience needed for the position or Occupation.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyExperienceRequirementsProps) {
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
