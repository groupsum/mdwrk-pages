import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPositionProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyPosition({ value, description = "The position of an item in a series or sequence of items.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyPositionProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.PositionPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-position",
    shellClassName: "lander-semantic--schema-property-position",
    title: "position",
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
