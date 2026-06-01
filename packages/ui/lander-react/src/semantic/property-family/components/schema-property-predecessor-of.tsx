import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPredecessorOfProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyPredecessorOf({ value, description = "A pointer from a previous, often discontinued variant of the product to its newer variant.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyPredecessorOfProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.PredecessorOfPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-predecessor-of",
    shellClassName: "lander-semantic--schema-property-predecessor-of",
    title: "predecessorOf",
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
