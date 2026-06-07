import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { UnsaturatedFatContentPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyUnsaturatedFatContentProps extends UnsaturatedFatContentPropertyInput, GeneratedPropertyUiProps<UnsaturatedFatContentPropertyInput> {}

export function SchemaPropertyUnsaturatedFatContent({ value: legacyValue, description = "The number of grams of unsaturated fat.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyUnsaturatedFatContentProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.UnsaturatedFatContentPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-unsaturated-fat-content",
    shellClassName: "lander-semantic--schema-property-unsaturated-fat-content",
    title: "unsaturatedFatContent",
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

(SchemaPropertyUnsaturatedFatContent as typeof SchemaPropertyUnsaturatedFatContent & { toStructuredData: (props: SchemaPropertyUnsaturatedFatContentProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
