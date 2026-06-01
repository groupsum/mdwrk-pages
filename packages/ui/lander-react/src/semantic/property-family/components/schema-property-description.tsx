import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyDescriptionProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyDescription({ value, description = "A description of the item.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyDescriptionProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.DescriptionPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-description",
    shellClassName: "lander-semantic--schema-property-description",
    title: "description",
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
