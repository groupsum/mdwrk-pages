import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyInProductGroupWithIDProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyInProductGroupWithID({ value, description = "Indicates the [[productGroupID]] for a [[ProductGroup]] that this product [[isVariantOf]]. ", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyInProductGroupWithIDProps) {
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
