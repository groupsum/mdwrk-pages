import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ItemListOrderPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyItemListOrderProps extends ItemListOrderPropertyInput, GeneratedPropertyUiProps<ItemListOrderPropertyInput> {}

export function SchemaPropertyItemListOrder({ value: legacyValue, description = "Type of ordering (e.g. Ascending, Descending, Unordered).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyItemListOrderProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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
