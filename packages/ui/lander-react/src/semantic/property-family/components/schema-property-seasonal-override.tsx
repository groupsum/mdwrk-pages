import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { SeasonalOverridePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertySeasonalOverrideProps extends SeasonalOverridePropertyInput, GeneratedPropertyUiProps<SeasonalOverridePropertyInput> {}

export function SchemaPropertySeasonalOverride({ value: legacyValue, description = "Limited period during which these shipping conditions apply.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertySeasonalOverrideProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.SeasonalOverridePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-seasonal-override",
    shellClassName: "lander-semantic--schema-property-seasonal-override",
    title: "seasonalOverride",
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
