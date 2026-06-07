import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ParentItemPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyParentItemProps extends ParentItemPropertyInput, GeneratedPropertyUiProps<ParentItemPropertyInput> {}

export function SchemaPropertyParentItem({ value: legacyValue, description = "The parent of a question, answer or item in general. Typically used for Q/A discussion threads e.g. a chain of comments with the first comment being an [[Article]] or other [[CreativeWork]]. See also [[comment]] which points from something to a comment about it.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyParentItemProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyParentItem as typeof SchemaPropertyParentItem & { toStructuredData: (props: SchemaPropertyParentItemProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
