import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyCustomerRemorseReturnFeesProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyCustomerRemorseReturnFees({ value, description = "The type of return fees if the product is returned due to customer remorse.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyCustomerRemorseReturnFeesProps) {
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
