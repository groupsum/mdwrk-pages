import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { MonthsOfExperiencePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyMonthsOfExperienceProps extends MonthsOfExperiencePropertyInput, GeneratedPropertyUiProps<MonthsOfExperiencePropertyInput> {}

export function SchemaPropertyMonthsOfExperience({ value: legacyValue, description = "Indicates the minimal number of months of experience required for a position.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyMonthsOfExperienceProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.MonthsOfExperiencePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-months-of-experience",
    shellClassName: "lander-semantic--schema-property-months-of-experience",
    title: "monthsOfExperience",
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
