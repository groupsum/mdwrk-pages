import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { SuggestedAgePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertySuggestedAgeProps extends SuggestedAgePropertyInput, GeneratedPropertyUiProps<SuggestedAgePropertyInput> {}

export function SchemaPropertySuggestedAge({ value: legacyValue, description = "The age or age range for the intended audience or person, for example 3-12 months for infants, 1-5 years for toddlers.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertySuggestedAgeProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertySuggestedAge as typeof SchemaPropertySuggestedAge & { toStructuredData: (props: SchemaPropertySuggestedAgeProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
