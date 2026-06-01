import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyTargetPopulationProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyTargetPopulation({ value, description = "Characteristics of the population for which this is intended, or which typically uses it, e.g. 'adults'.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyTargetPopulationProps) {
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
