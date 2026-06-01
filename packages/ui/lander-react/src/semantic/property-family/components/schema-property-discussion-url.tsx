import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyDiscussionUrlProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyDiscussionUrl({ value, description = "A link to the page containing the comments of the CreativeWork.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyDiscussionUrlProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.DiscussionUrlPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-discussion-url",
    shellClassName: "lander-semantic--schema-property-discussion-url",
    title: "discussionUrl",
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
