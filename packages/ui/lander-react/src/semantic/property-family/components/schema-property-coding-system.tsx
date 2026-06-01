import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { CodingSystemPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyCodingSystemProps extends CodingSystemPropertyInput, GeneratedPropertyUiProps<CodingSystemPropertyInput> {}

export function SchemaPropertyCodingSystem({ value: legacyValue, description = "The coding system, e.g. 'ICD-10'.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyCodingSystemProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.CodingSystemPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-coding-system",
    shellClassName: "lander-semantic--schema-property-coding-system",
    title: "codingSystem",
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
