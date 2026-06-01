import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyFollowsProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyFollows({ value, description = "The most generic uni-directional social relation.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyFollowsProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.FollowsPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-follows",
    shellClassName: "lander-semantic--schema-property-follows",
    title: "follows",
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
