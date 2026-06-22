import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { SiblingPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertySiblingProps extends SiblingPropertyInput, GeneratedPropertyUiProps<SiblingPropertyInput> {}

export function SchemaPropertySibling({ value: legacyValue, description = "A sibling of the person.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertySiblingProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.SiblingPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-sibling",
    shellClassName: "lander-semantic--schema-property-sibling",
    title: "sibling",
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

(SchemaPropertySibling as typeof SchemaPropertySibling & { toStructuredData: (props: SchemaPropertySiblingProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
