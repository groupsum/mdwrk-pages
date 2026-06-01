import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPreviousItemProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyPreviousItem({ value, description = "A link to the ListItem that precedes the current one.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyPreviousItemProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.PreviousItemPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-previous-item",
    shellClassName: "lander-semantic--schema-property-previous-item",
    title: "previousItem",
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
