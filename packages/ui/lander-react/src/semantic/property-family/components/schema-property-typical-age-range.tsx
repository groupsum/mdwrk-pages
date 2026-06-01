import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyTypicalAgeRangeProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyTypicalAgeRange({ value, description = "The typical expected age range, e.g. '7-9', '11-'.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyTypicalAgeRangeProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.TypicalAgeRangePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-typical-age-range",
    shellClassName: "lander-semantic--schema-property-typical-age-range",
    title: "typicalAgeRange",
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
