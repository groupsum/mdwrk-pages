import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { NextItemPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyNextItemProps extends NextItemPropertyInput, GeneratedPropertyUiProps<NextItemPropertyInput> {}

export function SchemaPropertyNextItem({ value: legacyValue, description = "A link to the ListItem that follows the current one.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyNextItemProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.NextItemPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-next-item",
    shellClassName: "lander-semantic--schema-property-next-item",
    title: "nextItem",
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
