import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { MaterialExtentPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyMaterialExtentProps extends MaterialExtentPropertyInput, GeneratedPropertyUiProps<MaterialExtentPropertyInput> {}

export function SchemaPropertyMaterialExtent({ value: legacyValue, description = "The quantity of the materials being described or an expression of the physical space they occupy.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyMaterialExtentProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.MaterialExtentPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-material-extent",
    shellClassName: "lander-semantic--schema-property-material-extent",
    title: "materialExtent",
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
