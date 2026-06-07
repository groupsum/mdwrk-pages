import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { TaxonRankPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyTaxonRankProps extends TaxonRankPropertyInput, GeneratedPropertyUiProps<TaxonRankPropertyInput> {}

export function SchemaPropertyTaxonRank({ value: legacyValue, description = "The taxonomic rank of this taxon given preferably as a URI from a controlled vocabulary – typically the ranks from TDWG TaxonRank ontology or equivalent Wikidata URIs.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyTaxonRankProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyTaxonRank as typeof SchemaPropertyTaxonRank & { toStructuredData: (props: SchemaPropertyTaxonRankProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
