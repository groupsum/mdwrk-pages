import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { SubjectOfPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertySubjectOfProps extends SubjectOfPropertyInput, GeneratedPropertyUiProps<SubjectOfPropertyInput> {}

export function SchemaPropertySubjectOf({ value: legacyValue, description = "A CreativeWork or Event about this Thing.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertySubjectOfProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.SubjectOfPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-subject-of",
    shellClassName: "lander-semantic--schema-property-subject-of",
    title: "subjectOf",
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
