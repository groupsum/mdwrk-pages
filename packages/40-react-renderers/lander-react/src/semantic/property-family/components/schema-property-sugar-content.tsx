import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { SugarContentPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertySugarContentProps extends SugarContentPropertyInput, GeneratedPropertyUiProps<SugarContentPropertyInput> {}

export function SchemaPropertySugarContent({ value: legacyValue, description = "The number of grams of sugar.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertySugarContentProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.SugarContentPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-sugar-content",
    shellClassName: "lander-semantic--schema-property-sugar-content",
    title: "sugarContent",
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

(SchemaPropertySugarContent as typeof SchemaPropertySugarContent & { toStructuredData: (props: SchemaPropertySugarContentProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
