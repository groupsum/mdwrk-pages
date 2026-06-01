import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyUpvoteCountProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyUpvoteCount({ value, description = "The number of upvotes this question, answer or comment has received from the community.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyUpvoteCountProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.UpvoteCountPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-upvote-count",
    shellClassName: "lander-semantic--schema-property-upvote-count",
    title: "upvoteCount",
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
