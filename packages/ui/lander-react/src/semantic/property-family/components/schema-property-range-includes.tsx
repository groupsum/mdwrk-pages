import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { RangeIncludesPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyRangeIncludesProps extends RangeIncludesPropertyInput, GeneratedPropertyUiProps<RangeIncludesPropertyInput> {}

export function SchemaPropertyRangeIncludes({ value: legacyValue, description = "Relates a property to a class that constitutes (one of) the expected type(s) for values of the property.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyRangeIncludesProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.RangeIncludesPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-range-includes",
    shellClassName: "lander-semantic--schema-property-range-includes",
    title: "rangeIncludes",
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
