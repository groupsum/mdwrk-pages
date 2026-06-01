import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertyTransFatContentProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertyTransFatContent({ value, description = "The number of grams of trans fat.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertyTransFatContentProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.TransFatContentPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-trans-fat-content",
    shellClassName: "lander-semantic--schema-property-trans-fat-content",
    title: "transFatContent",
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
