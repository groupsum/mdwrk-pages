import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertySuggestedAgeProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertySuggestedAge({ value, description = "The age or age range for the intended audience or person, for example 3-12 months for infants, 1-5 years for toddlers.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertySuggestedAgeProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.SuggestedAgePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-suggested-age",
    shellClassName: "lander-semantic--schema-property-suggested-age",
    title: "suggestedAge",
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
