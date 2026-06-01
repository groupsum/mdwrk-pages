import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { PublicationPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPublicationProps extends PublicationPropertyInput, GeneratedPropertyUiProps<PublicationPropertyInput> {}

export function SchemaPropertyPublication({ value: legacyValue, description = "A publication event associated with the item.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyPublicationProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.PublicationPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-publication",
    shellClassName: "lander-semantic--schema-property-publication",
    title: "publication",
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
