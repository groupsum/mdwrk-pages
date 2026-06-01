import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { HasEnergyEfficiencyCategoryPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyHasEnergyEfficiencyCategoryProps extends HasEnergyEfficiencyCategoryPropertyInput, GeneratedPropertyUiProps<HasEnergyEfficiencyCategoryPropertyInput> {}

export function SchemaPropertyHasEnergyEfficiencyCategory({ value: legacyValue, description = "Defines the energy efficiency Category (which could be either a rating out of range of values or a yes/no certification) for a product according to an international energy efficiency standard.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyHasEnergyEfficiencyCategoryProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.HasEnergyEfficiencyCategoryPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-has-energy-efficiency-category",
    shellClassName: "lander-semantic--schema-property-has-energy-efficiency-category",
    title: "hasEnergyEfficiencyCategory",
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
