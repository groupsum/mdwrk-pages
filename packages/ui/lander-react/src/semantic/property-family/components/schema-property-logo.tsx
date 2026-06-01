import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { LogoPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyLogoProps extends LogoPropertyInput, GeneratedPropertyUiProps<LogoPropertyInput> {}

export function SchemaPropertyLogo({ value: legacyValue, description = "An associated logo.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyLogoProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.LogoPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-logo",
    shellClassName: "lander-semantic--schema-property-logo",
    title: "logo",
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
