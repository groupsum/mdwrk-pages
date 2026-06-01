import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyIncludedDataCatalogProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyIncludedDataCatalog({ value, description = "A data catalog which contains this dataset (this property was previously 'catalog', preferred name is now 'includedInDataCatalog').", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyIncludedDataCatalogProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.IncludedDataCatalogPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-included-data-catalog",
    shellClassName: "lander-semantic--schema-property-included-data-catalog",
    title: "includedDataCatalog",
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
