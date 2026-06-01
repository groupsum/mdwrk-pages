import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyBioChemSimilarityProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyBioChemSimilarity({ value, description = "A similar BioChemEntity, e.g., obtained by fingerprint similarity algorithms.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyBioChemSimilarityProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.BioChemSimilarityPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-bio-chem-similarity",
    shellClassName: "lander-semantic--schema-property-bio-chem-similarity",
    title: "bioChemSimilarity",
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
