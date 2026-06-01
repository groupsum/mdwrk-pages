import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPriceCurrencyProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyPriceCurrency({ value, description = "The currency of the price, or a price component when attached to [[PriceSpecification]] and its subtypes.\\n\\nUse standard formats: [ISO 4217 currency format](http://en.wikipedia.org/wiki/ISO_4217), e.g. \"USD\"; [Ticker symbol](https://en.wikipedia.org/wiki/List_of_cryptocurrencies) for cryptocurrencies, e.g. \"BTC\"; well known names for [Local Exchange Trading Systems](https://en.wikipedia.org/wiki/Local_exchange_trading_system) (LETS) and other currency types, e.g. \"Ithaca HOUR\".", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyPriceCurrencyProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.PriceCurrencyPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-price-currency",
    shellClassName: "lander-semantic--schema-property-price-currency",
    title: "priceCurrency",
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
