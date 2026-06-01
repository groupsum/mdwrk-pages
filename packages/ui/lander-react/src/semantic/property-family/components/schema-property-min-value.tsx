import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyMinValueProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyMinValue({ value, description = "The lower value of some characteristic or property.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyMinValueProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.MinValuePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-min-value",
    shellClassName: "lander-semantic--schema-property-min-value",
    title: "minValue",
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
