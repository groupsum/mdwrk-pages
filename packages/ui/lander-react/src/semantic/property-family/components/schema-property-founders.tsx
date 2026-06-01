import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { FoundersPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyFoundersProps extends FoundersPropertyInput, GeneratedPropertyUiProps<FoundersPropertyInput> {}

export function SchemaPropertyFounders({ value: legacyValue, description = "A person who founded this organization.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyFoundersProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.FoundersPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-founders",
    shellClassName: "lander-semantic--schema-property-founders",
    title: "founders",
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
