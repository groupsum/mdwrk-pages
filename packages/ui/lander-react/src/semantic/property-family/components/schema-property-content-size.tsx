import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ContentSizePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyContentSizeProps extends ContentSizePropertyInput, GeneratedPropertyUiProps<ContentSizePropertyInput> {}

export function SchemaPropertyContentSize({ value: legacyValue, description = "File size in (mega/kilo)bytes.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyContentSizeProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ContentSizePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-content-size",
    shellClassName: "lander-semantic--schema-property-content-size",
    title: "contentSize",
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
