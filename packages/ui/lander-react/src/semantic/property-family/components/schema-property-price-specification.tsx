import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { PriceSpecificationPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPriceSpecificationProps extends PriceSpecificationPropertyInput, GeneratedPropertyUiProps<PriceSpecificationPropertyInput> {}

export function SchemaPropertyPriceSpecification({ value: legacyValue, description = "One or more detailed price specifications, indicating the unit price and delivery or payment charges.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyPriceSpecificationProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.PriceSpecificationPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-price-specification",
    shellClassName: "lander-semantic--schema-property-price-specification",
    title: "priceSpecification",
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
