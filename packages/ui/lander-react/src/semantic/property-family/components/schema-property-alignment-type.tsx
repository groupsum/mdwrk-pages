import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAlignmentTypeProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyAlignmentType({ value, description = "A category of alignment between the learning resource and the framework node. Recommended values include: 'requires', 'textComplexity', 'readingLevel', and 'educationalSubject'.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyAlignmentTypeProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AlignmentTypePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-alignment-type",
    shellClassName: "lander-semantic--schema-property-alignment-type",
    title: "alignmentType",
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
