import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyProductGroupIDProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyProductGroupID({ value, description = "Indicates a textual identifier for a ProductGroup.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyProductGroupIDProps) {
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
