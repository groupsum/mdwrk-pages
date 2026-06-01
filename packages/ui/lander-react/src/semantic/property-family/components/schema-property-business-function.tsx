import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyBusinessFunctionProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyBusinessFunction({ value, description = "The business function (e.g. sell, lease, repair, dispose) of the offer or component of a bundle (TypeAndQuantityNode). The default is http://purl.org/goodrelations/v1#Sell.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyBusinessFunctionProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.BusinessFunctionPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-business-function",
    shellClassName: "lander-semantic--schema-property-business-function",
    title: "businessFunction",
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
