import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyTocContinuationProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyTocContinuation({ value, description = "A [[HyperTocEntry]] can have a [[tocContinuation]] indicated, which is another [[HyperTocEntry]] that would be the default next item to play or render.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyTocContinuationProps) {
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
