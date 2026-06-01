import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { KeywordsPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyKeywordsProps extends KeywordsPropertyInput, GeneratedPropertyUiProps<KeywordsPropertyInput> {}

export function SchemaPropertyKeywords({ value: legacyValue, description = "Keywords or tags used to describe some item. Multiple textual entries in a keywords list are typically delimited by commas, or by repeating the property.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyKeywordsProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.KeywordsPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-keywords",
    shellClassName: "lander-semantic--schema-property-keywords",
    title: "keywords",
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
