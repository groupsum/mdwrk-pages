import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { TocContinuationPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyTocContinuationProps extends TocContinuationPropertyInput, GeneratedPropertyUiProps<TocContinuationPropertyInput> {}

export function SchemaPropertyTocContinuation({ value: legacyValue, description = "A [[HyperTocEntry]] can have a [[tocContinuation]] indicated, which is another [[HyperTocEntry]] that would be the default next item to play or render.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyTocContinuationProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.TocContinuationPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-toc-continuation",
    shellClassName: "lander-semantic--schema-property-toc-continuation",
    title: "tocContinuation",
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
