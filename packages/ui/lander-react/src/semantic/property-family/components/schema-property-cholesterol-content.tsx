import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { CholesterolContentPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyCholesterolContentProps extends CholesterolContentPropertyInput, GeneratedPropertyUiProps<CholesterolContentPropertyInput> {}

export function SchemaPropertyCholesterolContent({ value: legacyValue, description = "The number of milligrams of cholesterol.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyCholesterolContentProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.CholesterolContentPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-cholesterol-content",
    shellClassName: "lander-semantic--schema-property-cholesterol-content",
    title: "cholesterolContent",
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
