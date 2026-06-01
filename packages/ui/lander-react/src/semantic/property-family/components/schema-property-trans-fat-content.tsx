import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { TransFatContentPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyTransFatContentProps extends TransFatContentPropertyInput, GeneratedPropertyUiProps<TransFatContentPropertyInput> {}

export function SchemaPropertyTransFatContent({ value: legacyValue, description = "The number of grams of trans fat.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyTransFatContentProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.TransFatContentPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-trans-fat-content",
    shellClassName: "lander-semantic--schema-property-trans-fat-content",
    title: "transFatContent",
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
