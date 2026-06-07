import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { TaxIDPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyTaxIDProps extends TaxIDPropertyInput, GeneratedPropertyUiProps<TaxIDPropertyInput> {}

export function SchemaPropertyTaxID({ value: legacyValue, description = "The Tax / Fiscal ID of the organization or person, e.g. the TIN in the US or the CIF/NIF in Spain.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyTaxIDProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.TaxIDPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-tax-id",
    shellClassName: "lander-semantic--schema-property-tax-id",
    title: "taxID",
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

(SchemaPropertyTaxID as typeof SchemaPropertyTaxID & { toStructuredData: (props: SchemaPropertyTaxIDProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
