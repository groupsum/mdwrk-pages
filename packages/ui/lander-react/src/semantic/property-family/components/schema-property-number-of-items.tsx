import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { NumberOfItemsPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyNumberOfItemsProps extends NumberOfItemsPropertyInput, GeneratedPropertyUiProps<NumberOfItemsPropertyInput> {}

export function SchemaPropertyNumberOfItems({ value: legacyValue, description = "The number of items in an ItemList. Note that some descriptions might not fully describe all items in a list (e.g., multi-page pagination); in such cases, the numberOfItems would be for the entire list.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyNumberOfItemsProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.NumberOfItemsPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-number-of-items",
    shellClassName: "lander-semantic--schema-property-number-of-items",
    title: "numberOfItems",
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
