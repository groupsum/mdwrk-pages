import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ByMonthDayPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyByMonthDayProps extends ByMonthDayPropertyInput, GeneratedPropertyUiProps<ByMonthDayPropertyInput> {}

export function SchemaPropertyByMonthDay({ value: legacyValue, description = "Defines the day(s) of the month on which a recurring [[Event]] takes place. Specified as an [[Integer]] between 1-31.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyByMonthDayProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ByMonthDayPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-by-month-day",
    shellClassName: "lander-semantic--schema-property-by-month-day",
    title: "byMonthDay",
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

(SchemaPropertyByMonthDay as typeof SchemaPropertyByMonthDay & { toStructuredData: (props: SchemaPropertyByMonthDayProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
