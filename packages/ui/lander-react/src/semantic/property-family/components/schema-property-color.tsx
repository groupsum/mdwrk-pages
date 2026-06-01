import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyColorProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyColor({ value, description = "The color of the product.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyColorProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ColorPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-color",
    shellClassName: "lander-semantic--schema-property-color",
    title: "color",
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
