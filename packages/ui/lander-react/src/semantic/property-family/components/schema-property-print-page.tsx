import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPrintPageProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyPrintPage({ value, description = "If this NewsArticle appears in print, this field indicates the name of the page on which the article is found. Please note that this field is intended for the exact page name (e.g. A5, B18).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyPrintPageProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.PrintPagePropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-print-page",
    shellClassName: "lander-semantic--schema-property-print-page",
    title: "printPage",
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
