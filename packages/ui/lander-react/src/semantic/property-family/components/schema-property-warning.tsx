import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { WarningPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyWarningProps extends WarningPropertyInput, GeneratedPropertyUiProps<WarningPropertyInput> {}

export function SchemaPropertyWarning({ value: legacyValue, description = "Any FDA or other warnings about the drug (text or URL).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyWarningProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.WarningPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-warning",
    shellClassName: "lander-semantic--schema-property-warning",
    title: "warning",
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
