import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyProductIDProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyProductID({ value, description = "The product identifier, such as ISBN. For example: ``` meta itemprop=\"productID\" content=\"isbn:123-456-789\" ```.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyProductIDProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ProductIDPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-product-id",
    shellClassName: "lander-semantic--schema-property-product-id",
    title: "productID",
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
