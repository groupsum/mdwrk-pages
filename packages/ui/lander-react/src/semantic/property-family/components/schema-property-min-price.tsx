import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { MinPricePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyMinPriceProps extends MinPricePropertyInput, GeneratedPropertyUiProps<MinPricePropertyInput> {}

export function SchemaPropertyMinPrice({ value: legacyValue, description = "The lowest price if the price is a range.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyMinPriceProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.MinPricePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-min-price",
    shellClassName: "lander-semantic--schema-property-min-price",
    title: "minPrice",
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
