import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { IsRelatedToPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyIsRelatedToProps extends IsRelatedToPropertyInput, GeneratedPropertyUiProps<IsRelatedToPropertyInput> {}

export function SchemaPropertyIsRelatedTo({ value: legacyValue, description = "A pointer to another, somehow related product (or multiple products).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyIsRelatedToProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.IsRelatedToPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-is-related-to",
    shellClassName: "lander-semantic--schema-property-is-related-to",
    title: "isRelatedTo",
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

(SchemaPropertyIsRelatedTo as typeof SchemaPropertyIsRelatedTo & { toStructuredData: (props: SchemaPropertyIsRelatedToProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
