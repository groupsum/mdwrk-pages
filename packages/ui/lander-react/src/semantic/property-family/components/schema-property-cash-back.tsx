import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { CashBackPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyCashBackProps extends CashBackPropertyInput, GeneratedPropertyUiProps<CashBackPropertyInput> {}

export function SchemaPropertyCashBack({ value: legacyValue, description = "A cardholder benefit that pays the cardholder a small percentage of their net expenditures.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyCashBackProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.CashBackPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-cash-back",
    shellClassName: "lander-semantic--schema-property-cash-back",
    title: "cashBack",
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
