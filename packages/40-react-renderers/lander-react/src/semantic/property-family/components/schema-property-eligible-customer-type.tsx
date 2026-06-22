import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { EligibleCustomerTypePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyEligibleCustomerTypeProps extends EligibleCustomerTypePropertyInput, GeneratedPropertyUiProps<EligibleCustomerTypePropertyInput> {}

export function SchemaPropertyEligibleCustomerType({ value: legacyValue, description = "The type(s) of customers for which the given offer is valid.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyEligibleCustomerTypeProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.EligibleCustomerTypePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-eligible-customer-type",
    shellClassName: "lander-semantic--schema-property-eligible-customer-type",
    title: "eligibleCustomerType",
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

(SchemaPropertyEligibleCustomerType as typeof SchemaPropertyEligibleCustomerType & { toStructuredData: (props: SchemaPropertyEligibleCustomerTypeProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
