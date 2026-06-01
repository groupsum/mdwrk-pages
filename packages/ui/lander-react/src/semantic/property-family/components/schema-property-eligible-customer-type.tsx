import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyEligibleCustomerTypeProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyEligibleCustomerType({ value, description = "The type(s) of customers for which the given offer is valid.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyEligibleCustomerTypeProps) {
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
