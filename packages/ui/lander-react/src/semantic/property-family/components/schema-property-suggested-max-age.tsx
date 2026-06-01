import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertySuggestedMaxAgeProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertySuggestedMaxAge({ value, description = "Maximum recommended age in years for the audience or user.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertySuggestedMaxAgeProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.SuggestedMaxAgePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-suggested-max-age",
    shellClassName: "lander-semantic--schema-property-suggested-max-age",
    title: "suggestedMaxAge",
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
