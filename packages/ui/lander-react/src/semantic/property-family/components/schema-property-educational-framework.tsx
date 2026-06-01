import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { EducationalFrameworkPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyEducationalFrameworkProps extends EducationalFrameworkPropertyInput, GeneratedPropertyUiProps<EducationalFrameworkPropertyInput> {}

export function SchemaPropertyEducationalFramework({ value: legacyValue, description = "The framework to which the resource being described is aligned.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyEducationalFrameworkProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.EducationalFrameworkPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-educational-framework",
    shellClassName: "lander-semantic--schema-property-educational-framework",
    title: "educationalFramework",
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
