import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { FoundingLocationPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyFoundingLocationProps extends FoundingLocationPropertyInput, GeneratedPropertyUiProps<FoundingLocationPropertyInput> {}

export function SchemaPropertyFoundingLocation({ value: legacyValue, description = "The place where the Organization was founded.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyFoundingLocationProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.FoundingLocationPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-founding-location",
    shellClassName: "lander-semantic--schema-property-founding-location",
    title: "foundingLocation",
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
