import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertySuggestedMeasurementProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertySuggestedMeasurement({ value, description = "A suggested range of body measurements for the intended audience or person, for example inseam between 32 and 34 inches or height between 170 and 190 cm. Typically found on a size chart for wearable products.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertySuggestedMeasurementProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.SuggestedMeasurementPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-suggested-measurement",
    shellClassName: "lander-semantic--schema-property-suggested-measurement",
    title: "suggestedMeasurement",
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
