import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPriceValidUntilProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyPriceValidUntil({ value, description = "The date after which the price is no longer available.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyPriceValidUntilProps) {
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
