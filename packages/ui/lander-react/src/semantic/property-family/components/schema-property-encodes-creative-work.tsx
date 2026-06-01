import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { EncodesCreativeWorkPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyEncodesCreativeWorkProps extends EncodesCreativeWorkPropertyInput, GeneratedPropertyUiProps<EncodesCreativeWorkPropertyInput> {}

export function SchemaPropertyEncodesCreativeWork({ value: legacyValue, description = "The CreativeWork encoded by this media object.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyEncodesCreativeWorkProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.EncodesCreativeWorkPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-encodes-creative-work",
    shellClassName: "lander-semantic--schema-property-encodes-creative-work",
    title: "encodesCreativeWork",
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
