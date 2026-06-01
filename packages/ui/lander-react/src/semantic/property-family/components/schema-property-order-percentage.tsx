import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyOrderPercentageProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyOrderPercentage({ value, description = "Value representing the fraction of the value of the order that is charged as shipping cost. Example: 0.10 would mean shipping rate is 10% of the total order value.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyOrderPercentageProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.OrderPercentagePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-order-percentage",
    shellClassName: "lander-semantic--schema-property-order-percentage",
    title: "orderPercentage",
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
