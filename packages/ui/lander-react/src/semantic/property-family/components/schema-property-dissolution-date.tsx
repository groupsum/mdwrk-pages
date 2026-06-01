import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { DissolutionDatePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyDissolutionDateProps extends DissolutionDatePropertyInput, GeneratedPropertyUiProps<DissolutionDatePropertyInput> {}

export function SchemaPropertyDissolutionDate({ value: legacyValue, description = "The date that this organization was dissolved.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyDissolutionDateProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.DissolutionDatePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-dissolution-date",
    shellClassName: "lander-semantic--schema-property-dissolution-date",
    title: "dissolutionDate",
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
