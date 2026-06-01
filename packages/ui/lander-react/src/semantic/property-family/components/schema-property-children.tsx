import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyChildrenProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyChildren({ value, description = "A child of the person.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyChildrenProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ChildrenPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-children",
    shellClassName: "lander-semantic--schema-property-children",
    title: "children",
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
