import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { RestockingFeePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyRestockingFeeProps extends RestockingFeePropertyInput, GeneratedPropertyUiProps<RestockingFeePropertyInput> {}

export function SchemaPropertyRestockingFee({ value: legacyValue, description = "Use [[MonetaryAmount]] to specify a fixed restocking fee for product returns, or use [[Number]] to specify a percentage of the product price paid by the customer.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyRestockingFeeProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.RestockingFeePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-restocking-fee",
    shellClassName: "lander-semantic--schema-property-restocking-fee",
    title: "restockingFee",
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
