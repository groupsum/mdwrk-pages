import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { StartDatePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyStartDateProps extends StartDatePropertyInput, GeneratedPropertyUiProps<StartDatePropertyInput> {}

export function SchemaPropertyStartDate({ value: legacyValue, description = "The start date and time of the item (in [ISO 8601 date format](http://en.wikipedia.org/wiki/ISO_8601)).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyStartDateProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.StartDatePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-start-date",
    shellClassName: "lander-semantic--schema-property-start-date",
    title: "startDate",
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
