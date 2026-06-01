import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyCashBackProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyCashBack({ value, description = "A cardholder benefit that pays the cardholder a small percentage of their net expenditures.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyCashBackProps) {
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
