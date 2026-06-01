import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { HasMolecularFunctionPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyHasMolecularFunctionProps extends HasMolecularFunctionPropertyInput, GeneratedPropertyUiProps<HasMolecularFunctionPropertyInput> {}

export function SchemaPropertyHasMolecularFunction({ value: legacyValue, description = "Molecular function performed by this BioChemEntity; please use PropertyValue if you want to include any evidence.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyHasMolecularFunctionProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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
