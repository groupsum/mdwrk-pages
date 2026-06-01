import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyIsPartOfBioChemEntityProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyIsPartOfBioChemEntity({ value, description = "Indicates a BioChemEntity that is (in some sense) a part of this BioChemEntity. ", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyIsPartOfBioChemEntityProps) {
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
