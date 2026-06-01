import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { EncodingTypePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyEncodingTypeProps extends EncodingTypePropertyInput, GeneratedPropertyUiProps<EncodingTypePropertyInput> {}

export function SchemaPropertyEncodingType({ value: legacyValue, description = "The supported encoding type(s) for an EntryPoint request.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyEncodingTypeProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.EncodingTypePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-encoding-type",
    shellClassName: "lander-semantic--schema-property-encoding-type",
    title: "encodingType",
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
