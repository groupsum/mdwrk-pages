import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyParentTaxonProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyParentTaxon({ value, description = "Closest parent taxon of the taxon in question.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyParentTaxonProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ParentTaxonPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-parent-taxon",
    shellClassName: "lander-semantic--schema-property-parent-taxon",
    title: "parentTaxon",
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
