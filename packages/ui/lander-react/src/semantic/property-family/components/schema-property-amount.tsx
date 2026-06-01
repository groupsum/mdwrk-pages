import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAmountProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyAmount({ value, description = "The amount of money.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyAmountProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AmountPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-amount",
    shellClassName: "lander-semantic--schema-property-amount",
    title: "amount",
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
