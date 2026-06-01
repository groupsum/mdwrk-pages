import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ByDayPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyByDayProps extends ByDayPropertyInput, GeneratedPropertyUiProps<ByDayPropertyInput> {}

export function SchemaPropertyByDay({ value: legacyValue, description = "Defines the day(s) of the week on which a recurring [[Event]] takes place. May be specified using either [[DayOfWeek]], or alternatively [[Text]] conforming to iCal's syntax for byDay recurrence rules.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyByDayProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ByDayPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-by-day",
    shellClassName: "lander-semantic--schema-property-by-day",
    title: "byDay",
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
