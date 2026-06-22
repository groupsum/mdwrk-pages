import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { IsBasedOnUrlPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyIsBasedOnUrlProps extends IsBasedOnUrlPropertyInput, GeneratedPropertyUiProps<IsBasedOnUrlPropertyInput> {}

export function SchemaPropertyIsBasedOnUrl({ value: legacyValue, description = "A resource that was used in the creation of this resource. This term can be repeated for multiple sources. For example, http://example.com/great-multiplication-intro.html.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyIsBasedOnUrlProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.IsBasedOnUrlPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-is-based-on-url",
    shellClassName: "lander-semantic--schema-property-is-based-on-url",
    title: "isBasedOnUrl",
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

(SchemaPropertyIsBasedOnUrl as typeof SchemaPropertyIsBasedOnUrl & { toStructuredData: (props: SchemaPropertyIsBasedOnUrlProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
