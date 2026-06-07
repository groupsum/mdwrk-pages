import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { BiologicalRolePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyBiologicalRoleProps extends BiologicalRolePropertyInput, GeneratedPropertyUiProps<BiologicalRolePropertyInput> {}

export function SchemaPropertyBiologicalRole({ value: legacyValue, description = "A role played by the BioChemEntity within a biological context.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyBiologicalRoleProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyBiologicalRole as typeof SchemaPropertyBiologicalRole & { toStructuredData: (props: SchemaPropertyBiologicalRoleProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
