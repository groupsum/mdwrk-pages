import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyCommentCountProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyCommentCount({ value, description = "The number of comments this CreativeWork (e.g. Article, Question or Answer) has received. This is most applicable to works published in Web sites with commenting system; additional comments may exist elsewhere.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyCommentCountProps) {
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
