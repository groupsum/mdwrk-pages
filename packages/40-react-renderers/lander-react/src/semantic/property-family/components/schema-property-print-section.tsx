import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { PrintSectionPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPrintSectionProps extends PrintSectionPropertyInput, GeneratedPropertyUiProps<PrintSectionPropertyInput> {}

export function SchemaPropertyPrintSection({ value: legacyValue, description = "If this NewsArticle appears in print, this field indicates the print section in which the article appeared.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyPrintSectionProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.PrintSectionPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-print-section",
    shellClassName: "lander-semantic--schema-property-print-section",
    title: "printSection",
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

(SchemaPropertyPrintSection as typeof SchemaPropertyPrintSection & { toStructuredData: (props: SchemaPropertyPrintSectionProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
