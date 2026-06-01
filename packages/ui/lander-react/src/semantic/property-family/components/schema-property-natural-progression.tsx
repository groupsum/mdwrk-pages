import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { NaturalProgressionPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyNaturalProgressionProps extends NaturalProgressionPropertyInput, GeneratedPropertyUiProps<NaturalProgressionPropertyInput> {}

export function SchemaPropertyNaturalProgression({ value: legacyValue, description = "The expected progression of the condition if it is not treated and allowed to progress naturally.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyNaturalProgressionProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.NaturalProgressionPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-natural-progression",
    shellClassName: "lander-semantic--schema-property-natural-progression",
    title: "naturalProgression",
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
