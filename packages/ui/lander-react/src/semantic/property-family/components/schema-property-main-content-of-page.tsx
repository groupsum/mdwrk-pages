import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyMainContentOfPageProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyMainContentOfPage({ value, description = "Indicates if this web page element is the main subject of the page.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyMainContentOfPageProps) {
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
