import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyNormalRangeProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyNormalRange({ value, description = "Range of acceptable values for a typical patient, when applicable.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyNormalRangeProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.NormalRangePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-normal-range",
    shellClassName: "lander-semantic--schema-property-normal-range",
    title: "normalRange",
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
