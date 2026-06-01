import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { TemporalPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyTemporalProps extends TemporalPropertyInput, GeneratedPropertyUiProps<TemporalPropertyInput> {}

export function SchemaPropertyTemporal({ value: legacyValue, description = "The \"temporal\" property can be used in cases where more specific properties\n(e.g. [[temporalCoverage]], [[dateCreated]], [[dateModified]], [[datePublished]]) are not known to be appropriate.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyTemporalProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.TemporalPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-temporal",
    shellClassName: "lander-semantic--schema-property-temporal",
    title: "temporal",
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
