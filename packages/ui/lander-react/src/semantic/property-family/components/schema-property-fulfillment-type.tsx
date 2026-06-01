import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyFulfillmentTypeProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyFulfillmentType({ value, description = "Type of fulfillment applicable to the [[ShippingService]].", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyFulfillmentTypeProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.FulfillmentTypePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-fulfillment-type",
    shellClassName: "lander-semantic--schema-property-fulfillment-type",
    title: "fulfillmentType",
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
