import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyTaxIDProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyTaxID({ value, description = "The Tax / Fiscal ID of the organization or person, e.g. the TIN in the US or the CIF/NIF in Spain.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyTaxIDProps) {
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
