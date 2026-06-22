import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ParentTaxonPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyParentTaxonProps extends ParentTaxonPropertyInput, GeneratedPropertyUiProps<ParentTaxonPropertyInput> {}

export function SchemaPropertyParentTaxon({ value: legacyValue, description = "Closest parent taxon of the taxon in question.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyParentTaxonProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyParentTaxon as typeof SchemaPropertyParentTaxon & { toStructuredData: (props: SchemaPropertyParentTaxonProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
