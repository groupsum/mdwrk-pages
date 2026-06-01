import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPopulationTypeProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyPopulationType({ value, description = "Indicates the populationType common to all members of a [[StatisticalPopulation]] or all cases within the scope of a [[StatisticalVariable]].", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyPopulationTypeProps) {
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
