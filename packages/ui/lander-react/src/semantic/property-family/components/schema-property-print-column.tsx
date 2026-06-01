import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPrintColumnProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyPrintColumn({ value, description = "The number of the column in which the NewsArticle appears in the print edition.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyPrintColumnProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.PrintColumnPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-print-column",
    shellClassName: "lander-semantic--schema-property-print-column",
    title: "printColumn",
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
