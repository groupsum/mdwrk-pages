import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyHasBioPolymerSequenceProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyHasBioPolymerSequence({ value, description = "A symbolic representation of a BioChemEntity. For example, a nucleotide sequence of a Gene or an amino acid sequence of a Protein.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyHasBioPolymerSequenceProps) {
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
