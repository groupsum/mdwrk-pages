import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { HasCredentialPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyHasCredentialProps extends HasCredentialPropertyInput, GeneratedPropertyUiProps<HasCredentialPropertyInput> {}

export function SchemaPropertyHasCredential({ value: legacyValue, description = "A credential awarded to the Person or Organization.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyHasCredentialProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.HasCredentialPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-has-credential",
    shellClassName: "lander-semantic--schema-property-has-credential",
    title: "hasCredential",
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
