import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { DatePostedPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyDatePostedProps extends DatePostedPropertyInput, GeneratedPropertyUiProps<DatePostedPropertyInput> {}

export function SchemaPropertyDatePosted({ value: legacyValue, description = "Publication date of an online listing.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyDatePostedProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.DatePostedPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-date-posted",
    shellClassName: "lander-semantic--schema-property-date-posted",
    title: "datePosted",
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
