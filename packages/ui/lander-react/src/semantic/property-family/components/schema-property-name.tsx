import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyNameProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyName({ value, description = "The name of the item.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyNameProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.NamePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-name",
    shellClassName: "lander-semantic--schema-property-name",
    title: "name",
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
