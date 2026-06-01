import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { CommentCountPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyCommentCountProps extends CommentCountPropertyInput, GeneratedPropertyUiProps<CommentCountPropertyInput> {}

export function SchemaPropertyCommentCount({ value: legacyValue, description = "The number of comments this CreativeWork (e.g. Article, Question or Answer) has received. This is most applicable to works published in Web sites with commenting system; additional comments may exist elsewhere.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyCommentCountProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.CommentCountPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-comment-count",
    shellClassName: "lander-semantic--schema-property-comment-count",
    title: "commentCount",
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
