import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPriceTypeProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyPriceType({ value, description = "Defines the type of a price specified for an offered product, for example a list price, a (temporary) sale price or a manufacturer suggested retail price. If multiple prices are specified for an offer the [[priceType]] property can be used to identify the type of each such specified price. The value of priceType can be specified as a value from enumeration PriceTypeEnumeration or, a UN/EDIFACT 5387 code, or as a free form text string for price types that are not already predefined in PriceTypeEnumeration.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyPriceTypeProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.PriceTypePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-price-type",
    shellClassName: "lander-semantic--schema-property-price-type",
    title: "priceType",
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
