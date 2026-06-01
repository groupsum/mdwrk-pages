import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyDownvoteCountProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyDownvoteCount({ value, description = "The number of downvotes this question, answer or comment has received from the community.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyDownvoteCountProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.DownvoteCountPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-downvote-count",
    shellClassName: "lander-semantic--schema-property-downvote-count",
    title: "downvoteCount",
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
