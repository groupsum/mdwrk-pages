import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { PostalCodePrefixPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPostalCodePrefixProps extends PostalCodePrefixPropertyInput, GeneratedPropertyUiProps<PostalCodePrefixPropertyInput> {}

export function SchemaPropertyPostalCodePrefix({ value: legacyValue, description = "A defined range of postal codes indicated by a common textual prefix. Used for non-numeric systems such as UK.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyPostalCodePrefixProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.PostalCodePrefixPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-postal-code-prefix",
    shellClassName: "lander-semantic--schema-property-postal-code-prefix",
    title: "postalCodePrefix",
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
