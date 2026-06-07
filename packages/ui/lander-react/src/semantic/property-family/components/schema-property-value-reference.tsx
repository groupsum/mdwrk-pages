import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ValueReferencePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyValueReferenceProps extends ValueReferencePropertyInput, GeneratedPropertyUiProps<ValueReferencePropertyInput> {}

export function SchemaPropertyValueReference({ value: legacyValue, description = "A secondary value that provides additional information on the original value, e.g. a reference temperature or a type of measurement.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyValueReferenceProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ValueReferencePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-value-reference",
    shellClassName: "lander-semantic--schema-property-value-reference",
    title: "valueReference",
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

(SchemaPropertyValueReference as typeof SchemaPropertyValueReference & { toStructuredData: (props: SchemaPropertyValueReferenceProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
