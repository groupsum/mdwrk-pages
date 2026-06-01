import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyBiologicalRoleProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyBiologicalRole({ value, description = "A role played by the BioChemEntity within a biological context.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyBiologicalRoleProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.BiologicalRolePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-biological-role",
    shellClassName: "lander-semantic--schema-property-biological-role",
    title: "biologicalRole",
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
