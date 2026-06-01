import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyVariesByProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyVariesBy({ value, description = "Indicates the property or properties by which the variants in a [[ProductGroup]] vary, e.g. their size, color etc. Schema.org properties can be referenced by their short name e.g. \"color\"; terms defined elsewhere can be referenced with their URIs.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyVariesByProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.VariesByPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-varies-by",
    shellClassName: "lander-semantic--schema-property-varies-by",
    title: "variesBy",
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
