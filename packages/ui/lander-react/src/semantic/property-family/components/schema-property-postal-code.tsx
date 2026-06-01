import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { PostalCodePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPostalCodeProps extends PostalCodePropertyInput, GeneratedPropertyUiProps<PostalCodePropertyInput> {}

export function SchemaPropertyPostalCode({ value: legacyValue, description = "The postal code. For example, 94043.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyPostalCodeProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.PostalCodePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-postal-code",
    shellClassName: "lander-semantic--schema-property-postal-code",
    title: "postalCode",
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
