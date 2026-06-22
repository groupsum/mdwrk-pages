import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { HonorificSuffixPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyHonorificSuffixProps extends HonorificSuffixPropertyInput, GeneratedPropertyUiProps<HonorificSuffixPropertyInput> {}

export function SchemaPropertyHonorificSuffix({ value: legacyValue, description = "An honorific suffix following a Person's name such as M.D./PhD/MSCSW.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyHonorificSuffixProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.HonorificSuffixPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-honorific-suffix",
    shellClassName: "lander-semantic--schema-property-honorific-suffix",
    title: "honorificSuffix",
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

(SchemaPropertyHonorificSuffix as typeof SchemaPropertyHonorificSuffix & { toStructuredData: (props: SchemaPropertyHonorificSuffixProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
