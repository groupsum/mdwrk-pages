import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyCatalogProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyCatalog({ value, description = "A data catalog which contains this dataset.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyCatalogProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.CatalogPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-catalog",
    shellClassName: "lander-semantic--schema-property-catalog",
    title: "catalog",
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
