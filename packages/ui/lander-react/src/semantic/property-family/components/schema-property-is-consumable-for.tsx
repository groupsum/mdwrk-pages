import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyIsConsumableForProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyIsConsumableFor({ value, description = "A pointer to another product (or multiple products) for which this product is a consumable.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyIsConsumableForProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.IsConsumableForPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-is-consumable-for",
    shellClassName: "lander-semantic--schema-property-is-consumable-for",
    title: "isConsumableFor",
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
