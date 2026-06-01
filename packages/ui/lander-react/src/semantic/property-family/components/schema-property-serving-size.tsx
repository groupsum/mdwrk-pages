import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyServingSizeProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyServingSize({ value, description = "The serving size, in terms of the number of volume or mass.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyServingSizeProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ServingSizePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-serving-size",
    shellClassName: "lander-semantic--schema-property-serving-size",
    title: "servingSize",
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
