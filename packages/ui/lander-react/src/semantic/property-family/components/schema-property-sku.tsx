import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertySkuProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertySku({ value, description = "The Stock Keeping Unit (SKU), i.e. a merchant-specific identifier for a product or service, or the product to which the offer refers.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertySkuProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.SkuPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-sku",
    shellClassName: "lander-semantic--schema-property-sku",
    title: "sku",
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
