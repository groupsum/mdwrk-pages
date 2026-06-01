import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { CustomerRemorseReturnLabelSourcePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyCustomerRemorseReturnLabelSourceProps extends CustomerRemorseReturnLabelSourcePropertyInput, GeneratedPropertyUiProps<CustomerRemorseReturnLabelSourcePropertyInput> {}

export function SchemaPropertyCustomerRemorseReturnLabelSource({ value: legacyValue, description = "The method (from an enumeration) by which the customer obtains a return shipping label for a product returned due to customer remorse.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyCustomerRemorseReturnLabelSourceProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.CustomerRemorseReturnLabelSourcePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-customer-remorse-return-label-source",
    shellClassName: "lander-semantic--schema-property-customer-remorse-return-label-source",
    title: "customerRemorseReturnLabelSource",
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
