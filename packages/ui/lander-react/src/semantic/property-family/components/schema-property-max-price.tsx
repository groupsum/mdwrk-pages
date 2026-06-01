import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyMaxPriceProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyMaxPrice({ value, description = "The highest price if the price is a range.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyMaxPriceProps) {
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
