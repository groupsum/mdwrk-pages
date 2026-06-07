import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { InventoryLevelPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyInventoryLevelProps extends InventoryLevelPropertyInput, GeneratedPropertyUiProps<InventoryLevelPropertyInput> {}

export function SchemaPropertyInventoryLevel({ value: legacyValue, description = "The current approximate inventory level for the item or items.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyInventoryLevelProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.InventoryLevelPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-inventory-level",
    shellClassName: "lander-semantic--schema-property-inventory-level",
    title: "inventoryLevel",
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

(SchemaPropertyInventoryLevel as typeof SchemaPropertyInventoryLevel & { toStructuredData: (props: SchemaPropertyInventoryLevelProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
