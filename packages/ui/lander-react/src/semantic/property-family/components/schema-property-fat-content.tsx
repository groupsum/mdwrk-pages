import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyFatContentProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyFatContent({ value, description = "The number of grams of fat.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyFatContentProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.FatContentPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-fat-content",
    shellClassName: "lander-semantic--schema-property-fat-content",
    title: "fatContent",
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
