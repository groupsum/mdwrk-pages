import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { IncludedDataCatalogPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyIncludedDataCatalogProps extends IncludedDataCatalogPropertyInput, GeneratedPropertyUiProps<IncludedDataCatalogPropertyInput> {}

export function SchemaPropertyIncludedDataCatalog({ value: legacyValue, description = "A data catalog which contains this dataset (this property was previously 'catalog', preferred name is now 'includedInDataCatalog').", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyIncludedDataCatalogProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyIncludedDataCatalog as typeof SchemaPropertyIncludedDataCatalog & { toStructuredData: (props: SchemaPropertyIncludedDataCatalogProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
