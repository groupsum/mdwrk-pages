import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyHasEnergyConsumptionDetailsProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyHasEnergyConsumptionDetails({ value, description = "Defines the energy efficiency Category (also known as \"class\" or \"rating\") for a product according to an international energy efficiency standard.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyHasEnergyConsumptionDetailsProps) {
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
