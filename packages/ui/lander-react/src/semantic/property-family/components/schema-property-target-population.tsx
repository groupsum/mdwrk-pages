import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { TargetPopulationPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyTargetPopulationProps extends TargetPopulationPropertyInput, GeneratedPropertyUiProps<TargetPopulationPropertyInput> {}

export function SchemaPropertyTargetPopulation({ value: legacyValue, description = "Characteristics of the population for which this is intended, or which typically uses it, e.g. 'adults'.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyTargetPopulationProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.TargetPopulationPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-target-population",
    shellClassName: "lander-semantic--schema-property-target-population",
    title: "targetPopulation",
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
