import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyTaxonomicRangeProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyTaxonomicRange({ value, description = "The taxonomic grouping of the organism that expresses, encodes, or in some way related to the BioChemEntity.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyTaxonomicRangeProps) {
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
