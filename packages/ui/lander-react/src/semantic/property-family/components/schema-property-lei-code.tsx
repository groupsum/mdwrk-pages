import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { LeiCodePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyLeiCodeProps extends LeiCodePropertyInput, GeneratedPropertyUiProps<LeiCodePropertyInput> {}

export function SchemaPropertyLeiCode({ value: legacyValue, description = "An organization identifier that uniquely identifies a legal entity as defined in ISO 17442.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyLeiCodeProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.LeiCodePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-lei-code",
    shellClassName: "lander-semantic--schema-property-lei-code",
    title: "leiCode",
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
