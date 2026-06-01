import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyKeywordsProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyKeywords({ value, description = "Keywords or tags used to describe some item. Multiple textual entries in a keywords list are typically delimited by commas, or by repeating the property.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyKeywordsProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.KeywordsPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-keywords",
    shellClassName: "lander-semantic--schema-property-keywords",
    title: "keywords",
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
