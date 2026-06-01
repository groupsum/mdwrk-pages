import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { IsConsumableForPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyIsConsumableForProps extends IsConsumableForPropertyInput, GeneratedPropertyUiProps<IsConsumableForPropertyInput> {}

export function SchemaPropertyIsConsumableFor({ value: legacyValue, description = "A pointer to another product (or multiple products) for which this product is a consumable.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyIsConsumableForProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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
