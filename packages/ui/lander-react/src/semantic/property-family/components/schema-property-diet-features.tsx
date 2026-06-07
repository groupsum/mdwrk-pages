import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { DietFeaturesPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyDietFeaturesProps extends DietFeaturesPropertyInput, GeneratedPropertyUiProps<DietFeaturesPropertyInput> {}

export function SchemaPropertyDietFeatures({ value: legacyValue, description = "Nutritional information specific to the dietary plan. May include dietary recommendations on what foods to avoid, what foods to consume, and specific alterations/deviations from the USDA or other regulatory body's approved dietary guidelines.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyDietFeaturesProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyDietFeatures as typeof SchemaPropertyDietFeatures & { toStructuredData: (props: SchemaPropertyDietFeaturesProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
