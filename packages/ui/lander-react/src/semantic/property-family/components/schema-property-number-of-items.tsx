import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyNumberOfItemsProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyNumberOfItems({ value, description = "The number of items in an ItemList. Note that some descriptions might not fully describe all items in a list (e.g., multi-page pagination); in such cases, the numberOfItems would be for the entire list.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyNumberOfItemsProps) {
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
