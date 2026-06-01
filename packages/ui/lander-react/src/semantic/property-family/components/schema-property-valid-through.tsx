import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ValidThroughPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyValidThroughProps extends ValidThroughPropertyInput, GeneratedPropertyUiProps<ValidThroughPropertyInput> {}

export function SchemaPropertyValidThrough({ value: legacyValue, description = "The date after when the item is not valid. For example the end of an offer, salary period, or a period of opening hours.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyValidThroughProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ValidThroughPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-valid-through",
    shellClassName: "lander-semantic--schema-property-valid-through",
    title: "validThrough",
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
