import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyCatalogNumberProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyCatalogNumber({ value, description = "The catalog number for the release.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyCatalogNumberProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.CatalogNumberPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-catalog-number",
    shellClassName: "lander-semantic--schema-property-catalog-number",
    title: "catalogNumber",
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
