import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { EncodingPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyEncodingProps extends EncodingPropertyInput, GeneratedPropertyUiProps<EncodingPropertyInput> {}

export function SchemaPropertyEncoding({ value: legacyValue, description = "A media object that encodes this CreativeWork. This property is a synonym for associatedMedia.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyEncodingProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.EncodingPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-encoding",
    shellClassName: "lander-semantic--schema-property-encoding",
    title: "encoding",
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
