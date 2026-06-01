import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { UpvoteCountPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyUpvoteCountProps extends UpvoteCountPropertyInput, GeneratedPropertyUiProps<UpvoteCountPropertyInput> {}

export function SchemaPropertyUpvoteCount({ value: legacyValue, description = "The number of upvotes this question, answer or comment has received from the community.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyUpvoteCountProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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
