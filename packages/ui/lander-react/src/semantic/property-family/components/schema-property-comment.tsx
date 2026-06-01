import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { CommentPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyCommentProps extends CommentPropertyInput, GeneratedPropertyUiProps<CommentPropertyInput> {}

export function SchemaPropertyComment({ value: legacyValue, description = "Comments, typically from users.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyCommentProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.CommentPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-comment",
    shellClassName: "lander-semantic--schema-property-comment",
    title: "comment",
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
