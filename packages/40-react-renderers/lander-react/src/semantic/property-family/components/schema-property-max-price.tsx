import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { MaxPricePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyMaxPriceProps extends MaxPricePropertyInput, GeneratedPropertyUiProps<MaxPricePropertyInput> {}

export function SchemaPropertyMaxPrice({ value: legacyValue, description = "The highest price if the price is a range.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyMaxPriceProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.MaxPricePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-max-price",
    shellClassName: "lander-semantic--schema-property-max-price",
    title: "maxPrice",
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

(SchemaPropertyMaxPrice as typeof SchemaPropertyMaxPrice & { toStructuredData: (props: SchemaPropertyMaxPriceProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
