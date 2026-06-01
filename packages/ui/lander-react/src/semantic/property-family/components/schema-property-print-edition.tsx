import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPrintEditionProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyPrintEdition({ value, description = "The edition of the print product in which the NewsArticle appears.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyPrintEditionProps) {
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
