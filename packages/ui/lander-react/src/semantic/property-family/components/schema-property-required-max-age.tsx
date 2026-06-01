import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyRequiredMaxAgeProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyRequiredMaxAge({ value, description = "Audiences defined by a person's maximum age.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyRequiredMaxAgeProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.RequiredMaxAgePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-required-max-age",
    shellClassName: "lander-semantic--schema-property-required-max-age",
    title: "requiredMaxAge",
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
