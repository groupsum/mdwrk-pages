import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyNetWorthProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyNetWorth({ value, description = "The total financial value of the person as calculated by subtracting the total value of liabilities from the total value of assets.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyNetWorthProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.NetWorthPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-net-worth",
    shellClassName: "lander-semantic--schema-property-net-worth",
    title: "netWorth",
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
