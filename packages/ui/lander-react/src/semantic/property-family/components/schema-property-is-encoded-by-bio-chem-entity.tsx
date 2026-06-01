import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { IsEncodedByBioChemEntityPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyIsEncodedByBioChemEntityProps extends IsEncodedByBioChemEntityPropertyInput, GeneratedPropertyUiProps<IsEncodedByBioChemEntityPropertyInput> {}

export function SchemaPropertyIsEncodedByBioChemEntity({ value: legacyValue, description = "Another BioChemEntity encoding by this one.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyIsEncodedByBioChemEntityProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.IsEncodedByBioChemEntityPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-is-encoded-by-bio-chem-entity",
    shellClassName: "lander-semantic--schema-property-is-encoded-by-bio-chem-entity",
    title: "isEncodedByBioChemEntity",
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
