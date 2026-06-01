import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { PriceValidUntilPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPriceValidUntilProps extends PriceValidUntilPropertyInput, GeneratedPropertyUiProps<PriceValidUntilPropertyInput> {}

export function SchemaPropertyPriceValidUntil({ value: legacyValue, description = "The date after which the price is no longer available.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyPriceValidUntilProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.PriceValidUntilPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-price-valid-until",
    shellClassName: "lander-semantic--schema-property-price-valid-until",
    title: "priceValidUntil",
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
