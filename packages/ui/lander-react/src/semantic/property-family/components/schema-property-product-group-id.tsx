import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ProductGroupIDPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyProductGroupIDProps extends ProductGroupIDPropertyInput, GeneratedPropertyUiProps<ProductGroupIDPropertyInput> {}

export function SchemaPropertyProductGroupID({ value: legacyValue, description = "Indicates a textual identifier for a ProductGroup.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyProductGroupIDProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ProductGroupIDPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-product-group-id",
    shellClassName: "lander-semantic--schema-property-product-group-id",
    title: "productGroupID",
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

(SchemaPropertyProductGroupID as typeof SchemaPropertyProductGroupID & { toStructuredData: (props: SchemaPropertyProductGroupIDProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
