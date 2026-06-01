import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyCustomerRemorseReturnLabelSourceProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyCustomerRemorseReturnLabelSource({ value, description = "The method (from an enumeration) by which the customer obtains a return shipping label for a product returned due to customer remorse.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyCustomerRemorseReturnLabelSourceProps) {
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
