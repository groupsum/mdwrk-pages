import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyModelProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyModel({ value, description = "The model of the product. Use with the URL of a ProductModel or a textual representation of the model identifier. The URL of the ProductModel can be from an external source. It is recommended to additionally provide strong product identifiers via the gtin8/gtin13/gtin14 and mpn properties.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyModelProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ModelPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-model",
    shellClassName: "lander-semantic--schema-property-model",
    title: "model",
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
