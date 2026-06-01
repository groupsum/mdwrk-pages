import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { PopulationTypePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPopulationTypeProps extends PopulationTypePropertyInput, GeneratedPropertyUiProps<PopulationTypePropertyInput> {}

export function SchemaPropertyPopulationType({ value: legacyValue, description = "Indicates the populationType common to all members of a [[StatisticalPopulation]] or all cases within the scope of a [[StatisticalVariable]].", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyPopulationTypeProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.PopulationTypePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-population-type",
    shellClassName: "lander-semantic--schema-property-population-type",
    title: "populationType",
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
