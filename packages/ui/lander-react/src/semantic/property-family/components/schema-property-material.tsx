import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { MaterialPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyMaterialProps extends MaterialPropertyInput, GeneratedPropertyUiProps<MaterialPropertyInput> {}

export function SchemaPropertyMaterial({ value: legacyValue, description = "A material that something is made from, e.g. leather, wool, cotton, paper.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyMaterialProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.MaterialPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-material",
    shellClassName: "lander-semantic--schema-property-material",
    title: "material",
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
