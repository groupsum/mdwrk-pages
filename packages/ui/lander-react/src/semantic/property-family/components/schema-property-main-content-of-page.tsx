import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { MainContentOfPagePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyMainContentOfPageProps extends MainContentOfPagePropertyInput, GeneratedPropertyUiProps<MainContentOfPagePropertyInput> {}

export function SchemaPropertyMainContentOfPage({ value: legacyValue, description = "Indicates if this web page element is the main subject of the page.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyMainContentOfPageProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.MainContentOfPagePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-main-content-of-page",
    shellClassName: "lander-semantic--schema-property-main-content-of-page",
    title: "mainContentOfPage",
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
