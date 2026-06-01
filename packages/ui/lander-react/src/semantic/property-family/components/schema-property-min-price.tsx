import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyMinPriceProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyMinPrice({ value, description = "The lowest price if the price is a range.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyMinPriceProps) {
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
