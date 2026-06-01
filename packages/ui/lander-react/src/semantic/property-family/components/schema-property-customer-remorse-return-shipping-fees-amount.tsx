import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { CustomerRemorseReturnShippingFeesAmountPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyCustomerRemorseReturnShippingFeesAmountProps extends CustomerRemorseReturnShippingFeesAmountPropertyInput, GeneratedPropertyUiProps<CustomerRemorseReturnShippingFeesAmountPropertyInput> {}

export function SchemaPropertyCustomerRemorseReturnShippingFeesAmount({ value: legacyValue, description = "The amount of shipping costs if a product is returned due to customer remorse. Applicable when property [[customerRemorseReturnFees]] equals [[ReturnShippingFees]].", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyCustomerRemorseReturnShippingFeesAmountProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.CustomerRemorseReturnShippingFeesAmountPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-customer-remorse-return-shipping-fees-amount",
    shellClassName: "lander-semantic--schema-property-customer-remorse-return-shipping-fees-amount",
    title: "customerRemorseReturnShippingFeesAmount",
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
