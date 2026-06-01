import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { IsPartOfBioChemEntityPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyIsPartOfBioChemEntityProps extends IsPartOfBioChemEntityPropertyInput, GeneratedPropertyUiProps<IsPartOfBioChemEntityPropertyInput> {}

export function SchemaPropertyIsPartOfBioChemEntity({ value: legacyValue, description = "Indicates a BioChemEntity that is (in some sense) a part of this BioChemEntity. ", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyIsPartOfBioChemEntityProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.IsPartOfBioChemEntityPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-is-part-of-bio-chem-entity",
    shellClassName: "lander-semantic--schema-property-is-part-of-bio-chem-entity",
    title: "isPartOfBioChemEntity",
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
