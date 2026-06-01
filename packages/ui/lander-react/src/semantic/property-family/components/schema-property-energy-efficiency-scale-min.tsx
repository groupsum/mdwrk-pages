import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { EnergyEfficiencyScaleMinPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyEnergyEfficiencyScaleMinProps extends EnergyEfficiencyScaleMinPropertyInput, GeneratedPropertyUiProps<EnergyEfficiencyScaleMinPropertyInput> {}

export function SchemaPropertyEnergyEfficiencyScaleMin({ value: legacyValue, description = "Specifies the least energy efficient class on the regulated EU energy consumption scale for the product category a product belongs to. For example, energy consumption for televisions placed on the market after January 1, 2020 is scaled from D to A+++.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyEnergyEfficiencyScaleMinProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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
