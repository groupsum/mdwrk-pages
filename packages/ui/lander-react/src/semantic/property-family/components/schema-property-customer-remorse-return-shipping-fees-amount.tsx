import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyCustomerRemorseReturnShippingFeesAmountProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyCustomerRemorseReturnShippingFeesAmount({ value, description = "The amount of shipping costs if a product is returned due to customer remorse. Applicable when property [[customerRemorseReturnFees]] equals [[ReturnShippingFees]].", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyCustomerRemorseReturnShippingFeesAmountProps) {
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
