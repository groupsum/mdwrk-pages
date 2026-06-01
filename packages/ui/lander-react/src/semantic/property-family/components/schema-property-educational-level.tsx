import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { EducationalLevelPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyEducationalLevelProps extends EducationalLevelPropertyInput, GeneratedPropertyUiProps<EducationalLevelPropertyInput> {}

export function SchemaPropertyEducationalLevel({ value: legacyValue, description = "The level in terms of progression through an educational or training context. Examples of educational levels include 'beginner', 'intermediate' or 'advanced', and formal sets of level indicators.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyEducationalLevelProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.EducationalLevelPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-educational-level",
    shellClassName: "lander-semantic--schema-property-educational-level",
    title: "educationalLevel",
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
