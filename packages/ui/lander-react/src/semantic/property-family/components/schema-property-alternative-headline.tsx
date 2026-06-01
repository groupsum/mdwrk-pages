import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { AlternativeHeadlinePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyAlternativeHeadlineProps extends AlternativeHeadlinePropertyInput, GeneratedPropertyUiProps<AlternativeHeadlinePropertyInput> {}

export function SchemaPropertyAlternativeHeadline({ value: legacyValue, description = "A secondary title of the CreativeWork.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyAlternativeHeadlineProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.AlternativeHeadlinePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-alternative-headline",
    shellClassName: "lander-semantic--schema-property-alternative-headline",
    title: "alternativeHeadline",
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
