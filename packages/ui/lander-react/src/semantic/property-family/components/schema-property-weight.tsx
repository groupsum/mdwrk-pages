import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyWeightProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyWeight({ value, description = "The weight of the product or person.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyWeightProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.WeightPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-weight",
    shellClassName: "lander-semantic--schema-property-weight",
    title: "weight",
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
