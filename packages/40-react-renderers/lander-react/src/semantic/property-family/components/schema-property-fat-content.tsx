import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { FatContentPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyFatContentProps extends FatContentPropertyInput, GeneratedPropertyUiProps<FatContentPropertyInput> {}

export function SchemaPropertyFatContent({ value: legacyValue, description = "The number of grams of fat.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyFatContentProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.FatContentPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-fat-content",
    shellClassName: "lander-semantic--schema-property-fat-content",
    title: "fatContent",
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

(SchemaPropertyFatContent as typeof SchemaPropertyFatContent & { toStructuredData: (props: SchemaPropertyFatContentProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
