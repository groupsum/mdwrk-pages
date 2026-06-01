import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyWidthProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyWidth({ value, description = "The width of the item.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyWidthProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.WidthPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-width",
    shellClassName: "lander-semantic--schema-property-width",
    title: "width",
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
