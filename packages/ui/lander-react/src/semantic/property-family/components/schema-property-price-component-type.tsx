import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPriceComponentTypeProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyPriceComponentType({ value, description = "Identifies a price component (for example, a line item on an invoice), part of the total price for an offer.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyPriceComponentTypeProps) {
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
