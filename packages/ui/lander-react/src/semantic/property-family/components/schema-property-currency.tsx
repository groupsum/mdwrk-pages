import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyCurrencyProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyCurrency({ value, description = "The currency in which the monetary amount is expressed.\\n\\nUse standard formats: [ISO 4217 currency format](http://en.wikipedia.org/wiki/ISO_4217), e.g. \"USD\"; [Ticker symbol](https://en.wikipedia.org/wiki/List_of_cryptocurrencies) for cryptocurrencies, e.g. \"BTC\"; well known names for [Local Exchange Trading Systems](https://en.wikipedia.org/wiki/Local_exchange_trading_system) (LETS) and other currency types, e.g. \"Ithaca HOUR\".", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyCurrencyProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.CurrencyPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-currency",
    shellClassName: "lander-semantic--schema-property-currency",
    title: "currency",
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
