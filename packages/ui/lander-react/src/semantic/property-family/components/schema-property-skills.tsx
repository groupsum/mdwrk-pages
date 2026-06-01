import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertySkillsProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertySkills({ value, description = "A statement of knowledge, skill, ability, task or any other assertion expressing a competency that is either claimed by a person, an organization or desired or required to fulfill a role or to work in an occupation.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertySkillsProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.SkillsPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-skills",
    shellClassName: "lander-semantic--schema-property-skills",
    title: "skills",
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
