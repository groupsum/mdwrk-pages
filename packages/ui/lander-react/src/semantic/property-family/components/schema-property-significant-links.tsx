import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertySignificantLinksProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertySignificantLinks({ value, description = "The most significant URLs on the page. Typically, these are the non-navigation links that are clicked on the most.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertySignificantLinksProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.SignificantLinksPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-significant-links",
    shellClassName: "lander-semantic--schema-property-significant-links",
    title: "significantLinks",
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
