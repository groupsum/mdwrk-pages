import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { PrepTimePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPrepTimeProps extends PrepTimePropertyInput, GeneratedPropertyUiProps<PrepTimePropertyInput> {}

export function SchemaPropertyPrepTime({ value: legacyValue, description = "The length of time it takes to prepare the items to be used in instructions or a direction, in [ISO 8601 duration format](http://en.wikipedia.org/wiki/ISO_8601).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyPrepTimeProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.PrepTimePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-prep-time",
    shellClassName: "lander-semantic--schema-property-prep-time",
    title: "prepTime",
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
