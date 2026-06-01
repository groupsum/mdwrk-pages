import React from "react";
import * as structuredDataReact from "@mdwrk/lander-react-structured-data";
import { GeneratedPropertyProps, renderGeneratedPropertyCard } from "../shared.js";

export interface SchemaPropertySugarContentProps extends GeneratedPropertyProps<Record<string, unknown>> {}

export function SchemaPropertySugarContent({ value, description = "The number of grams of sugar.", examples, body, className, emitStructuredData = true, structuredDataOverrides, viewModel }: SchemaPropertySugarContentProps) {
  return renderGeneratedPropertyCard({
    StructuredDataComponent: structuredDataReact.SugarContentPropertyStructuredData,
    defaultEyebrow: "Property",
    kind: "schema-property-sugar-content",
    shellClassName: "lander-semantic--schema-property-sugar-content",
    title: "sugarContent",
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
