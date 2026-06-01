import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyIsRelatedToProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyIsRelatedTo({ value, description = "A pointer to another, somehow related product (or multiple products).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyIsRelatedToProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.IsRelatedToPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-is-related-to",
    shellClassName: "lander-semantic--schema-property-is-related-to",
    title: "isRelatedTo",
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
