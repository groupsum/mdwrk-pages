import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { StrengthUnitPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyStrengthUnitProps extends StrengthUnitPropertyInput, GeneratedPropertyUiProps<StrengthUnitPropertyInput> {}

export function SchemaPropertyStrengthUnit({ value: legacyValue, description = "The units of an active ingredient's strength, e.g. mg.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyStrengthUnitProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.StrengthUnitPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-strength-unit",
    shellClassName: "lander-semantic--schema-property-strength-unit",
    title: "strengthUnit",
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
