import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { HasOccupationPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyHasOccupationProps extends HasOccupationPropertyInput, GeneratedPropertyUiProps<HasOccupationPropertyInput> {}

export function SchemaPropertyHasOccupation({ value: legacyValue, description = "The Person's occupation. For past professions, use Role for expressing dates.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyHasOccupationProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.HasOccupationPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-has-occupation",
    shellClassName: "lander-semantic--schema-property-has-occupation",
    title: "hasOccupation",
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
