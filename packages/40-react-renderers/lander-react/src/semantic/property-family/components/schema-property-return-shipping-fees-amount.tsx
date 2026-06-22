import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ReturnShippingFeesAmountPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyReturnShippingFeesAmountProps extends ReturnShippingFeesAmountPropertyInput, GeneratedPropertyUiProps<ReturnShippingFeesAmountPropertyInput> {}

export function SchemaPropertyReturnShippingFeesAmount({ value: legacyValue, description = "Amount of shipping costs for product returns (for any reason). Applicable when property [[returnFees]] equals [[ReturnShippingFees]].", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyReturnShippingFeesAmountProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ReturnShippingFeesAmountPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-return-shipping-fees-amount",
    shellClassName: "lander-semantic--schema-property-return-shipping-fees-amount",
    title: "returnShippingFeesAmount",
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

(SchemaPropertyReturnShippingFeesAmount as typeof SchemaPropertyReturnShippingFeesAmount & { toStructuredData: (props: SchemaPropertyReturnShippingFeesAmountProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
