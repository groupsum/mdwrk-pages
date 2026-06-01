import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { DiscussionUrlPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyDiscussionUrlProps extends DiscussionUrlPropertyInput, GeneratedPropertyUiProps<DiscussionUrlPropertyInput> {}

export function SchemaPropertyDiscussionUrl({ value: legacyValue, description = "A link to the page containing the comments of the CreativeWork.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyDiscussionUrlProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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
