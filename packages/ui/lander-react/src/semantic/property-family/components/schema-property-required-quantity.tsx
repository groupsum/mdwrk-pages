import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyRequiredQuantityProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyRequiredQuantity({ value, description = "The required quantity of the item(s).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyRequiredQuantityProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.RequiredQuantityPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-required-quantity",
    shellClassName: "lander-semantic--schema-property-required-quantity",
    title: "requiredQuantity",
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
