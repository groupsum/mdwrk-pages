import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { MusicalKeyPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyMusicalKeyProps extends MusicalKeyPropertyInput, GeneratedPropertyUiProps<MusicalKeyPropertyInput> {}

export function SchemaPropertyMusicalKey({ value: legacyValue, description = "The key, mode, or scale this composition uses.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyMusicalKeyProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.MusicalKeyPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-musical-key",
    shellClassName: "lander-semantic--schema-property-musical-key",
    title: "musicalKey",
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
