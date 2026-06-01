import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyIncludedInDataCatalogProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyIncludedInDataCatalog({ value, description = "A data catalog which contains this dataset.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyIncludedInDataCatalogProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.IncludedInDataCatalogPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-included-in-data-catalog",
    shellClassName: "lander-semantic--schema-property-included-in-data-catalog",
    title: "includedInDataCatalog",
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
