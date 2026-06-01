import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { DateDeletedPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyDateDeletedProps extends DateDeletedPropertyInput, GeneratedPropertyUiProps<DateDeletedPropertyInput> {}

export function SchemaPropertyDateDeleted({ value: legacyValue, description = "The datetime the item was removed from the DataFeed.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyDateDeletedProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.DateDeletedPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-date-deleted",
    shellClassName: "lander-semantic--schema-property-date-deleted",
    title: "dateDeleted",
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
