import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { PostalCodeRangePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPostalCodeRangeProps extends PostalCodeRangePropertyInput, GeneratedPropertyUiProps<PostalCodeRangePropertyInput> {}

export function SchemaPropertyPostalCodeRange({ value: legacyValue, description = "A defined range of postal codes.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyPostalCodeRangeProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.PostalCodeRangePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-postal-code-range",
    shellClassName: "lander-semantic--schema-property-postal-code-range",
    title: "postalCodeRange",
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
