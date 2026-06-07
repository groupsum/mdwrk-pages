import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { FollowsPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyFollowsProps extends FollowsPropertyInput, GeneratedPropertyUiProps<FollowsPropertyInput> {}

export function SchemaPropertyFollows({ value: legacyValue, description = "The most generic uni-directional social relation.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyFollowsProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyFollows as typeof SchemaPropertyFollows & { toStructuredData: (props: SchemaPropertyFollowsProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
