import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyChildTaxonProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyChildTaxon({ value, description = "Closest child taxa of the taxon in question.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyChildTaxonProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ChildTaxonPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-child-taxon",
    shellClassName: "lander-semantic--schema-property-child-taxon",
    title: "childTaxon",
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
