import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { SignificancePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertySignificanceProps extends SignificancePropertyInput, GeneratedPropertyUiProps<SignificancePropertyInput> {}

export function SchemaPropertySignificance({ value: legacyValue, description = "The significance associated with the superficial anatomy; as an example, how characteristics of the superficial anatomy can suggest underlying medical conditions or courses of treatment.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertySignificanceProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.SignificancePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-significance",
    shellClassName: "lander-semantic--schema-property-significance",
    title: "significance",
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
