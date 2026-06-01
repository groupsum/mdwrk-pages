import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { SignificantLinkPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertySignificantLinkProps extends SignificantLinkPropertyInput, GeneratedPropertyUiProps<SignificantLinkPropertyInput> {}

export function SchemaPropertySignificantLink({ value: legacyValue, description = "One of the more significant URLs on the page. Typically, these are the non-navigation links that are clicked on the most.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertySignificantLinkProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.SignificantLinkPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-significant-link",
    shellClassName: "lander-semantic--schema-property-significant-link",
    title: "significantLink",
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
