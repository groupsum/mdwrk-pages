import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { DateCreatedPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyDateCreatedProps extends DateCreatedPropertyInput, GeneratedPropertyUiProps<DateCreatedPropertyInput> {}

export function SchemaPropertyDateCreated({ value: legacyValue, description = "The date on which the CreativeWork was created or the item was added to a DataFeed.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyDateCreatedProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.DateCreatedPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-date-created",
    shellClassName: "lander-semantic--schema-property-date-created",
    title: "dateCreated",
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
