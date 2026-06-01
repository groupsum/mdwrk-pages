import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { AppearancePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAppearanceProps extends AppearancePropertyInput, GeneratedPropertyUiProps<AppearancePropertyInput> {}

export function SchemaPropertyAppearance({ value: legacyValue, description = "Indicates an occurrence of a [[Claim]] in some [[CreativeWork]].", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyAppearanceProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AppearancePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-appearance",
    shellClassName: "lander-semantic--schema-property-appearance",
    title: "appearance",
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
