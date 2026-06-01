import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { TermsOfServicePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyTermsOfServiceProps extends TermsOfServicePropertyInput, GeneratedPropertyUiProps<TermsOfServicePropertyInput> {}

export function SchemaPropertyTermsOfService({ value: legacyValue, description = "Human-readable terms of service documentation.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyTermsOfServiceProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.TermsOfServicePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-terms-of-service",
    shellClassName: "lander-semantic--schema-property-terms-of-service",
    title: "termsOfService",
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
