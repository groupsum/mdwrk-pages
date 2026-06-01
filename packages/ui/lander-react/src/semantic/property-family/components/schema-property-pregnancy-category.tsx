import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { PregnancyCategoryPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPregnancyCategoryProps extends PregnancyCategoryPropertyInput, GeneratedPropertyUiProps<PregnancyCategoryPropertyInput> {}

export function SchemaPropertyPregnancyCategory({ value: legacyValue, description = "Pregnancy category of this drug.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyPregnancyCategoryProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.PregnancyCategoryPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-pregnancy-category",
    shellClassName: "lander-semantic--schema-property-pregnancy-category",
    title: "pregnancyCategory",
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
