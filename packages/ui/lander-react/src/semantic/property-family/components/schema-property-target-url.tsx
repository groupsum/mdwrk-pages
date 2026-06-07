import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { TargetUrlPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyTargetUrlProps extends TargetUrlPropertyInput, GeneratedPropertyUiProps<TargetUrlPropertyInput> {}

export function SchemaPropertyTargetUrl({ value: legacyValue, description = "The URL of a node in an established educational framework.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyTargetUrlProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.TargetUrlPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-target-url",
    shellClassName: "lander-semantic--schema-property-target-url",
    title: "targetUrl",
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

(SchemaPropertyTargetUrl as typeof SchemaPropertyTargetUrl & { toStructuredData: (props: SchemaPropertyTargetUrlProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
