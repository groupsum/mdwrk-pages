import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedEnumerationProps, renderGeneratedEnumerationCard } from "../shared.js";

export interface FulfillmentTypeEnumerationProps extends GeneratedEnumerationProps<string> {}

export function FulfillmentTypeEnumeration({ value, description = "A type of product fulfillment.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: FulfillmentTypeEnumerationProps) {
  return renderGeneratedEnumerationCard({
    StructuredDataComponent: structuredDataReact.FulfillmentTypeEnumerationStructuredData,
    defaultEyebrow: "Enumeration",
    kind: "schema-enumeration-fulfillment-type-enumeration",
    shellClassName: "lander-semantic--schema-enumeration-fulfillment-type-enumeration",
    title: "FulfillmentTypeEnumeration",
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
