import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { SkillsPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertySkillsProps extends SkillsPropertyInput, GeneratedPropertyUiProps<SkillsPropertyInput> {}

export function SchemaPropertySkills({ value: legacyValue, description = "A statement of knowledge, skill, ability, task or any other assertion expressing a competency that is either claimed by a person, an organization or desired or required to fulfill a role or to work in an occupation.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertySkillsProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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
