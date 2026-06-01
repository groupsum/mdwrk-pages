import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { PriceComponentTypePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPriceComponentTypeProps extends PriceComponentTypePropertyInput, GeneratedPropertyUiProps<PriceComponentTypePropertyInput> {}

export function SchemaPropertyPriceComponentType({ value: legacyValue, description = "Identifies a price component (for example, a line item on an invoice), part of the total price for an offer.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyPriceComponentTypeProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.PriceComponentTypePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-price-component-type",
    shellClassName: "lander-semantic--schema-property-price-component-type",
    title: "priceComponentType",
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
