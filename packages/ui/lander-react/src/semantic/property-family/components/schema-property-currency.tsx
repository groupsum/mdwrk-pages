import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { CurrencyPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyCurrencyProps extends CurrencyPropertyInput, GeneratedPropertyUiProps<CurrencyPropertyInput> {}

export function SchemaPropertyCurrency({ value: legacyValue, description = "The currency in which the monetary amount is expressed.\\n\\nUse standard formats: [ISO 4217 currency format](http://en.wikipedia.org/wiki/ISO_4217), e.g. \"USD\"; [Ticker symbol](https://en.wikipedia.org/wiki/List_of_cryptocurrencies) for cryptocurrencies, e.g. \"BTC\"; well known names for [Local Exchange Trading Systems](https://en.wikipedia.org/wiki/Local_exchange_trading_system) (LETS) and other currency types, e.g. \"Ithaca HOUR\".", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyCurrencyProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyCurrency as typeof SchemaPropertyCurrency & { toStructuredData: (props: SchemaPropertyCurrencyProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
