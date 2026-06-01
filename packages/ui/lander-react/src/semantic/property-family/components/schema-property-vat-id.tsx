import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyVatIDProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyVatID({ value, description = "The value-added Tax ID of the organization or person with national prefix (for example IT123456789). Can also be described as [[iso6523Code]] with proper prefix.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyVatIDProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.VatIDPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-vat-id",
    shellClassName: "lander-semantic--schema-property-vat-id",
    title: "vatID",
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
