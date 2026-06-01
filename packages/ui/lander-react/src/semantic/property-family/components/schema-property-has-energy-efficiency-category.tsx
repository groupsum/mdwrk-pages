import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyHasEnergyEfficiencyCategoryProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyHasEnergyEfficiencyCategory({ value, description = "Defines the energy efficiency Category (which could be either a rating out of range of values or a yes/no certification) for a product according to an international energy efficiency standard.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyHasEnergyEfficiencyCategoryProps) {
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
