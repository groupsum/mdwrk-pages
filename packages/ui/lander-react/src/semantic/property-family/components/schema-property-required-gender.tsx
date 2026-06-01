import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyRequiredGenderProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyRequiredGender({ value, description = "Audiences defined by a person's gender.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyRequiredGenderProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.RequiredGenderPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-required-gender",
    shellClassName: "lander-semantic--schema-property-required-gender",
    title: "requiredGender",
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
