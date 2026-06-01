import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyProductSupportedProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyProductSupported({ value, description = "The product or service this support contact point is related to (such as product support for a particular product line). This can be a specific product or product line (e.g. \"iPhone\") or a general category of products or services (e.g. \"smartphones\").", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyProductSupportedProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ProductSupportedPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-product-supported",
    shellClassName: "lander-semantic--schema-property-product-supported",
    title: "productSupported",
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
