import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ContentLocationPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyContentLocationProps extends ContentLocationPropertyInput, GeneratedPropertyUiProps<ContentLocationPropertyInput> {}

export function SchemaPropertyContentLocation({ value: legacyValue, description = "The location depicted or described in the content. For example, the location in a photograph or painting.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyContentLocationProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ContentLocationPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-content-location",
    shellClassName: "lander-semantic--schema-property-content-location",
    title: "contentLocation",
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
