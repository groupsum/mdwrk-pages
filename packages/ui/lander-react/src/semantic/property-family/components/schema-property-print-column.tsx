import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { PrintColumnPropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPrintColumnProps extends PrintColumnPropertyInput, GeneratedPropertyUiProps<PrintColumnPropertyInput> {}

export function SchemaPropertyPrintColumn({ value: legacyValue, description = "The number of the column in which the NewsArticle appears in the print edition.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyPrintColumnProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyPrintColumn as typeof SchemaPropertyPrintColumn & { toStructuredData: (props: SchemaPropertyPrintColumnProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
