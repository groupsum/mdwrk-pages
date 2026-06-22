import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { IsSimilarToPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyIsSimilarToProps extends IsSimilarToPropertyInput, GeneratedPropertyUiProps<IsSimilarToPropertyInput> {}

export function SchemaPropertyIsSimilarTo({ value: legacyValue, description = "A pointer to another, functionally similar product (or multiple products).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyIsSimilarToProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.IsSimilarToPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-is-similar-to",
    shellClassName: "lander-semantic--schema-property-is-similar-to",
    title: "isSimilarTo",
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

(SchemaPropertyIsSimilarTo as typeof SchemaPropertyIsSimilarTo & { toStructuredData: (props: SchemaPropertyIsSimilarToProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
