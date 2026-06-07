import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { EnergyEfficiencyScaleMaxPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyEnergyEfficiencyScaleMaxProps extends EnergyEfficiencyScaleMaxPropertyInput, GeneratedPropertyUiProps<EnergyEfficiencyScaleMaxPropertyInput> {}

export function SchemaPropertyEnergyEfficiencyScaleMax({ value: legacyValue, description = "Specifies the most energy efficient class on the regulated EU energy consumption scale for the product category a product belongs to. For example, energy consumption for televisions placed on the market after January 1, 2020 is scaled from D to A+++.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyEnergyEfficiencyScaleMaxProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyEnergyEfficiencyScaleMax as typeof SchemaPropertyEnergyEfficiencyScaleMax & { toStructuredData: (props: SchemaPropertyEnergyEfficiencyScaleMaxProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
