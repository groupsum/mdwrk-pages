import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { DayOfWeekPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyDayOfWeekProps extends DayOfWeekPropertyInput, GeneratedPropertyUiProps<DayOfWeekPropertyInput> {}

export function SchemaPropertyDayOfWeek({ value: legacyValue, description = "The day of the week for which these opening hours are valid.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyDayOfWeekProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.DayOfWeekPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-day-of-week",
    shellClassName: "lander-semantic--schema-property-day-of-week",
    title: "dayOfWeek",
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
