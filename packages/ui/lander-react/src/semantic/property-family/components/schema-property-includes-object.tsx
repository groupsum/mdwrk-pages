import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyIncludesObjectProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyIncludesObject({ value, description = "This links to a node or nodes indicating the exact quantity of the products included in  an [[Offer]] or [[ProductCollection]].", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyIncludesObjectProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.IncludesObjectPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-includes-object",
    shellClassName: "lander-semantic--schema-property-includes-object",
    title: "includesObject",
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
