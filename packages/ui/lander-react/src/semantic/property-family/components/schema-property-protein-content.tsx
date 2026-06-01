import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ProteinContentPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyProteinContentProps extends ProteinContentPropertyInput, GeneratedPropertyUiProps<ProteinContentPropertyInput> {}

export function SchemaPropertyProteinContent({ value: legacyValue, description = "The number of grams of protein.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyProteinContentProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ProteinContentPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-protein-content",
    shellClassName: "lander-semantic--schema-property-protein-content",
    title: "proteinContent",
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
