import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { UrlPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyUrlProps extends UrlPropertyInput, GeneratedPropertyUiProps<UrlPropertyInput> {}

export function SchemaPropertyUrl({ value: legacyValue, description = "URL of the item.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyUrlProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.UrlPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-url",
    shellClassName: "lander-semantic--schema-property-url",
    title: "url",
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
