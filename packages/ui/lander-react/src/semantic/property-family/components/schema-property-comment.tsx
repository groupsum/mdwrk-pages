import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyCommentProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyComment({ value, description = "Comments, typically from users.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyCommentProps) {
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
