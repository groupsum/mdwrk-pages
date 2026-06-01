import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { DistinguishingSignPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyDistinguishingSignProps extends DistinguishingSignPropertyInput, GeneratedPropertyUiProps<DistinguishingSignPropertyInput> {}

export function SchemaPropertyDistinguishingSign({ value: legacyValue, description = "One of a set of signs and symptoms that can be used to distinguish this diagnosis from others in the differential diagnosis.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyDistinguishingSignProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.DistinguishingSignPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-distinguishing-sign",
    shellClassName: "lander-semantic--schema-property-distinguishing-sign",
    title: "distinguishingSign",
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
