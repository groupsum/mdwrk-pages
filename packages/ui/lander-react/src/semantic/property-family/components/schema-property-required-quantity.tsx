import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { RequiredQuantityPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyRequiredQuantityProps extends RequiredQuantityPropertyInput, GeneratedPropertyUiProps<RequiredQuantityPropertyInput> {}

export function SchemaPropertyRequiredQuantity({ value: legacyValue, description = "The required quantity of the item(s).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyRequiredQuantityProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.RequiredQuantityPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-required-quantity",
    shellClassName: "lander-semantic--schema-property-required-quantity",
    title: "requiredQuantity",
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

(SchemaPropertyRequiredQuantity as typeof SchemaPropertyRequiredQuantity & { toStructuredData: (props: SchemaPropertyRequiredQuantityProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
