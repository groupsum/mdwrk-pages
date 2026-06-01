import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { HasBioPolymerSequencePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyHasBioPolymerSequenceProps extends HasBioPolymerSequencePropertyInput, GeneratedPropertyUiProps<HasBioPolymerSequencePropertyInput> {}

export function SchemaPropertyHasBioPolymerSequence({ value: legacyValue, description = "A symbolic representation of a BioChemEntity. For example, a nucleotide sequence of a Gene or an amino acid sequence of a Protein.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyHasBioPolymerSequenceProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.HasBioPolymerSequencePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-has-bio-polymer-sequence",
    shellClassName: "lander-semantic--schema-property-has-bio-polymer-sequence",
    title: "hasBioPolymerSequence",
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
