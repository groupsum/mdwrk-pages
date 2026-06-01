import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyDrugClassProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyDrugClass({ value, description = "The class of drug this belongs to (e.g., statins).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyDrugClassProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.DrugClassPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-drug-class",
    shellClassName: "lander-semantic--schema-property-drug-class",
    title: "drugClass",
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
