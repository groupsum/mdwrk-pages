import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyHasMolecularFunctionProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyHasMolecularFunction({ value, description = "Molecular function performed by this BioChemEntity; please use PropertyValue if you want to include any evidence.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyHasMolecularFunctionProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.HasMolecularFunctionPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-has-molecular-function",
    shellClassName: "lander-semantic--schema-property-has-molecular-function",
    title: "hasMolecularFunction",
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
