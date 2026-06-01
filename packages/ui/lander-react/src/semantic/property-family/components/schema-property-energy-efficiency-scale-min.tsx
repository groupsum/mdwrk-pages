import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyEnergyEfficiencyScaleMinProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyEnergyEfficiencyScaleMin({ value, description = "Specifies the least energy efficient class on the regulated EU energy consumption scale for the product category a product belongs to. For example, energy consumption for televisions placed on the market after January 1, 2020 is scaled from D to A+++.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyEnergyEfficiencyScaleMinProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.EnergyEfficiencyScaleMinPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-energy-efficiency-scale-min",
    shellClassName: "lander-semantic--schema-property-energy-efficiency-scale-min",
    title: "energyEfficiencyScaleMin",
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
