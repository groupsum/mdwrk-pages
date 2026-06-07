import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ChildTaxonPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyChildTaxonProps extends ChildTaxonPropertyInput, GeneratedPropertyUiProps<ChildTaxonPropertyInput> {}

export function SchemaPropertyChildTaxon({ value: legacyValue, description = "Closest child taxa of the taxon in question.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyChildTaxonProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyChildTaxon as typeof SchemaPropertyChildTaxon & { toStructuredData: (props: SchemaPropertyChildTaxonProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
