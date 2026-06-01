import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyTaxonRankProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyTaxonRank({ value, description = "The taxonomic rank of this taxon given preferably as a URI from a controlled vocabulary – typically the ranks from TDWG TaxonRank ontology or equivalent Wikidata URIs.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyTaxonRankProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.TaxonRankPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-taxon-rank",
    shellClassName: "lander-semantic--schema-property-taxon-rank",
    title: "taxonRank",
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
