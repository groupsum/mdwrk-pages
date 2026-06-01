import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { InProductGroupWithIDPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyInProductGroupWithIDProps extends InProductGroupWithIDPropertyInput, GeneratedPropertyUiProps<InProductGroupWithIDPropertyInput> {}

export function SchemaPropertyInProductGroupWithID({ value: legacyValue, description = "Indicates the [[productGroupID]] for a [[ProductGroup]] that this product [[isVariantOf]]. ", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyInProductGroupWithIDProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.InProductGroupWithIDPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-in-product-group-with-id",
    shellClassName: "lander-semantic--schema-property-in-product-group-with-id",
    title: "inProductGroupWithID",
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
