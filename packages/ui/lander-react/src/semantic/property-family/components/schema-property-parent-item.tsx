import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyParentItemProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyParentItem({ value, description = "The parent of a question, answer or item in general. Typically used for Q/A discussion threads e.g. a chain of comments with the first comment being an [[Article]] or other [[CreativeWork]]. See also [[comment]] which points from something to a comment about it.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyParentItemProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ParentItemPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-parent-item",
    shellClassName: "lander-semantic--schema-property-parent-item",
    title: "parentItem",
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
