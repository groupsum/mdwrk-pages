import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { BioChemSimilarityPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyBioChemSimilarityProps extends BioChemSimilarityPropertyInput, GeneratedPropertyUiProps<BioChemSimilarityPropertyInput> {}

export function SchemaPropertyBioChemSimilarity({ value: legacyValue, description = "A similar BioChemEntity, e.g., obtained by fingerprint similarity algorithms.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyBioChemSimilarityProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyBioChemSimilarity as typeof SchemaPropertyBioChemSimilarity & { toStructuredData: (props: SchemaPropertyBioChemSimilarityProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
