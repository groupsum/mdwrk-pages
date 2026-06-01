import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyNumItemsProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyNumItems({ value, description = "Limits the number of items being shipped for which these conditions apply.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyNumItemsProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.NumItemsPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-num-items",
    shellClassName: "lander-semantic--schema-property-num-items",
    title: "numItems",
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
