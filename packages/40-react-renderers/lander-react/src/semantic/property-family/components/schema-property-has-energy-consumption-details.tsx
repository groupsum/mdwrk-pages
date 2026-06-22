import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { HasEnergyConsumptionDetailsPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyHasEnergyConsumptionDetailsProps extends HasEnergyConsumptionDetailsPropertyInput, GeneratedPropertyUiProps<HasEnergyConsumptionDetailsPropertyInput> {}

export function SchemaPropertyHasEnergyConsumptionDetails({ value: legacyValue, description = "Defines the energy efficiency Category (also known as \"class\" or \"rating\") for a product according to an international energy efficiency standard.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyHasEnergyConsumptionDetailsProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.HasEnergyConsumptionDetailsPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-has-energy-consumption-details",
    shellClassName: "lander-semantic--schema-property-has-energy-consumption-details",
    title: "hasEnergyConsumptionDetails",
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

(SchemaPropertyHasEnergyConsumptionDetails as typeof SchemaPropertyHasEnergyConsumptionDetails & { toStructuredData: (props: SchemaPropertyHasEnergyConsumptionDetailsProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
