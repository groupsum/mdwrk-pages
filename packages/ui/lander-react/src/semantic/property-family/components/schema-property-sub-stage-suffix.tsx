import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { SubStageSuffixPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertySubStageSuffixProps extends SubStageSuffixPropertyInput, GeneratedPropertyUiProps<SubStageSuffixPropertyInput> {}

export function SchemaPropertySubStageSuffix({ value: legacyValue, description = "The substage, e.g. 'a' for Stage IIIa.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertySubStageSuffixProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.SubStageSuffixPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-sub-stage-suffix",
    shellClassName: "lander-semantic--schema-property-sub-stage-suffix",
    title: "subStageSuffix",
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
