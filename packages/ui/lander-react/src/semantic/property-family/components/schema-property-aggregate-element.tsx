import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAggregateElementProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyAggregateElement({ value, description = "Indicates a prototype of the elements in the list that is used to hold aggregate information (ratings, offers, etc.).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyAggregateElementProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AggregateElementPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-aggregate-element",
    shellClassName: "lander-semantic--schema-property-aggregate-element",
    title: "aggregateElement",
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
