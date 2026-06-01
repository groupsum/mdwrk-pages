import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertySuggestedGenderProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertySuggestedGender({ value, description = "The suggested gender of the intended person or audience, for example \"male\", \"female\", or \"unisex\".", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertySuggestedGenderProps) {
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
