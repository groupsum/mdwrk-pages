import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { AlternateNamePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAlternateNameProps extends AlternateNamePropertyInput, GeneratedPropertyUiProps<AlternateNamePropertyInput> {}

export function SchemaPropertyAlternateName({ value: legacyValue, description = "An alias for the item.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyAlternateNameProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AlternateNamePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-alternate-name",
    shellClassName: "lander-semantic--schema-property-alternate-name",
    title: "alternateName",
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
