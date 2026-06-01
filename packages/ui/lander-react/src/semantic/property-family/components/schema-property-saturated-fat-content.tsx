import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { SaturatedFatContentPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertySaturatedFatContentProps extends SaturatedFatContentPropertyInput, GeneratedPropertyUiProps<SaturatedFatContentPropertyInput> {}

export function SchemaPropertySaturatedFatContent({ value: legacyValue, description = "The number of grams of saturated fat.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertySaturatedFatContentProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.SaturatedFatContentPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-saturated-fat-content",
    shellClassName: "lander-semantic--schema-property-saturated-fat-content",
    title: "saturatedFatContent",
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
