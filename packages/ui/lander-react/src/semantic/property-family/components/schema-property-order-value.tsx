import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyOrderValueProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyOrderValue({ value, description = "Minimum and maximum order value for which these shipping conditions are valid.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyOrderValueProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.OrderValuePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-order-value",
    shellClassName: "lander-semantic--schema-property-order-value",
    title: "orderValue",
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
