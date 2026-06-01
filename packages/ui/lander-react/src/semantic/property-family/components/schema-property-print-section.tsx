import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPrintSectionProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyPrintSection({ value, description = "If this NewsArticle appears in print, this field indicates the print section in which the article appeared.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyPrintSectionProps) {
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
