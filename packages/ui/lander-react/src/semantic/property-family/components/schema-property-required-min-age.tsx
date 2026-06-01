import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyRequiredMinAgeProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyRequiredMinAge({ value, description = "Audiences defined by a person's minimum age.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyRequiredMinAgeProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.RequiredMinAgePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-required-min-age",
    shellClassName: "lander-semantic--schema-property-required-min-age",
    title: "requiredMinAge",
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
