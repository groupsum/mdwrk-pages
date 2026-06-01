import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ValueAddedTaxIncludedPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyValueAddedTaxIncludedProps extends ValueAddedTaxIncludedPropertyInput, GeneratedPropertyUiProps<ValueAddedTaxIncludedPropertyInput> {}

export function SchemaPropertyValueAddedTaxIncluded({ value: legacyValue, description = "Specifies whether the applicable value-added tax (VAT) is included in the price specification or not.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyValueAddedTaxIncludedProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ValueAddedTaxIncludedPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-value-added-tax-included",
    shellClassName: "lander-semantic--schema-property-value-added-tax-included",
    title: "valueAddedTaxIncluded",
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
