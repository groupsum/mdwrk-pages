import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { BrandPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyBrandProps extends BrandPropertyInput, GeneratedPropertyUiProps<BrandPropertyInput> {}

export function SchemaPropertyBrand({ value: legacyValue, description = "The brand(s) associated with a product or service, or the brand(s) maintained by an organization or business person.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyBrandProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.BrandPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-brand",
    shellClassName: "lander-semantic--schema-property-brand",
    title: "brand",
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
