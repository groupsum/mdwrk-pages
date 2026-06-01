import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPriceSpecificationProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyPriceSpecification({ value, description = "One or more detailed price specifications, indicating the unit price and delivery or payment charges.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyPriceSpecificationProps) {
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
