import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyDepthProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyDepth({ value, description = "The depth of the item.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyDepthProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.DepthPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-depth",
    shellClassName: "lander-semantic--schema-property-depth",
    title: "depth",
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
