import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { IsPartOfPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyIsPartOfProps extends IsPartOfPropertyInput, GeneratedPropertyUiProps<IsPartOfPropertyInput> {}

export function SchemaPropertyIsPartOf({ value: legacyValue, description = "Indicates an item or CreativeWork that this item, or CreativeWork (in some sense), is part of.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyIsPartOfProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.IsPartOfPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-is-part-of",
    shellClassName: "lander-semantic--schema-property-is-part-of",
    title: "isPartOf",
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

(SchemaPropertyIsPartOf as typeof SchemaPropertyIsPartOf & { toStructuredData: (props: SchemaPropertyIsPartOfProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
