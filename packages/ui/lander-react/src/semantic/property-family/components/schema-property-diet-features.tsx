import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyDietFeaturesProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyDietFeatures({ value, description = "Nutritional information specific to the dietary plan. May include dietary recommendations on what foods to avoid, what foods to consume, and specific alterations/deviations from the USDA or other regulatory body's approved dietary guidelines.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyDietFeaturesProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.DietFeaturesPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-diet-features",
    shellClassName: "lander-semantic--schema-property-diet-features",
    title: "dietFeatures",
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
