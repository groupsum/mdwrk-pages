import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { PrimaryImageOfPagePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPrimaryImageOfPageProps extends PrimaryImageOfPagePropertyInput, GeneratedPropertyUiProps<PrimaryImageOfPagePropertyInput> {}

export function SchemaPropertyPrimaryImageOfPage({ value: legacyValue, description = "Indicates the main image on the page.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyPrimaryImageOfPageProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.PrimaryImageOfPagePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-primary-image-of-page",
    shellClassName: "lander-semantic--schema-property-primary-image-of-page",
    title: "primaryImageOfPage",
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
