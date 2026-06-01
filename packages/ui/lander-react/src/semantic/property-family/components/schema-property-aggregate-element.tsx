import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { AggregateElementPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAggregateElementProps extends AggregateElementPropertyInput, GeneratedPropertyUiProps<AggregateElementPropertyInput> {}

export function SchemaPropertyAggregateElement({ value: legacyValue, description = "Indicates a prototype of the elements in the list that is used to hold aggregate information (ratings, offers, etc.).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyAggregateElementProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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
