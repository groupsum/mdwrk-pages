import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyHasVariantProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyHasVariant({ value, description = "Indicates a [[Product]] that is a member of this [[ProductGroup]] (or [[ProductModel]]).", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyHasVariantProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.HasVariantPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-has-variant",
    shellClassName: "lander-semantic--schema-property-has-variant",
    title: "hasVariant",
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
