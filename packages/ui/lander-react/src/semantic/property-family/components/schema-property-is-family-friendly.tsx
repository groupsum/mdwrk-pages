import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { IsFamilyFriendlyPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyIsFamilyFriendlyProps extends IsFamilyFriendlyPropertyInput, GeneratedPropertyUiProps<IsFamilyFriendlyPropertyInput> {}

export function SchemaPropertyIsFamilyFriendly({ value: legacyValue, description = "Indicates whether this content is family friendly.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyIsFamilyFriendlyProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.IsFamilyFriendlyPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-is-family-friendly",
    shellClassName: "lander-semantic--schema-property-is-family-friendly",
    title: "isFamilyFriendly",
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
