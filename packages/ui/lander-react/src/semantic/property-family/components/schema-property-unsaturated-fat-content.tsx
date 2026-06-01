import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyUnsaturatedFatContentProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyUnsaturatedFatContent({ value, description = "The number of grams of unsaturated fat.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyUnsaturatedFatContentProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.UnsaturatedFatContentPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-unsaturated-fat-content",
    shellClassName: "lander-semantic--schema-property-unsaturated-fat-content",
    title: "unsaturatedFatContent",
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
