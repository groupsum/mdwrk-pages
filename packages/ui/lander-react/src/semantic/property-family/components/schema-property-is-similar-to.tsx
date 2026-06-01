import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyIsSimilarToProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyIsSimilarTo({ value, description = "A pointer to another, functionally similar product (or multiple products).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyIsSimilarToProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.IsSimilarToPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-is-similar-to",
    shellClassName: "lander-semantic--schema-property-is-similar-to",
    title: "isSimilarTo",
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
