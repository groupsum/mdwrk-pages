import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { NetWorthPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyNetWorthProps extends NetWorthPropertyInput, GeneratedPropertyUiProps<NetWorthPropertyInput> {}

export function SchemaPropertyNetWorth({ value: legacyValue, description = "The total financial value of the person as calculated by subtracting the total value of liabilities from the total value of assets.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyNetWorthProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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
