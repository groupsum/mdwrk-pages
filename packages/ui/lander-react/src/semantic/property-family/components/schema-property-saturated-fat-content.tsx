import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertySaturatedFatContentProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertySaturatedFatContent({ value, description = "The number of grams of saturated fat.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertySaturatedFatContentProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.SaturatedFatContentPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-saturated-fat-content",
    shellClassName: "lander-semantic--schema-property-saturated-fat-content",
    title: "saturatedFatContent",
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
