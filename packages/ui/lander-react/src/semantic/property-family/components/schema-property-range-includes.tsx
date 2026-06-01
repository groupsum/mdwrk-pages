import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyRangeIncludesProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyRangeIncludes({ value, description = "Relates a property to a class that constitutes (one of) the expected type(s) for values of the property.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyRangeIncludesProps) {
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
