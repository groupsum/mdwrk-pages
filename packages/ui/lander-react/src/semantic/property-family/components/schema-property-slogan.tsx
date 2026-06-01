import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { SloganPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertySloganProps extends SloganPropertyInput, GeneratedPropertyUiProps<SloganPropertyInput> {}

export function SchemaPropertySlogan({ value: legacyValue, description = "A slogan or motto associated with the item.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertySloganProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.SloganPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-slogan",
    shellClassName: "lander-semantic--schema-property-slogan",
    title: "slogan",
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
