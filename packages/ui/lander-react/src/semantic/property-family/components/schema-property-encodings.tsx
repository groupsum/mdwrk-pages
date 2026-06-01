import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { EncodingsPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyEncodingsProps extends EncodingsPropertyInput, GeneratedPropertyUiProps<EncodingsPropertyInput> {}

export function SchemaPropertyEncodings({ value: legacyValue, description = "A media object that encodes this CreativeWork.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyEncodingsProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.EncodingsPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-encodings",
    shellClassName: "lander-semantic--schema-property-encodings",
    title: "encodings",
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
