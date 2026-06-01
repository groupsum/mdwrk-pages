import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { ComprisedOfPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyComprisedOfProps extends ComprisedOfPropertyInput, GeneratedPropertyUiProps<ComprisedOfPropertyInput> {}

export function SchemaPropertyComprisedOf({ value: legacyValue, description = "Specifying something physically contained by something else. Typically used here for the underlying anatomical structures, such as organs, that comprise the anatomical system.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyComprisedOfProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.ComprisedOfPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-comprised-of",
    shellClassName: "lander-semantic--schema-property-comprised-of",
    title: "comprisedOf",
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
