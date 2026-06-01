import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { TaxonomicRangePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyTaxonomicRangeProps extends TaxonomicRangePropertyInput, GeneratedPropertyUiProps<TaxonomicRangePropertyInput> {}

export function SchemaPropertyTaxonomicRange({ value: legacyValue, description = "The taxonomic grouping of the organism that expresses, encodes, or in some way related to the BioChemEntity.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyTaxonomicRangeProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.TaxonomicRangePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-taxonomic-range",
    shellClassName: "lander-semantic--schema-property-taxonomic-range",
    title: "taxonomicRange",
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
