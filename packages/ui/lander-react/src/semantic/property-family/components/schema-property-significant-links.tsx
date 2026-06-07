import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { SignificantLinksPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertySignificantLinksProps extends SignificantLinksPropertyInput, GeneratedPropertyUiProps<SignificantLinksPropertyInput> {}

export function SchemaPropertySignificantLinks({ value: legacyValue, description = "The most significant URLs on the page. Typically, these are the non-navigation links that are clicked on the most.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertySignificantLinksProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.SignificantLinksPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-significant-links",
    shellClassName: "lander-semantic--schema-property-significant-links",
    title: "significantLinks",
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

(SchemaPropertySignificantLinks as typeof SchemaPropertySignificantLinks & { toStructuredData: (props: SchemaPropertySignificantLinksProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
