import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyHasBioChemEntityPartProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyHasBioChemEntityPart({ value, description = "Indicates a BioChemEntity that (in some sense) has this BioChemEntity as a part. ", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyHasBioChemEntityPartProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.HasBioChemEntityPartPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-has-bio-chem-entity-part",
    shellClassName: "lander-semantic--schema-property-has-bio-chem-entity-part",
    title: "hasBioChemEntityPart",
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
