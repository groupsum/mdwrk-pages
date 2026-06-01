import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyEnergyEfficiencyScaleMaxProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyEnergyEfficiencyScaleMax({ value, description = "Specifies the most energy efficient class on the regulated EU energy consumption scale for the product category a product belongs to. For example, energy consumption for televisions placed on the market after January 1, 2020 is scaled from D to A+++.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyEnergyEfficiencyScaleMaxProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.EnergyEfficiencyScaleMaxPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-energy-efficiency-scale-max",
    shellClassName: "lander-semantic--schema-property-energy-efficiency-scale-max",
    title: "energyEfficiencyScaleMax",
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
