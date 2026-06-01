import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { HasVariantPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyHasVariantProps extends HasVariantPropertyInput, GeneratedPropertyUiProps<HasVariantPropertyInput> {}

export function SchemaPropertyHasVariant({ value: legacyValue, description = "Indicates a [[Product]] that is a member of this [[ProductGroup]] (or [[ProductModel]]).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyHasVariantProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.HasVariantPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-has-variant",
    shellClassName: "lander-semantic--schema-property-has-variant",
    title: "hasVariant",
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
