import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { PostalCodeRangeSpecificationInput } from "@mdwrk/structured-data";
import { GeneratedTypeUiProps, renderGeneratedTypeCard } from "../shared.js";

export interface PostalCodeRangeSpecificationProps extends PostalCodeRangeSpecificationInput, GeneratedTypeUiProps<PostalCodeRangeSpecificationInput> {}

export function PostalCodeRangeSpecification({ value: legacyValue, description = "Indicates a range of postal codes, usually defined as the set of valid codes between [[postalCodeBegin]] and [[postalCodeEnd]], inclusively.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: PostalCodeRangeSpecificationProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedTypeCard({
    StructuredDataComponent: structuredDataReact.PostalCodeRangeSpecificationStructuredData,
    defaultEyebrow: "Type",
    kind: "postal-code-range-specification",
    shellClassName: "lander-semantic--postal-code-range-specification",
    title: "PostalCodeRangeSpecification",
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
