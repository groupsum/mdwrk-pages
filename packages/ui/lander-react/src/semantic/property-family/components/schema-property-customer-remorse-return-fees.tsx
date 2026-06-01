import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { CustomerRemorseReturnFeesPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyCustomerRemorseReturnFeesProps extends CustomerRemorseReturnFeesPropertyInput, GeneratedPropertyUiProps<CustomerRemorseReturnFeesPropertyInput> {}

export function SchemaPropertyCustomerRemorseReturnFees({ value: legacyValue, description = "The type of return fees if the product is returned due to customer remorse.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyCustomerRemorseReturnFeesProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.CustomerRemorseReturnFeesPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-customer-remorse-return-fees",
    shellClassName: "lander-semantic--schema-property-customer-remorse-return-fees",
    title: "customerRemorseReturnFees",
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
