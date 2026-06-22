import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { IncludesObjectPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyIncludesObjectProps extends IncludesObjectPropertyInput, GeneratedPropertyUiProps<IncludesObjectPropertyInput> {}

export function SchemaPropertyIncludesObject({ value: legacyValue, description = "This links to a node or nodes indicating the exact quantity of the products included in  an [[Offer]] or [[ProductCollection]].", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyIncludesObjectProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.IncludesObjectPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-includes-object",
    shellClassName: "lander-semantic--schema-property-includes-object",
    title: "includesObject",
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

(SchemaPropertyIncludesObject as typeof SchemaPropertyIncludesObject & { toStructuredData: (props: SchemaPropertyIncludesObjectProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
