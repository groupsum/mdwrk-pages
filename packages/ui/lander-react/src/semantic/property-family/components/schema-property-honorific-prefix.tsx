import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { HonorificPrefixPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyHonorificPrefixProps extends HonorificPrefixPropertyInput, GeneratedPropertyUiProps<HonorificPrefixPropertyInput> {}

export function SchemaPropertyHonorificPrefix({ value: legacyValue, description = "An honorific prefix preceding a Person's name such as Dr/Mrs/Mr.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyHonorificPrefixProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.HonorificPrefixPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-honorific-prefix",
    shellClassName: "lander-semantic--schema-property-honorific-prefix",
    title: "honorificPrefix",
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
