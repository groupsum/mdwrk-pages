import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { PostalCodeBeginPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPostalCodeBeginProps extends PostalCodeBeginPropertyInput, GeneratedPropertyUiProps<PostalCodeBeginPropertyInput> {}

export function SchemaPropertyPostalCodeBegin({ value: legacyValue, description = "First postal code in a range (included).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyPostalCodeBeginProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.PostalCodeBeginPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-postal-code-begin",
    shellClassName: "lander-semantic--schema-property-postal-code-begin",
    title: "postalCodeBegin",
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
