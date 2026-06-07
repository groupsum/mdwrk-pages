import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { DownvoteCountPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyDownvoteCountProps extends DownvoteCountPropertyInput, GeneratedPropertyUiProps<DownvoteCountPropertyInput> {}

export function SchemaPropertyDownvoteCount({ value: legacyValue, description = "The number of downvotes this question, answer or comment has received from the community.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyDownvoteCountProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyDownvoteCount as typeof SchemaPropertyDownvoteCount & { toStructuredData: (props: SchemaPropertyDownvoteCountProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
