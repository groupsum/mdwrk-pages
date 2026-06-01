import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyItemListOrderProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyItemListOrder({ value, description = "Type of ordering (e.g. Ascending, Descending, Unordered).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyItemListOrderProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ItemListOrderPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-item-list-order",
    shellClassName: "lander-semantic--schema-property-item-list-order",
    title: "itemListOrder",
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
