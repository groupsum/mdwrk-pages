import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { SuggestedGenderPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertySuggestedGenderProps extends SuggestedGenderPropertyInput, GeneratedPropertyUiProps<SuggestedGenderPropertyInput> {}

export function SchemaPropertySuggestedGender({ value: legacyValue, description = "The suggested gender of the intended person or audience, for example \"male\", \"female\", or \"unisex\".", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertySuggestedGenderProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.SuggestedGenderPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-suggested-gender",
    shellClassName: "lander-semantic--schema-property-suggested-gender",
    title: "suggestedGender",
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
