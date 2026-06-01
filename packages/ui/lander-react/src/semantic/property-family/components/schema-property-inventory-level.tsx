import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyInventoryLevelProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyInventoryLevel({ value, description = "The current approximate inventory level for the item or items.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyInventoryLevelProps) {
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
