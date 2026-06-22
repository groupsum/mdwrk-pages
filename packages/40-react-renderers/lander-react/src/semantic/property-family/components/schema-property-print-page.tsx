import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import type { PrintPagePropertyInput } from "@mdwrk/structured-data";
import { GeneratedPropertyUiProps, buildGeneratedPropertyStructuredData, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyPrintPageProps extends PrintPagePropertyInput, GeneratedPropertyUiProps<PrintPagePropertyInput> {}

export function SchemaPropertyPrintPage({ value: legacyValue, description = "If this NewsArticle appears in print, this field indicates the name of the page on which the article is found. Please note that this field is intended for the exact page name (e.g. A5, B18).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel, ...rest }: SchemaPropertyPrintPageProps) {
  const explicitValue = legacyValue;
  const directValue = rest;
  const value = Object.keys(directValue).length > 0
    ? explicitValue && typeof explicitValue === "object" && !Array.isArray(explicitValue)
      ? { ...explicitValue, ...directValue }
      : directValue
    : (explicitValue ?? directValue);
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

(SchemaPropertyPrintPage as typeof SchemaPropertyPrintPage & { toStructuredData: (props: SchemaPropertyPrintPageProps) => unknown }).toStructuredData = (props) =>
  buildGeneratedPropertyStructuredData(props);
