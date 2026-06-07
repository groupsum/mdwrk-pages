import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { HasMapPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyHasMapProps extends HasMapPropertyInput, GeneratedPropertyUiProps<HasMapPropertyInput> {}

export function SchemaPropertyHasMap({ value: legacyValue, description = "A URL to a map of the place.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyHasMapProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.HasMapPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-has-map",
    shellClassName: "lander-semantic--schema-property-has-map",
    title: "hasMap",
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

(SchemaPropertyHasMap as typeof SchemaPropertyHasMap & { toStructuredData: (props: SchemaPropertyHasMapProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
