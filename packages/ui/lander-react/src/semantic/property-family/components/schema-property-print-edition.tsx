import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { PrintEditionPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPrintEditionProps extends PrintEditionPropertyInput, GeneratedPropertyUiProps<PrintEditionPropertyInput> {}

export function SchemaPropertyPrintEdition({ value: legacyValue, description = "The edition of the print product in which the NewsArticle appears.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyPrintEditionProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.PrintEditionPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-print-edition",
    shellClassName: "lander-semantic--schema-property-print-edition",
    title: "printEdition",
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
