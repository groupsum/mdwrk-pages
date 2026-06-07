import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { PatternPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPatternProps extends PatternPropertyInput, GeneratedPropertyUiProps<PatternPropertyInput> {}

export function SchemaPropertyPattern({ value: legacyValue, description = "A pattern that something has, for example 'polka dot', 'striped', 'Canadian flag'. Values are typically expressed as text, although links to controlled value schemes are also supported.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyPatternProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.PatternPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-pattern",
    shellClassName: "lander-semantic--schema-property-pattern",
    title: "pattern",
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

(SchemaPropertyPattern as typeof SchemaPropertyPattern & { toStructuredData: (props: SchemaPropertyPatternProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
