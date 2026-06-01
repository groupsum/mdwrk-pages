import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertySuggestedMinAgeProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertySuggestedMinAge({ value, description = "Minimum recommended age in years for the audience or user.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertySuggestedMinAgeProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.SuggestedMinAgePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-suggested-min-age",
    shellClassName: "lander-semantic--schema-property-suggested-min-age",
    title: "suggestedMinAge",
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
