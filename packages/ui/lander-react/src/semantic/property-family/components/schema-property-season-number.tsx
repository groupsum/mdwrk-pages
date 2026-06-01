import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { SeasonNumberPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertySeasonNumberProps extends SeasonNumberPropertyInput, GeneratedPropertyUiProps<SeasonNumberPropertyInput> {}

export function SchemaPropertySeasonNumber({ value: legacyValue, description = "Position of the season within an ordered group of seasons.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertySeasonNumberProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.SeasonNumberPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-season-number",
    shellClassName: "lander-semantic--schema-property-season-number",
    title: "seasonNumber",
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
