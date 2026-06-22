import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { AlignmentTypePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAlignmentTypeProps extends AlignmentTypePropertyInput, GeneratedPropertyUiProps<AlignmentTypePropertyInput> {}

export function SchemaPropertyAlignmentType({ value: legacyValue, description = "A category of alignment between the learning resource and the framework node. Recommended values include: 'requires', 'textComplexity', 'readingLevel', and 'educationalSubject'.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyAlignmentTypeProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyAlignmentType as typeof SchemaPropertyAlignmentType & { toStructuredData: (props: SchemaPropertyAlignmentTypeProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
