import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertySignificantLinkProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertySignificantLink({ value, description = "One of the more significant URLs on the page. Typically, these are the non-navigation links that are clicked on the most.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertySignificantLinkProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.SignificantLinkPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-significant-link",
    shellClassName: "lander-semantic--schema-property-significant-link",
    title: "significantLink",
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
